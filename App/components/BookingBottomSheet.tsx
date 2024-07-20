import { StyleSheet, TouchableHighlight, View } from 'react-native'
import React, { useCallback, useRef } from 'react'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Button, Text } from 'react-native-paper';
import { LightTheme } from '../../assets/theme/LightTheme';
import Warning from '../fragments/Warning';

export default function BookingBottomSheet({navigation}) {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (

    <BottomSheet
      index={0}
      snapPoints={[100, '90%']}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
    >
      <BottomSheetView>
        <View>
          {/*finalizar agendamento */}
          <View style={styles.finish} >
            <View>
              <Text style={{ color: '#fff' }} variant='titleMedium'>Finalizar agendamento</Text>
              <Text style={{ color: '#fff' }} variant='bodyMedium'>Escolha um horário</Text>
            </View>
          </View>
          <View style={styles.modalService}>
            <Text variant='titleLarge'>Limpeza simples</Text>
            <Text variant='titleMedium'>R$160 - 8hrs</Text>
          </View>
          <View style={[styles.modalBooking, { gap: 20 }]}>
            {/*Day e Hour repetem -> virar componente */}
            {/*Day */}
            <View>
              <Text variant='titleMedium'>Pra quando você gostaria de agendar?</Text>
              <View style={{ flexDirection: 'row', gap: 15, marginTop: 15 }}>

                <TouchableHighlight onPress={() => { console.log('pressed') }}>
                  <View style={[styles.bookingCard]}>
                    <Text variant='labelSmall' style={{}}>Sáb</Text>
                    <Text variant='headlineSmall' style={{ fontWeight: 'bold', }}>19</Text>
                    <Text variant='labelSmall' style={{}}>Abril</Text>
                  </View>
                </TouchableHighlight >

                <TouchableHighlight onPress={() => { console.log('pressed') }}>
                  <View style={[styles.bookingCard, styles.bookingCardActive]}>
                    <Text variant='labelSmall' style={{ color: '#fff' }}>Sáb</Text>
                    <Text variant='headlineSmall' style={{ fontWeight: 'bold', color: '#fff' }}>19</Text>
                    <Text variant='labelSmall' style={{ color: '#fff' }}>Abril</Text>
                  </View>
                </TouchableHighlight >

              </View>
            </View>
            {/*Hour */}
            <View>
              <Text variant='titleMedium'>Que horas?</Text>
              <View style={{ flexDirection: 'row', gap: 15, marginTop: 15 }}>

                <View style={styles.bookingCard}>
                  <Text variant='labelSmall'>10:00</Text>
                </View>
                <View style={[styles.bookingCard, styles.bookingCardActive]}>
                  <Text variant='labelSmall' style={{ color: '#fff' }}>11:00</Text>
                </View>
              </View>
            </View>
            {/*Payment */}
            <View>
              <Text variant='titleMedium'>Forma de pagamento</Text>
              <View style={{ flexDirection: 'row', gap: 15, marginTop: 15 }}>
                <View style={[styles.bookingCard, { flexDirection: 'row' }]}>
                  <Text variant='titleMedium'>PIX </Text>
                  <Text variant='bodySmall'>(após a realização da limpeza)</Text>
                </View>
              </View>
            </View>
            {/*aviso */}
            <Warning/>
            <Button mode='contained' onPress={() => navigation.navigate('BookingScreensStack', { screen: 'Review' })}>Confrmar meu agendamento</Button>
          </View>
        </View>
      </BottomSheetView>
    </BottomSheet>
  )
}

const styles = StyleSheet.create({

  finish: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    gap: 15,
    width: '100%',
    backgroundColor: '#296379',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
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

})