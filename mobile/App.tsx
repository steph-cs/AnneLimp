import React from 'react'
import './gesture-handler'
import { PaperProvider } from 'react-native-paper'
import { LightTheme } from './assets/theme/LightTheme'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './App/screens/Home'
import Booking from './App/screens/Booking'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Review from './App/screens/Review'

const Stack = createNativeStackNavigator()
const HomeStack = createNativeStackNavigator()
const BookingStack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function Root() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: '#ffffff',
        },
        drawerActiveTintColor: LightTheme.colors.primary
      }}>
      <Drawer.Screen options={{ title: 'Home' }} name="HomeScreensStack" component={HomeScreensStack} />
      <Drawer.Screen options={{ title: 'Agendar' }} name="BookingScreensStack" component={BookingScreensStack} />
    </Drawer.Navigator>
  );
}

function HomeScreensStack() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen
        name="Home"
        component={Home} />
      <HomeStack.Screen name="Booking" component={Booking} />
    </HomeStack.Navigator>
  )
}

function BookingScreensStack() {
  return (
    <BookingStack.Navigator screenOptions={{ headerShown: false }}>
      <BookingStack.Screen
        name="Booking"
        component={Booking} />
      <BookingStack.Screen name="Review" component={Review} />
    </BookingStack.Navigator>
  )
}

export default function App() {
  return (
    <PaperProvider theme={LightTheme}>
      <NavigationContainer >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Root"
            component={Root}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider >
  )
}
