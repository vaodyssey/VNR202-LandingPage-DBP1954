import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import { ResultContents } from '../content/result';
import '../styles/resultSection.css';
import '../styles/styles.css';
export default function ResultSection() {
    let count = 0;
    return (
        <div id='result-container'>
            <Swiper
                modules={[Navigation]}
                spaceBetween={0}
                navigation
                slidesPerView={1}
                onSwiper={(swiper) => console.log(swiper)}
                id='result-swiper-container'>
                {ResultContents.map((ResultContent) => {
                    count++;
                    return (
                        <SwiperSlide>
                            <ResultCard img={ResultContent.image} count={count} content={ResultContent.content} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

type ResultCardProps = {
    img: string,
    count: number,
    content: string,
}
function ResultCard({ img, count, content }: ResultCardProps) {
    return (
        <div id='result-card-container'>
            <img className='img1' id='result-card-image' src={img} />
            <div id='result-card-count'>{count}.</div>
            <div id='result-card-content'> {content}</div>
        </div>
    )
}