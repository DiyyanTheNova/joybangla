import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'listing',
  title: 'Marketplace Listing',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Software', value: 'software' },
          { title: 'Design Assets', value: 'design' },
          { title: 'Consulting', value: 'consulting' },
          { title: 'Hardware', value: 'hardware' },
          { title: 'Services', value: 'services' },
        ],
      },
    }),
    defineField({
      name: 'seller',
      title: 'Seller Name',
      type: 'string',
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Listing',
      type: 'boolean',
    }),
    defineField({
      name: 'isTopTier',
      title: 'Top Tier Listing',
      type: 'boolean',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})