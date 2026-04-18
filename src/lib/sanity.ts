import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "sgyp4tea", // Get this from manage.sanity.io
  dataset: "production",
  useCdn: false, 
  apiVersion: "2026-01-31", 
});

const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);