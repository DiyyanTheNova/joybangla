import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schemaTypes'

export default defineConfig({
  name: 'business-hub',
  title: 'Business Hub CMS',
  
  // Hardcode these - they're public values anyway
  projectId: '8e5qmtmg',
  dataset: 'production',
  
  plugins: [structureTool(), visionTool()],
  
  schema: {
    types: schemaTypes,
  },
})