import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { LogisticsContent, LogisticsContents } from '../content/logistics';
import '../styles/logisticscardsection.css';
export default function LogisticsCardSection() {

    return (
        <div id='logistics-card-container' >
            <Grid container spacing={0}>
                {LogisticsContents.map((content) => {
                    return (
                        <LogisticsCard logisticsContent={content} />
                    )
                })}
            </Grid>


        </div>
    )
}


type LogisticsCardProps = {
    logisticsContent: LogisticsContent
}
function LogisticsCard({ logisticsContent }: LogisticsCardProps) {
    return (
        <Card sx={{ maxWidth: 345, margin: 1.1, backgroundColor: 'transparent' }}>
            <CardMedia
                sx={{ height: 140 }}
                image={logisticsContent.image}
                title="green iguana"
            />
            <CardContent sx={{ padding: 0 }}>
                <Typography variant="body2" color="white"
                    sx={{ textAlign: 'left', fontSize: 17, marginTop: '5%', fontFamily: 'inter' }}>
                    {logisticsContent.content}
                </Typography>
            </CardContent>
        </Card>)
}