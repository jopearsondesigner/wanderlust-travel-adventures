import { defineField, defineType } from 'sanity';

export const homePage = defineType({
	name: 'homePage',
	title: 'Home Page',
	type: 'document',
	fields: [
		defineField({
			name: 'heroHeadline',
			title: 'Hero Headline',
			type: 'string'
		}),
		defineField({
			name: 'heroSubhead',
			title: 'Hero Subhead',
			type: 'text',
			rows: 3
		}),
		defineField({
			name: 'heroCtaText',
			title: 'Hero CTA Text',
			type: 'string'
		}),
		defineField({
			name: 'heroVideoUrl',
			title: 'Hero Video URL',
			type: 'url'
		}),
        defineField({
            name: 'valueHeading',
            title: 'Value Section Heading',
            type: 'string'
        }),
        defineField({
            name: 'valueSubhead',
            title: 'Value Section Subhead',
            type: 'text',
            rows: 3
        }),
        defineField({
            name: 'valueCards',
            title: 'Value Cards',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'title',
                            title: 'Title',
                            type: 'string'
                        }),
                        defineField({
                            name: 'text',
                            title: 'Text',
                            type: 'text',
                            rows: 2
                        })
                    ]
                }
            ]
        })
	],
    preview: {
        prepare() {
            return {
                title: 'Home Page'
            };
        }
    }
});