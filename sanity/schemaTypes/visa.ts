import { defineField, defineType } from 'sanity'

export const visa = defineType({
  name: 'visa',
  title: 'Visas',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Visa Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'longestStay',
      title: 'Longest Stay',
      type: 'string',
      description: 'e.g., "30 days", "6 months"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'scopeOfAcceptance',
      title: 'Scope of Acceptance',
      type: 'text',
      rows: 3,
      description: 'Which countries/purposes this visa covers',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'processingTime',
      title: 'Processing Time',
      type: 'string',
      description: 'e.g., "5-7 business days", "2-3 weeks"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'Price in USD',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show this visa prominently on the website',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
      initialValue: 0,
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      price: 'price',
      media: 'image',
    },
    prepare(selection) {
      const { title, price, media } = selection
      return {
        title,
        subtitle: price ? `$${price}` : 'No price set',
        media,
      }
    },
  },
})