import { View } from 'react-native'
import React from 'react'
import { Text, useTheme } from 'react-native-paper'

export default function Warning() {

  const theme = useTheme()

  return (
    < View >
      <Text variant='bodySmall' style={{ color: theme.colors.error }}>
        Cancelamentos devem ser feitos até 48hrs antes, após, sujeito a multa de 20% do vcalor do serviço contratado.
      </Text>
    </View >
  )
}