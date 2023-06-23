import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: 'ix5qjxyu',
  dataset: 'production',
  title: 'Dothack CMS',
  apiVersion: '2023-06-21',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
