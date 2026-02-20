import { useEffect, useState } from 'react'
import LandingPage from './components/landingpage'
import NavBar from './components/navbar'
import MainPage from './components/mainpage'
import Footer from './components/footer'
import AboutPage from './components/aboutpage'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <NavBar />
      <main>
        <p id="garderoben" className={scrolled ? 'absolute' : ''}>garderoben</p>
        <LandingPage />
        <MainPage />
        <AboutPage />
      </main>
      <Footer />
    </>
  )
}
export default App