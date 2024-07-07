declare module '~build/git' {
  export const github: string | null

  export const branch: string

  export const sha: string

  export const abbreviatedSha: string

  export const tag: string | null

  export const tags: string[]

  export const lastTag: string | null

  export const committer: string

  export const committerEmail: string

  export const committerDate: string

  export const author: string

  export const authorEmail: string

  export const authorDate: string

  export const commitMessage: string

  export const isClean: boolean
}

declare module '~build/package' {
  export const name: string

  export const version: string

  export const description: string

  export const keywords: string[]

  export const license: string

  export const author: string

  export const dependencies: Record<string, string>

  export const devDependencies: Record<string, string>
}

declare module '~build/meta' {
  export const message: string
}
