import React, { useEffect, useState } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Button, Icon, Text, useTheme } from 'react-native-paper'
import Header from '../components/Header'
import { styles } from './style'
import ServiceCard, { ServiceModel } from '../components/ServiceCard'
import { TouchableOpacity } from '@gorhom/bottom-sheet'
import MainCard from '../components/MainCard'
import Loading from '../fragments/Loading'

export default function Home({ navigation }) {

  const theme = useTheme()
  const username = "Stephanie"

  const [services, setServices] = useState<ServiceModel[]>([])
  const [loading, setLoading] = useState(true)

  const getServicos = async () => {
    fetch('https://annelimp.onrender.com/servicos')
      .then((response) => response.json())
      .then((json) => { setServices(json) })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    getServicos()
  })

  return (
    <View style={styles.screen}>
      {/*header */}
      <Header logo />
      {/*main container */}
      <View style={HomeStyles.container}>
        <View style={{ marginBottom: 25, width: '90%', margin: 'auto' }}>
          {/*title */}
          < View style={{ marginTop: 30 }} >
            <Text style={{ color: theme.colors.outline }} variant='headlineMedium'>Olá,
              <Text style={{ color: theme.colors.primary }} variant='headlineMedium'> {username}</Text>
            </Text>
          </View>
          {/*main card */}
          <MainCard navigation={navigation} />
        </View>
        {/*service cards */}
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', margin: 'auto' }}>
            <TouchableOpacity>
              <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 10 }}>
                <Text variant='headlineSmall'>
                  Serviços
                </Text>
                <Icon source="chevron-right" size={32} />
              </View>
            </TouchableOpacity>
            <Button mode='text' >Ver todos</Button>
          </View>

          {/*cards */}
          {loading ?
            <View style={{ height: 200, justifyContent: 'center', alignContent: 'center' }}>
              <Loading />
            </View> :
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {services.map((service, index) => <ServiceCard navigation={navigation} key={index} service={service} />)}
            </ScrollView >
          }
        </View>
      </View>
    </View >
  )
}

const HomeStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  }
})