"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"
import MobileHeader from "@/components/mobile-header"
import BottomNavigation from "@/components/bottom-navigation"
import HeaderWithProfile from "@/components/header-with-profile"
import CircularProgress from "@/components/circular-progress"
import { PlusCircle, ChevronRight } from "lucide-react"

interface NutritionInfoScreenProps {
  navigateTo: (screen: string) => void
  username: string
}

export default function NutritionInfoScreen({ navigateTo, username }: NutritionInfoScreenProps) {
  const [isNutritionModalOpen, setIsNutritionModalOpen] = useState(false)
  const [nutritionData, setNutritionData] = useState({
    calories: { value: 1200, target: 2000, percentage: 60 },
    carbs: { value: 150, target: 250, percentage: 60 },
    protein: { value: 45, target: 60, percentage: 75 },
    fat: { value: 35, target: 65, percentage: 54 },
    fiber: { value: 12, target: 25, percentage: 48 },
    vitaminA: { value: 450, target: 700, percentage: 64 },
    vitaminC: { value: 35, target: 85, percentage: 41 },
    vitaminD: { value: 5, target: 15, percentage: 33 },
    calcium: { value: 500, target: 1000, percentage: 50 },
    iron: { value: 12, target: 27, percentage: 44 },
    folicAcid: { value: 320, target: 600, percentage: 53 },
  })

  // Calculate overall progress
  const overallProgress = Math.round(
    (nutritionData.calories.percentage +
      nutritionData.carbs.percentage +
      nutritionData.protein.percentage +
      nutritionData.fat.percentage) /
      4,
  )

  // Load nutrition progress from localStorage on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedProgress = localStorage.getItem("nutritionProgress")
      if (storedProgress) {
        const progress = JSON.parse(storedProgress)

        // Update nutrition data with stored progress
        setNutritionData((prevData) => {
          const updatedData = { ...prevData }

          if (progress.calories) {
            updatedData.calories.value = progress.calories
            updatedData.calories.percentage = Math.round((progress.calories / updatedData.calories.target) * 100)
          }

          if (progress.carbs) {
            updatedData.carbs.value = progress.carbs
            updatedData.carbs.percentage = Math.round((progress.carbs / updatedData.carbs.target) * 100)
          }

          if (progress.protein) {
            updatedData.protein.value = progress.protein
            updatedData.protein.percentage = Math.round((progress.protein / updatedData.protein.target) * 100)
          }

          if (progress.fat) {
            updatedData.fat.value = progress.fat
            updatedData.fat.percentage = Math.round((progress.fat / updatedData.fat.target) * 100)
          }

          return updatedData
        })
      }
    }
  }, [])

  // Format nutrition items for display
  const nutritionItems = [
    {
      name: "Energi",
      value: nutritionData.calories.value.toFixed(0),
      unit: "kkal",
      target: nutritionData.calories.target,
      percentage: nutritionData.calories.percentage,
    },
    {
      name: "Karbohidrat",
      value: nutritionData.carbs.value.toFixed(0),
      unit: "g",
      target: nutritionData.carbs.target,
      percentage: nutritionData.carbs.percentage,
    },
    {
      name: "Protein",
      value: nutritionData.protein.value.toFixed(0),
      unit: "g",
      target: nutritionData.protein.target,
      percentage: nutritionData.protein.percentage,
    },
    {
      name: "Lemak",
      value: nutritionData.fat.value.toFixed(0),
      unit: "g",
      target: nutritionData.fat.target,
      percentage: nutritionData.fat.percentage,
    },
  ]

  const allNutritionItems = [
    ...nutritionItems,
    {
      name: "Serat",
      value: nutritionData.fiber.value.toFixed(0),
      unit: "g",
      target: nutritionData.fiber.target,
      percentage: nutritionData.fiber.percentage,
    },
    {
      name: "Vitamin A",
      value: nutritionData.vitaminA.value.toFixed(0),
      unit: "mcg",
      target: nutritionData.vitaminA.target,
      percentage: nutritionData.vitaminA.percentage,
    },
    {
      name: "Vitamin C",
      value: nutritionData.vitaminC.value.toFixed(0),
      unit: "mg",
      target: nutritionData.vitaminC.target,
      percentage: nutritionData.vitaminC.percentage,
    },
    {
      name: "Vitamin D",
      value: nutritionData.vitaminD.value.toFixed(0),
      unit: "mcg",
      target: nutritionData.vitaminD.target,
      percentage: nutritionData.vitaminD.percentage,
    },
    {
      name: "Kalsium",
      value: nutritionData.calcium.value.toFixed(0),
      unit: "mg",
      target: nutritionData.calcium.target,
      percentage: nutritionData.calcium.percentage,
    },
    {
      name: "Zat Besi",
      value: nutritionData.iron.value.toFixed(0),
      unit: "mg",
      target: nutritionData.iron.target,
      percentage: nutritionData.iron.percentage,
    },
    {
      name: "Asam Folat",
      value: nutritionData.folicAcid.value.toFixed(0),
      unit: "mcg",
      target: nutritionData.folicAcid.target,
      percentage: nutritionData.folicAcid.percentage,
    },
  ]

  const recommendedRecipes = [
    {
      name: "Nasi Ayam",
      image: "/placeholder.svg?height=60&width=60",
      description: "Bumbu Kecap",
    },
    {
      name: "Kangkung Gizi",
      image: "/placeholder.svg?height=60&width=60",
      description: "Tumis",
    },
    {
      name: "Ayam Goreng",
      image: "/placeholder.svg?height=60&width=60",
      description: "Yogyakarta",
    },
  ]

  return (
    <div className="flex flex-col h-[600px] w-full max-w-md bg-white rounded-xl overflow-hidden shadow-lg">
      <MobileHeader />

      <HeaderWithProfile navigateTo={navigateTo} username={username} />

      <div className="flex-1 p-4 bg-bg-light overflow-y-auto">
        {/* Nutrition Monitor - Updated to single circle with details */}
        <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
          <h2 className="text-base font-semibold text-primary-purple mb-4">Kebutuhan Gizi Harian</h2>

          <div className="flex items-start mb-4">
            <div className="mr-4">
              <CircularProgress percentage={overallProgress} size={100} strokeWidth={10} />
            </div>

            <div className="flex-1">
              {nutritionItems.map((item, index) => (
                <div key={index} className="mb-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">{item.name}</span>
                    <span className="text-xs text-primary-blue">
                      {item.value}/{item.target} {item.unit}
                    </span>
                  </div>
                  <div className="h-2 bg-lighter-blue rounded-full overflow-hidden">
                    <div className="h-full bg-primary-blue rounded-full" style={{ width: `${item.percentage}%` }}></div>
                  </div>
                </div>
              ))}

              <button
                onClick={() => setIsNutritionModalOpen(true)}
                className="text-xs text-primary-blue flex items-center mt-1"
              >
                Selengkapnya <ChevronRight className="h-3 w-3 ml-1" />
              </button>
            </div>
          </div>

          <Button
            onClick={() => navigateTo("addFoodProgress")}
            className="w-full bg-primary-purple text-white flex items-center justify-center gap-2"
          >
            <PlusCircle size={16} />
            Tambah Progress
          </Button>
        </div>

        {/* Recipe Recommendations */}
        <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-base font-semibold text-primary-purple">Rekomendasi Resep</h2>
          </div>

          <div className="space-y-3">
            {recommendedRecipes.map((recipe, index) => (
              <div
                key={index}
                className="flex items-center bg-bg-purple rounded-xl p-3 cursor-pointer"
                onClick={() => navigateTo(`recipeDetail-${index}`)}
              >
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                  <img
                    src={recipe.image || "/placeholder.svg"}
                    alt={recipe.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-medium">{recipe.name}</h3>
                  <p className="text-xs text-text-gray">{recipe.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Button
            onClick={() => navigateTo("recipeList")}
            className="w-full bg-primary-blue text-white mt-3 flex items-center justify-center"
          >
            Lihat Rekomendasi Lainnya
          </Button>
        </div>
      </div>

      <BottomNavigation currentScreen="nutritionInfo" navigateTo={navigateTo} />

      {/* Nutrition Details Modal */}
      <Modal isOpen={isNutritionModalOpen} onClose={() => setIsNutritionModalOpen(false)} title="Detail Kebutuhan Gizi">
        <div className="space-y-3">
          {allNutritionItems.map((item, index) => (
            <div key={index} className="bg-bg-purple p-3 rounded-lg">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">{item.name}</span>
                <span className="text-xs text-primary-blue">
                  {item.value}/{item.target} {item.unit}
                </span>
              </div>
              <div className="h-2 bg-lighter-blue rounded-full overflow-hidden">
                <div className="h-full bg-primary-blue rounded-full" style={{ width: `${item.percentage}%` }}></div>
              </div>
              <div className="flex justify-end mt-1">
                <span className="text-xs text-text-gray">{item.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  )
}

