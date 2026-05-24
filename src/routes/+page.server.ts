import type { PageServerLoad } from "./$types";
import { sanityClient } from "$lib/sanity/client";

export const load: PageServerLoad = async () => {
  const siteSettings = await sanityClient.fetch(`*[_type == "siteSettings"][0]{
		businessName,
		contactEmail,
		phoneNumber,
		ctaText
	}`);

  return {
    siteSettings,
  };
};
