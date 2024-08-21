import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { DARK_BLACK } from '../constants/colors';
import { EvolutionContent, EvolutionContents } from '../content/evolution';
import '../styles/evolutionTimeline.css';

export default function EvolutionTimeline() {
    let count = -1;
    return (
        <div id='evolution-timeline-container'>
            <Timeline position="alternate">
                {EvolutionContents.map((content) => {
                    count++;
                    return <TimelineContentStyle content={content} count={count} />
                })}
            </Timeline>
        </div>
    )
}
type TimelineContentProps = {
    content: EvolutionContent
    count: number;
}
function TimelineContentStyle({ content, count }: TimelineContentProps) {
    const [defaultStyle, setDefaultStyle] = useState(true);
    const handleMouseHover = () => {
        setDefaultStyle(false);
    }
    const handleMouseLeave = () => {
        setDefaultStyle(true);
    }
    return (
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: 'auto 0', fontFamily: 'Vintage' }}
                align="right"
                variant="h4"
                color={DARK_BLACK}
            >
                {content.time}
            </TimelineOppositeContent>
            <TimelineSeparator sx={{ height: '18rem' }}>
                <TimelineConnector />
                <TimelineDot color='primary'>
                    {content.icon}
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
                sx={
                    defaultStyle ?
                        { py: '12px', px: 2, display: 'flex', alignItems: 'center' } :
                        { py: '12px', px: 2, backgroundColor: 'white', borderRadius: '1rem', zIndex: '1' }
                } onMouseOver={handleMouseHover} onMouseLeave={handleMouseLeave}>
                <Typography sx={{ fontFamily: 'Vintage', cursor: 'default', textAlign: 'left' }} variant="h5" component="span">
                    {content.title}
                </Typography>
                {defaultStyle ? <div></div> :
                    <Typography sx={{ fontFamily: 'UTMSwiss', marginTop: '1rem' }} variant='h6'>{content.content}</Typography>
                }
            </TimelineContent>
        </TimelineItem >
    )
}
