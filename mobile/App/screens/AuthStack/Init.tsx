import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import { styles } from '../style'
import { Button, Text } from 'react-native-paper'
import { LightTheme } from '../../../assets/theme/LightTheme'

export default function Init({ navigation }) {

  return (
    <View style={[styles.screen, InitStyles.container]}>
      <View style={InitStyles.logoContainer}>
        {/* logo */}
        <View style={[InitStyles.logo]}>
          <Image source={require('../../../assets/logo/logo-lg.png')} style={InitStyles.logoImg} />
        </View>
      </View>
      {/* text */}
      <View style={{
        gap: 20, justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text variant='displayMedium' style={{ color: LightTheme.colors.primary }}>AnneLimp</Text>
        <Text variant='titleMedium'>A limpeza que seu lar merece</Text>
      </View>
      {/* btn */}
      <Button style={{ width: '50%', marginBottom: 50 }} mode='contained' onPress={() => { navigation.navigate('Login') }}>Entrar</Button>
    </View>
  )
}

const InitStyles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '50%',
    backgroundColor: LightTheme.colors.primary,
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
  },
  logo: {
    position: 'absolute',
    bottom: -70,
    backgroundColor: '#FBFBFB',
    borderRadius: 100,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoImg: {
    width: 100,
    height: 115
  }
})