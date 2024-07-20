import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Button, Text, useTheme } from 'react-native-paper'
import Header from '../components/Header'
import { styles } from './style'
import BackgroundGradient from '../fragments/BackgroundGradient'

export default function Home({ navigation }) {

  const theme = useTheme()
  const username = "Stephanie"

  return (
    <View style={styles.screen}>
      {/*background */}
      <BackgroundGradient />
      {/*header */}
      <Header logo navigation={navigation} />
      {/*main container */}
      <View style={HomeStyles.container}>
        <View>
          {/*title */}
          < View style={{ marginTop: 30 }} >
            <Text style={{ color: theme.colors.outline }} variant='displayMedium'>Olá,
              <Text style={{ color: theme.colors.primary }} variant='displayMedium'> {username}</Text>
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
          <Text variant='headlineSmall'>
            Serviços
          </Text>
          {/*cards */}
          <View style={{ flexDirection: 'row' }}>
            <View style={[HomeStyles.card, HomeStyles.smCard]}>
            </View>
            <View style={[HomeStyles.card, HomeStyles.smCard]}>
            </View>
          </View>
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