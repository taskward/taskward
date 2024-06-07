export class EnvUndefinedError extends Error {
  constructor(envName: string) {
    super(`${envName} is undefined, please provide it in the .env files.`)
    this.name = this.constructor.name
    Object.setPrototypeOf(this, new.target.prototype)
  }
}
