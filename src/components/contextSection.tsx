import { Grid } from '@mui/material';
import { useState } from 'react';
import { ContextContent, ContextContents } from '../content/context';
import '../styles/contextSection.css';
import ContextModal from './contextModal';
export default function ContextSection() {

    return (
        <div id='context-container'>
            <Grid container spacing={0} id='context-grid'>
                {ContextContents.map((content) => {
                    return (
                        <Grid item lg={3} id='context-grid-item'>
                            <ContextCard contextContent={content} />
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

type ContextCardProps = {
    contextContent: ContextContent
}
function ContextCard({ contextContent }: ContextCardProps) {
    const [defaultStyle, setDefaultStyle] = useState<boolean>(true)
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const handleMouseEnter = () => {
        setDefaultStyle(!defaultStyle)
    }
    const handleMouseLeave = () => {
        setDefaultStyle(!defaultStyle)
    }
    const handleModalOpen = (value: boolean) => {
        setModalOpen(value)
    }

    return (
        <div id='context-card-wrapper' >

            {defaultStyle ?
                <div id='context-card-container' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img id='context-card-img-1' src={contextContent.image} />
                </div>
                :
                <div id='context-card-container' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                    onClick={() => setModalOpen(true)}>
                    <img id='context-card-img-2' src={contextContent.image} />
                    <div id='context-card-text'>{contextContent.title}</div>
                </div>
            }
            <ContextModal open={modalOpen} setOpen={handleModalOpen} content={contextContent} />
        </div>

    )
}