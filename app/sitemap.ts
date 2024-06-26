export default async function sitemap() {
  let routes = [""].map((route) => ({
    url: `https://eldarcodes.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
