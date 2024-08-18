import img23 from '../assets/images/img23.png'
import img24 from '../assets/images/img24.png'
import img25 from '../assets/images/img25.png'
import img26 from '../assets/images/img26.jpg'
import img27 from '../assets/images/img27.png'
export type DocumentaryContent = {
    name: string,
    description: string,
    image: string,
    url: string,
}

export const DocumentaryContents: DocumentaryContent[] = [
    {
        name: `[Video] Tư liệu`,
        description: `
Bộ phim tài liệu "Điện Biên Phủ 1954" tái hiện trận chiến lịch sử, khắc họa tinh thần kiên cường của quân và dân Việt Nam trong cuộc đấu tranh giành độc lập.`,
        image: img23,
        url: `https://www.youtube.com/watch?v=COG1itIE3Rw&list=PLxv6taYbRuB4o3S6EJDttd4t-Q3tTHyKx&index=1`,

    },
    {
        name: `[Video] Tóm tắt chiến thắng Điện Biên Phủ`,
        description: ``,
        image: img24,
        url: `https://www.youtube.com/watch?v=CD8sKixEDsI&pp=ygUjY2hp4bq_biB0aOG6r25nIMSRaeG7h24gYmnDqm4gcGjhu6c%3D
`,

    },
    {
        name: `[Video] Phim tài liệu`,
        description: ``,
        image: img25,
        url: `https://www.youtube.com/watch?v=jy7Z3oYOp7w&pp=ygUjY2hp4bq_biB0aOG6r25nIMSRaeG7h24gYmnDqm4gcGjhu6c%3D
`,

    },
    {
        name: `Kỷ niệm 70 năm Chiến thắng Điện Biên Phủ`,
        description: ``,
        image: img26,
        url: `https://dangcongsan.vn/ky-niem-70-nam-chien-thang-dien-bien-phu`,

    },
    {
        name: `Những hình ảnh đặc biệt quý hiếm về Chiến dịch Điện Biên Phủ`,
        description: ``,
        image: img27,
        url: `https://xaydungchinhsach.chinhphu.vn/nhung-hinh-anh-dac-biet-quy-hiem-ve-chien-dich-dien-bien-phu-119230507104433041.htm`,

    },

]