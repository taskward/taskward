export interface AppConfig {
  /**
   * The name of the application.
   * @default 'Taskward'
   */
  appName: string
  /**
   * The description of the application.
   * @default '✅ A minimalist Todo&Tasks web application.'
   */
  description: string
  /**
   * The URL of the application's GitHub repository.
   * @default 'https://github.com/taskward'
   */
  githubURL: string
  /**
   * The URL of the application's website.
   * @default 'https://taskward.bit-ocean.studio'
   */
  websiteURL: string
}
