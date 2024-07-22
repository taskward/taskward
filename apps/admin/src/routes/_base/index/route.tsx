import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_base/')({
  staticData: {
    title: 'Dashboard',
    icon: <LucideGauge />
  }
})
