import { commitMessage, committer, committerDate } from '~build/git'

// eslint-disable-next-line no-console
console.log(
  `%c${`提交者：${committer}`}\n${`提交信息：${commitMessage}`}\n${`提交时间：${DateUtils.formatTime(committerDate)}`}`,
  'color: #fff; background-color: #007acc; padding: 2px 4px; border-radius: 2px;'
)
