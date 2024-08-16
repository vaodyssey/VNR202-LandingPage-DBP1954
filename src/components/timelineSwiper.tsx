import { Swiper, SwiperSlide } from "swiper/react";
import imgSrc from '../assets/images/img3.webp';
import { TimelineContent, TimelineContents } from "../content/timeline";
import '../styles/timelineSwiper.css';
type TimelineSwiperProps = {
    handleTimelineChange: (timeline: TimelineContent) => void
}
export default function TimelineSwiper({ handleTimelineChange }: TimelineSwiperProps) {

    return (
        <div id='timeline-swiper-container'>
            <Swiper
                spaceBetween={0}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                id='timeline-swiper'

            >
                {TimelineContents.map((timelineContent) => {
                    return (
                        <SwiperSlide id='timeline-swiper-element' onClick={() => handleTimelineChange(timelineContent)}>
                            <img src={imgSrc} id='timeline-swiper-element-background'></img>
                            <div id='timeline-swiper-element-date'>{timelineContent.date}</div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}