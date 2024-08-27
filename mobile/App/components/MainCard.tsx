import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Button, Text } from 'react-native-paper'
import { LightTheme } from '../../assets/theme/LightTheme'

export default function MainCard({ navigation }) {
  const theme = LightTheme

  return (
    <View>
      <View style={[MainCardStyles.card]}>
        <View style={MainCardStyles.cardContent}>
          <Text style={{ color: theme.colors.white, fontSize: 18 }}>
            Precisando de uma limpeza em casa, colocar as coisas em ordem?
          </Text>
          <Text variant='headlineSmall' style={{ color: theme.colors.white }}>
            Chama a Anne!
          </Text>
          <Button mode='contained' textColor={theme.colors.black} buttonColor={theme.colors.white} style={{ marginVertical: 10 }} onPress={() => navigation.navigate('Booking')}>
            Agendar limpeza
          </Button>
        </View>
        <Image source={require('../../assets/imgs/anne.png')} style={MainCardStyles.cardImg} />
      </View>
      {/*bubles */}
      <Image source={require('../../assets/imgs/bubles1.png')} style={MainCardStyles.bubles1} />
      <Image source={require('../../assets/imgs/bubles2.png')} style={MainCardStyles.bubles2} />
    </View>
  )
}


const MainCardStyles = StyleSheet.create({
  card: {
    position: 'relative',
    borderRadius: 20,
    marginVertical: 30,
    padding: 20,
    backgroundColor: '#62919F',
    height: 260,
    width: '100%',
    marginHorizontal: 'auto'
  },
  cardContent: {
    marginTop: 10,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    gap: 20
  },
  cardImg: {
    position: 'absolute',
    right: -35,
    width: 230,
    height: 260,
  },
  bubles1: {
    position: 'absolute',
    left: -30,
    bottom: -10,
    width: 110,
    height: 140,
    zIndex: -1
  },
  bubles2: {
    position: 'absolute',
    right: -35,
    top: -60,
    width: 70,
    height: 130,
    zIndex: -1
  }
})