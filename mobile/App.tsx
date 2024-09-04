import React from 'react'
import './gesture-handler'
import { Icon, PaperProvider } from 'react-native-paper'
import { LightTheme } from './assets/theme/LightTheme'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './App/screens/Home'
import Booking from './App/screens/Booking'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { BottomTab } from './App/components/BottomTab'
import Service from './App/screens/Service'
import Init from './App/screens/Init'
import Login from './App/screens/Login'
import Profile from './App/screens/Profile'
import { UserProvider } from './App/context/UserContext'

export type RootStackParamList = {
  Init: undefined;
  Login: undefined;
  Tabs: undefined;
  Booking: undefined;
  Profile: undefined;
  Service: { serviceId: string }
}

const Stack = createNativeStackNavigator<RootStackParamList>()
const TabNavigator = createBottomTabNavigator();

function Tabs() {
  return (
    <TabNavigator.Navigator
      initialRouteName="Home"
      tabBar={props => <BottomTab {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <TabNavigator.Screen
        name="home"
        component={Home}
      />
      <TabNavigator.Screen
        name="agendamento"
        component={Booking}
      />
      <TabNavigator.Screen
        name="perfil"
        component={Profile}
      />
    </TabNavigator.Navigator>
  );
}

export default function App() {
  return (
    <PaperProvider theme={LightTheme}>
      <UserProvider>
        <GestureHandlerRootView>
          <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name='Init' component={Init} />
              <Stack.Screen name='Login' component={Login} />
              <Stack.Screen
                name="Tabs"
                component={Tabs}
              />
              <Stack.Screen name='Booking' component={Booking} />
              <Stack.Screen name='Service' component={Service} />
            </Stack.Navigator>
          </NavigationContainer>
        </GestureHandlerRootView>
      </UserProvider>
    </PaperProvider >
  )
}
