"use client"

import { Utensils } from "lucide-react"

interface BottomNavigationProps {
  currentScreen: string
  navigateTo: (screen: string) => void
}

export default function BottomNavigation({ currentScreen, navigateTo }: BottomNavigationProps) {
  return (
    <div className="relative h-16 bg-primary-purple rounded-t-xl flex items-center justify-between px-8">
      <button
        onClick={() => navigateTo("home")}
        className={`flex flex-col items-center justify-center ${currentScreen === "home" ? "text-white" : "text-light-purple"}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </button>

      <button
        onClick={() => navigateTo("nutritionInfo")}
        className={`flex flex-col items-center justify-center ${currentScreen === "nutritionInfo" ? "text-white" : "text-light-purple"}`}
      >
        <Utensils className="h-6 w-6" />
      </button>

      {/* Camera Button (Center) - Fixed positioning */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 z-10">
        <button
          onClick={() => navigateTo("camera")}
          className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-primary-purple"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-primary-purple"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>

      <button
        onClick={() => navigateTo("childMonitor")}
        className={`flex flex-col items-center justify-center ${currentScreen === "childMonitor" ? "text-white" : "text-light-purple"}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
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
      </button>

      <button
        onClick={() => navigateTo("chatbot")}
        className={`flex flex-col items-center justify-center ${currentScreen === "chatbot" ? "text-white" : "text-light-purple"}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </button>
    </div>
  )
}

