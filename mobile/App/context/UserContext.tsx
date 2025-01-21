import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin, User } from '@react-native-google-signin/google-signin';
import React, { createContext, useState, ReactNode, useEffect } from 'react';

interface UserContextType {
  user: User | null;
  updateUser: (user: User) => void;
  getUser: () => void,
  signOut: () => void
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(()=>{
    getUser()
    console.log('User: '+user);
    
  },[])

  const getUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user')
      const result = jsonValue != null ? JSON.parse(jsonValue) : null
      setUser(result)
      console.log('context: '+JSON.stringify(GoogleSignin.getCurrentUser()));
      
    } catch(e) {
      console.log("Usuario nao encontrado!");
    }
    console.log('Done.')
  }

  const updateUser = async (user: User | null) => {
    if (user) {
      setUser(user)
    } else {
      setUser(GoogleSignin.getCurrentUser())
      try {
        await AsyncStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log("Erro ao fazer login!")
      }
    }
    console.log('signin: ' + AsyncStorage.getItem('user'));
    

  };

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem('user')
    } catch (e) {
      console.log("Erro ao deslogar!")
    }

  }

  return (
    <UserContext.Provider
      value={{
        user,
        updateUser,
        getUser,
        signOut
      }}>
      {children}
    </UserContext.Provider>
  );
};
