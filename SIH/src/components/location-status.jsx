"use client"

import { useLocation } from "../../hooks/useLocation"
import { MapPin, RefreshCw, AlertCircle } from "lucide-react"
import { useEffect } from "react"

export function LocationStatus({ onLocationUpdate }) {
  const { latitude, longitude, loading, error, permissionDenied, requestLocation } = useLocation()

  useEffect(() => {
    if (latitude && longitude) {
      onLocationUpdate(latitude, longitude)
    }
  }, [latitude, longitude, onLocationUpdate])

  if (loading) {
    return (
      <div className="card mb-6">
        <div className="card-content flex items-center justify-center p-6">
          <RefreshCw className="h-5 w-5 animate-spin mr-2 text-primary" />
          <span className="text-muted-foreground">Getting your location...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="card mb-6 border-destructive/20">
        <div className="card-content p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-destructive mt-0.5" />
            <div className="flex-1">
              <p className="text-sm text-destructive mb-3">{error}</p>
              {permissionDenied && (
                <div className="text-xs text-muted-foreground mb-3">
                  <p>To enable location access:</p>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    <li>Click the location icon in your browser's address bar</li>
                    <li>Select "Allow" for location permissions</li>
                    <li>Refresh the page or click "Try Again" below</li>
                  </ul>
                </div>
              )}
              <button onClick={requestLocation} className="btn btn-primary w-full sm:w-auto bg-transparent">
                <MapPin className="h-4 w-4 mr-2" />
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (latitude && longitude) {
    return (
      <div className="card mb-6 border-primary/20 bg-primary/5">
        <div className="card-content flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Location found - showing nearby monasteries</span>
          </div>
          <button onClick={requestLocation} className="btn text-primary hover:text-primary">
            <RefreshCw className="h-4 w-4" />
          </button>
        </div>
      </div>
    )
  }

  return null
}
