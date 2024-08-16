import { TimelineContent } from '../content/timeline'
import '../styles/description.css'

type DescriptionProps = {
    timeline: TimelineContent
}
export default function Description({ timeline }: DescriptionProps) {
    return (
        <div id='description-container'>

            <div className='description-padding' id='description-title'>
                {timeline.date}
            </div>
            <div className='description-padding' id='description-content'>
                {timeline.content}
            </div>
        </div>
    )
}