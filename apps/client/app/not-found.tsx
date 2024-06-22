import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container absolute inset-0 m-auto flex size-fit flex-col items-center space-y-6">
      <span className="text-2xl font-bold sm:text-4xl">404 Not Found</span>
      <span className="text-base font-medium sm:text-xl">
        Oops! The page you requested could not be found.
      </span>
      <Button>
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  )
}
