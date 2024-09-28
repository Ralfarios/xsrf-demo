import { nodePolyfills } from 'vite-plugin-node-polyfills';

/** @type {import('vite').UserConfig} */
export default {
  server: { port: 3000 },
  plugins: [nodePolyfills()],
};
