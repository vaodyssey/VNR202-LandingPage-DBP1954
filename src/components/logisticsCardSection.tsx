import { Box, Card, CardContent, CardMedia } from '@mui/material';
import { LogisticsContent, LogisticsContents } from '../content/logistics';
import '../styles/logisticscardsection.css';

export default function LogisticsCardSection() {
    let count = 0;
    return (
        <div id='logistics-card-container' >
            {LogisticsContents.map((content) => {
                count += 1
                if (count % 2 != 0) {
                    return (
                        <div id='logistics-card'>
                            <LogisticsCard1 logisticsContent={content} count={count} />
                        </div>
                    )
                } else {
                    return (
                        <div id='logistics-card'>
                            <LogisticsCard2 logisticsContent={content} count={count} />
                        </div>
                    )
                }
            })}



        </div>
    )
}


type LogisticsCardProps = {
    logisticsContent: LogisticsContent
    count: number
}
function LogisticsCard1({ logisticsContent, count }: LogisticsCardProps) {
    return (
        <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto', alignItems: 'center', padding: '8%' }}>
                    <div className='description-count'>{count}.</div>
                    <div id='logistics-card-description-1'>
                        {logisticsContent.content}
                    </div>
                </CardContent>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: '50%' }}
                image={logisticsContent.image}
            />
        </Card>
    )
}
function LogisticsCard2({ logisticsContent, count }: LogisticsCardProps) {
    return (
        <Card sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{ width: '50%' }}
                image={logisticsContent.image}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto', alignItems: 'center', padding: '8%' }}>
                    <div className='description-count'>{count}.</div>
                    <div id='logistics-card-description-1'>
                        {logisticsContent.content}
                    </div>
                </CardContent>
            </Box>

        </Card>)
}