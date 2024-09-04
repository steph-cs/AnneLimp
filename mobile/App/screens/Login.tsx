import { Image, Pressable, StyleSheet, TextInput, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Button, HelperText, Snackbar, Text, } from 'react-native-paper'
import { Link } from '@react-navigation/native'
import { styles } from './style'
import LogoLg from '../components/LogoLg'
import { LightTheme } from '../../assets/theme/LightTheme'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { UserContext } from '../context/UserContext'

export default function Login({ navigation }) {

  const configureGoogleSignIn = () => {
    GoogleSignin.configure({
      androidClientId: process.env.ANDROID_CLIENT_ID
    })
  }

  /* Context */
  const userContext = useContext(UserContext)
  const {updateUser} = userContext

  const [error, setError] = React.useState()
  const [visible, setVisible] = React.useState(false)
  const [email, setEmail] = React.useState('')
  const [emailValidError, setEmailValidError] = React.useState(false)
  const [senha, setSenha] = React.useState('')

  const onToggleSnackBar = () => setVisible(!visible)

  const onDismissSnackBar = () => setVisible(false)

  const handleLogin = () => {
    senha === '000' ? navigation.navigate('Tabs') : onToggleSnackBar()
  }
  const validateEmail = (email: string) => {
    // eslint-disable-next-line no-useless-escape
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/

    if (reg.test(email) === false) {
      setEmailValidError(false)
    } else {
      setEmailValidError(true)
    }
    setEmail(email)
  }

  useEffect(() => {
    configureGoogleSignIn()
  })

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices()
      const userInfo = await GoogleSignin.signIn()
      updateUser(userInfo)
      setError(null)
      navigation.navigate('Tabs')
    } catch (error) {
      setError(error)
    }
  }

  return (

    <View style={[styles.screen, LoginStyles.container]}>
      {/* logo */}
      <View>
        <LogoLg />
      </View>
      <View style={{}}>
        {/* email */}
        <View>
          <View style={LoginStyles.inputGroup}>
            <Text variant='labelLarge'>Email</Text>
            <TextInput
              style={LoginStyles.input}
              selectionColor={theme.primary}
              placeholder='stephanie@gmail.com'
              inputMode="email"
              value={email}
              onChangeText={(email) => validateEmail(email)} />
          </View>
          <HelperText
            type="error"
            style={emailValidError ? { height: 0 } : { height: 25 }}
          >
            Email inválido!
          </HelperText>
        </View>
        {/* senha */}
        <View style={LoginStyles.inputGroup}>
          <Text variant='labelLarge'>Senha</Text>
          <TextInput
            style={LoginStyles.input}
            selectionColor={theme.primary}
            placeholder='******'
            value={senha}
            onChangeText={(senha) => setSenha(senha)}
            secureTextEntry
          />
          <Link to={'/'}>
            <Text variant='labelMedium'>Esqueceu sua senha?</Text>
          </Link>
        </View>
        <Button
          style={{ marginTop: 35 }}
          mode="contained"
          onPress={handleLogin}
        >
          Fazer login
        </Button>
      </View>
      <View style={LoginStyles.ou}>
        <Text variant='bodyLarge' style={LoginStyles.ouText} >ou</Text>
      </View>
      {/* google login */}
      <Pressable
        style={LoginStyles.btnOutline}
        onPress={signIn}
      >
        <Image source={require('../../assets/imgs/icons/google-icon.png')} style={{ width: 24, height: 24 }} />
        <Text>Fazer login com o Google</Text>
      </Pressable>
      <Text variant='labelLarge' style={{ alignSelf: 'center' }}>Não tem cadastro? <Link to={'/Tabs'} style={{ color: theme.primary }}>Cadastre-se</Link></Text>
      <Snackbar
        style={LoginStyles.snackbar}
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'X',
          onPress: () => {
            // Do something
          },
        }}
      >
        Senha incorreta! Tente novamente ou recupere sua senha.
      </Snackbar>
    </View>
  )
}
const theme = LightTheme.colors
const LoginStyles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    fontSize: 18,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    borderColor: theme.primary,
    borderWidth: 1.2,
  },
  inputGroup: {
    gap: 10,
  },
  snackbar: {
    position: 'relative',
    top: 0,
    right: 0,
  },
  ou: {
    marginVertical: 20,
    height: 20,
    borderBottomWidth: 1,
    borderColor: theme.outline
  },
  ouText: {
    color: theme.outline,
    padding: 10,
    alignSelf: 'center',
    bottom: -20,
    backgroundColor: theme.white,
    position: 'absolute',
  },
  btnOutline: {
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    borderColor: theme.primary,
    borderWidth: 1.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  }
})