"use client"

import { useState, useEffect } from "react"
import LoadingScreen from "@/components/loading-screen"
import LoginScreen from "@/components/login-screen"
import RegisterScreen from "@/components/register-screen"
import HomeScreen from "@/components/home-screen"
import NutritionInfoScreen from "@/components/nutrition-info-screen"
import FoodDetailScreen from "@/components/food-detail-screen"
import ChildMonitorScreen from "@/components/child-monitor-screen"
import ChildDetailScreen from "@/components/child-detail-screen"
import NutritionGuideScreen from "@/components/nutrition-guide-screen"
import CameraScreen from "@/components/camera-screen"
import ProfileScreen from "@/components/profile-screen"
import ChatbotScreen from "@/components/chatbot-screen"
import NotificationsScreen from "@/components/notifications-screen"
import MedicalStaffScreen from "@/components/medical-staff-screen"
import AddFoodProgressScreen from "@/components/add-food-progress-screen"
import ConfirmFoodProgressScreen from "@/components/confirm-food-progress-screen"
import RecipeDetailScreen from "@/components/recipe-detail-screen"
import RecipeListScreen from "@/components/recipe-list-screen"

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("loading")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  })
  const [selectedChild, setSelectedChild] = useState(null)

  // Simulate loading screen for 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScreen("login")
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleLogin = (username: string, password: string) => {
    // Simulate login validation
    if (username && password) {
      setIsLoggedIn(true)
      setUserData({ username, password })
      setCurrentScreen("home")
    }
  }

  const handleRegister = () => {
    setCurrentScreen("login")
  }

  const navigateTo = (screen: string) => {
    if (screen === "login") {
      setIsLoggedIn(false)
    }
    setCurrentScreen(screen)
  }

  // Extract recipe ID from screen name if it's a recipe detail screen
  const getRecipeId = () => {
    if (currentScreen.startsWith("recipeDetail-")) {
      return Number.parseInt(currentScreen.split("-")[1], 10)
    }
    return 0
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-bg-light">
      <div className="w-full max-w-md mx-auto">
        {currentScreen === "loading" && <LoadingScreen />}

        {currentScreen === "login" && (
          <LoginScreen onLogin={handleLogin} onRegisterClick={() => setCurrentScreen("register")} />
        )}

        {currentScreen === "register" && (
          <RegisterScreen onRegister={handleRegister} onBackClick={() => setCurrentScreen("login")} />
        )}

        {isLoggedIn && currentScreen === "home" && <HomeScreen navigateTo={navigateTo} username={userData.username} />}

        {isLoggedIn && currentScreen === "nutritionInfo" && (
          <NutritionInfoScreen navigateTo={navigateTo} username={userData.username} />
        )}

        {isLoggedIn && currentScreen === "addFoodProgress" && (
          <AddFoodProgressScreen navigateTo={navigateTo} username={userData.username} />
        )}

        {isLoggedIn && currentScreen === "confirmFoodProgress" && (
          <ConfirmFoodProgressScreen navigateTo={navigateTo} username={userData.username} />
        )}

        {isLoggedIn && currentScreen === "foodDetail" && (
          <FoodDetailScreen navigateTo={navigateTo} username={userData.username} />
        )}

        {isLoggedIn && currentScreen === "childMonitor" && (
          <ChildMonitorScreen
            navigateTo={navigateTo}
            setSelectedChild={setSelectedChild}
            username={userData.username}
          />
        )}

        {isLoggedIn && currentScreen === "childDetail" && (
          <ChildDetailScreen navigateTo={navigateTo} selectedChild={selectedChild} username={userData.username} />
        )}

        {isLoggedIn && currentScreen === "nutritionGuide" && (
          <NutritionGuideScreen navigateTo={navigateTo} username={userData.username} />
        )}

        {isLoggedIn && currentScreen === "camera" && <CameraScreen navigateTo={navigateTo} />}

        {isLoggedIn && currentScreen === "profile" && (
          <ProfileScreen navigateTo={navigateTo} username={userData.username} />
        )}

        {isLoggedIn && currentScreen === "chatbot" && <ChatbotScreen navigateTo={navigateTo} />}

        {isLoggedIn && currentScreen === "notifications" && (
          <NotificationsScreen navigateTo={navigateTo} username={userData.username} />
        )}

        {isLoggedIn && currentScreen === "medicalStaff" && (
          <MedicalStaffScreen navigateTo={navigateTo} username={userData.username} />
        )}

        {isLoggedIn && currentScreen === "recipeList" && <RecipeListScreen navigateTo={navigateTo} />}

        {isLoggedIn && currentScreen.startsWith("recipeDetail-") && (
          <RecipeDetailScreen navigateTo={navigateTo} recipeId={getRecipeId()} />
        )}
      </div>
    </main>
  )
}

