import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

export default defineConfig({
  name: "wanderlust",
  title: "Wanderlust Travel Adventures",

  projectId: "yh3d0ztt",
  dataset: "production",

  plugins: [structureTool()],

  schema: {
    types: [],
  },
});
