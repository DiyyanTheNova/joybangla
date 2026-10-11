import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'job',
  title: 'Job Listing',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
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
      name: 'company',
      title: 'Company Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g., "Dhaka, Bangladesh" or "Remote"',
    }),
    defineField({
      name: 'type',
      title: 'Job Type',
      type: 'string',
      options: {
        list: [
          { title: 'Full-time', value: 'Full-time' },
          { title: 'Part-time', value: 'Part-time' },
          { title: 'Contract', value: 'Contract' },
          { title: 'Remote', value: 'Remote' },
          { title: 'Internship', value: 'Internship' },
        ],
      },
    }),
    defineField({
      name: 'salary',
      title: 'Salary Range',
      type: 'string',
      description: 'e.g., "$50,000 - $70,000" or "Competitive"',
    }),
    defineField({
      name: 'postedAt',
      title: 'Posted Date',
      type: 'datetime',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Job',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'description',
      title: 'Job Description',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'requirements',
      title: 'Requirements',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
});