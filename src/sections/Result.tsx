import img22 from '../assets/images/img22.webp'
import ResultSection from '../components/resultSection'

import '../styles/finalize.css'
import '../styles/styles.css'
export default function Result() {
    return (
        <div className='container' id='Result'>
            <img src={img22} className='img3' />
            <div className='headline-2'>
                <div className='main-text-1'>Kết quả</div>
            </div>
            <ResultSection />
        </div>
    )
}