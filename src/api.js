export async function loadImagesFromWiki(qParams) {
  let url = "https://en.wikipedia.org/w/api.php";

  const params = {
    action: "query",
    format: "json",
    prop: "imageinfo",
    generator: "images",
    gimlimit: "max",
    iiprop: "url|user",
    ...qParams,
  };

  url = url + "?origin=*";

  Object.keys(params).forEach((key) => {
    url += "&" + key + "=" + params[key];
  });

  const res = await fetch(url);

  return res.json();
}
