import { useState, useEffect } from 'react'
import './scss/main.scss'
import Header from './components/Header'

function App() {

  const [isLight, setIsLight] = useState(false)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    setTheme(() => {
      return isLight
        ? 'light'
        : 'dark'
    })
  }, [isLight])

  return (
    <div theme={theme} className="App">
      <Header />
    </div>
  );
}

export default App;
