"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"
import { ArrowLeft, Check, ChevronRight } from "lucide-react"

interface ConfirmFoodProgressScreenProps {
  navigateTo: (screen: string) => void
  username: string
  onConfirm?: (foods: any[]) => void
}

export default function ConfirmFoodProgressScreen({ navigateTo, username, onConfirm }: ConfirmFoodProgressScreenProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [selectedFoods, setSelectedFoods] = useState<any[]>([])
  const [isNutritionModalOpen, setIsNutritionModalOpen] = useState(false)

  // Load selected foods from localStorage on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedFoods = localStorage.getItem("selectedFoods")
      if (storedFoods) {
        setSelectedFoods(JSON.parse(storedFoods))
      }
    }
  }, [])

  // Calculate totals
  const totals = selectedFoods.reduce(
    (acc, food) => {
      const quantity = Number.parseFloat(food.quantity) || 0
      return {
        calories: acc.calories + food.calories * quantity,
        carbs: acc.carbs + food.carbs * quantity,
        protein: acc.protein + food.protein * quantity,
        fat: acc.fat + food.fat * quantity,
        // Add other nutrients that might be in the food database
        fiber: acc.fiber + (food.fiber || 0) * quantity,
        vitaminA: acc.vitaminA + (food.vitaminA || 0) * quantity,
        vitaminC: acc.vitaminC + (food.vitaminC || 0) * quantity,
        vitaminD: acc.vitaminD + (food.vitaminD || 0) * quantity,
        calcium: acc.calcium + (food.calcium || 0) * quantity,
        iron: acc.iron + (food.iron || 0) * quantity,
        folicAcid: acc.folicAcid + (food.folicAcid || 0) * quantity,
      }
    },
    {
      calories: 0,
      carbs: 0,
      protein: 0,
      fat: 0,
      fiber: 0,
      vitaminA: 0,
      vitaminC: 0,
      vitaminD: 0,
      calcium: 0,
      iron: 0,
      folicAcid: 0,
    },
  )

  // Calculate contribution percentages (in a real app, these would be based on user's daily targets)
  const dailyTargets = {
    calories: 2000,
    carbs: 250,
    protein: 60,
    fat: 65,
    fiber: 25,
    vitaminA: 700,
    vitaminC: 85,
    vitaminD: 15,
    calcium: 1000,
    iron: 27,
    folicAcid: 600,
  }

  const contributions = {
    calories: Math.round((totals.calories / dailyTargets.calories) * 100),
    carbs: Math.round((totals.carbs / dailyTargets.carbs) * 100),
    protein: Math.round((totals.protein / dailyTargets.protein) * 100),
    fat: Math.round((totals.fat / dailyTargets.fat) * 100),
  }

  // Format all nutrition items for the detailed modal
  const allNutritionItems = [
    {
      name: "Energi",
      value: totals.calories.toFixed(1),
      unit: "kkal",
      target: dailyTargets.calories,
      percentage: contributions.calories,
    },
    {
      name: "Karbohidrat",
      value: totals.carbs.toFixed(1),
      unit: "g",
      target: dailyTargets.carbs,
      percentage: Math.round((totals.carbs / dailyTargets.carbs) * 100),
    },
    {
      name: "Protein",
      value: totals.protein.toFixed(1),
      unit: "g",
      target: dailyTargets.protein,
      percentage: Math.round((totals.protein / dailyTargets.protein) * 100),
    },
    {
      name: "Lemak",
      value: totals.fat.toFixed(1),
      unit: "g",
      target: dailyTargets.fat,
      percentage: Math.round((totals.fat / dailyTargets.fat) * 100),
    },
    {
      name: "Serat",
      value: totals.fiber.toFixed(1),
      unit: "g",
      target: dailyTargets.fiber,
      percentage: Math.round((totals.fiber / dailyTargets.fiber) * 100),
    },
    {
      name: "Vitamin A",
      value: totals.vitaminA.toFixed(1),
      unit: "mcg",
      target: dailyTargets.vitaminA,
      percentage: Math.round((totals.vitaminA / dailyTargets.vitaminA) * 100),
    },
    {
      name: "Vitamin C",
      value: totals.vitaminC.toFixed(1),
      unit: "mg",
      target: dailyTargets.vitaminC,
      percentage: Math.round((totals.vitaminC / dailyTargets.vitaminC) * 100),
    },
    {
      name: "Vitamin D",
      value: totals.vitaminD.toFixed(1),
      unit: "mcg",
      target: dailyTargets.vitaminD,
      percentage: Math.round((totals.vitaminD / dailyTargets.vitaminD) * 100),
    },
    {
      name: "Kalsium",
      value: totals.calcium.toFixed(1),
      unit: "mg",
      target: dailyTargets.calcium,
      percentage: Math.round((totals.calcium / dailyTargets.calcium) * 100),
    },
    {
      name: "Zat Besi",
      value: totals.iron.toFixed(1),
      unit: "mg",
      target: dailyTargets.iron,
      percentage: Math.round((totals.iron / dailyTargets.iron) * 100),
    },
    {
      name: "Asam Folat",
      value: totals.folicAcid.toFixed(1),
      unit: "mcg",
      target: dailyTargets.folicAcid,
      percentage: Math.round((totals.folicAcid / dailyTargets.folicAcid) * 100),
    },
  ]

  const handleConfirm = () => {
    setIsSubmitting(true)

    // In a real app, this would send the data to a server
    setTimeout(() => {
      // Update nutrition progress in localStorage
      if (typeof window !== "undefined") {
        // Get current progress
        const currentProgress = JSON.parse(localStorage.getItem("nutritionProgress") || "{}")

        // Update with new values
        const updatedProgress = {
          calories: (currentProgress.calories || 0) + totals.calories,
          carbs: (currentProgress.carbs || 0) + totals.carbs,
          protein: (currentProgress.protein || 0) + totals.protein,
          fat: (currentProgress.fat || 0) + totals.fat,
          fiber: (currentProgress.fiber || 0) + totals.fiber,
          vitaminA: (currentProgress.vitaminA || 0) + totals.vitaminA,
          vitaminC: (currentProgress.vitaminC || 0) + totals.vitaminC,
          vitaminD: (currentProgress.vitaminD || 0) + totals.vitaminD,
          calcium: (currentProgress.calcium || 0) + totals.calcium,
          iron: (currentProgress.iron || 0) + totals.iron,
          folicAcid: (currentProgress.folicAcid || 0) + totals.folicAcid,
          lastUpdated: new Date().toISOString(),
        }

        // Save updated progress
        localStorage.setItem("nutritionProgress", JSON.stringify(updatedProgress))
      }

      // If callback provided, pass the selected foods
      if (onConfirm) {
        onConfirm(selectedFoods)
      }

      setIsSubmitting(false)
      setIsSuccess(true)

      // Navigate back to nutrition info after showing success
      setTimeout(() => {
        navigateTo("nutritionInfo")
      }, 1500)
    }, 1000)
  }

  return (
    <div className="flex flex-col h-[600px] w-full max-w-md bg-white rounded-xl overflow-hidden shadow-lg">
      {/* Simple header without profile and notifications */}
      <div className="bg-light-blue p-4 flex items-center">
        <Button
          variant="ghost"
          size="sm"
          className="p-0 mr-2 h-8 w-8"
          onClick={() => navigateTo("addFoodProgress")}
          disabled={isSubmitting || isSuccess}
        >
          <ArrowLeft className="h-5 w-5 text-primary-purple" />
        </Button>
        <div>
          <h1 className="text-lg font-medium text-primary-purple">Konfirmasi Makanan</h1>
          <p className="text-xs text-text-gray">Pastikan data sudah benar</p>
        </div>
      </div>

      <div className="flex-1 p-4 bg-bg-light overflow-y-auto">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="w-16 h-16 rounded-full bg-success-green flex items-center justify-center mb-4">
              <Check className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-lg font-medium text-primary-purple mb-2">Berhasil!</h2>
            <p className="text-sm text-text-gray text-center">Progress gizi harian Anda telah diperbarui</p>
          </div>
        ) : (
          <>
            {selectedFoods.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full">
                <p className="text-sm text-text-gray text-center">
                  Tidak ada makanan yang dipilih. Silakan kembali dan tambahkan makanan.
                </p>
              </div>
            ) : (
              <>
                {/* Selected Foods Summary */}
                <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
                  <h2 className="text-base font-semibold text-primary-purple mb-3">Ringkasan Makanan</h2>

                  <div className="space-y-3 mb-4">
                    {selectedFoods.map((food) => (
                      <div key={food.id} className="flex items-center justify-between p-3 bg-bg-purple rounded-lg">
                        <div>
                          <h3 className="text-sm font-medium">{food.name}</h3>
                          <p className="text-xs text-text-gray">
                            {food.quantity} {food.unit}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">
                            {(Number.parseFloat(food.quantity) * food.calories).toFixed(1)} kkal
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border-gray pt-3">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Total Kalori</span>
                      <span className="text-sm font-medium">{totals.calories.toFixed(1)} kkal</span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Karbohidrat</span>
                      <span className="text-sm">{totals.carbs.toFixed(1)} g</span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Protein</span>
                      <span className="text-sm">{totals.protein.toFixed(1)} g</span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Lemak</span>
                      <span className="text-sm">{totals.fat.toFixed(1)} g</span>
                    </div>
                    <button
                      onClick={() => setIsNutritionModalOpen(true)}
                      className="text-xs text-primary-blue flex items-center mt-2"
                    >
                      Selengkapnya <ChevronRight className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
                  <h2 className="text-base font-semibold text-primary-purple mb-2">Perkiraan Kontribusi</h2>
                  <p className="text-sm text-text-gray mb-3">
                    Makanan ini akan menambah progress gizi harian Anda sebesar:
                  </p>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Energi</span>
                      <span className="text-sm text-primary-blue">+{contributions.calories}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Karbohidrat</span>
                      <span className="text-sm text-primary-blue">+{contributions.carbs}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Protein</span>
                      <span className="text-sm text-primary-blue">+{contributions.protein}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Lemak</span>
                      <span className="text-sm text-primary-blue">+{contributions.fat}%</span>
                    </div>
                  </div>
                </div>

                <Button onClick={handleConfirm} className="w-full bg-primary-purple text-white" disabled={isSubmitting}>
                  {isSubmitting ? "Memproses..." : "Konfirmasi"}
                </Button>
              </>
            )}
          </>
        )}
      </div>

      {/* Detailed Nutrition Modal */}
      <Modal isOpen={isNutritionModalOpen} onClose={() => setIsNutritionModalOpen(false)} title="Detail Gizi Makanan">
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

