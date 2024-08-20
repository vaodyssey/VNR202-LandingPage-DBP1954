import imgSrc from '../assets/images/img8.webp'
import AdvancementSection from '../components/advancementSection'
import '../styles/styles.css'
export default function Advancement() {
    return (
        <div className="container" id='Advancement'>
            <img src={imgSrc} className='img2' />
            <div className='headline-2'>
                <div className='main-text-2'>Tiến công</div>
            </div>
            <AdvancementSection />
        </div>
    )
}