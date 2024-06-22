import './globals.scss'

import { AntdRegistry } from '@ant-design/nextjs-registry'
import { appConfig } from '@taskward/config'
import clsx from 'clsx'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import type { PropsWithChildren } from 'react'

import { AntdProvider } from '@/shared/providers'

const nunito = Nunito({ subsets: ['latin'], display: 'auto' })

export const metadata: Metadata = {
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
}

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon.ico"
          sizes="any"
        />
      </head>
      <body
        className={clsx(
          nunito.className,
          'max-w-screen flex min-h-screen flex-col overflow-x-hidden'
        )}
      >
        <AntdRegistry>
          <AntdProvider>{children}</AntdProvider>
        </AntdRegistry>
      </body>
    </html>
  )
}
