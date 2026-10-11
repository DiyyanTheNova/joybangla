import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'opportunity',
  title: 'Opportunity',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Opportunity Title',
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
      name: 'entity',
      title: 'Organization/Entity',
      type: 'string',
      description: 'Company or organization offering the opportunity',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Partnerships', value: 'Partnerships' },
          { title: 'Funding', value: 'Funding' },
          { title: 'Projects', value: 'Projects' },
          { title: 'Mentorship', value: 'Mentorship' },
          { title: 'Grant', value: 'Grant' },
          { title: 'Event', value: 'Event' },
        ],
      },
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Open', value: 'Open' },
          { title: 'Urgent', value: 'Urgent' },
          { title: 'Closed', value: 'Closed' },
        ],
      },
      initialValue: 'Open',
    }),
    defineField({
      name: 'deadline',
      title: 'Application Deadline',
      type: 'datetime',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'applicationUrl',
      title: 'Application URL',
      type: 'url',
      description: 'Link to apply for this opportunity',
    }),
  ],
});