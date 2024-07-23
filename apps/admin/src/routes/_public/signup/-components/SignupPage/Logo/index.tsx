import logo from '@/assets/images/logo/square.png'

export default function Logo() {
  return (
    <Flex
      className="text-3xl"
      align="center"
      justify="center"
      gap={12}
    >
      <img
        className="rounded-md shadow-md"
        src={logo}
        alt="Logo"
        width={48}
        height={48}
      />
      <span>{appConfig.APP_NAME}</span>
    </Flex>
  )
}
