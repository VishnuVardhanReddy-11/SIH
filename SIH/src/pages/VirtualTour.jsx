"use client"

import { useState } from "react"


export default function VirtualTourPage() {
  const [userLocation, setUserLocation] = useState({
    latitude: null,
    longitude: null,
  })

  const handleLocationUpdate = (lat, lon) => {
    setUserLocation({ latitude: lat, longitude: lon })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-background border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Mountain className="h-8 w-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Sikkim Monasteries</h1>
            </div>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              Discover the spiritual heritage of Sikkim through its ancient monasteries. Find nearby sacred places,
              learn about their history, and plan your spiritual journey.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-primary">
              <MapPin className="h-4 w-4" />
              <span>Location-based discovery • Detailed information • Navigation included</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Location Status */}
        <LocationStatus onLocationUpdate={handleLocationUpdate} />

        {/* Etiquette Guidelines */}
        <MonasteryEtiquette />

        {/* Monasteries Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                {userLocation.latitude && userLocation.longitude ? "Nearby Monasteries" : "Featured Monasteries"}
              </h2>
              <p className="text-muted-foreground text-sm">
                {userLocation.latitude && userLocation.longitude
                  ? "Sorted by distance from your location"
                  : "Enable location access to see distances and get personalized recommendations"}
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">{monasteryData.length}</div>
              <div className="text-xs text-muted-foreground">monasteries</div>
            </div>
          </div>

          {/* Monastery Cards */}
          <MonasteryList
            monasteries={monasteryData}
            userLatitude={userLocation.latitude}
            userLongitude={userLocation.longitude}
          />
        </div>

        {/* Footer Info */}
        <Card className="mt-12">
          <CardContent className="p-6 text-center">
            <h3 className="font-semibold text-foreground mb-2">Planning Your Spiritual Journey</h3>
            <p className="text-sm text-muted-foreground text-pretty">
              Each monastery offers unique experiences and spiritual insights. Consider visiting during early morning
              hours for the most peaceful atmosphere. Remember to respect local customs and the sacred nature of these
              places.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
