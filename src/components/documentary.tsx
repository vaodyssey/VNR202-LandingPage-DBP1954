import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { DARKER_BLACK } from '../constants/colors';
import { DocumentaryContent, DocumentaryContents } from '../content/documentary';
import '../styles/documentary.css';
export default function Documentary() {
    let index = -1;
    return (
        <div id='documentary-container'>
            <Grid container spacing={2} id='documentary-container-grid'>
                <Grid item lg={5}>
                    <DocumentaryCard1 documentaryContent={DocumentaryContents[0]} />
                </Grid>
                <Grid item container lg={7} spacing={2} >
                    {DocumentaryContents.map((documentaryContent) => {
                        index++;
                        if (index != 0)
                            return (
                                <Grid item lg={6}>
                                    <DocumentaryCard2 documentaryContent={documentaryContent} />
                                </Grid>
                            )
                    })}
                </Grid>
            </Grid>
        </div>
    )
}

type DocumentaryCardProps = {
    documentaryContent: DocumentaryContent
}

function DocumentaryCard1({ documentaryContent }: DocumentaryCardProps) {
    const openUrl = () => {
        window.open(documentaryContent.url)
    }
    return (
        <Card sx={{ maxWidth: '100%', height: '100%', backgroundColor: 'white' }}>
            <CardActionArea onClick={openUrl} disableTouchRipple>
                <CardMedia
                    component="img"
                    height="20%"
                    alt="green iguana"
                    image={documentaryContent.image} />
                <CardContent sx={{ opacity: '100%', marginTop: '5%' }}>
                    <Typography gutterBottom fontFamily='Vintage'
                        variant='h4'
                        component="div" color={DARKER_BLACK} textAlign='left'>
                        {documentaryContent.name}
                    </Typography>
                    <Typography variant="h5" color={DARKER_BLACK} textAlign='left' fontFamily='UTMSwiss'
                        height='100%' lineHeight='3rem'>
                        {documentaryContent.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

function DocumentaryCard2({ documentaryContent }: DocumentaryCardProps) {
    const openUrl = () => {
        window.open(documentaryContent.url)
    }
    return (
        <Card sx={{ maxWidth: '100%', height: '100%', backgroundColor: 'white' }}>
            <CardActionArea onClick={openUrl} disableTouchRipple>
                <CardMedia
                    component="img"
                    id='documentary-card-2-img'
                    height='200rem'
                    alt="green iguana"
                    image={documentaryContent.image} />
                <CardContent>
                    <Typography gutterBottom fontFamily='Vintage'
                        variant='h6'
                        component="div" color={DARKER_BLACK} textAlign='left'>
                        {documentaryContent.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}