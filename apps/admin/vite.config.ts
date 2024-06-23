import path from 'node:path'
import process from 'node:process'
import { fileURLToPath, URL } from 'node:url'

import ReactSWC from '@vitejs/plugin-react-swc'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import TurboConsole from 'unplugin-turbo-console/vite'
import { defineConfig, loadEnv, type ProxyOptions } from 'vite'

export default defineConfig(({ mode }) => {
  const envPath = path.resolve(process.cwd(), '../..')
  const environment = loadEnv(mode, envPath) as ImportMetaEnv
  const {
    VITE_ADMIN_PORT,
    VITE_ADMIN_BASE_API_PREFIX,
    VITE_ADMIN_BASE_API_URL,
    VITE_ADMIN_MOCK_API_PREFIX,
    VITE_ADMIN_MOCK_API_URL
  } = environment

  const port = Number.parseInt(VITE_ADMIN_PORT, 10) || 5173
  const proxy: Record<string, string | ProxyOptions> = {
    [VITE_ADMIN_BASE_API_PREFIX]: {
      target: VITE_ADMIN_BASE_API_URL,
      changeOrigin: true,
      rewrite: (p: string) => p.replace(VITE_ADMIN_BASE_API_PREFIX, '')
    },
    [VITE_ADMIN_MOCK_API_PREFIX]: {
      target: VITE_ADMIN_MOCK_API_URL,
      changeOrigin: true,
      rewrite: (p: string) => p.replace(VITE_ADMIN_MOCK_API_PREFIX, '')
    }
  }

  return {
    envDir: '../..',
    plugins: [
      ReactSWC(),
      AutoImport({
        dts: '@types/auto-imports.d.ts',
        include: [/\.[tj]sx?$/, /\.md$/],
        imports: ['react']
      }),
      Icons({
        autoInstall: true,
        compiler: 'jsx',
        jsx: 'react'
      }),
      TurboConsole()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('src', import.meta.url))
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
    },
    esbuild: {
      drop: mode === 'production' ? ['console', 'debugger'] : []
    },
    server: {
      host: true,
      port,
      strictPort: true,
      open: false,
      proxy
    },
    preview: {
      host: true,
      port,
      strictPort: true,
      open: false,
      proxy
    }
  }
})
