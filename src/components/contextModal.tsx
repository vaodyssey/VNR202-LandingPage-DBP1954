import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";
import { GOLD } from "../constants/colors";
import { ContextContent } from "../content/context";

type ContextModalProps = {
    open: boolean;
    setOpen: (value: boolean) => void;
    content: ContextContent
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    width: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const mainTextStyle = {
    fontFamily: 'Vintage',
    fontSize: '2rem',
    padding: '0.5rem',
}
const subTextStyle = {
    fontFamily: 'UTMSwiss',
    fontSize: '1.5rem',
    padding: '1rem',
}
const lightbulb = {
    color: GOLD,
    fontSize: '2.5rem',
    marginRight: '1%',
    marginTop: '1%'
}
export default function ContextModal({ open, setOpen, content }: ContextModalProps) {

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={() => setOpen(false)}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" sx={mainTextStyle}>
                        <LightbulbIcon sx={lightbulb} />
                        {content.title}
                    </Typography>
                    <Typography sx={subTextStyle}>
                        {content.content}
                    </Typography>
                </Box>
            </Fade>
        </Modal>
    )
}
