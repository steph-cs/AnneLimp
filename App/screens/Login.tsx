import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Button, HelperText, Snackbar, Text, TextInput, useTheme } from 'react-native-paper'
import { Link } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'

const styles = StyleSheet.create({
  view: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  container: {
    padding: 30,
    marginHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    zIndex: 2
  },
  containerSecondary: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
    bottom: 10,
    paddingVertical: 30,
    marginHorizontal: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: '#62919F',
  },
  snackbar: {
    position: 'relative',
    top: 0,
    right: 0,
  },
})

export default function Login() {
  const theme = useTheme()

  const [visible, setVisible] = React.useState(false)
  const [email, setEmail] = React.useState('')
  const [emailValidError, setEmailValidError] = React.useState(false)
  const [senha, setSenha] = React.useState('')

  const onToggleSnackBar = () => setVisible(!visible)

  const onDismissSnackBar = () => setVisible(false)

  const handleLogin = () => {
    senha === '123' ? null : onToggleSnackBar()
  }
  const validateEmail = (email: string) => {
    // eslint-disable-next-line no-useless-escape
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/

    if (reg.test(email) === false) {
      setEmailValidError(false)
      console.log('false')
    } else {
      setEmailValidError(true)
      console.log('true')
    }
    setEmail(email)
  }
  return (
    <View style={styles.view}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#ffffff', '#62919F']}
        style={styles.background}
      />
      <View style={styles.container}>
        <Text style={{ marginVertical: 15 }} variant="displayMedium">
          Login
        </Text>
        <TextInput
          mode="outlined"
          label="E-mail"
          inputMode="email"
          value={email}
          onChangeText={(email) => validateEmail(email)}
        />
        <HelperText
          type="error"
          style={emailValidError ? { height: 0 } : { height: 25 }}
        >
          Email inválido!
        </HelperText>

        <TextInput
          label="Senha"
          mode="outlined"
          value={senha}
          onChangeText={(senha) => setSenha(senha)}
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
        />
        <Link to={'/'}>Esqueceu sua senha?</Link>

        <Button
          style={{ marginTop: 15 }}
          mode="contained"
          onPress={handleLogin}
        >
          Login
        </Button>
      </View>
      <View style={styles.containerSecondary}>
        <Text style={{ color: theme.colors.onPrimary }}>Não tem cadastro?</Text>
        <Link style={{ color: theme.colors.onPrimaryContainer }} to={'/Home'}>
          Cadastrar-se
        </Link>
      </View>
      <Snackbar
        style={styles.snackbar}
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

