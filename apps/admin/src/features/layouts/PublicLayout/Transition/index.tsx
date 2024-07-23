import type { PropsWithChildren } from 'react'

export default function Transition(props: PropsWithChildren) {
  const { children } = props

  const { location } = useRouterState()

  return (
    <motion.div
      className="relative flex size-full items-center justify-center"
      key={location.pathname}
      initial={{
        opacity: 0,
        y: -30
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      exit={{
        opacity: 0,
        y: -30
      }}
      transition={{
        type: 'spring',
        damping: 10,
        stiffness: 100
      }}
    >
      {children}
    </motion.div>
  )
}
