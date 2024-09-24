//studio/schemaTypes/category.ts

import { defineType, defineField } from 'sanity'

export default defineType({
  title: 'Category',
  name: 'category',
  type: 'document',
  fields: [
    defineField({
      title: 'Product Category Name',
      name: 'categoryName',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
