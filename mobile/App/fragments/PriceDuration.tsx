import { View,  StyleSheet } from 'react-native'
import React from 'react'
import { LightTheme } from '../../assets/theme/LightTheme'
import { Text } from 'react-native-paper'

type PriceDurationProps = {
  price: number,
  duration: number
}

export default function PriceDuration(props: PriceDurationProps) {
  const {price, duration} = props

  return (
    <View style={PriceDurationStyles.container}>
      <Text variant='titleMedium'>R${price} • {duration}hrs</Text>
    </View>
  )
}

const PriceDurationStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderWidth: 2,
    borderColor: LightTheme.colors.secondary,
    borderRadius: 5,
  }
})