import { View, Image, StyleSheet } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { GoogleSignin, User } from '@react-native-google-signin/google-signin'
import { styles } from './style'
import { UserContext } from '../context/UserContext'
import { Button, Text } from 'react-native-paper'
import Header from '../components/Header'
import ConfigContainer from '../fragments/ConfigContainer'

export default function Profile() {
  const [error, setError] = React.useState('')

  /* Context */
  const userContext = useContext(UserContext)
  const { user, updateUser } = userContext

  useEffect(() => {
    updateUser(null)
  }, [])

  return (
    <View style={styles.screen}>
      {/*header */}
      <Header logo />
      {/* User */}
      {user ?
        <View style={{ gap: 15, width: '50%', marginHorizontal: 'auto', alignItems: 'center' }}>
          <Image style={ProfileStyle.photo} source={{ uri: user.user.photo }} width={100} height={100} />
          <Text variant='headlineSmall'>{user.user.givenName} {user.user.familyName[0]}.</Text>
          <Button mode='contained' style={{width: '100%'}}>Editar perfil</Button>
        </View> :
        <Text> {error}</Text>
      }
      <View>
        <ConfigContainer/>
      </View>
    </View>
  )
}

const ProfileStyle = StyleSheet.create({
  photo: {
    borderRadius: 50
  }
})