import { Link } from '@tanstack/react-router'
import { AuthUtils } from '@taskward/utils'
import { useTranslation } from 'react-i18next'

import { type LoginFormValues, useLoginMutation } from '@/features/auth'

import Header from './Header'
import Logo from './Logo'

export function LoginArea() {
  const themeStore = useThemeStore()
  const { t, i18n } = useTranslation('AUTH')
  const [form] = Form.useForm<LoginFormValues>()

  const { mutate, isPending } = useLoginMutation()

  useEffect(() => {
    try {
      const rememberedAccount = JSON.parse(AuthUtils.getRememberedAccount() ?? '')
      if (rememberedAccount) {
        form.setFieldsValue({ ...rememberedAccount, remember: true })
      }
    } catch {
      //
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Space
      className="w-[400px] select-none"
      direction="vertical"
      size="middle"
    >
      <Logo />

      <Button
        onClick={() => {
          i18n.changeLanguage(i18n.language === 'en-US' ? 'zh-CN' : 'en-US')
        }}
      />

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
              form={form}
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
                  {t('LOGIN')}
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
                gap={4}
              >
                <span>需要账号？</span>
                <Link to="/signup">{t('SIGNUP')}</Link>
              </Flex>
            </Form>
          </ConfigProvider>
        </Flex>
      </Card>
    </Space>
  )
}
