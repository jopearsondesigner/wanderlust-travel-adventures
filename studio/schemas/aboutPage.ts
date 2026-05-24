import { defineField, defineType } from 'sanity';

export const aboutPage = defineType({
	name: 'aboutPage',
	title: 'About Page',
	type: 'document',
	fields: [
		defineField({
			name: 'heroEyebrow',
			title: 'Hero Eyebrow',
			type: 'string'
		}),
		defineField({
			name: 'heroHeadline',
			title: 'Hero Headline',
			type: 'text',
			rows: 3
		}),
		defineField({
			name: 'heroText',
			title: 'Hero Text',
			type: 'text',
			rows: 3
		}),
        defineField({
            name: 'storyEyebrow',
            title: 'Story Eyebrow',
            type: 'string'
        }),
        defineField({
            name: 'storyHeading',
            title: 'Story Heading',
            type: 'string'
        }),
        defineField({
            name: 'storyParagraphs',
            title: 'Story Paragraphs',
            type: 'array',
            of: [
                {
                    type: 'text',
                    rows: 4
                }
            ]
        }),
        defineField({
            name: 'valuesHeading',
            title: 'Values Section Heading',
            type: 'string'
        }),
        defineField({
            name: 'values',
            title: 'Values',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'number',
                            title: 'Number',
                            type: 'string'
                        }),
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
				title: 'About Page'
			};
		}
	},

});