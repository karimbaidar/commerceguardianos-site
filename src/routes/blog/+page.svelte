<script lang="ts">
  import BlogCard from '$lib/components/BlogCard.svelte';
  import CtaButton from '$lib/components/CtaButton.svelte';
  import { appStoreUrl } from '$lib/config';
  import { blogPosts } from '$lib/content';
</script>

<section class="section dark page-hero">
  <div class="container">
    <p class="eyebrow">Blog</p>
    <h1>Shopify order-risk guides for physical goods merchants</h1>
    <p class="lead">
      Practical workflows for catching wrong-address, failed-delivery, fulfillment, revenue, and
      catalog issues before orders become losses.
    </p>
    <div class="button-row">
      <CtaButton href={appStoreUrl} label="Install on the Shopify App Store" variant="primary" />
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="grid three">
      {#each blogPosts as post}
        <BlogCard {...post} />
      {/each}
    </div>
  </div>
</section>

<style>
  .page-hero {
    padding-top: 92px;
  }
</style>
