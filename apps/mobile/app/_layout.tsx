import '../global.css'

import { Stack } from 'expo-router'
import { I18nextProvider } from 'react-i18next'

import i18n from '@/shared/i18n'

export default function RootLayout() {
  return (
    <I18nextProvider i18n={i18n}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ title: '首页', headerShown: false }}
        />
        <Stack.Screen
          name="(auth)/login/index"
          options={{ title: '登录', headerShown: false }}
        />
      </Stack>
    </I18nextProvider>
  )
}
