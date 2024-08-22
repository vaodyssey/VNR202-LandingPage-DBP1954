import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import { ResultContent, ResultContents } from '../content/result';
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
                {ResultContents.map((resultContent) => {
                    count++;
                    return (
                        <SwiperSlide>
                            <ResultCard img={resultContent.image} count={count} content={resultContent} />
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
    content: ResultContent,
}
function ResultCard({ img, count, content }: ResultCardProps) {
    return (
        <div id='result-card-container'>
            <img className='img1' id='result-card-image' src={img} />
            <div id='result-card-count'>{count}. {content.title}</div>
            <div id='result-card-content'> {content.content}</div>
        </div>
    )
}