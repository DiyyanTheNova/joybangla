'use client'

import { NextStudio } from 'next-sanity/studio'

// Import from the correct location - adjust the path based on where your config is
import config from '../../../../sanity.config'

export default function StudioPage() {
  return <NextStudio config={config} />
}