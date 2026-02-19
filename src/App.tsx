import LandingPage from './components/landingpage'
import NavBar from './components/navbar'
import MainPage from './components/mainpage'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <LandingPage />
        <MainPage />
      </main>
    </>
  )
}

export default App
