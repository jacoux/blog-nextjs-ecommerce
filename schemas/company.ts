import { defineType, defineField } from 'sanity'

export default defineType({
  title: 'Company',
  name: 'company',
  type: 'document',
  fields: [
    defineField({
      title: 'Product seller',
      name: 'companyName',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'seller public email',
      name: 'companyEmail',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'description',
      name: 'companyDescription',
      type: 'string',
    }),
    defineField({
      title: 'contact',
      name: 'companyContact',
      type: 'string',
    }),
    defineField({
      title: 'keywords',
      name: 'companyKeywords',
      type: 'string',
    }),
    defineField({
      title: 'adres',
      name: 'companyAddress',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Picture',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
        },
      ],
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
  ],
})
