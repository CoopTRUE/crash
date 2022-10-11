import adapter from '@sveltejs/adapter-node'
import autoprefixer from 'autoprefixer'
import preprocess from 'svelte-preprocess'
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({
    postcss: { plugins: [autoprefixer()] }
  }),

  kit: {
    adapter: adapter({ precompress: true }),
    alias: {
      $client: path.resolve(path.resolve(), './src/lib')
    }
  }
}

export default config
