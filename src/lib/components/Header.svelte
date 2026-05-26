<script lang="ts">
  let { dark = false } = $props();
</script>

<header class:dark>
  <div class="nav-inner">
    <a href="/">
      <img
        src={dark
          ? "/images/wanderlust-logo-dark.svg"
          : "/images/wanderlust-logo.svg"}
        alt="Wanderlust Travel Adventures"
        class="logo"
      />
    </a>

    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="mailto:kristina@wanderlusttraveladventures.com">Contact</a>
    </nav>
  </div>
</header>

<style>
  header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 28px 48px;
    z-index: 10;
  }

  .nav-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  nav {
    display: flex;
    gap: 28px;
  }

  nav a {
    color: white;
    text-decoration: none;
    font-size: 12px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    font-family: "Inter", sans-serif;
    transition: opacity 0.25s ease;
  }

  header.dark nav a {
    color: #111;
  }

  nav a:hover {
    opacity: 0.7;
  }

  @media (max-width: 900px) {
    header {
      padding: 32px;
    }
  }

  @media (max-width: 600px) {
    header {
      padding: 28px 24px;
    }

    .logo {
      width: 160px;
    }

    nav {
      gap: 18px;
    }

    nav a {
      font-size: 10px;
    }
  }
</style>
