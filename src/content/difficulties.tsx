import img1 from '../assets/images/img1.webp'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.webp'
import img4 from '../assets/images/img4.jpg'

export type DifficultyContent = {
    content: string,
    image: string
}

export const DifficultyContents: DifficultyContent[] = [
    { content: 'Vận chuyển lượng lớn lương thực, thực phẩm, vũ khí...', image: img1 },
    { content: 'Tổ chức cứu chữa thương bệnh binh xa so với hậu phương', image: img2 },
    { content: 'Địa bàn dân cư thưa thớt, kinh tế nghèo nàn', image: img3 },
    { content: 'Khí hậu, thời tiết khắc nghiệt', image: img4 },
]