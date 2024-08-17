import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from "swiper/react"
import { AdvancementContents } from '../content/advancements'
import '../styles/advancementSection.css'
import '../styles/styles.css'
export default function AdvancementSection() {
    let count = 0;
    return (
        <div id='advancement-container'>
            <Swiper
                modules={[Navigation]}
                spaceBetween={0}
                navigation
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                id='advancement-swiper-container'>
                {AdvancementContents.map((advancementContent) => {
                    count++;
                    return (
                        <SwiperSlide>
                            <AdvancementCard img={advancementContent.image} count={count} content={advancementContent.content} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

type AdvancementCardProps = {
    img: string,
    count: number,
    content: string,
}
function AdvancementCard({ img, count, content }: AdvancementCardProps) {
    return (
        <div id='advancement-card-container'>
            <img className='img1' id='advancement-card-image' src={img} />
            <div id='advancement-card-count'>{count}.</div>
            <div id='advancement-card-content'> {content}</div>
        </div>
    )
}