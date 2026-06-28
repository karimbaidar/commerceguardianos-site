<script lang="ts">
  import { base } from '$app/paths';

  export let href: string;
  export let variant: 'primary' | 'secondary' | 'dark' = 'primary';
  export let label = '';
  export let external = href.startsWith('http');

  $: finalHref = external ? href : `${base}${href}`;
</script>

<a
  class:primary={variant === 'primary'}
  class:secondary={variant === 'secondary'}
  class:dark={variant === 'dark'}
  class="cta-button"
  href={finalHref}
  target={external ? '_blank' : undefined}
  rel={external ? 'noreferrer' : undefined}
>
  <span>{label}</span>
  <span aria-hidden="true" class="cta-icon">&rsaquo;</span>
</a>

<style>
  .cta-button {
    display: inline-flex;
    min-height: 48px;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: 1px solid transparent;
    border-radius: 6px;
    padding: 12px 18px;
    font-weight: 850;
    line-height: 1.1;
    text-decoration: none;
    transition:
      background-color 160ms ease,
      border-color 160ms ease,
      color 160ms ease,
      transform 160ms ease;
  }

  .cta-button:hover {
    transform: translateY(-1px);
  }

  .primary {
    background: var(--green);
    color: #04120d;
  }

  .primary:hover {
    background: #23c688;
  }

  .secondary {
    border-color: rgba(255, 255, 255, 0.28);
    background: rgba(255, 255, 255, 0.08);
    color: #ffffff;
  }

  .secondary:hover {
    border-color: rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.14);
  }

  .dark {
    border-color: var(--line);
    background: #ffffff;
    color: var(--ink);
  }

  .dark:hover {
    border-color: var(--green);
  }

  .cta-icon {
    font-size: 1.35rem;
    line-height: 1;
  }

  @media (max-width: 560px) {
    .cta-button {
      width: 100%;
    }
  }
</style>
