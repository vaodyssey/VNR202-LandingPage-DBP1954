import imgSrc from '../assets/images/img1.webp'
import DifficultiesParallax from '../components/difficultiesParallax'
import '../styles/styles.css'
export default function Difficulties() {
    return (
        <div className='container' id='Difficulties'>
            <img src={imgSrc} className='img3' />
            <div className='headline-2'>
                <div className='main-text-1'>Khó khăn</div>
            </div>
            <DifficultiesParallax />
        </div>

    )
}