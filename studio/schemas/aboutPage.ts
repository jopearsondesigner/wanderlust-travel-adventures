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