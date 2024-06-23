import { appConfig } from '@taskward/config'
import type { Metadata } from 'next'

export const SEO = (): Metadata => ({
  title: {
    template: `%s | ${appConfig.APP_NAME}`,
    default: appConfig.APP_NAME
  },
  description: appConfig.DESCRIPTION,
  generator: '',
  applicationName: appConfig.APP_NAME,
  openGraph: {
    title: appConfig.APP_NAME,
    description: appConfig.DESCRIPTION,
    url: new URL('https://taskward.com'),
    images: [{ url: '/images/logo/arc.png', alt: appConfig.APP_NAME }],
    siteName: appConfig.APP_NAME
  },
  keywords: [],
  authors: [{ name: 'Bruce Song' }],
  metadataBase: new URL('https://taskward.com'),
  creator: 'Bruce Song',
  publisher: 'Bruce Song'
})
