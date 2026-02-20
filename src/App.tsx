import LandingPage from './components/landingpage'
import NavBar from './components/navbar'
import MainPage from './components/mainpage'
import Footer from './components/footer'
import AboutPage from './components/aboutpage'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <LandingPage />
        <MainPage />
        <AboutPage />
      </main>
      <Footer />
    </>
  )
}

export default App
