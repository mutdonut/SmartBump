"use client"

import MobileHeader from "@/components/mobile-header"
import BottomNavigation from "@/components/bottom-navigation"
import { Button } from "@/components/ui/button"

interface ProfileScreenProps {
  navigateTo: (screen: string) => void
  username: string
}

export default function ProfileScreen({ navigateTo, username }: ProfileScreenProps) {
  const menuItems = [
    {
      title: "Preferensi Bahan Makanan",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
    },
    {
      title: "Kondisi Kesehatan",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      title: "Riwayat Medis",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
    },
  ]

  const infoItems = [
    {
      title: "Tentang Aplikasi",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Bantuan",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Kebijakan Privasi",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  ]

  const handleLogout = () => {
    // In a real app, this would handle the logout process
    navigateTo("login")
  }

  return (
    <div className="flex flex-col h-[800px] w-full max-w-md bg-white rounded-xl overflow-hidden shadow-lg">
      <MobileHeader />

      <div className="bg-light-blue p-4">
        <h1 className="text-lg font-medium text-primary-purple">Profil</h1>
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
            <img src="/placeholder.svg?height=64&width=64" alt="User avatar" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-lg font-medium">User</h2>
            <p className="text-xs text-text-gray">user@example.com</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Pengaturan Umum</h3>
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 border-b border-border-gray"
              onClick={() => {}}
            >
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-bg-purple flex items-center justify-center mr-3">
                  {item.icon}
                </div>
                <span className="text-sm">{item.title}</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-text-gray"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Informasi</h3>
          {infoItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 border-b border-border-gray"
              onClick={() => {}}
            >
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-bg-purple flex items-center justify-center mr-3">
                  {item.icon}
                </div>
                <span className="text-sm">{item.title}</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-text-gray"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          ))}
        </div>

        <Button onClick={handleLogout} className="w-full bg-primary-purple text-white">
          Keluar
        </Button>
      </div>

      <BottomNavigation currentScreen="profile" navigateTo={navigateTo} />
    </div>
  )
}

