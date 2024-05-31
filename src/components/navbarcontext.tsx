"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type NavbarType = 'default' | 'profile' | 'blank';

interface NavbarContextProps {
  navbarType: NavbarType;
  setNavbarType: (type: NavbarType) => void;
}

const NavbarContext = createContext<NavbarContextProps | undefined>(undefined);

export const NavbarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [navbarType, setNavbarType] = useState<NavbarType>('default');
  return (
    <NavbarContext.Provider value={{ navbarType, setNavbarType }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarType = (): NavbarContextProps => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error('useNavbarType must be used within a NavbarProvider');
  }
  return context;
};