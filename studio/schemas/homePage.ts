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
		})
	]
});