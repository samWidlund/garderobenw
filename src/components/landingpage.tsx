import '../App.css'
import logo from '../assets/garderobenwlogo-nobg.png'

function landingPage() {
  return (
    <div id="landing-page">
      <h1>garderoben.w</h1>
      <img src={logo} alt="garderobenwlogo-nobg.png" />
    </div>
  );
}

export default landingPage;