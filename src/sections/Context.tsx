import img25 from '../assets/images/img25.png';
import ContextSection from '../components/contextSection';
export default function Context() {
    return (
        <div className='container' id='Context'>
            <img src={img25} className='img5' />
            <div className='headline-2'>
                <div className='main-text-2'>Bối cảnh</div>
            </div>
            <ContextSection />
        </div>
    )
}