export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'heroImage',
      title: 'Hero image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'heroText',
      title: 'Hero Text',
      type: 'string'
    },
    {
      name: 'bodyOneHeading',
      title: 'Body One Heading',
      type: 'string'
    },
    {
      name: 'bodyOne',
      title: 'Body One',
      type: 'blockContent'
    },
    {
      name: 'bodyTwoHeading',
      title: 'Body Two Heading',
      type: 'string'
    },
    {
      name: 'bodyTwo',
      title: 'Body Two',
      type: 'blockContent'
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      });
    }
  }
};
