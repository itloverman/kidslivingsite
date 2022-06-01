import { ShopifySection } from "types/shopify";

export const heading: ShopifySection = {
  name: "Heading",
  settings: [
    {
      type: "header",
      content: "Content",
    },
    {
      type: "text",
      id: "pre_title",
      label: "Pre header",
    },

    {
      type: "text",
      id: "title",
      label: "Title",
    },
    {
      type: "richtext",
      id: "paragraph",
      label: "Paragraph",
    },
    {
      type: "header",
      content: "Settings",
    },
    {
      type: "select",
      id: "position",
      label: "Position",
      default: "center",
      options: [
        {
          value: "left",
          label: "Left",
        },
        {
          value: "center",
          label: "Center",
        },
        {
          value: "right",
          label: "Right",
        },
      ],
    },
  ],
  presets: [
    {
      name: "Heading",
    },
  ],
};