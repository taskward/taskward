import { teamConfig } from '@bit-ocean/config'

export default function GlobalLoading() {
  return (
    <div className="absolute inset-0 m-auto flex flex-col items-center justify-center">
      <Spin size="large" />
      <span className="mb-1 mt-4 text-xl">{appConfig.APP_NAME}</span>
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
        Powered by {teamConfig.TEAM_NAME}
      </div>
    </div>
  )
}
