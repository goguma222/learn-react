import { createContext, useState } from 'react';

export const DarkModeContext = createContext(); // 초기값 설정

export const DarkModeProvider = ({ children, initDarkMode = true }) => {
  const [darkMode, setDarkMode] = useState(initDarkMode);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
