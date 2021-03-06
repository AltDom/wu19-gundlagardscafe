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
      name: 'desktopHeroImageHeight',
      title: 'Desktop Hero Image Height (No. between 0 & 100)',
      type: 'string'
    },
    {
      name: 'heroText',
      title: 'Hero Text',
      type: 'blockContent'
    },
    {
      name: 'bodyOne',
      title: 'Body One',
      type: 'blockContent'
    },
    {
      name: 'bodyTwo',
      title: 'Body Two',
      type: 'blockContent'
    },
    {
      name: 'bodyThree',
      title: 'Body Three',
      type: 'blockContent'
    },
    {
      name: 'bodyFour',
      title: 'Body Four',
      type: 'blockContent'
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'heroImage'
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      });
    }
  }
};
