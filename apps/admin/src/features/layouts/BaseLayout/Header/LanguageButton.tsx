export default function LanguageButton() {
  const { menu } = useLanguageMenu()

  return (
    <Dropdown
      menu={menu}
      placement="bottom"
    >
      <div className="cursor-pointer text-lg">
        <LucideLanguages />
      </div>
    </Dropdown>
  )
}
