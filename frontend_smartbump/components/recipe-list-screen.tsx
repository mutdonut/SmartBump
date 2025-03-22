"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Search, Clock, Users } from "lucide-react"

interface RecipeListScreenProps {
  navigateTo: (screen: string) => void
}

export default function RecipeListScreen({ navigateTo }: RecipeListScreenProps) {
  const [searchTerm, setSearchTerm] = useState("")

  // In a real app, this would come from an API or database
  const recipes = [
    {
      id: 0,
      name: "Nasi Ayam Bumbu Kecap",
      image: "/placeholder.svg?height=150&width=250",
      description: "Hidangan lezat dengan ayam yang dimasak dengan bumbu kecap manis dan rempah-rempah.",
      prepTime: "15 menit",
      cookTime: "30 menit",
      servings: 4,
      category: "Makanan Utama",
      calories: 450,
    },
    {
      id: 1,
      name: "Tumis Kangkung Gizi",
      image: "/placeholder.svg?height=150&width=250",
      description: "Sayur kangkung yang ditumis dengan bumbu sederhana namun kaya nutrisi.",
      prepTime: "10 menit",
      cookTime: "5 menit",
      servings: 3,
      category: "Sayuran",
      calories: 120,
    },
    {
      id: 2,
      name: "Ayam Goreng Yogyakarta",
      image: "/placeholder.svg?height=150&width=250",
      description: "Ayam goreng dengan bumbu rempah khas Yogyakarta yang gurih dan lezat.",
      prepTime: "30 menit",
      cookTime: "20 menit",
      servings: 4,
      category: "Makanan Utama",
      calories: 380,
    },
    {
      id: 3,
      name: "Sup Sayur Ibu Hamil",
      image: "/placeholder.svg?height=150&width=250",
      description: "Sup sayuran bergizi tinggi yang cocok untuk ibu hamil.",
      prepTime: "15 menit",
      cookTime: "25 menit",
      servings: 4,
      category: "Sup",
      calories: 200,
    },
    {
      id: 4,
      name: "Smoothie Buah dan Sayur",
      image: "/placeholder.svg?height=150&width=250",
      description: "Minuman sehat dengan campuran buah dan sayuran segar.",
      prepTime: "10 menit",
      cookTime: "0 menit",
      servings: 2,
      category: "Minuman",
      calories: 180,
    },
    {
      id: 5,
      name: "Pepes Ikan Kaya Kalsium",
      image: "/placeholder.svg?height=150&width=250",
      description: "Ikan yang dibumbui dan dibungkus daun pisang, kaya akan kalsium.",
      prepTime: "20 menit",
      cookTime: "30 menit",
      servings: 3,
      category: "Makanan Utama",
      calories: 320,
    },
  ]

  const filteredRecipes = searchTerm
    ? recipes.filter(
        (recipe) =>
          recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          recipe.category.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : recipes

  return (
    <div className="flex flex-col h-[600px] w-full max-w-md bg-white rounded-xl overflow-hidden shadow-lg">
      {/* Simple header without profile and notifications */}
      <div className="bg-light-blue p-4 flex items-center">
        <Button variant="ghost" size="sm" className="p-0 mr-2 h-8 w-8" onClick={() => navigateTo("nutritionInfo")}>
          <ArrowLeft className="h-5 w-5 text-primary-purple" />
        </Button>
        <div>
          <h1 className="text-lg font-medium text-primary-purple">Rekomendasi Resep</h1>
          <p className="text-xs text-text-gray">Resep sehat untuk ibu hamil</p>
        </div>
      </div>

      <div className="p-4">
        {/* Search Bar */}
        <div className="relative mb-4">
          <div className="bg-bg-purple rounded-lg flex items-center p-2">
            <Search className="h-5 w-5 text-primary-purple mr-2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari resep..."
              className="bg-transparent border-none flex-1 text-sm focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 px-4 pb-4 overflow-y-auto">
        <div className="space-y-4">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-border-gray cursor-pointer"
              onClick={() => navigateTo(`recipeDetail-${recipe.id}`)}
            >
              <img src={recipe.image || "/placeholder.svg"} alt={recipe.name} className="w-full h-32 object-cover" />
              <div className="p-3">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-sm font-medium">{recipe.name}</h3>
                  <span className="text-xs bg-bg-purple px-2 py-0.5 rounded-full">{recipe.category}</span>
                </div>
                <p className="text-xs text-text-gray mb-2 line-clamp-2">{recipe.description}</p>
                <div className="flex justify-between text-xs text-text-gray">
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>
                      {recipe.prepTime} + {recipe.cookTime}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-3 w-3 mr-1" />
                    <span>{recipe.servings} porsi</span>
                  </div>
                  <span>{recipe.calories} kkal/porsi</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

