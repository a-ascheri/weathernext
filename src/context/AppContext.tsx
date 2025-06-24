'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextProps {
  city: string;
  setCity: (city: string) => void;
  hasSearched: boolean;
  setHasSearched: (value: boolean) => void;
  lastSearchedCity: string;
  setLastSearchedCity: (value: string) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [city, setCity] = useState<string>('');
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [lastSearchedCity, setLastSearchedCity] = useState<string>('');

  return (
    <AppContext.Provider
      value={{ 
        city, 
        setCity, 
        hasSearched, 
        setHasSearched, 
        lastSearchedCity, 
        setLastSearchedCity 
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};
