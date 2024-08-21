import imgSrc from '../assets/images/img17.webp';
import HeroesParallax from "../components/heroesParallax";

export default function Heroes() {
    return (
        <div className='container' id='Heroes'>
            <img src={imgSrc} className='img2' />
            <div className='headline-2'>
                <div className='main-text-3'>Các vị anh hùng tiêu biểu</div>
            </div>
            <HeroesParallax />
        </div>

    )
}