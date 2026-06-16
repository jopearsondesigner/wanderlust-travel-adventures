<!-- src/routes/terms-conditions/+page.svelte -->

<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  const siteUrl = "https://www.wanderlusttraveladventures.com";
  const pageUrl = `${siteUrl}/terms-conditions`;
  const ogImageUrl = `${siteUrl}/images/wanderlust-og-image.png`;

  const pageTitle = "Terms & Conditions | Wanderlust Travel Adventures";

  const pageDescription =
    "Review the Terms & Conditions for Wanderlust Travel Adventures, including travel planning services, supplier policies, payments, cancellations, documentation, and liability.";
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

<main class="terms-page">
  <section class="terms-hero">
    <p class="terms-eyebrow">Client information</p>

    <h1>Terms & Conditions</h1>

    <p class="terms-intro">
      These Terms and Conditions govern the relationship between Wanderlust
      Travel Adventures LLC and clients who engage our travel planning and
      advisory services.
    </p>
  </section>

  <article class="terms-content">
    <p><strong>Wanderlust Travel Adventures LLC</strong></p>

    <p><strong>Effective Date:</strong> April 15, 2025</p>

    <p>
      These Terms and Conditions (“Agreement”) govern the relationship between
      Wanderlust Travel Adventures LLC, a Florida limited liability company
      (“Company,” “we,” “our,” or “us”), and the client (“Client,” “you,” or
      “traveler”) who engages our travel planning and adp>
      By booking travel services through Wanderlust Travel Adventures LLC,
      submitting payment, or otherwise engaging our services, you acknowledge
      that you have read, understood, and agree to be bound by these Terms and
      Conditions.
    </p>

    <hr />

    <section>
      <h2>1. Agency Role and Independent Suppliers</h2>

      <p>
        Wanderlust Travel Adventures LLC acts solely as an independent travel
        advisor and intermediary between clients and travel suppliers.
      </p>

      <p>Travel suppliers may include but are not limited to:</p>

      <ul>
        <li>Airlines</li>
        <li>Hotels and resorts</li>
        <li>Tour operators</li>
        <li>Cruise lines</li>
        <li>Transportation providers</li>
        <li>Excursion providers</li>
        <li>Insurance companies</li>
      </ul>

      <p>
        All such suppliers are independent third-party contractors and are not
        owned, controlled, or operated by Wanderlust Travel Adventures LLC.
      </p>

      <p>
        Accordingly, Wanderlust Travel Adventures LLC is not liable for any
        acts, errors, omissions, representations, warranties, breaches, or
        negligence of any supplier or for any personal injuries, property
        damage, delays, cancellations, or other damages arising from services
        provided by such suppliers.
      </p>

      <p>
        Your contract for travel services is with the individual supplier, not
        Wanderlust Travel Adventures LLC.
      </p>
    </section>

    <hr />

    <section>
      <h2>2. Travel Planning Services</h2>

      <p>
        Wanderlust Travel Adventures LLC provides luxury travel advisory and
        planning services, which may include:
      </p>

      <ul>
        <li>Travel research and itinerary design</li>
        <li>Destination recommendations</li>
        <li>Hotel, cruise, and tour reservations</li>
        <li>Transportation arrangements</li>
        <li>Concierge recommendations</li>
        <li>Travel documentation guidance</li>
      </ul>

      <p>
        We reserve the right to charge planning or consulting fees, which may be
        disclosed prior to engagement and may be non-refundable.
      </p>
    </section>

    <hr />

    <section>
      <h2>3. Pricing and Payment</h2>

      <p>
        All prices quoted are subject to change until payment is received and
        confirmed by the supplier.
      </p>

      <p>Clients acknowledge that:</p>

      <ul>
        <li>
          Travel prices fluctuate due to availability, currency exchange, and
          supplier pricing.
        </li>
        <li>Wanderlust Travel Adventures LLC does not control supplier pricing.</li>
      </ul>

      <p>
        Payment of deposits or full balances may be required by suppliers
        according to their individual terms.
      </p>

      <p>By submitting payment authorization, you agree that:</p>

      <ul>
        <li>You are an authorized user of the payment method</li>
        <li>Charges are valid and authorized</li>
        <li>You will not initiate chargebacks</li>
      </ul>

      <p>
        Any chargebacks made in violation of this agreement may result in legal
        collection efforts, including recovery of attorney’s fees and costs as
        permitted under Florida law.
      </p>
    </section>

    <hr />

    <section>
      <h2>4. Deposits, Cancellations, and Refunds</h2>

      <p>Cancellation policies vary by supplier.</p>

      <p>Clients agree that:</p>

      <ul>
        <li>Deposits may be non-refundable</li>
        <li>Cancellation penalties may apply</li>
        <li>Refund eligibility is determined by the supplier</li>
      </ul>

      <p>
        Wanderlust Travel Adventures LLC does not control refund timelines and
        is not responsible for supplier delays.
      </p>
     <p>
        Planning fees and service fees paid to Wanderlust Travel Adventures LLC
        are non-refundable unless otherwise stated in writing.
      </p>
    </section>

    <hr />

    <section>
      <h2>5. Travel Insurance</h2>

      <p>
        Travel insurance is strongly recommended for all travel arrangements.
      </p>

      <p>Clients acknowledge that travel insurance may cover:</p>

      <ul>
        <li>Trip cancellations</li>
        <li>Medical emergencies</li>
        <li>Travel interruptions</li>
        <li>Lost baggage</li>
        <li>Supplier default</li>
      </ul>

      <p>
        If you decline travel insurance, you assume full financial
        responsibility for any losses incurred.
      </p>
    </section>

    <hr />

    <section>
      <h2>6. Travel Documentation and Entry Requirements</h2>

      <p>Clients are solely responsible for obtaining and carrying:</p>

      <ul>
        <li>Valid passports</li>
        <li>Visas</li>
        <li>Vaccination documentation</li>
        <li>Entry permits</li>
        <li>Any other required travel documents</li>
      </ul>

      <p>
        Passports must typically be valid for at least six (6) months beyond
        travel dates, though requirements vary by destination.
      </p>

      <p>
        Wanderlust Travel Adventures LLC is not responsible for denied boarding,
        denied entry, or other travel disruptions resulting from improper
        documentation.
      </p>
    </section>

    <hr />

    <section>
      <h2>7. Health and Safety</h2>

      <p>
        Travel involves inherent risks that may include, but are not limited to:
      </p>

      <ul>
        <li>Illness</li>
        <li>Injury</li>
        <li>Accidents</li>
        <li>Political instability</li>
        <li>Natural disasters</li>
        <li>Terrorism</li>
        <li>Public health emergencies</li>
      </ul>

      <p>Clients voluntarily assume all risks associated with travel.</p>

      <p>
        Wanderlust Travel Adventures LLC does not guarantee the safety of any
        destination.
      </p>

      <p>Travelers should review travel advisories issued by:</p>

      <ul>
        <li>The U.S. Department of State</li>
        <li>The Centers for Disease Control and Prevention (CDC)</li>
      </ul>
    </section>

    <hr />

    <section>
      <h2>8. Changes to Itinerary</h2>

      <p>Suppliers may change itineraries due to circumstances such as:</p>

      <ul>
        <li>Weather</li>
        <li>Mechanical issues</li>
        <li>Government actions</li>
        <li>Operational decisions</li>
      </ul>

      <p>
        Wanderlust Travel Adventures LLC is not responsible for supplier
        schedule changes or disruptions.
      </p>

      <p>
        Any additional costs incurred due to changes are the responsibility of
        the traveler unless covered by insurance.
      </p>
    </section>

    <hr />

    <section>
      <h2>9. Limitation of Liability</h2>

      <p>
        To the fullest extent permitted under Florida law, Wanderlust Travel
        Adventures LLC shall not be liable for:
      </p>

      <ul>
        <li>Indirect damages</li>
        <li>Consequential damages</li>
        <li>Loss of enjoyment</li>
        <li>Emotional distress</li>
        <li>Lost profits</li>
        <li>Travel disruptions caused by third parties</li>
      </ul>

      <p>
        In no event shall the total liability of Wanderlust Travel Adventures
        LLC exceed the amount of service fees paid directly to the company.
      </p>
    </section>

    <hr />

    <section>
      <h2>10. Force Majeure</h2>

      <p>
        Wanderlust Travel Adventures LLC shall not be liable for failure or
        delay in performance due to circumstances beyond its control, including
        but not limited to:
      </p>

      <ul>
        <li>Natural disasters</li>
        <li>War</li>
        <li>Terrorism</li>
        <li>Pandemics or epidemics</li>
        <li>Government restrictions</li>
        <li>Airline cancellations or strikes</li>
        <li>Weather conditions</li>
      </ul>

      <p>
        In such events, refunds are subject solely to the policies of the travel
        supplier.
      </p>
    </section>

    <hr />

    <section>
      <h2>11. Client Conduct</h2>

      <p>Clients agree to conduct themselves appropriately during travel.</p>

      <p>Travel suppliers may refuse service or remove travelers who:</p>

      <ul>
        <li>Violate laws</li>
        <li>Engage in disruptive behavior</li>
        <li>Endanger others</li>
      </ul>

      <p>
        Wanderlust Travel Adventures LLC is not responsible for consequences
        resulting from such conduct.
      </p>
    </section>

    <hr />

    <section>
      <h2>12. Chargebacks and Payment Disputes</h2>

      <p>
        Clients agree not to initiate chargebacks for goods and services
        properly booked and/or rendered regardless of circumstances of
        cancellation.
      </p>

      <p>Any disputes must first be submitted in writing to:</p>

      <p>
        Wanderlust Travel Adventures LLC<br />
        <a href="mailto:kristina@wanderlusttraveladventures.com">
          kristina@wanderlusttraveladventures.com
        </a>
      </p>

      <p>
        If a chargeback is initiated improperly, the client agrees to reimburse
        Wanderlust Travel Adventures LLC for:
      </p>

      <ul>
        <li>Collection costs</li>
        <li>Legal fees</li>
        <li>Administrative costs</li>
      </ul>

      <p>to the extent permitted under Florida law.</p>
    </section>

    <hr />

    <section>
      <h2>13. Intellectual Property</h2>

      <p>
        All itineraries, travel proposals, and planning materials created by
        Wanderlust Travel Adventures LLC are the intellectual property of the
        Company.
      </p>

      <p>
        These materials may not be reproduced, shared with other agencies, or
        used to obtain competing quotes without written consent.
      </p>
    </section>

    <hr />

    <section>
      <h2>14. Governing Law</h2>

      <p>
        This Agreement shall be governed by and construed in accordance with the
        laws of the State of Florida.
      </p>

      <p>
        Any disputes arising from this Agreement shall be resolved exclusively in
        the state or federal courts located within Florida, and the parties
        consent to jurisdiction in those courts.
      </p>
    </section>

    <hr />

    <section>
      <h2>15. Severability</h2>

      <p>
        If any provision of this Agreement is found to be unenforceable under
        applicable law, the remaining provisions shall remain in full force and
        effect.
      </p>
    </section>

    <hr />

    <section>
      <h2>16. Entire Agreement</h2>

      <p>
        These Terms and Conditions constitute the entire agreement between the
        Client and Wanderlust Travel Adventures LLC and supersede all prior
        communications, agreements, or understandings.
      </p>
    </section>

    <hr />

    <section>
      <h2>17. Acceptance of Terms</h2>

      <p>
        By engaging the services of Wanderlust Travel Adventures LLC, submitting
        payment, or confirming a booking, you acknowledge that you have read,
        understood, and agree to these Terms and Conditions.
      </p>
    </section>

    <hr />

    <section>
      <h2>18. Indemnity</h2>

      <p>
        Client shall indemnify and hold harmless Wanderlust Travel Adventures,
        LLC, and its directors, officers, agents, employees, members, and
        stockholders, including The SmartFlyer Inc (“Indemnitees”) absolutely
        and forever from and against any and all claims, actions, damages,
        suits, liabilities, obligations, cosfees, charges, and any other
        expenses whatsoever, including reasonable attorneys’ fees and costs, that
        may be asserted by a third party against any Indemnitee in connection
        with any travel booked or other services rendered, caused by any
        chargebacks by client, returned payments to client, lack of client
        payments, or any other reasons claimed by such third party against
        Indemnitees concerning services provided to Client.
      </p>
    </section>
  </article>
</main>

<Footer />

<style>
  .terms-page {
    min-height: 100vh;
    background: #f6f3ee;
    color: #111;
    padding: 160px 24px 96px;
  }

  .terms-hero {
    max-width: 860px;
    margin: 0 auto;
    text-align: center;
  }

  .terms-eyebrow {
    margin: 0 0 18px;
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #8d7462;


  h1,
  h2 {
    margin: 0;
    font-family: "Playfair Display", serif;
    font-weight: 300;
    letter-spacing: -0.035em;
  }

  h1 {
    font-size: clamp(44px, 7vw, 72px);
    line-height: 1.05;
  }

  h2 {
    margin-bottom: 20px;
    font-size: clamp(30px, 4vw, 44px);
    line-height: 1.15;
  }

  .terms-intro {
    max-width: 660px;
    margin: 28px auto 0;
    font-family: "Inter", sans-serif;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.75;
    color: #444;
  }

  .terms-content {
    max-width: 860px;
    margin: 88px auto 0;
    padding: 56px;
    background: rgba(255, 255, 255, 0.62);
    border: 1px solid rgba(0, 0, 0, 0.08);
  }

  .terms-content section {
    scroll-margin-top: 120px;
  }

  .terms-content p,
  .terms-content li {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.8;
    color: #333;
  }

  .terms-content p + p {
    margin-top: 18px;
  }

  .terms-content ul {
    margin: 20px 0 0 22px;
  }

  .terms-content li + li {
    margin-top: 8px;
  }

  .terms-content strong {
    font-weight: 500;
    color: #111;
  }

  .terms-content a {
    color: #111;
    text-decoration-color: rgba(141, 116, 98, 0.65);
    text-underline-offset: 4px;
  }

  .terms-content hr {
    width: 100%;
    height: 1px;
    margin: 44px 0;
    border: 0;
    background: rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 760px) {
    .terms-page {
      padding: 132px 18px 72px;
    }

    .terms-content {
      margin-top: 56px;
      padding: 32px 22px;
    }

    .terms-content p,
    .terms-content li {
      font-size: 15px;
      line-height: 1.75;
    }
  }
  }
</style>
