<!--src/routes/about/+page.svelte-->

<script lang="ts">
  import type { PageData } from "./$types";

  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  let { data }: { data: PageData } = $props();

  const siteUrl = "https://www.wanderlusttraveladventures.com";
  const pageUrl = `${siteUrl}/about`;
  const ogImageUrl = `${siteUrl}/images/wanderlust-og-image.png`;

  const pageTitle = "About Kristina | Wanderlust Travel Adventures";

  const pageDescription =
    "Meet Kristina, the travel advisor behind Wanderlust Travel Adventures, offering thoughtful, personalized travel planning for meaningful trips.";

  const ctaText = data.siteSettings?.ctaText ?? "Start Planning My Trip";

  const heroEyebrow = data.aboutPage?.heroEyebrow ?? "About Wanderlust";

  const heroHeadline =
    data.aboutPage?.heroHeadline ??
    "Thoughtful travel planning for trips that feel personal, seamless, and unforgettable.";

  const heroText =
    data.aboutPage?.heroText ??
    "Wanderlust Travel Adventures is led by Kristina, a travel advisor who helps clients plan meaningful trips with care, taste, and attention to every detail.";

  const storyEyebrow = data.aboutPage?.storyEyebrow ?? "Meet Kristina";

  const storyHeading =
    data.aboutPage?.storyHeading ?? "Travel guidance shaped around you.";

  const storyParagraphs = data.aboutPage?.storyParagraphs?.length
    ? data.aboutPage.storyParagraphs
    : [
        "Kristina helps travelers turn ideas into beautifully planned experiences — from romantic getaways and honeymoons to curated escapes, family trips, and once-in-a-lifetime adventures.",
        "Her approach is personal, thoughtful, and detail-oriented. Instead of handing clients a generic itinerary, she takes time to understand how they want to travel, what matters most, and what kind of experience will feel genuinely memorable.",
        "Through trusted travel relationships and careful planning, Wanderlust Travel Adventures helps simplify the process so clients can enjoy the excitement of travel without carrying the stress of every detail.",
      ];

  const valuesHeading =
    data.aboutPage?.valuesHeading ??
    "Designed with care from the first conversation.";

  const values = data.aboutPage?.values?.length
    ? data.aboutPage.values
    : [
        {
          number: "01",
          title: "Personal",
          text: "Every trip begins with your preferences, priorities, travel style, and vision.",
        },
        {
          number: "02",
          title: "Curated",
          text: "Hotels, experiences, guides, and details are chosen with intention and care.",
        },
        {
          number: "03",
          title: "Supported",
          text: "You have guidance before and during your trip, so the experience feels smooth and confident.",
        },
      ];
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />

  <link rel="canonical" href={pageUrl} />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Wanderlust Travel Adventures" />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
  <meta property="og:url" content={pageUrl} />
  <meta property="og:image" content={ogImageUrl} />
  <meta
    property="og:image:alt"
    content="A scenic mountain lake with the message Thoughtful travel planning, designed around you."
  />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={pageTitle} />
  <meta name="twitter:description" content={pageDescription} />
  <meta name="twitter:image" content={ogImageUrl} />
  <meta
    name="twitter:image:alt"
    content="A scenic mountain lake with the message Thoughtful travel planning, designed around you."
  />
</svelte:head>

<Header dark={true} />

<section class="about-hero">
  <div class="about-inner">
    <p class="eyebrow light">{heroEyebrow}</p>

    <h1>{heroHeadline}</h1>

    <p>{heroText}</p>
  </div>
</section>

<section class="about-story">
  <div class="about-story-inner">
    <div class="about-copy">
      <p class="eyebrow light">{storyEyebrow}</p>

      <h2>{storyHeading}</h2>

      {#each storyParagraphs as paragraph}
        <p>{paragraph}</p>
      {/each}
    </div>
  </div>
</section>

<section class="about-values">
  <div class="section-inner">
    <h2>{valuesHeading}</h2>

    <div class="process-grid">
      {#each values as value}
        <div class="process-step">
          <span>{value.number}</span>
          <h3>{value.title}</h3>
          <p>{value.text}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="cta-section">
  <div class="cta-inner">
    <p class="eyebrow">Ready to start planning?</p>

    <h2>Let’s design a trip around the way you want to travel.</h2>

    <p>
      Share what you’re dreaming of, and Wanderlust Travel Adventures will help
      bring the details together.
    </p>

    <a href="/contact" class="cta">{ctaText}</a>
  </div>
</section>

<Footer />
