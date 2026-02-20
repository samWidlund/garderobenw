import '../App.css'
import VideoMainPage from './videomainpage'
import InfoMainPage from './infomainpage'

export default function MainPage() {
  return (
    <div className='main-page'>
      <VideoMainPage />
      <InfoMainPage />
    </div>
  )
}