import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Button, Text } from 'react-native-paper'
import { styles } from './style'
import LogoLg from '../components/LogoLg'
import Warning from '../fragments/Warning'

export default function Review({ navigation }) {
  return (
    <View style={styles.screen}>
      <LogoLg />
      {/*card review */}
      <View style={ReviewStyles.card}>
        <Text variant='headlineSmall' style={{ fontWeight: 'bold', margin: 'auto' }}>Agendamento confirmado!</Text>
        {/*booking info */}
        <View>
          {/*service */}
          <View style={{}}>
            <Text variant='titleLarge'>Limpeza simples</Text>
            <Text variant='titleMedium'>R$160 - 8hrs</Text>
          </View>
          {/*day/hour */}
          <View style={{ flexDirection: 'row', gap: 20 }}>
            <Text variant='titleMedium'>Dom 20 Abril</Text>
            <Text variant='titleMedium'>11:30</Text>
          </View>
        </View>

        {/*aviso */}
        <Warning />
        <Button mode='contained' onPress={() => navigation.navigate('Home')}>Voltar</Button>
      </View>

    </View>
  )
}

const ReviewStyles = StyleSheet.create({
  card: {
    width: '95%',
    marginHorizontal: 'auto',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 25,
    paddingVertical: 30,
    gap: 25
  },
})