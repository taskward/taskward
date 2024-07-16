import { teamConfig } from '@bit-ocean/config'
import { appConfig } from '@taskward/config'
import { BrowserUtils } from '@taskward/utils'
import { Image } from 'antd'

import logo from '@/assets/images/logo/bit_ocean.png'
import { version } from '~build/package'

export default function Footer() {
  return (
    <Layout.Footer className="border-t border-gray-300 p-0 shadow-sm dark:border-gray-950">
      <div className="flex h-10 items-center justify-center space-x-2 text-sm">
        <span>
          {appConfig.APP_NAME} - v{version}
        </span>
        <Image
          className="-mb-2 cursor-pointer pb-2 transition-all hover:-translate-y-1 hover:scale-110 active:-translate-y-0 active:scale-105 active:opacity-75"
          src={logo}
          alt="Logo"
          loading="lazy"
          width={20}
          preview={false}
          draggable={false}
          onClick={() => BrowserUtils.openNewWindow(teamConfig.GITHUB_URL)}
        />
        <span>Powered by {teamConfig.TEAM_NAME}</span>
        <span>{`© ${new Date().getFullYear()}`}</span>
      </div>
    </Layout.Footer>
  )
}
