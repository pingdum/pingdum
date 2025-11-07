'use client'
import Image from 'next/image';
import React from 'react';
import { useGeolocation } from './useLocation'

export default function GridAutoDemo() {
  const { loading, latitude, longitude, permission, error, accuracy } = useGeolocation({
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
        <h1>{latitude}, {longitude}, {accuracy}</h1>
      </div>
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
