export interface ErrorPageProps {
  title?: string
  subTitle?: string
  icon?: any
}

export default function ErrorPage(props: ErrorPageProps) {
  const { icon, title, subTitle } = props
  return (
    <div className="absolute inset-0 m-auto flex items-center justify-center">
      <Result
        icon={icon}
        title={title}
        subTitle={subTitle}
        extra={
          <Link to="/">
            <Button type="primary">返回</Button>
          </Link>
        }
      />
    </div>
  )
}
