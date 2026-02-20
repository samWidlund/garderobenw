import '../App.css'
import video from '../assets/tripleArcLayer.mp4'

export default function VideoMainPage() {
  return (
    <div className='video-main-page'>
      <video autoPlay loop muted playsInline>
        <source src={video} type="video/mp4"/>
      </video>
    </div>
  )
}