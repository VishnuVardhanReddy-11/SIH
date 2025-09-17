import { Heart, Camera, Volume2, Shirt } from "lucide-react"

export function MonasteryEtiquette() {
  const etiquetteRules = [
    {
      icon: Heart,
      title: "Respect Sacred Spaces",
      description: "Maintain silence in prayer halls and meditation areas. Show reverence for religious ceremonies.",
    },
    {
      icon: Camera,
      title: "Photography Guidelines",
      description:
        "Ask permission before photographing people or sacred objects. Some areas may prohibit photography entirely.",
    },
    {
      icon: Volume2,
      title: "Keep Voices Low",
      description: "Speak softly and avoid loud conversations. Turn off mobile phones or keep them on silent mode.",
    },
    {
      icon: Shirt,
      title: "Dress Modestly",
      description:
        "Wear conservative clothing that covers shoulders and knees. Remove hats and shoes when entering prayer halls.",
    },
  ]

  return (
    <div className="card mb-8">
      <div className="card-header">
        <h3 className="card-title text-center">Respectful Tourism Guidelines</h3>
        <p className="text-center text-muted-foreground text-sm">
          Help preserve the sacred atmosphere of these spiritual places
        </p>
      </div>
      <div className="card-content">
        <div className="grid gap-4 md:grid-cols-2">
          {etiquetteRules.map((rule, index) => {
            const IconComponent = rule.icon
            return (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted">
                <IconComponent className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-sm mb-1">{rule.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{rule.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
