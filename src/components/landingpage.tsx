import '../App.css'
import logo from '../assets/garderobenwlogo-nobg.png'

export default function landingPage() {
  return (
    <div id="landing-page">
      <img id='logo' src={logo} alt="garderobenwlogo-nobg.png" />
      <p>curated outdoor & designer garments</p>
    </div>
  );
}