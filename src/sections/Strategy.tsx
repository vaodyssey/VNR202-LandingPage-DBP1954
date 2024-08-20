import { useState } from 'react';
import imgSrc from '../assets/images/img2.jpg';
import Description from '../components/description';
import TimelineSwiper from '../components/timelineSwiper';
import { TimelineContent, TimelineContents } from '../content/timeline';
import '../styles/styles.css';

export default function Strategy() {

    const [currentTimeline, setCurrentTimeline] = useState<TimelineContent>(TimelineContents[0]);
    const handleTimelineChange = (timeline: TimelineContent) => {
        setCurrentTimeline(timeline)
    }
    return (
        <div className='container' id='Strategy'>
            <img src={imgSrc} className='img2'></img>
            <div className='headline-2'>
                <div className='main-text-2'>Chiến lược</div>
            </div>
            <TimelineSwiper handleTimelineChange={handleTimelineChange} />
            <Description timeline={currentTimeline as TimelineContent} />

        </div>
    )
}