import './globals.scss'

import { appConfig } from '@taskward/config'
import clsx from 'clsx'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import type { PropsWithChildren } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: appConfig.APP_NAME,
  description: appConfig.DESCRIPTION
}

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/images/logo/arc.png"
          sizes="any"
        />
      </head>
      <body
        className={clsx(
          inter.className,
          'max-w-screen flex min-h-screen flex-col overflow-x-hidden'
        )}
      >
        {children}
      </body>
    </html>
  )
}
