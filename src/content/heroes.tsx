import pdg from '../assets/images/img41.jpg'
import tvd from '../assets/images/img42.jpg'
import tc from '../assets/images/img43.png'
import bvd from '../assets/images/img44.png'
export type HeroContent = {
    title: string,
    content: string,
    image: string,
}

export const HeroContents: HeroContent[] = [
    {
        title: 'Phan Đình Giót',
        content: 'Lấy thân mình lấp lỗ châu mai',
        image: pdg,
    },
    {
        title: 'Tô Vĩnh Diện',
        content: 'Dùng thân chèn pháo',
        image: tvd,
    },
    {
        title: 'Trần Can',
        content: 'Dẫn đầu tiểu đội vượt qua lô cốt tiền duyên để xông vào sở chỉ huy, cắm cờ lên lô cốt Him Lam',
        image: tc,
    },
    {
        title: 'Bế Văn Đàn',
        content: 'Lấy vai làm giá súng',
        image: bvd,
    },
]
