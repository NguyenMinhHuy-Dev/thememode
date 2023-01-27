import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import { createContext, useState } from 'react';
import { Header } from './components/Header';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") === null ? 'light' : localStorage.getItem("theme"));

  const toggleTheme = () => {
    localStorage.setItem("theme", theme === 'light' ? 'dark' : 'light');
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light')); 
  }

  return (
    // <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id={theme}>
        <Header toggleTheme={toggleTheme}/>
        <Login />
      </div>
    // </ThemeContext.Provider>
  );
}

export default App;
