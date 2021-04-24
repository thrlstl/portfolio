import { useState, useEffect } from 'react'
import './scss/main.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import MenuButton from './components/MenuButton'
import { useMediaQuery } from 'react-responsive'
import ThemeContext from './contexts/ThemeContext'
import isMobileContext from './contexts/isMobileContext'

function App() {

  const [isLight] = useState(false)
  const [theme, setTheme] = useState('dark')
  const [isFooterVisible, setIsFooterVisible] = useState(true)
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' })

  useEffect(() => {
    setTheme(() => {
      return isLight
        ? 'light'
        : 'dark'
    })
  }, [isLight])

  useEffect(() => {
    setIsFooterVisible(() => {
      return isMobile
      ? false
      : true
    })
  }, [isMobile])

  const renderFooter = () => {
    return isFooterVisible
      ? <Footer />
      : <MenuButton />
  }

  return (
    <ThemeContext.Provider value={theme}>
      <isMobileContext.Provider value={isMobile}>
      <div className="App" theme={theme}>
        <Header />
        {renderFooter()}
      </div>
      </isMobileContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
