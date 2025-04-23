import type { CollectionConfig } from "payload";

export const Cats: CollectionConfig = {
  slug: "cats",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "age",
      type: "number",
      required: false,
    },
    {
      name: "color",
      type: "select",
      options: ["Black", "White", "Mixed", "Orange"],
    },
  ],
};
