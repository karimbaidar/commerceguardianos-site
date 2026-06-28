<script lang="ts">
  import { base } from '$app/paths';
  import { appStoreUrl } from '$lib/config';
  import CtaButton from './CtaButton.svelte';

  const navItems = [
    { label: 'Features', href: '/features/' },
    { label: 'Pricing', href: '/pricing/' },
    { label: 'Security', href: '/security/' },
    { label: 'Partners', href: '/partners/' },
    { label: 'Blog', href: '/blog/' }
  ];
</script>

<header class="site-header">
  <div class="announcement">
    <a href={appStoreUrl} target="_blank" rel="noreferrer">Now available on the Shopify App Store</a>
  </div>
  <nav class="nav container" aria-label="Main navigation">
    <a class="brand" href={`${base}/`} aria-label="CommerceGuardian OS home">
      <span class="brand-mark" aria-hidden="true">CG</span>
      <span>CommerceGuardian OS</span>
    </a>
    <div class="nav-links" aria-label="Primary">
      {#each navItems as item}
        <a href={`${base}${item.href}`}>{item.label}</a>
      {/each}
    </div>
    <div class="nav-cta">
      <CtaButton href={appStoreUrl} label="Install" variant="primary" />
    </div>
  </nav>
</header>

<style>
  .site-header {
    position: sticky;
    top: 0;
    z-index: 20;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(7, 24, 39, 0.96);
    color: #ffffff;
    backdrop-filter: blur(16px);
  }

  .announcement {
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    background: #06110e;
    text-align: center;
  }

  .announcement a {
    display: block;
    padding: 8px 16px;
    color: #c9f6df;
    font-size: 0.92rem;
    font-weight: 800;
    text-decoration: none;
  }

  .nav {
    display: flex;
    min-height: 74px;
    align-items: center;
    gap: 22px;
  }

  .brand {
    display: inline-flex;
    min-width: max-content;
    align-items: center;
    gap: 10px;
    color: #ffffff;
    font-weight: 900;
    text-decoration: none;
  }

  .brand-mark {
    display: inline-flex;
    width: 34px;
    height: 34px;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 6px;
    background: var(--green);
    color: #04120d;
    font-size: 0.82rem;
  }

  .nav-links {
    display: flex;
    flex: 1;
    justify-content: center;
    gap: 4px;
  }

  .nav-links a {
    border-radius: 6px;
    color: #d8e7e2;
    font-size: 0.95rem;
    font-weight: 750;
    padding: 10px 12px;
    text-decoration: none;
  }

  .nav-links a:hover {
    background: rgba(255, 255, 255, 0.08);
    color: #ffffff;
  }

  .nav-cta {
    min-width: 104px;
  }

  @media (max-width: 900px) {
    .nav {
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 14px 0;
    }

    .nav-links {
      order: 3;
      width: 100%;
      justify-content: flex-start;
      overflow-x: auto;
      padding-bottom: 2px;
    }
  }

  @media (max-width: 560px) {
    .brand span:last-child {
      font-size: 0.95rem;
    }

    .nav-cta {
      display: none;
    }
  }
</style>
