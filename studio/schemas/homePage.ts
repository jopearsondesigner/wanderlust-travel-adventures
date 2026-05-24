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
        }),
        defineField({
            name: 'servicesHeading',
            title: 'Services Section Heading',
            type: 'string'
        }),
        defineField({
            name: 'servicesSubhead',
            title: 'Services Section Subhead',
            type: 'text',
            rows: 3
        }),
        defineField({
            name: 'services',
            title: 'Services',
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
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                            rows: 2
                        }),
                        defineField({
                            name: 'image',
                            title: 'Image',
                            type: 'image',
                            options: {
                                hotspot: true
                            }
                        })
                    ]
                }
            ]
        }),
        defineField({
            name: 'processEyebrow',
            title: 'Process Eyebrow',
            type: 'string'
        }),
        defineField({
            name: 'processHeading',
            title: 'Process Section Heading',
            type: 'string'
        }),
        defineField({
            name: 'processSubhead',
            title: 'Process Section Subhead',
            type: 'text',
            rows: 3
        }),
        defineField({
            name: 'processSteps',
            title: 'Process Steps',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'number',
                            title: 'Step Number',
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
        }),
        defineField({
            name: 'advisorEyebrow',
            title: 'Advisor Eyebrow',
            type: 'string'
        }),
        defineField({
            name: 'advisorHeading',
            title: 'Advisor Section Heading',
            type: 'string'
        }),
        defineField({
            name: 'advisorText',
            title: 'Advisor Section Text',
            type: 'text',
            rows: 4
        }),
        defineField({
            name: 'advisorLinkText',
            title: 'Advisor Link Text',
            type: 'string'
        }),
        defineField({
            name: 'finalCtaEyebrow',
            title: 'Final CTA Eyebrow',
            type: 'string'
        }),
        defineField({
            name: 'finalCtaHeading',
            title: 'Final CTA Heading',
            type: 'string'
        }),
        defineField({
            name: 'finalCtaText',
            title: 'Final CTA Text',
            type: 'text',
            rows: 3
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