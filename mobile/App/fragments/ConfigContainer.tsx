import { StyleSheet, View } from 'react-native'
import React from 'react'
import ConfigItem from './ConfigItem'
import { Divider, Text } from 'react-native-paper'
import { LightTheme } from '../../assets/theme/LightTheme'

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
        onPress: () => { },
        toggle: false
      },
    ]
  }


]

export default function ConfigContainer() {
  return (
    <>
      {confOptions.map((conf) =>
        <View style={{ gap: 10, margin: 20 }}>
          <Text variant='bodyMedium'>{conf.title}</Text>
          <View style={ConfigContainerStyle.itemContainer}>
            {conf.options.map((option, index) =>
              <View style={{gap: 6}}>
                <ConfigItem toggle={option.toggle} title={option.title} icon={option.icon} />
                {index < conf.options.length -1  && <Divider />}
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