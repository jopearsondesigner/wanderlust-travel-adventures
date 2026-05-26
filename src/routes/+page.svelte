<!--src/routes/+page.svelte-->

<script lang="ts">
  import type { PageData } from "./$types";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  let { data }: { data: PageData } = $props();

  const contactEmail =
    data.siteSettings?.contactEmail ??
    "kristina@wanderlusttraveladventures.com";

  const ctaText = data.siteSettings?.ctaText ?? "Start Planning My Trip";

  const heroHeadline =
    data.homePage?.heroHeadline ?? "Travel, designed entirely around you.";

  const heroSubhead =
    data.homePage?.heroSubhead ??
    "You bring the vision. We handle every detail — from first idea to final itinerary.";

  const heroCtaText = data.homePage?.heroCtaText ?? ctaText;

  const heroVideoUrl =
    data.homePage?.heroVideoUrl ??
    "https://cdn.prod.website-files.com/69ea1c23b5297217697a8953/69f00ffb69f3211927aa2f45_hero_video_mp4.mp4";

  const valueHeading =
    data.homePage?.valueHeading ?? "Effortless travel, thoughtfully designed.";

  const valueSubhead =
    data.homePage?.valueSubhead ??
    "We plan every detail around your preferences, so you can relax and enjoy the experience from start to finish.";

  const valueCards = data.homePage?.valueCards?.length
    ? data.homePage.valueCards
    : [
        {
          title: "Personalized to you",
          text: "Every itinerary is built around your preferences, pace, and priorities.",
        },
        {
          title: "Seamless from start to finish",
          text: "From first idea to final booking, every detail is handled for you.",
        },
        {
          title: "Travel with confidence",
          text: "Trusted planning ensures a smooth, stress-free experience.",
        },
      ];
  const servicesHeading =
    data.homePage?.servicesHeading ??
    "Curated travel for life’s most meaningful moments.";

  const servicesSubhead =
    data.homePage?.servicesSubhead ??
    "From honeymoons to once-in-a-lifetime escapes, every trip is planned with care, taste, and attention to detail.";

  const services = data.homePage?.services?.length
    ? data.homePage.services
    : [
        {
          title: "Honeymoons & Romantic Getaways",
          description:
            "Beautifully planned escapes designed to feel effortless and unforgettable.",
          image: {
            asset: {
              url: "/images/honeymoon.jpg",
            },
          },
        },
        {
          title: "Adventure & Exploration",
          description:
            "Every journey is thoughtfully crafted to balance discovery, comfort, and unforgettable moments.",
          image: {
            asset: {
              url: "/images/adventure.jpg",
            },
          },
        },
        {
          title: "Curated Luxury Escapes",
          description:
            "From boutique stays to world-class experiences, every detail is elevated.",
          image: {
            asset: {
              url: "/images/luxury.jpg",
            },
          },
        },
      ];
  const processEyebrow = data.homePage?.processEyebrow ?? "How it works";

  const processHeading =
    data.homePage?.processHeading ??
    "A simple planning process, designed around you.";

  const processSubhead =
    data.homePage?.processSubhead ??
    "From the first conversation to the final itinerary, every step is handled with care, clarity, and attention to detail.";

  const processSteps = data.homePage?.processSteps?.length
    ? data.homePage.processSteps
    : [
        {
          number: "01",
          title: "Share your vision",
          text: "We start by learning how you want to travel — your style, priorities, timeline, budget, and dream destinations.",
        },
        {
          number: "02",
          title: "Design the experience",
          text: "Your trip is thoughtfully planned around the details that matter most, from hotels and flights to guides, tours, and special moments.",
        },
        {
          number: "03",
          title: "Travel with support",
          text: "Once your trip is underway, you have support and guidance so you can relax and enjoy the experience with confidence.",
        },
      ];
  const advisorEyebrow =
    data.homePage?.advisorEyebrow ?? "Meet your travel advisor";

  const advisorHeading =
    data.homePage?.advisorHeading ??
    "Thoughtful travel planning, guided by real expertise.";

  const advisorText =
    data.homePage?.advisorText ??
    "Wanderlust Travel Adventures is led by Kristina, a luxury travel advisor who designs personalized trips with care, taste, and attention to every detail — from boutique hotels and private guides to seamless itineraries and meaningful experiences.";

  const advisorLinkText = data.homePage?.advisorLinkText ?? "Meet Kristina";

  const finalCtaEyebrow =
    data.homePage?.finalCtaEyebrow ??
    "Personalized planning. Thoughtful details. Stress-free travel.";

  const finalCtaHeading =
    data.homePage?.finalCtaHeading ??
    "Designed for the way you want to travel.";

  const finalCtaText =
    data.homePage?.finalCtaText ??
    "Tell us what you’re dreaming of, and we’ll take care of every detail — from the first idea to the final itinerary.";
</script>

<svelte:head>
  <title>Wanderlust Travel Adventures</title>
  <meta
    name="description"
    content="Personalized luxury travel planning for honeymoons, romantic getaways, curated escapes, and unforgettable adventures."
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;600&family=Inter:wght@300;400;500&display=swap"
    rel="stylesheet"
  />
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />
</svelte:head>

<section class="hero">
  <Header />
  <video autoplay muted loop playsinline class="hero-video">
    <source src={heroVideoUrl} type="video/mp4" />
  </video>
  <div class="overlay"></div>
  <div class="hero-content">
    <h1>{heroHeadline}</h1>
    <p>{heroSubhead}</p>
    <a href="#start" class="cta">{heroCtaText}</a>
  </div>
  <div class="scroll-cue">Scroll</div>
</section>
<section class="value-section">
  <div class="section-inner">
    <h2>{valueHeading}</h2>

    <p class="section-subhead">{valueSubhead}</p>

    <div class="value-grid">
      {#each valueCards as card}
        <div class="value-card">
          <h3>{card.title}</h3>
          <p>{card.text}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
<section class="services-section">
  <div class="section-inner">
    <h2>{servicesHeading}</h2>

    <p class="section-subhead">{servicesSubhead}</p>

    <div class="services-grid">
      {#each services as service}
        <div class="service-card">
          <img
            src={service.image?.asset?.url}
            alt={service.title}
            class="service-image"
          />

          <div class="service-overlay">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
<section class="advisor-section">
  <div class="advisor-inner">
    <p class="eyebrow dark">{advisorEyebrow}</p>

    <h2>{advisorHeading}</h2>

    <p>{advisorText}</p>

    <a href="/about" class="text-link">{advisorLinkText}</a>
  </div>
</section>
<section class="process-section">
  <div class="section-inner">
    <p class="eyebrow light">{processEyebrow}</p>

    <h2>{processHeading}</h2>

    <p class="section-subhead">{processSubhead}</p>

    <div class="process-grid">
      {#each processSteps as step}
        <div class="process-step">
          <span>{step.number}</span>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
<section id="start" class="cta-section">
  <div class="cta-inner">
    <p class="eyebrow">{finalCtaEyebrow}</p>

    <h2>{finalCtaHeading}</h2>

    <p>{finalCtaText}</p>

    <a href={`mailto:${contactEmail}`} class="cta">{ctaText}</a>
  </div>
</section>
<Footer />
