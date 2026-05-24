<!--src/routes/+page.svelte-->

<script lang="ts">
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
  <header class="hero-nav">
    <img
      src="/images/wanderlust-logo.svg"
      alt="Wanderlust Travel Adventures"
      class="logo"
    />
  </header>
  <video autoplay muted loop playsinline class="hero-video">
    <source
      src="https://cdn.prod.website-files.com/69ea1c23b5297217697a8953/69f00ffb69f3211927aa2f45_hero_video_mp4.mp4"
      type="video/mp4"
    />
  </video>
  <div class="overlay"></div>
  <div class="hero-content">
    <h1>Travel, designed entirely around you.</h1>
    <p>
      You bring the vision. We handle every detail — from first idea to final
      itinerary.
    </p>
    <a href="#start" class="cta">Start Planning My Trip</a>
  </div>
  <div class="scroll-cue">Scroll</div>
</section>
<section class="value-section">
  <div class="section-inner">
    <h2>Effortless travel, thoughtfully designed.</h2>
    <p class="section-subhead">
      We plan every detail around your preferences, so you can relax and enjoy
      the experience from start to finish.
    </p>
    <div class="value-grid">
      <div class="value-card">
        <h3>Personalized to you</h3>
        <p>
          Every itinerary is built around your preferences, pace, and
          priorities.
        </p>
      </div>

      <div class="value-card">
        <h3>Seamless from start to finish</h3>
        <p>
          From first idea to final booking, every detail is handled for you.
        </p>
      </div>

      <div class="value-card">
        <h3>Travel with confidence</h3>
        <p>Trusted planning ensures a smooth, stress-free experience.</p>
      </div>
    </div>
  </div>
</section>
<section class="services-section">
  <div class="section-inner">
    <h2>Curated travel for life’s most meaningful moments.</h2>
    <p class="section-subhead">
      From honeymoons to once-in-a-lifetime escapes, every trip is planned with
      care, taste, and attention to detail.
    </p>
    <div class="services-grid">
      <div class="service-card">
        <img
          src="/images/honeymoon.jpg"
          alt="Honeymoons"
          class="service-image"
        />
        <div class="service-overlay">
          <h3>Honeymoons & Romantic Getaways</h3>
          <p>
            Beautifully planned escapes designed to feel effortless and
            unforgettable.
          </p>
        </div>
      </div>

      <div class="service-card">
        <img
          src="/images/adventure.jpg"
          alt="Adventure & Exploration"
          class="service-image"
        />
        <div class="service-overlay">
          <h3>Adventure & Exploration</h3>
          <p>
            Every journey is thoughtfully crafted to balance discovery, comfort,
            and unforgettable moments.
          </p>
        </div>
      </div>

      <div class="service-card">
        <img
          src="/images/luxury.jpg"
          alt="Curated Luxury Escapes"
          class="service-image"
        />
        <div class="service-overlay">
          <h3>Curated Luxury Escapes</h3>
          <p>
            From boutique stays to world-class experiences, every detail is
            elevated.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="advisor-section">
  <div class="advisor-inner">
    <p class="eyebrow dark">Meet your travel advisor</p>
    <h2>Thoughtful travel planning, guided by real expertise.</h2>

    <p>
      Wanderlust Travel Adventures is led by Kristina, a luxury travel advisor
      who designs personalized trips with care, taste, and attention to every
      detail — from boutique hotels and private guides to seamless itineraries
      and meaningful experiences.
    </p>

    <a href="/about" class="text-link">Meet Kristina</a>
  </div>
</section>
<section class="process-section">
  <div class="section-inner">
    <p class="eyebrow light">How it works</p>
    <h2>A simple planning process, designed around you.</h2>

    <p class="section-subhead">
      From the first conversation to the final itinerary, every step is handled
      with care, clarity, and attention to detail.
    </p>

    <div class="process-grid">
      <div class="process-step">
        <span>01</span>
        <h3>Share your vision</h3>
        <p>
          We start by learning how you want to travel — your style, priorities,
          timeline, budget, and dream destinations.
        </p>
      </div>

      <div class="process-step">
        <span>02</span>
        <h3>Design the experience</h3>
        <p>
          Your trip is thoughtfully planned around the details that matter most,
          from hotels and flights to guides, tours, and special moments.
        </p>
      </div>

      <div class="process-step">
        <span>03</span>
        <h3>Travel with support</h3>
        <p>
          Once your trip is underway, you have support and guidance so you can
          relax and enjoy the experience with confidence.
        </p>
      </div>
    </div>
  </div>
</section>
<section id="start" class="cta-section">
  <div class="cta-inner">
    <p class="eyebrow">
      Personalized planning. Thoughtful details. Stress-free travel.
    </p>
    <h2>Designed for the way you want to travel.</h2>

    <p>
      Tell us what you’re dreaming of, and we’ll take care of every detail —
      from the first idea to the final itinerary.
    </p>

    <a href="#start" class="cta">Start Planning My Trip</a>
  </div>
</section>
