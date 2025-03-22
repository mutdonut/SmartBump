"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"
import { ArrowLeft, Clock, Users, ChevronRight } from "lucide-react"

interface RecipeDetailScreenProps {
  navigateTo: (screen: string) => void
  recipeId: number
}

export default function RecipeDetailScreen({ navigateTo, recipeId }: RecipeDetailScreenProps) {
  const [isNutritionModalOpen, setIsNutritionModalOpen] = useState(false)

  // In a real app, this would come from an API or database
  const recipes = [
    {
      id: 0,
      name: "Nasi Ayam Bumbu Kecap",
      image: "/placeholder.svg?height=200&width=350",
      description: "Hidangan lezat dengan ayam yang dimasak dengan bumbu kecap manis dan rempah-rempah.",
      prepTime: "15 menit",
      cookTime: "30 menit",
      servings: 4,
      calories: 450,
      carbs: 45,
      protein: 30,
      fat: 15,
      fiber: 3,
      vitaminA: 120,
      vitaminC: 15,
      vitaminD: 2,
      calcium: 80,
      iron: 4,
      folicAcid: 60,
      ingredients: [
        "500g ayam potong",
        "3 siung bawang putih, cincang halus",
        "5 siung bawang merah, iris tipis",
        "2 sdm kecap manis",
        "1 sdm saus tiram",
        "1 sdt gula merah",
        "1/2 sdt merica bubuk",
        "1 batang serai, memarkan",
        "2 lembar daun salam",
        "2 cm jahe, memarkan",
        "Garam secukupnya",
        "2 sdm minyak untuk menumis",
        "200ml air",
      ],
      steps: [
        "Panaskan minyak, tumis bawang merah dan bawang putih hingga harum.",
        "Masukkan serai, daun salam, dan jahe. Tumis sebentar.",
        "Tambahkan ayam, aduk hingga berubah warna.",
        "Masukkan kecap manis, saus tiram, gula merah, merica, dan garam. Aduk rata.",
        "Tuang air, masak dengan api kecil hingga ayam matang dan bumbu  dan garam. Aduk rata.",
        "Tuang air, masak dengan api kecil hingga ayam matang dan bumbu meresap.",
        "Koreksi rasa, angkat dan sajikan dengan nasi putih hangat.",
      ],
    },
    {
      id: 1,
      name: "Tumis Kangkung Gizi",
      image: "/placeholder.svg?height=200&width=350",
      description: "Sayur kangkung yang ditumis dengan bumbu sederhana namun kaya nutrisi.",
      prepTime: "10 menit",
      cookTime: "5 menit",
      servings: 3,
      calories: 120,
      carbs: 15,
      protein: 5,
      fat: 6,
      fiber: 4,
      vitaminA: 200,
      vitaminC: 30,
      vitaminD: 0,
      calcium: 120,
      iron: 3,
      folicAcid: 80,
      ingredients: [
        "2 ikat kangkung, petik daunnya",
        "4 siung bawang merah, iris tipis",
        "3 siung bawang putih, cincang halus",
        "5 buah cabai merah, iris serong",
        "1 sdm saus tiram",
        "1/2 sdt gula pasir",
        "Garam secukupnya",
        "2 sdm minyak untuk menumis",
        "100ml air",
      ],
      steps: [
        "Cuci bersih kangkung, tiriskan.",
        "Panaskan minyak, tumis bawang merah dan bawang putih hingga harum.",
        "Masukkan cabai, tumis sebentar.",
        "Tambahkan kangkung, aduk rata.",
        "Masukkan saus tiram, gula, garam, dan air. Aduk rata.",
        "Masak sebentar hingga kangkung layu tapi masih renyah.",
        "Angkat dan sajikan.",
      ],
    },
    {
      id: 2,
      name: "Ayam Goreng Yogyakarta",
      image: "/placeholder.svg?height=200&width=350",
      description: "Ayam goreng dengan bumbu rempah khas Yogyakarta yang gurih dan lezat.",
      prepTime: "30 menit",
      cookTime: "20 menit",
      servings: 4,
      calories: 380,
      carbs: 10,
      protein: 35,
      fat: 22,
      fiber: 1,
      vitaminA: 80,
      vitaminC: 5,
      vitaminD: 1,
      calcium: 60,
      iron: 5,
      folicAcid: 40,
      ingredients: [
        "1 ekor ayam, potong 8 bagian",
        "6 siung bawang merah",
        "4 siung bawang putih",
        "3 butir kemiri, sangrai",
        "2 cm kunyit, bakar",
        "1 cm jahe",
        "1 sdt ketumbar bubuk",
        "2 lembar daun salam",
        "2 batang serai, memarkan",
        "3 lembar daun jeruk",
        "Garam secukupnya",
        "Minyak untuk menggoreng",
        "500ml air kelapa",
      ],
      steps: [
        "Haluskan bawang merah, bawang putih, kemiri, kunyit, jahe, dan ketumbar.",
        "Tumis bumbu halus hingga harum, masukkan daun salam, serai, dan daun jeruk.",
        "Masukkan ayam, aduk rata dengan bumbu.",
        "Tuang air kelapa, tambahkan garam. Masak hingga ayam empuk dan bumbu meresap.",
        "Angkat ayam, tiriskan.",
        "Goreng ayam dalam minyak panas hingga kecokelatan.",
        "Angkat dan sajikan dengan lalapan dan sambal.",
      ],
    },
  ]

  const recipe = recipes[recipeId] || recipes[0]

  // Format nutrition items for the detailed modal
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

  const nutritionItems = [
    {
      name: "Energi",
      value: recipe.calories,
      unit: "kkal",
      target: dailyTargets.calories,
      percentage: Math.round((recipe.calories / dailyTargets.calories) * 100),
    },
    {
      name: "Karbohidrat",
      value: recipe.carbs,
      unit: "g",
      target: dailyTargets.carbs,
      percentage: Math.round((recipe.carbs / dailyTargets.carbs) * 100),
    },
    {
      name: "Protein",
      value: recipe.protein,
      unit: "g",
      target: dailyTargets.protein,
      percentage: Math.round((recipe.protein / dailyTargets.protein) * 100),
    },
    {
      name: "Lemak",
      value: recipe.fat,
      unit: "g",
      target: dailyTargets.fat,
      percentage: Math.round((recipe.fat / dailyTargets.fat) * 100),
    },
    {
      name: "Serat",
      value: recipe.fiber,
      unit: "g",
      target: dailyTargets.fiber,
      percentage: Math.round((recipe.fiber / dailyTargets.fiber) * 100),
    },
    {
      name: "Vitamin A",
      value: recipe.vitaminA,
      unit: "mcg",
      target: dailyTargets.vitaminA,
      percentage: Math.round((recipe.vitaminA / dailyTargets.vitaminA) * 100),
    },
    {
      name: "Vitamin C",
      value: recipe.vitaminC,
      unit: "mg",
      target: dailyTargets.vitaminC,
      percentage: Math.round((recipe.vitaminC / dailyTargets.vitaminC) * 100),
    },
    {
      name: "Vitamin D",
      value: recipe.vitaminD,
      unit: "mcg",
      target: dailyTargets.vitaminD,
      percentage: Math.round((recipe.vitaminD / dailyTargets.vitaminD) * 100),
    },
    {
      name: "Kalsium",
      value: recipe.calcium,
      unit: "mg",
      target: dailyTargets.calcium,
      percentage: Math.round((recipe.calcium / dailyTargets.calcium) * 100),
    },
    {
      name: "Zat Besi",
      value: recipe.iron,
      unit: "mg",
      target: dailyTargets.iron,
      percentage: Math.round((recipe.iron / dailyTargets.iron) * 100),
    },
    {
      name: "Asam Folat",
      value: recipe.folicAcid,
      unit: "mcg",
      target: dailyTargets.folicAcid,
      percentage: Math.round((recipe.folicAcid / dailyTargets.folicAcid) * 100),
    },
  ]

  return (
    <div className="flex flex-col h-[600px] w-full max-w-md bg-white rounded-xl overflow-hidden shadow-lg">
      {/* Simple header without profile and notifications */}
      <div className="bg-light-blue p-4 flex items-center">
        <Button variant="ghost" size="sm" className="p-0 mr-2 h-8 w-8" onClick={() => navigateTo("nutritionInfo")}>
          <ArrowLeft className="h-5 w-5 text-primary-purple" />
        </Button>
        <div>
          <h1 className="text-lg font-medium text-primary-purple">{recipe.name}</h1>
          <p className="text-xs text-text-gray">Tutorial memasak</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <img src={recipe.image || "/placeholder.svg"} alt={recipe.name} className="w-full h-48 object-cover" />

        <div className="p-4">
          <p className="text-sm text-text-gray mb-4">{recipe.description}</p>

          <div className="flex justify-between mb-4">
            <div className="flex items-center">
              <Clock className="h-4 w-4 text-primary-purple mr-1" />
              <span className="text-xs">
                {recipe.prepTime} + {recipe.cookTime}
              </span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 text-primary-purple mr-1" />
              <span className="text-xs">{recipe.servings} porsi</span>
            </div>
          </div>

          <div className="bg-bg-purple p-3 rounded-lg mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-medium">Informasi Gizi (per porsi)</h3>
              <button
                onClick={() => setIsNutritionModalOpen(true)}
                className="text-xs text-primary-blue flex items-center"
              >
                Selengkapnya <ChevronRight className="h-3 w-3 ml-1" />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div className="text-center">
                <p className="text-xs font-medium">{recipe.calories}</p>
                <p className="text-xs text-text-gray">kkal</p>
              </div>
              <div className="text-center">
                <p className="text-xs font-medium">{recipe.carbs}g</p>
                <p className="text-xs text-text-gray">Karbo</p>
              </div>
              <div className="text-center">
                <p className="text-xs font-medium">{recipe.protein}g</p>
                <p className="text-xs text-text-gray">Protein</p>
              </div>
              <div className="text-center">
                <p className="text-xs font-medium">{recipe.fat}g</p>
                <p className="text-xs text-text-gray">Lemak</p>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-medium mb-2">Bahan-bahan</h3>
            <ul className="space-y-1">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-xs flex items-start">
                  <span className="h-2 w-2 rounded-full bg-primary-purple mt-1 mr-2 flex-shrink-0"></span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Langkah-langkah</h3>
            <ol className="space-y-2">
              {recipe.steps.map((step, index) => (
                <li key={index} className="text-xs flex">
                  <span className="h-5 w-5 rounded-full bg-primary-blue text-white flex-shrink-0 flex items-center justify-center text-xs mr-2">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Detailed Nutrition Modal */}
      <Modal isOpen={isNutritionModalOpen} onClose={() => setIsNutritionModalOpen(false)} title="Detail Gizi Resep">
        <div className="space-y-3">
          {nutritionItems.map((item, index) => (
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

