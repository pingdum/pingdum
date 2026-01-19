import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pingdum - Trang chính thức',
  description: 'Khám phá Pingdum - thông tin, dịch vụ và sản phẩm chính thức. Website chính thức của Pingdum.',
  keywords: ['pingdum', 'pingdum website', 'pingdum official'],
  openGraph: {
    title: 'Pingdum - Trang chính thức',
    description: 'Khám phá Pingdum - thông tin, dịch vụ và sản phẩm chính thức.',
    url: 'https://pingdum.vercel.app',
    siteName: 'Pingdum',
    type: 'website',
    images: [
      {
        url: 'https://pingdum.vercel.app/opengraph-image.jpg', // ✅ bạn có thể tạo ảnh này để hiển thị khi share
        width: 1200,
        height: 630,
        alt: 'Pingdum - Official Website',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pingdum - Trang chính thức',
    description: 'Khám phá Pingdum - thông tin, dịch vụ và sản phẩm chính thức.',
    images: ['https://pingdum.vercel.app/opengraph-image.jpg'],
  },
  alternates: {
    canonical: 'https://pingdum.vercel.app',
  },
  verification: {
    google: 'QIX93DAyP8b3WWbmVXcUraNH2MSrqnI9KBUKm8aJ7ns', // ✅ meta tag xác minh
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
