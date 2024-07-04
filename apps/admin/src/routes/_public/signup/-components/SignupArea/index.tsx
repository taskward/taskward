import { Link } from '@tanstack/react-router'
import type { FormProps } from 'antd'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

import { type SignupFormValues, useSignupMutation } from '@/features/auth'
import { confirmPasswordRule } from '@/features/form'

import Logo from './Logo'
import Title from './Title'

dayjs.extend(customParseFormat)

export function SignupArea() {
  const { mutate, isPending } = useSignupMutation()

  const onFinish: FormProps<SignupFormValues>['onFinish'] = (values) =>
    mutate({ ...values, birthDate: values.birthDate.format('YYYY-MM-DD') })

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
              onFinish={onFinish}
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
                <Input.Password
                  placeholder="请输入密码"
                  autoComplete="password"
                />
              </Form.Item>

              <Form.Item
                name="confirmPassword"
                label="确认密码"
                dependencies={['password']}
                rules={[{ required: true, message: '请输入确认密码' }, confirmPasswordRule]}
                hasFeedback
              >
                <Input.Password
                  placeholder="请输入确认密码"
                  autoComplete="confirm-password"
                />
              </Form.Item>

              <Form.Item
                name="birthDate"
                label="出生日期"
              >
                <DatePicker
                  className="w-full"
                  defaultPickerValue={dayjs('2000-01-01')}
                  minDate={dayjs('1900-01-01')}
                  maxDate={dayjs()}
                />
              </Form.Item>

              <Form.Item
                name="email"
                label="邮箱"
                rules={[{ type: 'email', message: '请输入正确的邮箱' }]}
              >
                <Input placeholder="请输入邮箱" />
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
