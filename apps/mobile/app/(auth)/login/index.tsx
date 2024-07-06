import { appConfig } from '@taskward/config'
import { router } from 'expo-router'
import { useTranslation } from 'react-i18next'
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { useAuthStore } from '@/store'

export default function LoginScreen() {
  const authStore = useAuthStore()

  const { t, i18n } = useTranslation('AUTH')

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
      <TouchableOpacity onPress={handleLogin}>
        <Text>{t('LOGIN')}</Text>
      </TouchableOpacity>
      <Button
        title="切换语言"
        onPress={() => {
          i18n.changeLanguage(i18n.language === 'en_US' ? 'zh_CN' : 'en_US')
        }}
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
