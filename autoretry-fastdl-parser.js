addEventListener("fetch", event =>
{
	event.passThroughOnException();
	event.respondWith(handleRequest(event.request));
})

async function handleRequest(request)
{
	const response = await fetch(request);
	const url = request.url;

	if (url.includes(".bsp") && request.headers.get("User-Agent") == "Half-Life 2")
	{
		const ip = request.headers.get("cf-connecting-ip");
		const map = url.split('/').slice(-1)[0].split('.bsp')[0];
		
		await AAR_KV.put(ip, map, {expirationTtl: 900});
	}

	return response;
}