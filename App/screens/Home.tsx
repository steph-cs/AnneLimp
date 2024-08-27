import React, { useEffect, useState } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Button, Icon, Text, useTheme } from 'react-native-paper'
import Header from '../components/Header'
import { styles } from './style'
import ServiceCard from '../components/ServiceCard'
import { ScrollView } from 'react-native-gesture-handler'
import { TouchableOpacity } from '@gorhom/bottom-sheet'
import MainCard from '../components/MainCard'

export default function Home({ navigation }) {

  const theme = useTheme()
  const username = "Stephanie"

  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  const getServicos = async () => {
    fetch('https://annelimp-api.onrender.com/servicos')
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
        <View style={{marginBottom: 25}}>
          {/*title */}
          < View style={{ marginTop: 30 }} >
            <Text style={{ color: theme.colors.outline }} variant='headlineMedium'>Olá,
              <Text style={{ color: theme.colors.primary }} variant='headlineMedium'> {username}</Text>
            </Text>
          </View>
          {/*main card */}
          <MainCard navigation={navigation}/>
        </View>
        {/*service cards */}
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
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

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {loading ? <Text>Loading...</Text> : null}
            {services.map((service, index) => <ServiceCard key={index} service={service} />)}
          </ScrollView >


        </View>
      </View>
    </View >
  )
}

const HomeStyles = StyleSheet.create({
  container: {
    width: '90%',
    marginHorizontal: 'auto',
    justifyContent: 'center',
  }
})