"use client"

import { useState } from "react"
import MobileHeader from "@/components/mobile-header"
import BottomNavigation from "@/components/bottom-navigation"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import HeaderWithProfile from "@/components/header-with-profile"

interface ChildMonitorScreenProps {
  navigateTo: (screen: string) => void
  setSelectedChild?: (child: any) => void
  username: string
}

export default function ChildMonitorScreen({ navigateTo, setSelectedChild, username }: ChildMonitorScreenProps) {
  const [children, setChildren] = useState<any[]>([])
  const [showAddForm, setShowAddForm] = useState(false)
  const [newChildName, setNewChildName] = useState("")

  const handleAddChild = () => {
    if (newChildName.trim()) {
      const newChild = {
        id: Date.now(),
        name: newChildName,
        image: "/placeholder.svg?height=80&width=80",
        week: Math.floor(Math.random() * 40) + 1, // Random week between 1-40
      }
      setChildren([...children, newChild])
      setNewChildName("")
      setShowAddForm(false)
    }
  }

  const handleSelectChild = (child: any) => {
    // In a real app, we would store the selected child in a global state
    // For this demo, we'll just navigate to the child detail screen
    if (setSelectedChild) {
      setSelectedChild(child)
    }
    navigateTo("childDetail")
  }

  return (
    <div className="flex flex-col h-[600px] w-full max-w-md bg-white rounded-xl overflow-hidden shadow-lg">
      <MobileHeader />

      <HeaderWithProfile navigateTo={navigateTo} username={username} />

      <div className="flex-1 p-4 overflow-y-auto">
        {children.length === 0 && !showAddForm ? (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="w-24 h-24 rounded-full bg-bg-purple flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-primary-purple"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <p className="text-center text-text-gray mb-6">
              Belum ada data anak. Tambahkan data anak untuk memantau perkembangannya.
            </p>
            <Button
              onClick={() => setShowAddForm(true)}
              className="bg-primary-purple text-white flex items-center gap-2"
            >
              <PlusCircle size={16} />
              Tambah Anak
            </Button>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <h2 className="text-sm font-medium mb-2">Daftar Anak</h2>

              {children.map((child) => (
                <div
                  key={child.id}
                  className="flex items-center p-3 rounded-xl mb-3 border border-border-gray bg-white cursor-pointer hover:bg-bg-purple transition-colors"
                  onClick={() => handleSelectChild(child)}
                >
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                    <img
                      src={child.image || "/placeholder.svg"}
                      alt={child.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{child.name}</h3>
                    <p className="text-xs text-text-gray">Minggu ke-{child.week}</p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-text-gray"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              ))}

              {!showAddForm && (
                <Button
                  onClick={() => setShowAddForm(true)}
                  className="w-full bg-bg-purple text-primary-purple flex items-center justify-center gap-2 mt-4"
                >
                  <PlusCircle size={16} />
                  Tambah Anak Lainnya
                </Button>
              )}
            </div>
          </>
        )}

        {showAddForm && (
          <div className="bg-bg-purple rounded-xl p-4 mb-4">
            <h3 className="text-sm font-medium mb-3">Tambah Data Anak</h3>
            <div className="mb-3">
              <label htmlFor="childName" className="block text-xs text-text-gray mb-1">
                Nama Anak
              </label>
              <input
                type="text"
                id="childName"
                value={newChildName}
                onChange={(e) => setNewChildName(e.target.value)}
                className="w-full p-2 rounded-lg border border-border-gray"
                placeholder="Masukkan nama anak"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setShowAddForm(false)} className="flex-1">
                Batal
              </Button>
              <Button
                onClick={handleAddChild}
                className="flex-1 bg-primary-purple text-white"
                disabled={!newChildName.trim()}
              >
                Simpan
              </Button>
            </div>
          </div>
        )}
      </div>

      <BottomNavigation currentScreen="childMonitor" navigateTo={navigateTo} />
    </div>
  )
}

