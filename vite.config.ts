import { sveltekit } from '@sveltejs/kit/vite'
import type { UserConfig } from 'vite'

// MASSIVE SHOUTOUT TO https://githubhelp.com/trash-and-fire/svelte-lightweight-charts
const config: UserConfig = {
  plugins: [sveltekit()],
  ssr: {
    noExternal: ['svelte-lightweight-charts', 'lightweight-charts']
  }
}

export default config
