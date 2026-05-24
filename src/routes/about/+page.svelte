<script lang="ts">
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();

  const contactEmail =
    data.siteSettings?.contactEmail ??
    "kristina@wanderlusttraveladventures.com";

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
</script>

<svelte:head>
  <title>About Kristina | Wanderlust Travel Adventures</title>
  <meta
    name="description"
    content="Meet Kristina, the travel advisor behind Wanderlust Travel Adventures, offering thoughtful, personalized travel planning for meaningful trips."
  />
</svelte:head>

<section class="about-hero">
  <div class="about-inner">
    <p class="eyebrow light">About Wanderlust</p>

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
    <h2>Designed with care from the first conversation.</h2>

    <div class="process-grid">
      <div class="process-step">
        <span>01</span>
        <h3>Personal</h3>
        <p>
          Every trip begins with your preferences, priorities, travel style, and
          vision.
        </p>
      </div>

      <div class="process-step">
        <span>02</span>
        <h3>Curated</h3>
        <p>
          Hotels, experiences, guides, and details are chosen with intention and
          care.
        </p>
      </div>

      <div class="process-step">
        <span>03</span>
        <h3>Supported</h3>
        <p>
          You have guidance before and during your trip, so the experience feels
          smooth and confident.
        </p>
      </div>
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

    <a href={`mailto:${contactEmail}`} class="cta">{ctaText}</a>
  </div>
</section>
