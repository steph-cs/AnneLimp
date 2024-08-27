import { View, Image } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper'
import { styles } from '../screens/style'

export default function LogoLg() {
  return (
    <View>
      <View style={{ alignItems: 'center', marginBottom: 15 }}>
        <Image source={require('../../assets/logo/logo-lg.png')} style={styles.logo} />
        <Text style={{ color: '#62919F' }} variant='headlineLarge'>AnneLimp</Text>
      </View>
    </View>
  )
}