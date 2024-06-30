import { useMutation } from '@tanstack/react-query'
import { Link, useNavigate } from '@tanstack/react-router'
import type { R, Tokens } from '@taskward/axios'
import axios from 'axios'

interface LoginDto {
  username: string
  password: string
}
export function LoginArea() {
  const { message } = App.useApp()
  const navigate = useNavigate()
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (loginDto: LoginDto) => axios.post<R<Tokens>>('/base-api/auth/login', loginDto)
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
    <Flex
      className="grow"
      align="center"
      justify="center"
    >
      <div className="w-[450px] p-4">
        <Card>
          <Flex
            vertical
            align="center"
            gap={8}
          >
            <div className="text-xl">登录</div>
            <div>👏 欢迎回来！</div>
            <Form
              className="w-full"
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                className="mb-2"
                name="username"
                label="用户名"
                rules={[{ required: true, message: '请输入用户名！' }]}
              >
                <Input placeholder="请输入用户名" />
              </Form.Item>
              <Form.Item
                className="mb-2"
                name="password"
                label="密码"
                rules={[{ required: true, message: '请输入密码！' }]}
              >
                <Input
                  type="password"
                  placeholder="请输入密码"
                />
              </Form.Item>
              <Form.Item className="mb-2">
                <Flex justify="space-between">
                  <Form.Item
                    name="remember"
                    valuePropName="checked"
                    noStyle
                  >
                    <Checkbox>记住密码</Checkbox>
                  </Form.Item>
                  <Link
                    className="self"
                    to="/forgot-password"
                  >
                    忘记密码
                  </Link>
                </Flex>
              </Form.Item>
              <Form.Item className="mb-3">
                <Button
                  className="w-full"
                  type="primary"
                  htmlType="submit"
                  disabled={isPending}
                >
                  登录
                </Button>
              </Form.Item>

              <Divider
                className="my-2"
                plain
              >
                第三方登录
              </Divider>

              <Flex
                className="w-full"
                gap={8}
              >
                <Button className="w-1/2">GitHub 登录</Button>
                <Button className="w-1/2">Google 登录</Button>
              </Flex>

              <Flex>
                <div>需要账号？</div>
                <Link to="/signup">注册</Link>
              </Flex>
            </Form>
          </Flex>
        </Card>
      </div>
    </Flex>
  )
}
