import imgSrc from '../assets/images/img4.jpg'
import LogisticsCardSection from '../components/logisticsCardSection'
import '../styles/styles.css'
export default function Logistics() {
    return (
        <div className="container" id='Logistics'>
            <img src={imgSrc} className='img3' />
            <div className='headline-2'>
                <div className='main-text-1'>Hậu cần</div>
            </div>
            <LogisticsCardSection />
        </div>
    )
}