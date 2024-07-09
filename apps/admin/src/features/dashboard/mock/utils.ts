export const generateRandomDataValues = (length: number = 6, range: [number, number] = [0, 100]) =>
  Array.from({ length }, () => Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0])

export const getLastWeek = (): string[] => {
  const today = new Date()
  const lastTwoWeeks = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today)
    date.setDate(today.getDate() - i)
    return date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' })
  })
  return lastTwoWeeks.reverse()
}
