import type { PageServerLoad } from "./$types";
import { sanityClient } from "$lib/sanity/client";

export const load: PageServerLoad = async () => {
  const [siteSettings, homePage] = await Promise.all([
    sanityClient.fetch(`*[_type == "siteSettings"][0]{
			businessName,
			contactEmail,
			phoneNumber,
			ctaText
		}`),

    sanityClient.fetch(`*[_type == "homePage"][0]{
			heroHeadline,
			heroSubhead,
			heroCtaText,
			heroVideoUrl,

			valueHeading,
			valueSubhead,
			valueCards[]{
				title,
				text
			},

			servicesHeading,
			servicesSubhead,
			services[]{
				title,
				description,
				image{
					asset->{
						url
					}
				}
			},

			processEyebrow,
			processHeading,
			processSubhead,
			processSteps[]{
				number,
				title,
				text
			},

			advisorEyebrow,
			advisorHeading,
			advisorText,
			advisorLinkText,

			finalCtaEyebrow,
			finalCtaHeading,
			finalCtaText
		}`),
  ]);

  return {
    siteSettings,
    homePage,
  };
};
