import { Link } from '@tanstack/react-router'
import type { FormProps } from 'antd'
import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'

import { confirmPasswordRule } from '@/features/antd'
import { type SignupFormValues, useSignupMutation } from '@/features/auth'

import Header from './Header'
import Logo from './Logo'

export function SignupArea() {
  const { t } = useTranslation('AUTH')

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
              onFinish={onFinish}
            >
              <Form.Item
                name="nickName"
                label="昵称"
                rules={[{ required: true, message: '请输入昵称' }]}
              >
                <Input
                  placeholder="请输入昵称"
                  allowClear
                />
              </Form.Item>

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

              <Form.Item
                name="confirmPassword"
                label="确认密码"
                dependencies={['password']}
                rules={[{ required: true, message: '请输入确认密码' }, confirmPasswordRule]}
              >
                <Input.Password
                  placeholder="请输入确认密码"
                  autoComplete="confirm-password"
                />
              </Form.Item>

              <Form.Item
                name="email"
                label="邮箱"
                rules={[{ type: 'email', message: '请输入正确的邮箱' }]}
              >
                <Input
                  placeholder="请输入邮箱"
                  allowClear
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
                  allowClear
                />
              </Form.Item>

              <Form.Item>
                <Button
                  className="mt-2 w-full"
                  type="primary"
                  htmlType="submit"
                  loading={isPending}
                  disabled={isPending}
                >
                  {t('SIGNUP')}
                </Button>
              </Form.Item>

              <Divider className="my-4" />

              <Flex
                className="text-xs"
                justify="center"
                gap={4}
              >
                <span>{t('ALREADY.HAVE.ACCOUNT')}</span>
                <Link to="/login">{t('LOGIN')}</Link>
              </Flex>
            </Form>
          </ConfigProvider>
        </Flex>
      </Card>
    </Space>
  )
}
