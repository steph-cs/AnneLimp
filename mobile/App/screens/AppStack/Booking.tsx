import { View, StyleSheet } from 'react-native'
import React, { } from 'react'
import { Button, IconButton, Searchbar, Text, useTheme } from 'react-native-paper'
import LogoLg from '../../components/LogoLg'
import { LightTheme } from '../../../assets/theme/LightTheme'
import BookingBottomSheet from '../../components/BookingBottomSheet'


export default function Booking({ navigation }) {
  const numServicos = 3
  const theme = useTheme()

  return (
    <View style={styles.screen}>
      <LogoLg />
      {/*actions */}
      <View style={styles.actions}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.action}>
            <IconButton style={{ margin: 0 }} icon={'phone'} size={24} />
            <Text>Ligar</Text>
          </View>
          <View style={styles.action}>
            <IconButton style={{ margin: 0 }} icon={'share'} size={24} />
            <Text>Compartilhar</Text>
          </View>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          {/*váriavel se ha ou nao horarios disponiveis */}
          <Button style={{ backgroundColor: '#1D9A79', borderRadius: 5 }} icon="clock" mode="contained" onPress={() => console.log('Pressed')}>
            Agendar agora
          </Button>
          <Text style={{ color: LightTheme.colors.outline, marginTop: 5 }} variant='labelSmall'>Horários Disponiveis</Text>
        </View>
      </View>
      {/*agendamento */}
      <View style={styles.booking}>
        <Text variant='headlineMedium'>Serviços ({numServicos})</Text>
        <Searchbar
          style={{ marginVertical: 15 }}
          placeholder="Pesquise um serviço"
          /* onChangeText={setSearchQuery} */
          value={''}
        />
        <View style={{ marginVertical: 5 }}>
          <Text variant='titleLarge'>Limpeza simples</Text>
          <View style={{ flexDirection: 'row', gap: 15, marginTop: 15 }}>
            <Button mode='contained' style={{ backgroundColor: theme.colors.primary, borderRadius: 5 }} onPress={() => { }}>R$160 - 8hrs</Button>
          </View>
        </View>
      </View>
      {/*finalizar agendamento */}
      <BookingBottomSheet navigation={navigation} />
    </View >
  )
}

const styles = StyleSheet.create({

  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  screen: {
    height: '100%',
    position: 'relative'
  },

  actions: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  action: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  booking: {
    backgroundColor: 'white',
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    height: '100%',
    marginTop: 40,
    padding: 25
  },
  search: {
    borderColor: LightTheme.colors.outline,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 7,
    paddingVertical: 3,
    marginVertical: 10
  },
  finish: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    flexDirection: 'row',
    gap: 15,
    width: '100%',
    backgroundColor: '#296379',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  modal: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  modalService: {
    backgroundColor: '#F1F1F1',
    padding: 15
  },
  modalBooking: {
    backgroundColor: '#fff',
    padding: 15,
  },
  bookingCard: {
    borderColor: LightTheme.colors.outline,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  bookingCardActive: {
    backgroundColor: LightTheme.colors.primary
  },
  containerB: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainerB: {
    flex: 1,
    alignItems: 'center',
  },

})