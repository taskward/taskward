export interface AppConfig {
  /**
   * The name of the application.
   * @default 'Taskward'
   */
  APP_NAME: string
  /**
   * The description of the application.
   * @default '✅ A minimalist Todo&Tasks web application.'
   */
  DESCRIPTION: string
  /**
   * The URL of the application's GitHub repository.
   * @default 'https://github.com/taskward'
   */
  GITHUB_URL: string
  /**
   * The URL of the application's website.
   * @default 'https://taskward.bit-ocean.org'
   */
  WEBSITE_URL: string
  /**
   * The URL of the application's documentation.
   * @default 'https://taskward-docs.bit-ocean.org'
   */
  DOCS_URL: string
}
