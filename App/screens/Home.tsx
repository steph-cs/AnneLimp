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
      <Header logo navigation={navigation} />
      {/*main container */}
      <View style={HomeStyles.container}>
        <View>
          {/*title */}
          < View style={{ marginTop: 30 }} >
            <Text style={{ color: theme.colors.outline }} variant='headlineMedium'>Olá,
              <Text style={{ color: theme.colors.primary }} variant='headlineMedium'> {username}</Text>
            </Text>
          </View>
          {/*main card */}
          <View style={[HomeStyles.card, HomeStyles.mainCard]}>
            <View style={HomeStyles.cardContent}>
              <Text variant='titleMedium'>
                Precisando de uma limpeza em casa, colocar as coisas em ordem?
              </Text>
              <Text variant='titleLarge'>
                Chama a Anne!
              </Text>
              <Button mode='contained' style={{ marginVertical: 10 }} onPress={() => navigation.navigate('Booking')}>
                Agendar limpeza
              </Button>
              </View>
            <Image source={require('../../assets/imgs/anne.png')} style={HomeStyles.cardImg} />
          </View>
          {/*bubles */}
          <Image source={require('../../assets/imgs/bubles1.png')} style={HomeStyles.bubles1} />
          <Image source={require('../../assets/imgs/bubles2.png')} style={HomeStyles.bubles2} />
        </View>

        {/*service cards */}
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <TouchableOpacity>
              <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 10 }}>
                <Text variant='headlineMedium'>
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
  },
  card: {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: 'white',
    borderRadius: 20,
    marginVertical: 30,
    padding: 20,
  },
  mainCard: {
    height: 330,
    borderRadius: 20,
    width: '100%',
    marginHorizontal: 'auto',
    marginVertical: 30,
  },
  smCard: {
    height: 150,
    width: '60%',
    marginRight: 25
  },
  cardContent: {
    height: '55%',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  cardImg: {
    position: 'absolute',
    right: -35,
    width: 300,
    height: 330,
  },
  bubles1: {
    position: 'absolute',
    left: -20,
    bottom: 0,
    width: 120,
    height: 160,
  },
  bubles2: {
    position: 'absolute',
    right: -20,
    top: 40,
    width: 70,
    height: 140,
  }
})