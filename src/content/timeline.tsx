import img18 from '../assets/images/img18.jpg'
import img19 from '../assets/images/img19.jpg'
import img2 from '../assets/images/img2.jpg'
import img20 from '../assets/images/img20.jpg'
import img4 from '../assets/images/img4.jpg'
export type TimelineContent = {
    date: string,
    content: string,
    image: string
}


export const TimelineContents: TimelineContent[] = [
    {
        date: '1953-1954',
        content: `Bộ Chính trị, Trung ương Đảng đã đề ra tư duy chiến lược: Giữ vững thế chủ động, kiên quyết buộc địch phải phân tán lực lượng, không để địch tập trung lực lượng cơ động ở đồng bằng Bắc Bộ. Tại Chiến dịch Điện Biên Phủ, Đảng ủy, Bộ Chỉ huy chiến dịch đã tiếp tục chủ động, sáng tạo trong thay đổi phương châm tác chiến, chuyển từ “đánh nhanh, thắng nhanh” sang “đánh chắc, tiến chắc” để đảm bảo giành thắng lợi.`,
        image: img18
    },
    {
        date: '7/5/1953',
        content: ` Đại tướng Henrri Navarre được Chính phủ Pháp chỉ định làm Tổng Chỉ huy Quân đội Pháp ở Đông Dương, với kế hoạch quân sự nhằm chuyển bại thành thắng trong 18 tháng. Quân Pháp đã mở rộng càn quét ở Bắc Bộ và chuẩn bị cho cuộc tiến công vào Việt Bắc.`,
        image: img19
    },
    {
        date: '9/1953',
        content: `Bộ Chính trị Việt Nam, dưới sự lãnh đạo của Chủ tịch Hồ Chí Minh, đã họp bàn về nhiệm vụ quân sự, nhấn mạnh phương châm "tích cực, chủ động, cơ động, linh hoạt" và nguyên tắc tiêu diệt sinh lực địch. Chủ tịch Hồ Chí Minh chỉ đạo quân ta phải buộc địch phân tán lực lượng, với Tây Bắc là hướng chính.`,
        image: img20
    },

    {
        date: '11/1953',
        content: `Quân ta tiến lên Tây Bắc và các khu vực khác, khiến quân Pháp phải phân tán lực lượng, đặc biệt là tại Điện Biên Phủ. Pháp xây dựng Điện Biên Phủ thành một cứ điểm mạnh, nhưng mục tiêu của ta là tiêu diệt lực lượng địch để giải phóng Tây Bắc và Bắc Lào.`,
        image: img2
    },
    {
        date: '6/12/1953',
        content: `Bộ Chính trị quyết định mở Chiến dịch Điện Biên Phủ, coi đây là chiến dịch quan trọng về cả quân sự và chính trị. Đại tướng Võ Nguyên Giáp được chỉ định làm Tư lệnh, và các hội đồng cung cấp mặt trận cũng được thành lập để hỗ trợ chiến dịch.`,
        image: img4
    },
]