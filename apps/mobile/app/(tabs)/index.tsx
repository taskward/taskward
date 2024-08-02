import { router } from 'expo-router'
import { Image, TouchableOpacity, View } from 'react-native'

export default function HomeScreen() {
  const onPressImage = () => router.replace('/login')

  return (
    <View className="flex h-full items-center justify-center">
      <TouchableOpacity onPress={onPressImage}>
        <Image
          className="self-center"
          source={require('@/assets/images/doge.jpeg')}
          width={100}
          height={100}
        />
      </TouchableOpacity>
    </View>
  )
}
