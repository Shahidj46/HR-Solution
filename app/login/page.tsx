"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Simple authentication check (in production, this should be server-side with real auth)
    if (email && password) {
      // Set authentication flag
      localStorage.setItem("isAuthenticated", "true")
      localStorage.setItem("userEmail", email)
      router.push("/")
    } else {
      setError("Please enter both email and password")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Logo and Company Name */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-32 h-32 relative mb-4">
              <Image src="/logo.webp" alt="Ybala Wrq Enab Restaurant Logo" fill className="object-contain" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 text-center">Ybala Wrq Enab Restaurant</h1>
            <p className="text-sm text-gray-500 mt-1">HR Management System</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}

            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
              Login
            </Button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-6">For demo purposes, use any email and password</p>
        </div>
      </div>
    </div>
  )
}
