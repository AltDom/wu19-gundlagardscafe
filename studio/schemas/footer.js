export default {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "footerHeader",
      title: "Footer Header",
      type: "string",
    },

    {
      name: "mail",
      title: "E-mail",
      type: "string",
    },
    {
      name: "phoneNumber",
      title: "Phone number",
      type: "string",
    },
    {
      name: "adress",
      title: "Adress",
      type: "string",
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
