import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "phfox1ff",
  dataset: "production",
  apiVersion: "2022-08-21",
  useCdn: true,
  token:
    "skUME7ur3VTAm3tJS1jqI94NNVGcGgZAWkUVjC1DndNPp16dm26uOgKYPrbVvA810MeZV7YOkPlEGBKIM9exwU8dtzitptlIKXvxkledfZdVpv82oMdv0gthkTOQtiTKmE0FvkHGzabcF79YKQgFHljlZly1SpTV0fAFdKO3WhlE26W79tO7",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
