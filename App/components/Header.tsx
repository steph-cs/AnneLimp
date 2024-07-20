import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import { IconButton } from 'react-native-paper'

const styles = StyleSheet.create({
  logo: {
    margin: 10,
    width: 48,
    height: 55
  },
})

type HeaderProps = {
  logo?: boolean
  navigation: any
}

export default function Header(props: HeaderProps) {
  const { logo, navigation } = props
  return (
    < View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 45 }}>
      {logo && <Image source={require('../../assets/logo/logo-sm.png')} style={styles.logo} />}
      <IconButton style={{marginLeft: 'auto'}} icon={'menu'} size={36} onPress={() => navigation.openDrawer()} />
    </View >

  )
}