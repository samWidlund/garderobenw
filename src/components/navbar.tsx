import '../App.css'
// import logo from '../assets/garderobenwlogo-nobg.png'

export default function Navbar() {
  return (
    <nav className="navbar">
    {/* <img className='logo' src={logo} alt="garderobenwlogo-nobg.png" /> */}
      <div className="shop">
        <a href="/mens">mens</a>
        <a href="/womens">womens</a>
        <a href="/shop">shop_all</a>        
      </div>
      <div className="nav-links">
        <a href="/home">home</a>
        <a href="/about">about</a>
        <a href="/contact">contact</a>
      </div>
    </nav>
  )
}