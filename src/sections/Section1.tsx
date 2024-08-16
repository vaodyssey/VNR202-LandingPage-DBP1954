import '../styles/styles.css'
export default function Section1() {
    const imgSrc = '/public/images/img1.webp'
    return (
        <div className='container'>
            <img src={imgSrc} className='img1' />
            <div className='headline-1'>
                <div className='sub-text' >Chiến dịch </div>
                <div className='main-text-1'>Điện Biên Phủ</div>
            </div>
            <div className='description-1'>
                <p>
                    Chiến thắng Điện Biên Phủ là chiến công vang dội của một dân tộc vốn là thuộc địa, đánh thắng quân đội hiện đại của một đế quốc phương Tây. Đây cũng là chiến thắng điển hình nhất trong lịch sử đấu tranh của các dân tộc bị áp bức chống quân xâm lược nước ngoài, mở đầu quá trình sụp đổ của chủ nghĩa thực dân cũ trên phạm vi toàn thế giới. Chính vì vậy, chiến thắng Điện Biên Phủ mãi mãi là biểu tượng sáng ngời của tinh thần quật cường, bất khuất, trí thông minh, sáng tạo của nhân dân Việt Nam. Bảy mươi năm đã trôi qua, song chiến thắng này vẫn còn vẹn nguyên giá trị, ý nghĩa trong sự nghiệp cách mạng hiện nay.

                </p>
            </div>
        </div>
    )
}