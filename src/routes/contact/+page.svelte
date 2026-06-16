<!-- src/routes/contact/+page.svelte -->

<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  const contactEmail = "kristina@wanderlusttraveladventures.com";
  const contactPhone = "+1 954-683-5548";
  const contactPhoneHref = "tel:+19546835548";
  const officeHours = "Monday–Friday, 9:00 AM–6:00 PM EST";

  const siteUrl = "https://www.wanderlusttraveladventures.com";
  const pageUrl = `${siteUrl}/contact`;
  const ogImageUrl = `${siteUrl}/images/wanderlust-og-image.png`;

  const pageTitle = "Contact | Wanderlust Travel Adventures";

  const pageDescription =
    "Contact Wanderlust Travel Adventures to begin planning a personalized, thoughtfully designed trip.";
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
</svelte:head>

<Header dark />

<main class="contact-page">
  <section class="contact-hero">
    <p class="contact-eyebrow">Start planning</p>

    <h1>Let’s design a trip around the way you want to travel.</h1>

    <p class="contact-intro">
      Tell us where you’re dreaming of going, when you’d like to travel, and
      what kind of experience you want to create. Kristina will help shape the
      details into a thoughtful, personalized itinerary designed around you.
    </p>
  </section>

  <section class="contact-grid" aria-label="Contact information">
    <div class="contact-card contact-card-primary">
      <p class="contact-card-label">Best way to reach us</p>

      <h2>Email Kristina</h2>

      <p>
        Send a note with your destination ideas, preferred travel dates, travel
        style, and any special occasion or experience you have in mind.
      </p>

      <a class="contact-button" href={`mailto:${contactEmail}`}>
        {contactEmail}
      </a>
    </div>

    <div class="contact-card">
      <p class="contact-card-label">Prefer to call?</p>

      <h2>Call Kristina</h2>

      <p>
        Call during office hours, or leave a message during off-hours and
        Kristina will get back to you.
      </p>

      <a class="contact-detail-link" href={contactPhoneHref}>
        {contactPhone}
      </a>
    </div>

    <div class="contact-card">
      <p class="contact-card-label">Office hours</p>

      <h2>Available weekdays</h2>

      <p>
        {officeHours}
      </p>

      <p>
        During off-hours, please send an email or leave a message and Kristina
        will respond as soon as possible.
      </p>
    </div>
  </section>
</main>

<Footer />

<style>
  .contact-page {
    min-height: 100vh;
    background: #f6f3ee;
    color: #111;
    padding: 160px 24px 96px;
  }

  .contact-hero {
    max-width: 820px;
    margin: 0 auto;
    text-align: center;
  }

  .contact-eyebrow,
  .contact-card-label {
    margin: 0 0 18px;
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #8d7462;
  }

  h1,
  h2 {
    margin: 0;
    font-family: "Playfair Display", serif;
    font-weight: 300;
    line-height: 1.05;
    letter-spacing: -0.035em;
  }

  h1 {
    max-width: 820px;
    margin: 0 auto;
    font-size: clamp(44px, 7vw, 72px);
  }

  h2 {
    font-size: clamp(30px, 3.5vw, 42px);
  }

  .contact-intro {
    max-width: 620px;
    margin: 28px auto 0;
    font-family: "Inter", sans-serif;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.75;
    color: #444;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr 1fr;
    gap: 24px;
    max-width: 1120px;
    margin: 80px auto 0;
  }

  .contact-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 320px;
    padding: 36px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    background: rgba(255, 255, 255, 0.56);
  }

  .contact-card-primary {
    background: #0b0b0b;
    color: #fff;
  }

  .contact-card-primary .contact-card-label {
    color: rgba(255, 255, 255, 0.58);
  }

  .contact-card p:not(.contact-card-label) {
    margin: 22px 0 0;
    font-family: "Inter", sans-serif;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.75;
    color: #555;
  }

  .contact-card-primary p:not(.contact-card-label) {
    color: rgba(255, 255, 255, 0.75);
  }

  .contact-button,
  .contact-detail-link {
    margin-top: auto;
  }

  .contact-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    padding: 0 24px;
    border: 1px solid rgba(255, 255, 255, 0.65);
    color: #fff;
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-decoration: none;
    transition:
      background 0.25s ease,
      color 0.25s ease,
      border-color 0.25s ease;
  }

  .contact-button:hover {
    background: #fff;
    color: #000;
    border-color: #fff;
  }

  .contact-detail-link {
    display: inline-block;
    color: #111;
    font-family: "Inter", sans-serif;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0.02em;
    text-decoration: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.42);
    padding-bottom: 6px;
    transition:
      color 0.25s ease,
      border-color 0.25s ease,
      transform 0.25s ease;
  }

  .contact-detail-link:hover {
    color: rgba(0, 0, 0, 0.62);
    border-bottom-color: rgba(0, 0, 0, 0.22);
    transform: translateY(-2px);
  }

  @media (max-width: 900px) {
    .contact-page {
      padding-top: 140px;
    }

    .contact-grid {
      grid-template-columns: 1fr;
      margin-top: 64px;
    }

    .contact-card {
      min-height: auto;
      gap: 28px;
    }
  }

  @media (max-width: 600px) {
    .contact-page {
      padding: 132px 20px 72px;
    }

    .contact-intro {
      font-size: 16px;
    }

    .contact-grid {
      margin-top: 56px;
      gap: 18px;
    }

    .contact-card {
      padding: 28px;
    }

    .contact-button {
      width: 100%;
      text-align: center;
      word-break: break-word;
    }
  }
</style>
