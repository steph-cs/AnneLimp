import React, { useContext } from 'react'
import Profile from './App/screens/AppStack/Profile';
import { BottomTab } from './App/components/BottomTab';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Service from './App/screens/AppStack/Service';
import Login from './App/screens/AuthStack/Login';
import { UserContext } from './App/context/UserContext';
import Init from './App/screens/AuthStack/Init';
import Home from './App/screens/AppStack/Home';
import Booking from './App/screens/AppStack/Booking';

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

export default function Routes() {
  /* Context */
  const userContext = useContext(UserContext)
  const { user } = userContext

  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          // Screens for logged in users
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Tabs"
              component={Tabs}
            />
            <Stack.Screen name='Booking' component={Booking} />
            <Stack.Screen name='Service' component={Service} />
          </Stack.Group>
        ) : (
          // Auth screens
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Init' component={Init} />
            <Stack.Screen name='Login' component={Login} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>

  )
}