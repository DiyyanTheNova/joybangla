import { defineType } from 'sanity'

export const marketplace = defineType({
  name: 'marketplace',
  title: 'Marketplace Listing',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'seller', title: 'Seller', type: 'string' },
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'price', title: 'Price', type: 'string' },
    { name: 'rating', title: 'Rating', type: 'number', validation: (Rule) => Rule.min(0).max(5) },
    { name: 'featured', title: 'Featured', type: 'boolean', initialValue: false },
    { name: 'description', title: 'Description', type: 'text' },
  ],
})

export default marketplace
