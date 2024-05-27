import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
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
  )
}
