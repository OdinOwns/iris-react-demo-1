import { defineConfig } from 'vite'
// Set base so assets work under /<owner>.github.io/<repo>/
export default defineConfig({
  base: '/{repo}/'
})
