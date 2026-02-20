import LandingPage from './components/landingpage'
import NavBar from './components/navbar'
import MainPage from './components/mainpage'
import Footer from './components/footer'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <LandingPage />
        <MainPage />
      </main>
      <Footer />
    </>
  )
}

export default App
