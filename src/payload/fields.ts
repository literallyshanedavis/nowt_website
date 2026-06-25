import type { Field } from "payload";

const statusOptions = [
  {
    label: "Draft",
    value: "draft",
  },
  {
    label: "Published",
    value: "published",
  },
];

export const formatSlug = (value: unknown) =>
  String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const slugField = (source = "title"): Field => ({
  name: "slug",
  type: "text",
  required: true,
  unique: true,
  index: true,
  admin: {
    description: "Generated from the title when left blank.",
    position: "sidebar",
  },
  hooks: {
    beforeValidate: [
      ({ value, data }) => {
        if (value) {
          return formatSlug(value);
        }

        const sourceValue =
          data && typeof data === "object"
            ? (data as Record<string, unknown>)[source]
            : undefined;

        return sourceValue ? formatSlug(sourceValue) : value;
      },
    ],
  },
});

export const publishedFields: Field[] = [
  {
    name: "status",
    type: "select",
    required: true,
    defaultValue: "draft",
    options: statusOptions,
    admin: {
      position: "sidebar",
    },
  },
  {
    name: "publishedAt",
    type: "date",
    admin: {
      date: {
        pickerAppearance: "dayAndTime",
      },
      position: "sidebar",
    },
  },
];

export const featuredImageField: Field = {
  name: "featuredImage",
  type: "relationship",
  relationTo: "media",
  admin: {
    position: "sidebar",
  },
};

export const visualVariantField: Field = {
  name: "visualVariant",
  type: "select",
  defaultValue: "canvas",
  options: [
    {
      label: "Canvas",
      value: "canvas",
    },
    {
      label: "Pipeline",
      value: "pipeline",
    },
    {
      label: "iPad",
      value: "ipad",
    },
    {
      label: "Wide",
      value: "wide",
    },
    {
      label: "Process",
      value: "process",
    },
    {
      label: "Finish",
      value: "finish",
    },
  ],
};
