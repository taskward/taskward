import { appConfig } from '@taskward/config'

import { version } from '~build/package'

export default function Footer() {
  return (
    <Layout.Footer className="flex items-center justify-center space-x-2 border-y border-gray-300 !p-2 text-center text-sm shadow-sm dark:border-gray-950">
      <span>
        {appConfig.APP_NAME} - v{version}
      </span>
    </Layout.Footer>
  )
}
