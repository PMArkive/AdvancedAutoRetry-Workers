addEventListener("fetch", event =>
{
	event.respondWith(handleRequest(event.request));
})

async function handleRequest(request)
{
	if (request.headers.get("Token") != TOKEN)
		return new Response("Invalid Token header specified", {status: 403});

	const ip = request.headers.get("ClientIP");

	if (ip == null)
		return new Response("You must specify the ClientIP header", {status: 400});

	const map = request.headers.get("Map");

	if (map == null)
		return new Response("You must specify the Map header", {status: 400});

	const value = await AAR_KV.get(ip);
	let retry = false;

	if (value != null && value.toLowerCase() == map.toLowerCase())
		retry = true;

	const data = {clientDownloaded: retry};
	const json = JSON.stringify(data);

	return new Response(json, {headers: {"content-type": "application/json;charset=UTF-8"}});
}