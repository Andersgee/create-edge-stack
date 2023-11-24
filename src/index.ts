import { execa } from "execa";
import { join } from "path";
import { cancel, intro, isCancel, outro, spinner, text } from "@clack/prompts";
import * as fs from "fs";

async function main() {
	try {
		const cwd = process.cwd();
		intro(`create-edge-stack`);

		const projectName = await text({
			message: "Project name?",
			placeholder: "my-project",
			//initialValue: "edge-stack",
			validate: (srr) => {
				if (srr.length === 0) return `Project name is required!`;
				if (fs.existsSync(join(cwd, srr))) return `${srr} already exists, pick a different name.`;
			},
		});
		if (isCancel(projectName)) {
			cancel("Aborted.");
			process.exit(0);
		}

		const projectDir = join(cwd, projectName);

		const s = spinner();
		s.start("Setting up project");
		await execa("git", ["clone", "git@github.com:Andersgee/edge-stack.git", projectName]);
		fs.rm(join(projectDir, ".git"), { force: true, recursive: true }, (_err) => void {});
		await execa("git", ["init"], { cwd: projectDir });
		await execa("npm", ["pkg", "set", `name=${projectName}`], { cwd: projectDir });
		await execa("npm", ["pkg", "set", "version=0.0.1"], { cwd: projectDir });

		s.stop("Setting up project. Done.");

		outro(`You're all set! (created ${projectDir})`);
	} catch (error) {
		console.log(error);
	}
}

void main();
