"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Award } from "lucide-react"

interface Guide {
  id: number
  name: string
  image: string
  experience: number
  specialization: string
  bio: string
  languages: string[]
}

const guides: Guide[] = [
  {
    id: 1,
    name: "Siling Ghale",
    image: "/guides/SilingGhale.jpg",
    experience: 15,
    specialization: "Everest & High Altitude Treks",
    bio: "With over 15 years of experience guiding on Everest Base Camp and other high-altitude treks, Siling is a certified mountaineer and rescue specialist. His deep knowledge of the Khumbu region and exceptional mountaineering skills have made him one of our most trusted guides. Siling is passionate about sharing the rich Sherpa culture and ensuring every trekker has a safe, memorable experience.",
    languages: ["English", "Nepali", "Tibetian"],
  },
  {
    id: 2,
    name: "Kedhar Khadka",
    image: "/guides/KedharKhadka.jpg",
    experience: 18,
    specialization: "Cultural & Village Treks",
    bio: "Kedhar brings authentic cultural experiences to every trek, with 18 years of expertise in village-based trekking and community engagement. His warm personality and deep connections with local communities create meaningful interactions that go beyond typical tourism. Kedhar specializes in Annapurna and Langtang regions, where he shares traditional Nepali customs, local cuisine, and the stories of mountain villages.",
    languages: ["English", "Nepali", "Hindi"],
  },
]

export function GuidesShowcase() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meet Our Expert Guides</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experienced mountaineers and cultural ambassadors dedicated to making your trek unforgettable
          </p>
        </div>

        {/* Guides Cards */}
        <div className="space-y-16">
          {guides.map((guide, index) => (
            <div
              key={guide.id}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Card 1: Image Left, Info Right | Card 2: Info Left, Image Right */}
                {index % 2 === 0 ? (
                  <>
                    {/* Image Left */}
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                      <div className="relative h-96 rounded-lg overflow-hidden shadow-xl border border-gray-200">
                        <img
                          src={guide.image || "/placeholder.svg"}
                          alt={guide.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      </div>
                    </div>

                    {/* Info Right */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">{guide.name}</h3>
                        <p className="text-blue-600 font-semibold text-lg mb-4">{guide.specialization}</p>
                      </div>

                      <div className="flex items-center gap-4 mb-4">
                        
                        <div className="flex items-center gap-2 text-gray-600">
                          <Award size={18} />
                          <span>{guide.experience} years experience</span>
                        </div>
                      </div>

                      <p className="text-gray-600 leading-relaxed text-base">{guide.bio}</p>

                      <div className="flex flex-wrap gap-2 pt-4">
                        {guide.languages.map((lang) => (
                          <span
                            key={lang}
                            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Info Left */}
                    <div className="space-y-4 order-2 md:order-1">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">{guide.name}</h3>
                        <p className="text-purple-600 font-semibold text-lg mb-4">{guide.specialization}</p>
                      </div>

                      <div className="flex items-center gap-4 mb-4">
                        
                        <div className="flex items-center gap-2 text-gray-600">
                          <Award size={18} />
                          <span>{guide.experience} years experience</span>
                        </div>
                      </div>

                      <p className="text-gray-600 leading-relaxed text-base">{guide.bio}</p>

                      <div className="flex flex-wrap gap-2 pt-4">
                        {guide.languages.map((lang) => (
                          <span
                            key={lang}
                            className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Image Right */}
                    <div className="relative group order-1 md:order-2">
                      <div className="absolute inset-0 bg-linear-to-r from-purple-400 to-pink-500 rounded-lg blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                      <div className="relative h-96 rounded-lg overflow-hidden shadow-xl border border-gray-200">
                        <img
                          src={guide.image || "/placeholder.svg"}
                          alt={guide.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
