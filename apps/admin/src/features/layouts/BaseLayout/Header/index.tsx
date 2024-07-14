import FullscreenButton from './FullscreenButton'
import LanguageButton from './LanguageButton'
import MenuVisibilityToggle from './MenuVisibilityToggle'
import ThemeToggle from './ThemeToggle'
import UserAvatar from './UserAvatar'

export default function Header() {
  return (
    <Layout.Header
      className="z-50 flex items-center justify-between border-y border-gray-300 p-2 shadow-sm sm:p-4 dark:border-gray-950"
      style={{
        padding: '0 15px',
        height: '56px'
      }}
    >
      <Flex
        align="center"
        justify="start"
        gap={16}
      >
        <MenuVisibilityToggle />
      </Flex>

      <Flex
        align="center"
        gap={8}
      >
        <Flex
          align="center"
          justify="start"
          gap={16}
        >
          <FullscreenButton />
          <LanguageButton />
          <ThemeToggle />
        </Flex>

        <Divider type="vertical" />

        <UserAvatar />
      </Flex>
    </Layout.Header>
  )
}
