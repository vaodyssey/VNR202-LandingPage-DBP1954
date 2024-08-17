import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { DARK_BLACK } from '../constants/colors';
import { TimelineContent, TimelineContents } from "../content/timeline";
import '../styles/timelineSwiper.css';
type TimelineSwiperProps = {
    handleTimelineChange: (timeline: TimelineContent) => void
}
export default function TimelineSwiper({ handleTimelineChange }: TimelineSwiperProps) {

    return (
        <div id='timeline-swiper-container'>
            <Swiper
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView={3}
                navigation
                color={DARK_BLACK}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                id='timeline-swiper'

            >
                {TimelineContents.map((timelineContent) => {
                    return (
                        <SwiperSlide id='timeline-swiper-element' onClick={() => handleTimelineChange(timelineContent)}>
                            <img src={timelineContent.image} id='timeline-swiper-element-background'></img>
                            <div id='timeline-swiper-element-date'>{timelineContent.date}</div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}