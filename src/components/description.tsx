import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { GOLD } from '../constants/colors';
import { TimelineContent } from '../content/timeline';
import '../styles/description.css';
type DescriptionProps = {
    timeline: TimelineContent
}
export default function Description({ timeline }: DescriptionProps) {
    return (
        <div id='description-container'>

            <div className='description-padding' id='description-title'>
                <AccessTimeIcon sx={{ fontSize: 50, color: GOLD }} /> {timeline.date}
            </div>
            <div className='description-padding' id='description-content'>
                {timeline.content}
            </div>
        </div>
    )
}