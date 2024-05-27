import { router } from 'expo-router'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'

export default function HomeScreen() {
  const onPressImage = () => router.replace('/login')

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressImage}>
        <Image
          source={require('@/assets/images/doge.jpeg')}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  image: {
    alignSelf: 'center',
    width: 100,
    height: 100
  }
})
