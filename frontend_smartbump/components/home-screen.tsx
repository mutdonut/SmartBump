"use client"

import MobileHeader from "@/components/mobile-header"
import BottomNavigation from "@/components/bottom-navigation"
import HeaderWithProfile from "@/components/header-with-profile"
import { Search } from "lucide-react"

interface HomeScreenProps {
  navigateTo: (screen: string) => void
  username: string
}

export default function HomeScreen({ navigateTo, username }: HomeScreenProps) {
  const newsItems = [
    {
      id: 1,
      title: "Pentingnya Asupan Protein untuk Ibu Hamil",
      image: "/placeholder.svg?height=120&width=200",
      date: "2 jam yang lalu",
      url: "https://example.com/news/protein-ibu-hamil",
    },
    {
      id: 2,
      title: "Mencegah Stunting Sejak Dini",
      image: "/placeholder.svg?height=120&width=200",
      date: "5 jam yang lalu",
      url: "https://example.com/news/mencegah-stunting",
    },
    {
      id: 3,
      title: "Makanan Bergizi untuk Tumbuh Kembang Optimal",
      image: "/placeholder.svg?height=120&width=200",
      date: "1 hari yang lalu",
      url: "https://example.com/news/makanan-bergizi",
    },
  ]

  const educationItems = [
    {
      id: 1,
      title: "Mengenal Stunting dan Cara Pencegahannya",
      image: "/placeholder.svg?height=120&width=200",
      duration: "5 menit",
      url: "https://example.com/education/stunting",
    },
    {
      id: 2,
      title: "Nutrisi Penting untuk Ibu Hamil",
      image: "/placeholder.svg?height=120&width=200",
      duration: "7 menit",
      url: "https://example.com/education/nutrisi-ibu-hamil",
    },
    {
      id: 3,
      title: "Pola Makan Sehat untuk Mencegah Stunting",
      image: "/placeholder.svg?height=120&width=200",
      duration: "4 menit",
      url: "https://example.com/education/pola-makan-sehat",
    },
  ]

  const handleOpenExternalLink = (url: string) => {
    // In a real app, this would open the URL in a browser
    window.open(url, "_blank")
  }

  return (
    <div className="flex flex-col h-[800px] w-full max-w-md bg-white rounded-xl overflow-hidden shadow-lg">
      <MobileHeader />

      <HeaderWithProfile navigateTo={navigateTo} username={username} />

      {/* Add padding-bottom to ensure content doesn't get hidden behind the bottom navigation */}
      <div className="flex-1 p-4 pb-16 overflow-y-auto">
        {/* Search Bar - Updated Style */}
        <div className="relative mb-6">
          <div className="bg-bg-purple rounded-full flex items-center p-1 pr-4">
            <div className="bg-white rounded-full p-2 mr-2">
              <Search className="h-5 w-5 text-primary-purple" />
            </div>
            <input
              type="text"
              placeholder="Cari topik seputar gizi dan stunting..."
              className="bg-transparent border-none flex-1 text-sm focus:outline-none"
            />
          </div>
        </div>

        {/* News Carousel - Updated Style */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-base font-semibold text-primary-purple">Berita Gizi & Stunting</h2>
            <span className="text-xs text-primary-blue cursor-pointer font-medium">Lihat Semua</span>
          </div>

          <div className="overflow-x-auto pb-2 -mx-4 px-4">
            <div className="flex space-x-4">
              {newsItems.map((item) => (
                <div
                  key={item.id}
                  className="min-w-[260px] bg-white rounded-xl shadow-sm overflow-hidden border border-border-gray cursor-pointer"
                  onClick={() => handleOpenExternalLink(item.url)}
                >
                  <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-32 object-cover" />
                  <div className="p-3">
                    <h3 className="text-sm font-medium line-clamp-2 mb-1">{item.title}</h3>
                    <p className="text-xs text-text-gray">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Carousel - Updated Style */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-base font-semibold text-primary-purple">Edukasi Gizi & Stunting</h2>
            <span className="text-xs text-primary-blue cursor-pointer font-medium">Lihat Semua</span>
          </div>

          <div className="overflow-x-auto pb-2 -mx-4 px-4">
            <div className="flex space-x-4">
              {educationItems.map((item) => (
                <div
                  key={item.id}
                  className="min-w-[260px] bg-white rounded-xl shadow-sm overflow-hidden border border-border-gray cursor-pointer"
                  onClick={() => handleOpenExternalLink(item.url)}
                >
                  <div className="relative">
                    <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-32 object-cover" />
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-3 py-1 rounded-full">
                      {item.duration}
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-medium line-clamp-2">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <BottomNavigation currentScreen="home" navigateTo={navigateTo} />
    </div>
  )
}

