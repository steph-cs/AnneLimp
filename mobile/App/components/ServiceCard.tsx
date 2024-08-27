import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Button, Text } from 'react-native-paper'

type tipoServico = 'simples' | 'pesada'

interface ServiceModel {
  tipo: tipoServico
  descricao: {
    titulo: string
    descricao: string
    atividades: string[]
  }
  precoDuracao: {
    preco: number
    duracao: number
  }
}

type ServiceCardProps = {
  service: ServiceModel
}

export default function ServiceCard(props: ServiceCardProps) {

  const { service } = props

  return (
    <View style={[ServiceCardStyles.card, ServiceCardStyles.cardShadow]}>
      <View style= {{gap: 10}}>
        <Text variant='headlineSmall' > Limpeza {service.tipo}</Text>
        <Text variant='bodyLarge'> {service.descricao.titulo}</Text>
      </View>
      <Button style={ServiceCardStyles.cardBtn} mode='outlined' icon={'chevron-right'} contentStyle={{ flexDirection: 'row-reverse' }}>Saiba mais</Button>
    </View>
  )
}
const ServiceCardStyles = StyleSheet.create({
  card: {
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 25,
    gap: 14,
    marginHorizontal: 10,
    justifyContent: 'space-between',
    minHeight: 150,
    width: 320,
    marginVertical: 25,
  },
  cardShadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.20,
    shadowRadius: 5.62,
    elevation: 8
  },
  cardBtn: {
    width: 200

  }
})