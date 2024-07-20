import { StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

export default function BackgroundGradient() {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={['#ffffff', '#62919F']}
      style={BackgroundGradientStyles.background}
    />
  )
}

const BackgroundGradientStyles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    zIndex: -1
  },
})