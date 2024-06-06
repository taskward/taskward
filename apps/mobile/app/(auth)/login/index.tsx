import { appConfig } from '@taskward/config'
import { router } from 'expo-router'
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'

import { useAuthStore } from '@/store'

export default function LoginScreen() {
  const authStore = useAuthStore()

  const handleLogin = async () => {
    await new Promise((resolve) => {
      setTimeout(() => {
        authStore.setAccessToken('fake_token')
        resolve(true)
      }, 1000)
    })
    router.replace('/')
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/logo_dev.png')}
        style={styles.image}
      />
      <Text style={styles.title}>{appConfig.APP_NAME}</Text>
      <TextInput placeholder="请输入用户名" />
      <TextInput placeholder="请输入密码" />
      <Button
        title="登录"
        onPress={handleLogin}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12
  },
  title: {
    fontSize: 24
  },
  image: {
    alignSelf: 'center',
    width: 120,
    height: 120,
    borderRadius: 24
  }
})
