import { GoogleSignin, User } from '@react-native-google-signin/google-signin';
import React, { createContext, useState, ReactNode } from 'react';

interface UserContextType {
  user: User | null;
  updateUser: (user: User) => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const updateUser = (user: User | null) => {
    user ?
      setUser(user) : setUser(GoogleSignin.getCurrentUser())
  };

  return (
    <UserContext.Provider
      value={{
        user,
        updateUser
      }}>
      {children}
    </UserContext.Provider>
  );
};
