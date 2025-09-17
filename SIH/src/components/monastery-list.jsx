"use client"

import { useState, useMemo } from "react"
import { MonasteryCard } from "./monastery-card"
import { LoadingSkeleton } from "./loading-skeleton"
import { sortMonasteriesByDistance } from "../../lib/distance"

export function MonasteryList({ monasteries, userLatitude, userLongitude, loading = false }) {
  const [expandedCard, setExpandedCard] = useState(null)

  const sortedMonasteries = useMemo(() => {
    if (userLatitude && userLongitude) {
      return sortMonasteriesByDistance(monasteries, userLatitude, userLongitude)
    }
    return monasteries
  }, [monasteries, userLatitude, userLongitude])

  const handleCardToggle = (monasteryName) => {
    setExpandedCard(expandedCard === monasteryName ? null : monasteryName)
  }

  if (loading) {
    return <LoadingSkeleton />
  }

  return (
    <div className="space-y-4">
      {sortedMonasteries.map((monastery) => (
        <MonasteryCard
          key={monastery.name}
          monastery={monastery}
          isExpanded={expandedCard === monastery.name}
          onToggle={() => handleCardToggle(monastery.name)}
        />
      ))}
    </div>
  )
}



