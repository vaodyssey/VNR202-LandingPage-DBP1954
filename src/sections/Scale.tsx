import img22 from '../assets/images/img22.webp'
import '../styles/finalize.css'
import '../styles/styles.css'
export default function Scale() {
    return (
        <div className='container' id='Scale'>
            <img src={img22} className='img3' />
            <div className='headline-1'>
                <div className='main-text-1'>Tầm vóc</div>
            </div>
            <div id='finalize-description'>
                <p>
                    Chiến thắng Điện Biên Phủ kết thúc cuộc kháng chiến chống Pháp và sự can thiệp của Mỹ, đánh dấu thắng lợi vĩ đại của nhân dân Việt Nam và các dân tộc bị áp bức trên thế giới. Chiến thắng này khẳng định chân lý của chủ nghĩa Mác-Lênin: đế quốc xâm lược sẽ thất bại, cách mạng sẽ thành công.
                </p>
            </div>
        </div>
    )
}