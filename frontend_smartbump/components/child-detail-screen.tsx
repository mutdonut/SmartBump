"use client"

import MobileHeader from "@/components/mobile-header"
import BottomNavigation from "@/components/bottom-navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface ChildDetailScreenProps {
  navigateTo: (screen: string) => void
  selectedChild: any
  username: string
}

export default function ChildDetailScreen({ navigateTo, selectedChild, username }: ChildDetailScreenProps) {
  const milestones = [
    "Bayi sudah bisa mendengar suara dari luar",
    "Paru-paru mulai berkembang",
    "Gerakan bayi semakin aktif",
    "Pembentukan sidik jari sudah sempurna",
  ]

  const childMetrics = [
    {
      id: 1,
      title: "Perkembangan Anak",
      description: `Minggu ke-${selectedChild?.week || 24}`,
      image: "/placeholder.svg?height=80&width=120",
    },
    {
      id: 2,
      title: "Berat Badan",
      description: "650 gram",
      image: "/placeholder.svg?height=80&width=120",
    },
    {
      id: 3,
      title: "Panjang Bayi",
      description: "30 cm",
      image: "/placeholder.svg?height=80&width=120",
    },
  ]

  return (
    <div className="flex flex-col h-[600px] w-full max-w-md bg-white rounded-xl overflow-hidden shadow-lg">
      <MobileHeader />

      <div className="bg-light-blue p-4 flex items-center justify-between">
        <div className="flex items-center">
          <Button variant="ghost" size="sm" className="p-0 mr-2 h-8 w-8" onClick={() => navigateTo("childMonitor")}>
            <ArrowLeft className="h-5 w-5 text-primary-purple" />
          </Button>
          <div>
            <h1 className="text-lg font-medium text-primary-purple">{selectedChild?.name || "Anak"}</h1>
            <p className="text-xs text-text-gray">Minggu ke-{selectedChild?.week || 24}</p>
          </div>
        </div>

        {/* Profile Picture */}
        <div
          className="w-8 h-8 rounded-full bg-primary-purple flex items-center justify-center cursor-pointer"
          onClick={() => navigateTo("profile")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        <div className="bg-bg-purple rounded-xl p-4 mb-4">
          <h2 className="text-sm font-medium mb-2">Milestone Perkembangan</h2>
          <ul className="space-y-2">
            {milestones.map((milestone, index) => (
              <li key={index} className="flex items-start">
                <div className="w-4 h-4 rounded-full bg-primary-blue mt-0.5 mr-2 flex-shrink-0"></div>
                <span className="text-xs">{milestone}</span>
              </li>
            ))}
          </ul>
        </div>

        {childMetrics.map((metric) => (
          <div key={metric.id} className="flex items-center p-3 rounded-xl mb-3 border border-border-gray bg-white">
            <div className="w-20 h-16 rounded-lg overflow-hidden mr-3">
              <img src={metric.image || "/placeholder.svg"} alt={metric.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium">{metric.title}</h3>
              <p className="text-xs text-text-gray">{metric.description}</p>
            </div>
          </div>
        ))}

        <div className="bg-white rounded-xl p-4 border border-border-gray">
          <h2 className="text-sm font-medium mb-2">Jadwal Pemeriksaan</h2>
          <div className="flex items-center justify-between bg-lighter-blue p-3 rounded-lg">
            <div>
              <p className="text-xs font-medium">Pemeriksaan USG</p>
              <p className="text-xs text-text-gray">15 April 2025</p>
            </div>
            <div className="bg-primary-purple text-white text-xs px-3 py-1 rounded-full">2 minggu lagi</div>
          </div>
        </div>
      </div>

      <BottomNavigation currentScreen="childMonitor" navigateTo={navigateTo} />
    </div>
  )
}

