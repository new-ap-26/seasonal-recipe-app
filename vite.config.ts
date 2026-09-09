import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig(({ mode }) => {
  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
  const base = mode === 'production' && repo ? `/${repo}/` : '/'

  return {
    base,
    plugins: [
      react(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['icon.svg'],
        manifest: {
          name: '旬ごはん',
          short_name: '旬ごはん',
          description: '旬・栄養・薬膳と、自分好みに育てる2人分レシピアプリ',
          theme_color: '#6f7d4e',
          background_color: '#f7f5ef',
          display: 'standalone',
          start_url: '.',
          icons: [
            { src: 'icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' }
          ]
        }
      })
    ]
  }
})
