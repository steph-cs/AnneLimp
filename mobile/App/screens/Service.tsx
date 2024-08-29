import { View, Image, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ServiceModel } from '../components/ServiceCard'
import { styles } from './style'
import { Button, IconButton, Text } from 'react-native-paper'
import PriceDuration from '../fragments/PriceDuration'
import { LightTheme } from '../../assets/theme/LightTheme'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'
import Loading from '../fragments/Loading'

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Service'>;

export default function Service({ route }) {
  const [service, setService] = useState<ServiceModel>()
  const [loading, setLoading] = useState(true)
  const { serviceId } = route.params
  const [imgPath, setImgPath] = useState()
  const navigation = useNavigation<NavigationProp>()

  const getServicos = async () => {
    fetch(`https://annelimp-api.onrender.com/servicos/${serviceId}`)
      .then((response) => response.json())
      .then((json) => {
        setService(json)
        setImgPath(json.tipo == 'simples' ? require('../../assets/imgs/services/service1.png') : require('../../assets/imgs/services/service2.png'))
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    getServicos()
  })

  return (
    <>
      {loading ?
        <View style={[styles.screen, { justifyContent: 'center', alignContent: 'center' }]}><Loading /></View> :
        <View style={[styles.screen, { gap: 20 }]}>
          <View style={{ height: '35%' }}>
            <IconButton style={ServiceStyles.backBtn}
              mode='contained'
              icon={'chevron-left'}
              size={32}
              containerColor={LightTheme.colors.white}
              iconColor={LightTheme.colors.black}
              onPress={() => { navigation.goBack() }}
            />
            <Image source={imgPath} style={ServiceStyles.mainImg} />
          </View>

          <View style={ServiceStyles.content}>
            <View style={{ gap: 15 }}>
              {/* descricao */}
              <View style={{ gap: 15 }}>
                <View>
                  <Text variant='headlineSmall'>Limpeza {service.tipo}</Text>
                  <Text variant='bodyLarge'>{service.descricao.titulo}</Text>
                </View>
                <Text variant='bodyLarge'>{service.descricao.descricao}</Text>
              </View>
              {/* atividades realizadas */}
              <View>
                <Text variant='titleMedium'>O que está incluído:</Text>
                <FlatList data={service.descricao.atividades}
                  renderItem={({ item, index }) => {
                    return (
                      <Text variant='bodyLarge' key={index}>{`\u2022 ${item}`}</Text>
                    );
                  }}
                />
              </View>
              <Text variant='bodyLarge'>A realização dos serviços depende  do tempo escolhido e suas prefências</Text>
              {/* valores */}
              <View style={{ gap: 15 }}>
                <Text variant='titleMedium'>Valores</Text>
                <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
                  {service.precoDuracao.map((priceDuration, index) => <PriceDuration key={index} price={priceDuration.preco} duration={priceDuration.duracao} />)}
                </View>
              </View>
            </View>
            <Button mode='contained' onPress={() => navigation.navigate('Booking')}>Agendar limpeza</Button>
          </View>
        </View>}
    </>
  )
}

const ServiceStyles = StyleSheet.create({
  mainImg: {
    width: 'auto',
    height: '100%',
    borderRadius: 30
  },
  backBtn: {
    position: 'absolute',
    top: 25,
    left: 10,
    zIndex: 10
  },
  content: {
    height: '60%',
    paddingHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
})