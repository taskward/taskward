import { Link } from '@tanstack/react-router'

import { useLoginMutation } from '@/features/auth'

import Header from './Header'
import Logo from './Logo'

export function LoginArea() {
  const themeStore = useThemeStore()

  const { mutate, isPending } = useLoginMutation()
  const { loginDto } = useRememberStore()

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
          <Header />

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
              initialValues={{ ...loginDto, remember: true }}
              onFinish={mutate}
            >
              <Form.Item
                name="username"
                label="用户名"
                rules={[{ required: true, message: '请输入用户名' }]}
              >
                <Input
                  placeholder="请输入用户名"
                  allowClear
                />
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
                <Flex
                  justify="space-between"
                  align="center"
                >
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
                  loading={isPending}
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
