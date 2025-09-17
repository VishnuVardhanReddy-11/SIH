"use client"

import { useState, useEffect } from "react"

export function useLocation() {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    loading: false,
    error: null,
    permissionDenied: false,
  })

  const requestLocation = () => {
    if (!navigator.geolocation) {
      setLocation((prev) => ({
        ...prev,
        error: "Geolocation is not supported by this browser.",
        loading: false,
      }))
      return
    }

    setLocation((prev) => ({ ...prev, loading: true, error: null, permissionDenied: false }))

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          loading: false,
          error: null,
          permissionDenied: false,
        })
      },
      (error) => {
        let errorMessage = "Unable to retrieve your location."
        let permissionDenied = false

        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "Location access denied. Please enable location to find nearby monasteries."
            permissionDenied = true
            break
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable."
            break
          case error.TIMEOUT:
            errorMessage = "Location request timed out."
            break
        }

        setLocation({
          latitude: null,
          longitude: null,
          loading: false,
          error: errorMessage,
          permissionDenied,
        })
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000, // 5 minutes
      },
    )
  }

  useEffect(() => {
    requestLocation()
  }, [])

  return {
    ...location,
    requestLocation,
  }
}
