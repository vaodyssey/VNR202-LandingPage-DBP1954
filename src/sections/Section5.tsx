import img22 from '../assets/images/img22.webp'
import '../styles/finalize.css'
import '../styles/styles.css'
export default function Section5() {
    return (
        <div className='container'>
            <img src={img22} className='img3' />
            <div className='headline-1'>
                <div className='main-text-1'>Tầm vóc</div>
            </div>
            <div id='finalize-description'>
                <p>
                    Chiến thắng Điện Biên Phủ đã kết thúc vẻ vang cuộc kháng chiến lâu dài, gian khổ và anh dũng của nhân dân cả nước ta, chống thực dân Pháp xâm lược và sự can thiệp của đế quốc Mỹ. Đó là thắng lợi vĩ đại của nhân dân ta, mà cũng là thắng lợi chung của tất cả các dân tộc bị áp bức trên thế giới. Chiến thắng Điện Biên Phủ càng làm sáng ngời chân lý của chủ nghĩa Mác-Lênin trong thời đại ngày nay: chiến tranh xâm lược của bọn đế quốc nhất định thất bại, cách mạng giải phóng của các dân tộc nhất định thành công
                </p>
            </div>
        </div>
    )
}