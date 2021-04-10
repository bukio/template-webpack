const mode = process.env.NODE_ENV || 'development';
const production = (mode === 'production');
const sveltePreprocess = require('svelte-preprocess');
const autoprefixer = require('autoprefixer');

module.exports = {
  preprocess: sveltePreprocess({
    sourceMap: !production,
    postcss: {
      plugin: [autoprefixer()]
    }
  }),
  emitCss: true,
  hotReload: true
}