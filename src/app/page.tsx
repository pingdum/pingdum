'use client'
import Image from 'next/image';
import React from 'react';
import { useGeolocation } from './useLocation'

export default function GridAutoDemo() {
  const { loading, latitude, longitude, permission, error } = useGeolocation({
    enableHighAccuracy: true
  })

  if (permission === 'denied')
    return <p>❌ Bạn đã từ chối quyền truy cập vị trí. Hãy bật lại trong cài đặt trình duyệt.</p>

  if (loading) return <p>⏳ Đang lấy vị trí...</p>

  if (error) return <p>⚠️ Lỗi: {error.message}</p>

  if (permission === 'prompt') return <p>🔔 Vui lòng cho phép truy cập vị trí.</p>
  return (
    <div className="grid-container" style={{ padding: '24px' }}>
      <div>
        <h1>Pingdum {latitude}, {longitude}</h1>

        <p>
          <strong>Pingdum</strong> là một công ty công nghệ nổi bật trong lĩnh vực giám sát và tối ưu hóa hiệu suất
          website. Với sứ mệnh giúp các doanh nghiệp và tổ chức duy trì và cải thiện chất lượng trải nghiệm người dùng
          trực tuyến, Pingdum cung cấp các công cụ và giải pháp mạnh mẽ để theo dõi hoạt động của website trong thời
          gian thực.
        </p>

        <p>
          Pingdum sử dụng công nghệ tiên tiến để theo dõi và phân tích các chỉ số quan trọng của website như tốc độ tải
          trang, thời gian phản hồi của máy chủ, và tình trạng hoạt động của các dịch vụ trực tuyến. Nhờ vào hệ thống
          giám sát toàn diện, người dùng có thể dễ dàng phát hiện các vấn đề tiềm ẩn và xử lý kịp thời trước khi ảnh
          hưởng đến trải nghiệm của người dùng cuối.
        </p>

        <p>
          Một trong những tính năng nổi bật của Pingdum là khả năng cung cấp các báo cáo chi tiết và phân tích xu hướng
          theo thời gian. Điều này không chỉ giúp các quản trị viên web nhận diện được những điểm yếu của trang web mà
          còn giúp họ đưa ra các biện pháp cải thiện hiệu suất trong tương lai. Hệ thống báo cáo của Pingdum cũng hỗ trợ
          nhiều biểu đồ và thống kê dễ hiểu, giúp việc theo dõi và đánh giá trở nên trực quan hơn bao giờ hết.
        </p>

        <p>
          Ngoài ra, Pingdum còn hỗ trợ tích hợp với các dịch vụ và nền tảng phổ biến như Google Analytics, Slack và các
          công cụ phát triển web khác. Điều này mang lại sự linh hoạt cho các doanh nghiệp trong việc tùy chỉnh các công
          cụ giám sát theo nhu cầu và quy mô hoạt động của họ.
        </p>

        <p>
          <strong>Pingdum</strong> không chỉ đơn thuần là một công cụ giám sát website, mà còn là một đối tác chiến lược
          cho những ai mong muốn nâng cao hiệu quả hoạt động trực tuyến. Với đội ngũ phát triển sáng tạo và cam kết đem
          đến sự hài lòng tuyệt đối cho khách hàng, Pingdum đang dần khẳng định vị thế của mình trên thị trường.
        </p>

        <p>
          Với những tính năng vượt trội và mức độ tin cậy cao, Pingdum đang trở thành lựa chọn lý tưởng của nhiều doanh
          nghiệp đang tìm kiếm một giải pháp giám sát hiệu quả và dễ sử dụng. Nếu bạn đang đối mặt với những thách thức
          về tối ưu hóa hiệu suất website, Pingdum chắc chắn là công cụ không thể thiếu để nâng cao hiệu quả công việc
          của bạn.
        </p>

        <div>
          <Image src="/pingdum.png" alt="Pingdum" width={600} height={400} />
        </div>
      </div>
      <header>
        <h1 style={{ marginBottom: '16px' }}>Demo Grid Auto Layout</h1>
      </header>
      <section>
        <h2 style={{ marginBottom: '16px' }}>Grid Auto Fill (có thể để cột trống)</h2>
        <div className="grid grid-auto-fill grid-gap-md" style={gridBoxStyle}>
          <div style={cardStyle} aria-label="Card 1">
            1
          </div>
          <div style={cardStyle} aria-label="Card 2">
            2
          </div>
          <div style={cardStyle} aria-label="Card 3">
            3
          </div>
        </div>
      </section>
      <section>
        <h2 style={{ margin: '40px 0 16px' }}>Grid Auto Fit (co giãn full chiều ngang)</h2>
        <div className="grid grid-auto-fit grid-gap-md" style={gridBoxStyle}>
          <div style={cardStyle} aria-label="Card 1">
            1
          </div>
          <div style={cardStyle} aria-label="Card 2">
            2
          </div>
          <div style={cardStyle} aria-label="Card 3">
            3
          </div>
        </div>
      </section>
    </div>
  );
}

const gridBoxStyle: React.CSSProperties = {
  border: '2px dashed #ccc',
  padding: '12px',
  background: '#fafafa',
};

const cardStyle: React.CSSProperties = {
  background: '#4A90E2',
  color: 'white',
  padding: '40px 0',
  textAlign: 'center',
  fontSize: '20px',
  borderRadius: '8px',
};
