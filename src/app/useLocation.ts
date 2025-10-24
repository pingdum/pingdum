import { useEffect, useRef, useState } from 'react'

type GeolocationState = {
  loading: boolean
  accuracy: number | null
  altitude: number | null
  altitudeAccuracy: number | null
  heading: number | null
  latitude: number | null
  longitude: number | null
  speed: number | null
  timestamp: number | null
  permission: PermissionState | null // 'granted' | 'denied' | 'prompt'
  error: GeolocationPositionError | null
}

export function useGeolocation(options: PositionOptions = {}): GeolocationState {
  const [state, setState] = useState<GeolocationState>({
    loading: true,
    accuracy: null,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: null,
    longitude: null,
    speed: null,
    timestamp: null,
    permission: null,
    error: null
  })

  const optionsRef = useRef(options)

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      setState((s) => ({
        ...s,
        loading: false,
        permission: 'denied',
        error: {
          code: 0,
          message: 'Trình duyệt không hỗ trợ Geolocation.',
          PERMISSION_DENIED: 1,
          POSITION_UNAVAILABLE: 2,
          TIMEOUT: 3
        } as GeolocationPositionError
      }))
      return
    }

    const requestLocation = () => {
      const onEvent = (position: GeolocationPosition) => {
        const { coords, timestamp } = position
        setState({
          loading: false,
          timestamp,
          latitude: coords.latitude,
          longitude: coords.longitude,
          altitude: coords.altitude,
          accuracy: coords.accuracy,
          altitudeAccuracy: coords.altitudeAccuracy,
          heading: coords.heading,
          speed: coords.speed,
          permission: 'granted',
          error: null
        })
      }

      const onEventError = (error: GeolocationPositionError) => {
        setState((s) => ({
          ...s,
          loading: false,
          permission: error.code === error.PERMISSION_DENIED ? 'denied' : s.permission,
          error
        }))
      }

      // Gọi để hiển thị prompt (nếu chưa có quyền)
      navigator.geolocation.getCurrentPosition(onEvent, onEventError, optionsRef.current)

      // Theo dõi vị trí liên tục
      const watchId = navigator.geolocation.watchPosition(onEvent, onEventError, optionsRef.current)

      return () => navigator.geolocation.clearWatch(watchId)
    }

    // 🔹 Kiểm tra quyền trước
    if ('permissions' in navigator) {
      navigator.permissions
        .query({ name: 'geolocation' })
        .then((result) => {
          setState((s) => ({ ...s, permission: result.state }))

          if (result.state === 'granted' || result.state === 'prompt') {
            // Nếu đã được cấp hoặc chưa bao giờ cấp (prompt) → gọi để hiển thị prompt
            requestLocation()
          } else if (result.state === 'denied') {
            setState((s) => ({
              ...s,
              loading: false,
              permission: 'denied',
              error: {
                code: 1,
                message: 'Người dùng đã từ chối quyền truy cập vị trí.',
                PERMISSION_DENIED: 1,
                POSITION_UNAVAILABLE: 2,
                TIMEOUT: 3
              } as GeolocationPositionError
            }))
          }

          // Lắng nghe khi quyền thay đổi
          result.onchange = () => {
            setState((s) => ({ ...s, permission: result.state }))
            if (result.state === 'granted') requestLocation()
          }
        })
        .catch(() => {
          // Trình duyệt không hỗ trợ Permissions API
          requestLocation()
        })
    } else {
      // Không có Permissions API → cứ gọi luôn
      requestLocation()
    }
  }, [])

  return state
}
