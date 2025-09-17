"use client"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft, MapPin, Clock, Star, Camera, Coffee } from "lucide-react"
import monasteryData from "../../data/monasteries.json"

const TourDetail = () => {
  const { id } = useParams()
  const monastery = monasteryData.find((m) => m.name.toLowerCase().replace(/\s+/g, "-") === id)

  if (!monastery) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Monastery Not Found</h1>
          <Link to="/virtual-tour" className="btn btn-primary">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Virtual Tour
          </Link>
        </div>
      </div>
    )
  }

  // Points of interest for Rumtek (example implementation)
  const rumtekPoints = [
    "Parking Area",
    "Main Entrance",
    "Sacred Pillar",
    "Entrance to Rumtek Chakra Centre",
    "Four Heavenly Kings Mural",
    "Thangka Painting Gallery",
    "Scenic View Point",
    "Inside of the Main Temple",
  ]

  const partnerRestaurants = [
    {
      name: "One Two One Coffee",
      description: "Authentic local coffee and light refreshments",
      icon: <Coffee className="h-5 w-5" />,
    },
    {
      name: "Rumtek Lounge",
      description: "Traditional Sikkimese cuisine and beverages",
      icon: <Coffee className="h-5 w-5" />,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-b from-primary/5 to-background border-b">
        <div className="container mx-auto px-4 py-8">
          <Link to="/virtual-tour" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Virtual Tour
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-4">{monastery.name}</h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{monastery.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{monastery.timings}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Monastery Image */}
        <div className="mb-8">
          <img
            src="/rumtek-monastery-sikkim-traditional-tibetan-archit.jpg"
            alt={monastery.name}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Points of Interest */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Camera className="h-6 w-6 text-primary" />
            Points of Interest
          </h2>
          <div className="grid gap-4">
            {(monastery.name === "Rumtek Monastery"
              ? rumtekPoints
              : ["Coming Soon - Tour details will be available soon"]
            ).map((point, index) => (
              <div key={index} className="card">
                <div className="card-content p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="font-medium text-foreground">{point}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Restaurants */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Coffee className="h-6 w-6 text-primary" />
            Our Partner Restaurants
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {partnerRestaurants.map((restaurant, index) => (
              <div key={index} className="card">
                <div className="card-content p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                      {restaurant.icon}
                    </div>
                    <h3 className="font-semibold text-foreground">{restaurant.name}</h3>
                  </div>
                  <p className="text-muted-foreground">{restaurant.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monastery Details */}
        <div className="card">
          <div className="card-content p-6">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" />
              About This Monastery
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-foreground mb-2">Highlights</h4>
                <ul className="text-muted-foreground space-y-1">
                  {monastery.highlights.map((highlight, index) => (
                    <li key={index}>• {highlight}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Visitor Tips</h4>
                <ul className="text-muted-foreground space-y-1">
                  {monastery.tips.map((tip, index) => (
                    <li key={index}>• {tip}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Entry Fee</h4>
                <p className="text-muted-foreground">{monastery.entryFee}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourDetail;
