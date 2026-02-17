import '../App.css'
import logo from '../assets/garderobenwlogo-nobg.png'

export default function Navbar() {
  return (
    <nav className="navbar">
    <img id='logo' src={logo} alt="garderobenwlogo-nobg.png" />
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  )
}