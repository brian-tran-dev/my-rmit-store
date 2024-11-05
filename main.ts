Deno.serve(
	{hostname: "localhost", port: 8080},
	async (request) => {
		const url = new URL(request.url);
		const filepath = decodeURIComponent(url.pathname);
		try {
			const file = await Deno.open("." + filepath, {read: true});
		return new Response(file.readable);
		} catch {
			return new Response("404 Not Found", {status: 404});
		}
	},
);
