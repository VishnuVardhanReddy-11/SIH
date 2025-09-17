"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { MapPin, Clock, ChevronDown, ChevronUp, Navigation, Star, DollarSign } from "lucide-react"
import { calculateDistance } from "../../lib/distance"

export function MonasteryCard({ monastery, isExpanded, onToggle }) {
  const [userLocation, setUserLocation] = useState({ latitude: null, longitude: null })

  const distance =
    userLocation.latitude && userLocation.longitude
      ? calculateDistance(userLocation.latitude, userLocation.longitude, monastery.latitude, monastery.longitude)
      : null

  const handleGetDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${monastery.latitude},${monastery.longitude}`
    window.open(url, "_blank")
  }

  const monasteryId = monastery.name.toLowerCase().replace(/\s+/g, "-")

  return (
    <div className="card transition-all hover:shadow-md">
      <div className="card-content p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-foreground mb-2">{monastery.name}</h3>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{monastery.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{monastery.timings}</span>
              </div>
              {distance && (
                <div className="flex items-center gap-1 text-primary font-medium">
                  <Navigation className="h-4 w-4" />
                  <span>{distance.toFixed(1)} km away</span>
                </div>
              )}
            </div>
          </div>
          <button onClick={onToggle} className="btn p-2 hover:bg-muted rounded-full transition-colors">
            {isExpanded ? (
              <ChevronUp className="h-5 w-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="h-5 w-5 text-muted-foreground" />
            )}
          </button>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="space-y-6 border-t pt-6">
            {/* Highlights */}
            <div>
              <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                <Star className="h-4 w-4 text-primary" />
                Highlights
              </h4>
              <ul className="space-y-2">
                {monastery.highlights.map((highlight, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tips */}
            <div>
              <h4 className="font-medium text-foreground mb-3">Visitor Tips</h4>
              <ul className="space-y-2">
                {monastery.tips.map((tip, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Entry Fee */}
            <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
              <DollarSign className="h-4 w-4 text-primary" />
              <span className="text-sm">
                <span className="font-medium">Entry Fee:</span> {monastery.entryFee}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              <button onClick={handleGetDirections} className="btn btn-primary flex-1">
                <Navigation className="h-4 w-4 mr-2" />
                Get Directions
              </button>
              <Link to={`/tour/${monasteryId}`} className="btn btn-secondary flex-1 text-center">
                Start Tour
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
