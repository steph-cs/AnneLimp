import { StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import ConfigItem from './ConfigItem'
import { Divider, Text } from 'react-native-paper'
import { LightTheme } from '../../assets/theme/LightTheme'
import { UserContext } from '../context/UserContext'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { useNavigation } from '@react-navigation/native'

export default function ConfigContainer() {
  /* Context */
  const userContext = useContext(UserContext)
  const { user, updateUser } = userContext

  const navigation = useNavigation()

  const confOptions = [
    {
      title: 'Agendamentos',
      options: [
        {
          title: 'Meus agendamentos',
          icon: 'calendar-month-outline',
          onPress: () => { },
          toggle: false
        },
        {
          title: 'FAQ',
          icon: 'help-circle-outline',
          onPress: () => { },
          toggle: false
        },
        {
          title: 'Suporte',
          icon: 'forum-outline',
          onPress: () => { },
          toggle: false
        },
      ],
    },
    {
      title: 'Preferências',
      options: [
        {
          title: 'Notificações',
          icon: 'bell-outline',
          onPress: () => { },
          toggle: true
        },
        {
          title: 'Sair',
          icon: 'exit-to-app',
          onPress: async () => {
            await GoogleSignin.revokeAccess()
            await GoogleSignin.signOut()
            updateUser(GoogleSignin.getCurrentUser())
            navigation.reset({
              index: 0,
              routes: [{ name: 'Init' }]
            })
          },
          toggle: false
        },
      ]
    }
  ]

  return (
    <>
      {confOptions.map((conf, index) =>
        <View style={{ gap: 10, margin: 20 }} key={index}>
          <Text variant='bodyMedium'>{conf.title}</Text>
          <View style={ConfigContainerStyle.itemContainer}>
            {conf.options.map((option, index) =>
              <View style={{ gap: 6 }} key={index}>
                <ConfigItem toggle={option.toggle} title={option.title} icon={option.icon} onPress={option.onPress} />
                {index < conf.options.length - 1 && <Divider />}
              </View>
            )}
          </View>
        </View>)}
    </>

  )
}

const ConfigContainerStyle = StyleSheet.create({
  itemContainer: {
    backgroundColor: LightTheme.colors.elevation.level1,
    padding: 10,
    borderRadius: 15
  }
})