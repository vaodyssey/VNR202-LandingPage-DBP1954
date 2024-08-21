import img2 from '../assets/images/img2.jpg'
import Documentary from '../components/documentary'
import '../styles/styles.css'
export default function Documentaries() {
    return (
        <div className="container" id='Documentaries'>
            <img src={img2} className='img6' />
            <div className='headline-2'>
                <div className='main-text-1'>Tư liệu</div>
            </div>
            <Documentary />
        </div>
    )
}

