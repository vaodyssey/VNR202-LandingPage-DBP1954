import { Grid } from '@mui/material'
import tank from '../../dist/tank.png'
import bg from '../assets/images/img12.jpg'
import '../styles/footer.css'
import '../styles/styles.css'
export default function Footer() {
    return (
        <div className='container'>
            <img className='img4' src={bg} />
            <div id='footer-grid'>
                <Grid container spacing={2} >
                    <Grid item container lg={6}>
                        <LeftSection />
                    </Grid>
                    <Grid item lg={6} spacing={2} >
                        <RightSection />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

function LeftSection() {
    return (<div>
        <Grid container spacing={2} id='footer-left-section'>
            <Grid item>
                <img src={tank} id='footer-logo' />
            </Grid>
            <Grid item sx={{ marginTop: '3.5rem' }}>
                <div id='footer-left-sub-text'>Chiến dịch </div>
                <div id='footer-left-text'>Điện Biên Phủ</div>
            </Grid>
        </Grid>
    </div>)
}
function RightSection() {
    return (<div>
        <Grid container spacing={2} id='footer-right-section'>
            <Grid item className='footer-right-sub-text' >
                <div>Sản phẩm của: Nhóm 6</div>
                <div>Môn học: VNR202 (Summer 2024)</div>
                <div>Giảng viên: Nguyễn Văn Bình</div>
                <div>Đại học FPT, Hồ Chí Minh </div>
            </Grid>
        </Grid>
    </div>)
}