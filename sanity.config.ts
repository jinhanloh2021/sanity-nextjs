import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
  projectId: 'ix5qjxyu',
  dataset: 'production',
  title: 'Dothack CMS',
  apiVersion: '21-06-2023',
  basePath: '/admin',
  plugins: [deskTool()],
});

export default config;
