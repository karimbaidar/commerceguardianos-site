import adapter from '@sveltejs/adapter-static';

const production = process.env.NODE_ENV === 'production';

const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      precompress: false,
      strict: true
    }),
    paths: {
      base: production ? '/commerceguardianos-site' : ''
    },
    prerender: {
      entries: ['*']
    }
  }
};

export default config;
