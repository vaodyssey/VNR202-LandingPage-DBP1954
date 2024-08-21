import imgSrc from '../assets/images/img8.webp'
import EvolutionTimeline from '../components/evolutionTimeline'
import '../styles/styles.css'

export default function Evolution() {
    return (
        <div className="container" id='Advancement'>
            <img src={imgSrc} className='img2' />
            <div className='headline-2'>
                <div className='main-text-2'>Diễn biến</div>
            </div>
            <EvolutionTimeline />
        </div>
    )
}