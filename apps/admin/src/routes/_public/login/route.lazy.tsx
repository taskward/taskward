import { useMutation } from '@tanstack/react-query'
import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import axios from 'axios'

export const Route = createLazyFileRoute('/_public/login')({
  component: Page
})

interface LoginDto {
  username: string
  password: string
}

interface R<T> {
  msg: string
  data: T
}

interface TokensVo {
  accessToken: string
  refreshToken: string
}

function Page() {
  const { message } = App.useApp()
  const navigate = useNavigate()
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (loginDto: LoginDto) => axios.post<R<TokensVo>>('/base-api/auth/login', loginDto)
  })

  const onFinish = async (values: LoginDto) => {
    try {
      const { data } = (await mutateAsync(values)).data
      const { accessToken, refreshToken } = data
      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', refreshToken)
      navigate({
        to: '/',
        replace: true
      })
    } catch (e) {
      const msgs = (e as any).response.data.msg
      if (Array.isArray(msgs)) {
        msgs.map((m) => message.error(m))
      } else {
        message.error(msgs)
      }
    }
  }

  return (
    <div className="absolute inset-0 m-auto h-fit w-[500px]">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            noStyle
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a
            className="login-form-forgot"
            href=""
          >
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            disabled={isPending}
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  )
}
