import { defineType } from 'sanity'

export const job = defineType({
  name: 'job',
  title: 'Job',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'company', title: 'Company', type: 'string' },
    { name: 'location', title: 'Location', type: 'string' },
    { name: 'type', title: 'Type', type: 'string', options: { list: ['Full-time', 'Part-time', 'Contract', 'Remote'] } },
    { name: 'salary', title: 'Salary', type: 'string' },
    { name: 'postedAt', title: 'Posted At', type: 'datetime' },
    { name: 'featured', title: 'Featured', type: 'boolean', initialValue: false },
  ],
})

export default job
