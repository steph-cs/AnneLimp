import React from 'react'
import { LightTheme } from '../../assets/theme/LightTheme'
import { ActivityIndicator } from 'react-native-paper'

export default function Loading() {
  return (
    <ActivityIndicator animating={true} color={LightTheme.colors.primary} size={'large'} />
  )
}