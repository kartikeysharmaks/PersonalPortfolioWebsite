export default {
  name: "educations",
  title: "Education",
  type: "document",
  fields: [
    {
      name: "degree",
      title: "Degree / Program",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "institution",
      title: "Institution",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "period",
      title: "Period",
      type: "string",
      description: 'e.g. "2018 — 2022"',
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    },
    {
      name: "tag",
      title: "Tag",
      type: "string",
      description: 'Optional label e.g. "FOREVER" or "SUMMER 2014"',
    },
    {
      name: "sortOrder",
      title: "Sort order",
      type: "number",
      description: "Lower numbers appear first",
      initialValue: 0,
    },
  ],
  orderings: [
    {
      title: "Sort order",
      name: "sortOrderAsc",
      by: [{ field: "sortOrder", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "degree",
      subtitle: "institution",
      period: "period",
    },
    prepare({ title, subtitle, period }) {
      return {
        title: title || "Untitled education",
        subtitle: [subtitle, period].filter(Boolean).join(" · "),
      };
    },
  },
};
