import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon, Text } from 'react-native-paper'
import { LightTheme } from '../../assets/theme/LightTheme'
import Toggle from './Toggle'

type ConfigItemProps = {
  toggle?: boolean,
  title: string,
  icon: string
}

export default function ConfigItem(props: ConfigItemProps) {
  const { toggle, title, icon } = props
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const theme = LightTheme.colors

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const ConfItemContent = () => {
    return (
      <>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
          <View style={{ backgroundColor: title == 'Sair' ? theme.errorContainer : theme.white, padding: 6, borderRadius: 8 }}>
            <Icon color={title == 'Sair' && theme.error} source={icon} size={24} />
          </View>
          <Text style={{ color: title == 'Sair' ? theme.error : null }} variant='titleMedium'>{title}</Text>
        </View>
        {toggle && <Toggle value={isSwitchOn} onValueChange={onToggleSwitch} />}
      </>
    )
  }

  return (
    <>
      {toggle ?
        <View style={ConfItemStyle.container}>
          <ConfItemContent />
        </View>
        :
        <TouchableOpacity style={ConfItemStyle.container}>
          <ConfItemContent />
        </TouchableOpacity>}
    </>
  )
}

const ConfItemStyle = StyleSheet.create({
  container: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 6
  }
})