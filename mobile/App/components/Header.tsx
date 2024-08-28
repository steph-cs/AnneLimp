import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import { IconButton, Text } from 'react-native-paper'
import { LightTheme } from '../../assets/theme/LightTheme'

const styles = StyleSheet.create({
  logo: {
    margin: 10,
    width: 48,
    height: 55
  },
})

type HeaderProps = {
  logo?: boolean
}

export default function Header(props: HeaderProps) {
  const { logo } = props
  const hasNotification = true

  return (
    < View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 45, paddingHorizontal: 10 }}>

      {/* logo */}
      {logo && <Image source={require('../../assets/logo/logo-sm.png')} style={styles.logo} />}

      {/* notificacao */}
      {
        hasNotification ?
          <View
            style={{
              backgroundColor: '#F2F6F7',
              borderRadius: 50,
              width: 50,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Text style={{
              backgroundColor: '#0c404d',
              borderRadius: 50,
              width: 10,
              height: 10,
              position: 'absolute',
              top: 0,
              right: 5
            }}> </Text>
            <IconButton
              iconColor={LightTheme.colors.black}
              icon={'bell-outline'}
              size={32}
            />
          </View>

          :
          <IconButton style={{ marginLeft: 'auto' }} icon={'bell-outline'} size={32} />
      }

    </View >

  )
}