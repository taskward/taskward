import { Link } from '@tanstack/react-router'

import { useSignupMutation } from '@/features/auth'

import Logo from './Logo'
import Title from './Title'

export function SignupArea() {
  const { mutate, isPending } = useSignupMutation()
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
              onFinish={mutate}
            >
              <Form.Item
                name="nickName"
                label="昵称"
                rules={[{ required: true, message: '请输入昵称' }]}
              >
                <Input placeholder="请输入昵称" />
              </Form.Item>

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
                <Input.Password placeholder="请输入密码" />
              </Form.Item>

              <Form.Item>
                <Button
                  className="mt-2 w-full"
                  type="primary"
                  htmlType="submit"
                  disabled={isPending}
                >
                  注册
                </Button>
              </Form.Item>

              <Divider className="my-4" />

              <Flex
                className="text-xs"
                justify="center"
              >
                <span>已有账号？</span>
                <Link to="/login">登录</Link>
              </Flex>
            </Form>
          </ConfigProvider>
        </Flex>
      </Card>
    </Space>
  )
}
