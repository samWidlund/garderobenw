import '../App.css'
import logo from '../assets/garderobenwlogo-nobg.png'

export default function Navbar() {
  return (
    <nav className="navbar">
    <img className='logo' src={logo} alt="garderobenwlogo-nobg.png" />
      <div className="nav-links">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  )
}