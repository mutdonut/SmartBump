"use client"

import MobileHeader from "@/components/mobile-header"
import BottomNavigation from "@/components/bottom-navigation"
import HeaderWithProfile from "@/components/header-with-profile"
import { Button } from "@/components/ui/button"

interface MedicalStaffScreenProps {
  navigateTo: (screen: string) => void
  username: string
}

export default function MedicalStaffScreen({ navigateTo, username }: MedicalStaffScreenProps) {
  const medicalStaff = [
    {
      id: 1,
      name: "dr. Jane Doe, Sp.OG",
      specialty: "Dokter Spesialis Kandungan",
      hospital: "RS Bunda",
      image: "/placeholder.svg?height=80&width=80",
      available: true,
    },
    {
      id: 2,
      name: "dr. John Smith",
      specialty: "Dokter Umum",
      hospital: "Klinik Sehat",
      image: "/placeholder.svg?height=80&width=80",
      available: true,
    },
    {
      id: 3,
      name: "Bidan Sarah",
      specialty: "Bidan",
      hospital: "Praktik Mandiri Bidan",
      image: "/placeholder.svg?height=80&width=80",
      available: false,
    },
  ]

  return (
    <div className="flex flex-col h-[800px] w-full max-w-md bg-white rounded-xl overflow-hidden shadow-lg">
      <MobileHeader />

      <HeaderWithProfile
        title="Tenaga Medis"
        subtitle="Konsultasi dengan tenaga medis terpercaya"
        navigateTo={navigateTo}
        username={username}
      />

      <div className="flex-1 p-4 overflow-y-auto">
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari tenaga medis..."
              className="w-full p-3 pl-10 rounded-lg border border-border-gray"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-text-gray absolute left-3 top-1/2 transform -translate-y-1/2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="space-y-4">
          {medicalStaff.map((staff) => (
            <div key={staff.id} className="bg-white rounded-xl p-4 border border-border-gray">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                  <img
                    src={staff.image || "/placeholder.svg"}
                    alt={staff.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium">{staff.name}</h3>
                  <p className="text-xs text-text-gray">{staff.specialty}</p>
                  <p className="text-xs text-text-gray">{staff.hospital}</p>
                </div>
                <div
                  className={`px-2 py-1 rounded-full text-xs ${staff.available ? "bg-success-green text-white" : "bg-border-gray text-text-gray"}`}
                >
                  {staff.available ? "Online" : "Offline"}
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1 text-xs" onClick={() => navigateTo("profile")}>
                  Lihat Profil
                </Button>
                <Button
                  className={`flex-1 text-xs ${staff.available ? "bg-primary-blue text-white" : "bg-border-gray text-text-gray"}`}
                  disabled={!staff.available}
                  onClick={() => navigateTo("chatbot")}
                >
                  Konsultasi
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNavigation currentScreen="home" navigateTo={navigateTo} />
    </div>
  )
}

