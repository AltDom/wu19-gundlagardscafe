export default {
  name: 'events',
  title: 'Events',
  type: 'document',
  fields: [
    {
      name: 'eventname',
      title: 'Eventname',
      type: 'string'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
        {
      title: 'Position (The lowest number will be shown first)',
      name: 'position',
      type: 'number'
    }
  ],
   preview: {
    select: {
      title: 'eventname',
      subtitle: 'position',
      media: 'mainImage'
    },
    prepare(selection) {
      const {title, subtitle, media} = selection
      return {
        title: title,
        subtitle: `Position: ${subtitle}`,
        media: media
      }
  }
}
}
