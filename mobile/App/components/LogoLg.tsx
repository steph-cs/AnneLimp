import { View, Image } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper'
import { styles } from '../screens/style'

export default function LogoLg() {
  return (
    <View style={{alignItems: 'center', width: '100%', gap: 10, marginVertical: 50}}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
        <Image source={require('../../assets/logo/logo-sm.png')} style={{width: 50, height: 58}} />
        <Text style={{ color: '#62919F' }} variant='headlineLarge'>AnneLimp</Text>
      </View>
      <Text variant='titleMedium'>A limpeza que seu lar merece</Text>
    </View>
  )
}