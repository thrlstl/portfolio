import { useState, useEffect } from 'react'
import './scss/main.scss'
import Header from './components/Header'
import ThemeContext from './contexts/ThemeContext'

function App() {

  const [isLight, setIsLight] = useState(true)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    setTheme(() => {
      return isLight
        ? 'light'
        : 'dark'
    })
  }, [isLight])

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App" theme={theme}>
        <Header />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
