"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type AppContextType = {
  theme: string;
  lang: string;
  toggleTheme: () => void;
  toggleLang: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('dark');
  const [lang, setLang] = useState('EN');

  // Al cargar la pag, leemos si el usuario ya tenía guardado un tema o idioma en su navegador
  useEffect(() => {
    const savedTheme = localStorage.getItem('spectra-theme') || 'dark';
    const savedLang = localStorage.getItem('spectra-lang') || 'EN';
    setTheme(savedTheme);
    setLang(savedLang);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('spectra-theme', newTheme); // Guardamos la preferencia
  };

  const toggleLang = () => {
    const newLang = lang === 'EN' ? 'ES' : 'EN';
    setLang(newLang);
    localStorage.setItem('spectra-lang', newLang); // Guardamos la preferencia
  };

  return (
    <AppContext.Provider value={{ theme, lang, toggleTheme, toggleLang }}>
      <div className={theme === 'dark' ? 'dark' : ''}>
        {children}
      </div>
    </AppContext.Provider>
  );
}

// Hook personalizado para usar estos datos fácilmente
export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) throw new Error('useAppContext debe usarse dentro de un AppProvider');
  return context;
}