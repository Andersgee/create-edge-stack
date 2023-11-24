export async function sleep(ms = 2000) {
	return await new Promise((resolve) => setTimeout(resolve, ms));
}
