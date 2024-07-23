export default function GitHubButton() {
  return (
    <Tooltip
      title="GitHub"
      placement="bottom"
    >
      <div
        className="cursor-pointer text-lg"
        onClick={() => BrowserUtils.openNewWindow(appConfig.GITHUB_URL)}
      >
        <LineMdGithubLoop />
      </div>
    </Tooltip>
  )
}
