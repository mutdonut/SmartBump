"use client"

import { useState } from "react"
import MobileHeader from "@/components/mobile-header"
import BottomNavigation from "@/components/bottom-navigation"
import { Button } from "@/components/ui/button"
import HeaderWithProfile from "@/components/header-with-profile"

interface CameraScreenProps {
  navigateTo: (screen: string) => void
}

export default function CameraScreen({ navigateTo }: CameraScreenProps) {
  const [analyzing, setAnalyzing] = useState(false)
  const [foodIdentified, setFoodIdentified] = useState(false)
  const [identifiedFood, setIdentifiedFood] = useState<null | {
    name: string
    calories: number
    carbs: number
    protein: number
    fat: number
  }>(null)

  // Simulate food identification process
  const handleCapture = () => {
    setAnalyzing(true)

    // Simulate API call delay
    setTimeout(() => {
      setAnalyzing(false)
      setFoodIdentified(true)
      setIdentifiedFood({
        name: "Nasi Ayam Bumbu Kecap",
        calories: 350,
        carbs: 45,
        protein: 20,
        fat: 10,
      })
    }, 2000)
  }

  const handleAddToNutrition = () => {
    // In a real app, this would add the food to the user's nutrition log
    navigateTo("nutritionInfo")
  }

  return (
    <div className="flex flex-col h-[600px] w-full max-w-md bg-white rounded-xl overflow-hidden shadow-lg">
      <MobileHeader />

      <HeaderWithProfile
        title="Identifikasi Makanan"
        subtitle="Arahkan kamera ke makanan untuk identifikasi"
        navigateTo={navigateTo}
      />

      <div className="flex-1 flex flex-col">
        {/* Camera Viewfinder */}
        <div className="relative flex-1 bg-black flex items-center justify-center">
          {!analyzing && !foodIdentified && (
            <div className="text-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto mb-2 text-white opacity-70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="text-sm opacity-70">Arahkan kamera ke makanan</p>
            </div>
          )}

          {analyzing && (
            <div className="text-center text-white">
              <div className="w-16 h-16 border-4 border-t-primary-blue border-primary-purple rounded-full animate-spin mx-auto mb-2"></div>
              <p className="text-sm">Menganalisis makanan...</p>
            </div>
          )}

          {foodIdentified && identifiedFood && (
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
              <div className="bg-white rounded-xl p-4 w-5/6 max-w-xs">
                <h3 className="text-lg font-medium text-primary-purple mb-2">{identifiedFood.name}</h3>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Kalori:</span>
                    <span className="font-medium">{identifiedFood.calories} kkal</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Karbohidrat:</span>
                    <span className="font-medium">{identifiedFood.carbs}g</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Protein:</span>
                    <span className="font-medium">{identifiedFood.protein}g</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Lemak:</span>
                    <span className="font-medium">{identifiedFood.fat}g</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button onClick={() => setFoodIdentified(false)} variant="outline" className="flex-1 text-xs">
                    Ulangi
                  </Button>
                  <Button onClick={handleAddToNutrition} className="flex-1 bg-primary-blue text-white text-xs">
                    Tambahkan
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Camera Controls */}
        {!foodIdentified && (
          <div className="bg-black p-4 flex items-center justify-center">
            <button
              onClick={handleCapture}
              className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center"
              disabled={analyzing}
            >
              <div className="w-12 h-12 rounded-full bg-white"></div>
            </button>
          </div>
        )}
      </div>

      <BottomNavigation currentScreen="camera" navigateTo={navigateTo} />
    </div>
  )
}

