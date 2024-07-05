import type { FormRule } from 'antd'

export const confirmPasswordRule: FormRule = (form) => ({
  validator(_, value) {
    if (!value || form.getFieldValue('password') === value) {
      return Promise.resolve()
    }
    return Promise.reject(new Error('两次输入的密码不一致'))
  }
})
