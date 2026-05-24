import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "yh3d0ztt",
  dataset: "production",
  apiVersion: "2026-05-24",
  useCdn: false,
});
