const project = {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image', // custom image inside rich text editor
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'alternative text',
              description:
                "Some of your visitors cannot see images, be they blind, color-blind, low-sighted; alternative text is of great help for those people that can rely on it to have a good idea of what's on your page.",
            },
          ],
        },
        {
          name: 'code',
          title: 'Code',
          type: 'code',
          options: {
            language: 'javascript',
            languageAlternatives: [
              { title: 'Javascript', value: 'javascript' },
              { title: 'JSX', value: 'jsx' },
              { title: 'Typescript', value: 'typescript' },
              { title: 'TSX', value: 'tsx' },
              { title: 'Python', value: 'python' },
              { title: 'HTML', value: 'html' },
              { title: 'CSS', value: 'css' },
            ],
            withFilename: true,
          },
        },
      ],
    },
  ],
};

export default project;
