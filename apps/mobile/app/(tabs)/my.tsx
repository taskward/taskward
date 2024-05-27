import { Button, Text, View } from 'react-native'

import { useAuthStore } from '@/store'

export default function MyScreen() {
  const authStore = useAuthStore()

  const handleLogout = () => authStore.setAccessToken('')

  return (
    <View>
      <Text>我的</Text>
      <Text>Token: {authStore.accessToken}</Text>
      <Button
        title="退出登录"
        onPress={handleLogout}
      />
    </View>
  )
}
