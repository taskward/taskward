import { antdResolver } from '@bit-ocean/auto-import'
import AutoImport from 'unplugin-auto-import/webpack'
import TurboConsole from 'unplugin-turbo-console/webpack'

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(
      AutoImport({
        imports: [
          'react',
          {
            from: 'clsx',
            imports: [['default', 'clsx']]
          }
        ],
        resolvers: [antdResolver()],
        dts: '@types/auto-imports.d.ts'
      }),
      TurboConsole()
    )
    return config
  },
  experimental: {
    turbo: {
      resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json']
    }
  }
}
export default nextConfig
