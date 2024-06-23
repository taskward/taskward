import './globals.scss'

import { AntdRegistry } from '@ant-design/nextjs-registry'
import clsx from 'clsx'
import type { PropsWithChildren } from 'react'

import { nunito } from '@/features/fonts'
import { SEO } from '@/features/seo'
import { AntdProvider } from '@/shared/providers'

export const metadata = SEO()

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      className={clsx(nunito.className, 'font-sans')}
    >
      <head>
        <link
          rel="icon"
          href="/favicon.ico"
          sizes="any"
        />
      </head>
      <body>
        <AntdRegistry>
          <AntdProvider>{children}</AntdProvider>
        </AntdRegistry>
      </body>
    </html>
  )
}
