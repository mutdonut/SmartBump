"use client"

interface HeaderWithProfileProps {
  title?: string
  subtitle?: string
  navigateTo: (screen: string) => void
  username: string
}

export default function HeaderWithProfile({ title, subtitle, navigateTo, username }: HeaderWithProfileProps) {
  return (
    <div className="bg-light-blue p-4 flex items-center justify-between">
      <div className="flex items-center">
        {/* Notification Icon */}
        <div
          className="w-8 h-8 rounded-full bg-bg-purple flex items-center justify-center cursor-pointer mr-2"
          onClick={() => navigateTo("notifications")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-primary-purple"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </div>

        {/* Medical Staff Icon */}
        <div
          className="w-8 h-8 rounded-full bg-bg-purple flex items-center justify-center cursor-pointer mr-3"
          onClick={() => navigateTo("medicalStaff")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-primary-purple"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>

        <div>
          <h1 className="text-lg font-medium text-primary-purple">Welcome</h1>
          <p className="text-xs text-text-gray">{username || "User"}!</p>
        </div>
      </div>

      {/* Profile Picture */}
      <div
        className="w-8 h-8 rounded-full bg-primary-purple flex items-center justify-center cursor-pointer"
        onClick={() => navigateTo("profile")}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  )
}

