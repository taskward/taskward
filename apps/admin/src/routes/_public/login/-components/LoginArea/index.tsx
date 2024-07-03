import { useMutation } from '@tanstack/react-query'
import { Link, useNavigate, useSearch } from '@tanstack/react-router'
import type { Tokens } from '@taskward/axios'
import { AuthUtils } from '@taskward/utils'

import Logo from './Logo'
import Title from './Title'

interface LoginDto {
  username: string
  password: string
}

export function LoginArea() {
  const themeStore = useThemeStore()
  const navigate = useNavigate()
  const search = useSearch({
    from: '/_public/login'
  })
  const { mutate, isPending } = useMutation({
    mutationFn: (loginDto: LoginDto) => httpClient.post<Tokens>('/auth/login', loginDto),
    onSuccess: async (data) => {
      const { accessToken, refreshToken } = data
      AuthUtils.setAccessToken(accessToken)
      AuthUtils.setRefreshToken(refreshToken)
      navigate({
        to: search ? search.redirect : '/',
        replace: true
      })
    }
  })

  const onFinish = (values: LoginDto) => {
    mutate(values)
  }

  return (
    <Space
      className="w-[400px] select-none"
      direction="vertical"
      size="middle"
    >
      <Logo />

      <Card>
        <Flex
          vertical
          align="center"
          gap={8}
        >
          <Title />

          <ConfigProvider
            theme={{
              components: {
                Form: {
                  itemMarginBottom: 8,
                  verticalLabelPadding: '0 0 2px'
                }
              }
            }}
          >
            <Form
              className="w-full"
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                label="用户名"
                rules={[{ required: true, message: '请输入用户名' }]}
              >
                <Input placeholder="请输入用户名" />
              </Form.Item>
              <Form.Item
                name="password"
                label="密码"
                rules={[{ required: true, message: '请输入密码' }]}
              >
                <Input.Password
                  placeholder="请输入密码"
                  autoComplete="password"
                />
              </Form.Item>
              <Form.Item>
                <Flex justify="space-between">
                  <Form.Item
                    name="remember"
                    valuePropName="checked"
                    noStyle
                  >
                    <Checkbox>记住密码</Checkbox>
                  </Form.Item>
                  <Link to="/forgot-password">忘记密码</Link>
                </Flex>
              </Form.Item>
              <Form.Item>
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
                className="text-xs"
                plain
              >
                第三方登录
              </Divider>

              <Flex
                className="mb-4 w-full"
                vertical
                gap={8}
              >
                <Button
                  className="bg-[#595d5f] text-white dark:hover:border-transparent"
                  icon={<LogosGithubIcon />}
                  onClick={themeStore.toggleTheme}
                >
                  GitHub 登录
                </Button>
                <Button icon={<LogosGoogleIcon />}>Google 登录</Button>
              </Flex>

              <Divider className="mb-4 mt-0" />

              <Flex
                className="text-xs"
                justify="center"
              >
                <span>需要账号？</span>
                <Link to="/signup">注册</Link>
              </Flex>
            </Form>
          </ConfigProvider>
        </Flex>
      </Card>
    </Space>
  )
}
