<script lang="ts">
  import { page } from '$app/state';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { defaultDescription, defaultTitle, projectBasePath, siteUrl } from '$lib/config';
  import '$lib/styles.css';

  let { children } = $props();

  const title = $derived(page.data.title ?? defaultTitle);
  const description = $derived(page.data.description ?? defaultDescription);
  const pathname = $derived(page.url.pathname.startsWith(projectBasePath)
    ? page.url.pathname.slice(projectBasePath.length) || '/'
    : page.url.pathname);
  const canonical = $derived(siteUrl + pathname);
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="CommerceGuardian OS" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonical} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <link rel="canonical" href={canonical} />
</svelte:head>

<Header />
<main>
  {@render children()}
</main>
<Footer />
