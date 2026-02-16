import '../App.css'
import logo from '../assets/garderobenwlogo-nobg.png'

function landingPage() {
  return (
    <div id="landing-page">
      <img src={logo} alt="garderobenwlogo-nobg.png" />
      <p>Curated outdoor & designer garments</p>
    </div>
  );
}

export default landingPage;