import { defineType } from 'sanity'

export const opportunity = defineType({
  name: 'opportunity',
  title: 'Opportunity',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'entity', title: 'Entity', type: 'string' },
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'status', title: 'Status', type: 'string', options: { list: ['Open', 'Urgent', 'Closed'] }, initialValue: 'Open' },
    { name: 'deadline', title: 'Deadline', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
  ],
})

export default opportunity
