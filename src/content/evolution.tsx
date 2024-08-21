import FastfoodIcon from '@mui/icons-material/Fastfood';
import { ReactNode } from "react";
export type EvolutionContent = {
    title: string,
    content: string,
    time: string,
    icon: ReactNode
}
export const EvolutionContents: EvolutionContent[] = [
    {
        title: `Đập Tan Thế Trận Phòng Ngự Vòng Ngoài`,
        content: `Chiều ngày 13/3/1954, chiến dịch Điện Biên Phủ chính thức mở màn. Trong đợt 1, ta tấn công phá vỡ hệ thống phòng ngự vòng ngoài của địch ở phía Bắc và Đông Bắc. Trận Him Lam vào ngày 13/3/1954 khởi đầu cho chuỗi thắng lợi, tiếp theo là việc tiêu diệt cụm cứ điểm đồi Độc Lập vào ngày 15/3 và bao vây, bức hàng cụm cứ điểm Bản Kéo ngày 16/3. Ta cũng đánh bại nhiều đợt phản kích của địch trong giai đoạn này.`,
        time: `13-17/3/1954`,
        icon: (<FastfoodIcon />),
    },
    {
        title: ` Mở Rộng Trận Địa và Tiêu Diệt Cứ Điểm`,
        content: `Sau hơn 10 ngày xây dựng trận địa tiến công và bao vây với hàng trăm kilômét hào giao thông và hàng ngàn công sự, ta tiến công vào các cứ điểm E, D1, D2, C1 trên dãy đồi phía Đông và 106, 311 trên hướng Tây-Bắc sân bay Mường Thanh. Tuy nhiên, nỗ lực đánh chiếm các cứ điểm A1, C2 và 105 gặp khó khăn và bị địch phản kích. Từ ngày 16/4, ta phát triển trận địa, diệt các cứ điểm còn lại, đào hào cắt đôi sân bay Mường Thanh và khống chế đường tiếp tế của địch.`,
        time: ` 30/3-30/4/1954`,
        icon: (<FastfoodIcon />),

    },
    {
        title: `Tổng Công Kích và Chiến Thắng`,
        content: `Trong đợt 3, từ ngày 1-7/5/1954, ta tấn công các điểm cao còn lại ở phía Đông như C1, C2, và A1, diệt các cứ điểm ở phía Tây, và tăng cường vây ép phân khu Hồng Cúm. Ngày 7/5, lúc 15 giờ, ta phát động tổng công kích vào trung tâm Mường Thanh, bắt sống tướng De Castrie và toàn bộ ban tham mưu tập đoàn cứ điểm. Số địch còn lại ở phân khu trung tâm buộc phải đầu hàng, trong khi bộ phận địch ở Hồng Cúm cũng bị truy kích và bắt gọn khi cố gắng rút chạy. Chiến dịch Điện Biên Phủ kết thúc với chiến thắng vang dội của quân và dân ta.`,
        time: `1-7/5/1954`,
        icon: (<FastfoodIcon />),

    },
]