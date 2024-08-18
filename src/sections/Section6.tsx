import img2 from '../assets/images/img2.jpg'
import Documentary from '../components/documentary'
import '../styles/styles.css'
export default function Section6() {
    return (
        <div className="container" id='section6'>
            <img src={img2} className='img2' />
            <div className='headline-2'>
                <div className='main-text-2'>Tư liệu</div>
            </div>
            <Documentary />
        </div>
    )
}

