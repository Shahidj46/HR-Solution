"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { AppLayout } from "@/components/app-layout"

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated")

    // If not authenticated and not on login page, redirect to login
    if (!isAuthenticated && pathname !== "/login") {
      router.push("/login")
    }
    // If authenticated and on login page, redirect to dashboard
    else if (isAuthenticated && pathname === "/login") {
      router.push("/")
    }

    setIsLoading(false)
  }, [pathname, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600" />
      </div>
    )
  }

  const isLoginPage = pathname === "/login"

  if (isLoginPage) {
    return <>{children}</>
  }

  return <AppLayout>{children}</AppLayout>
}
