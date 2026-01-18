"use client"

import { LayoutDashboard, Users, Store, Clock, Calendar, Car, FileText, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import Image from "next/image"

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: Users, label: "Employee Profile", href: "/employee-profile" },
  { icon: Store, label: "Outlet Profile", href: "/outlet-profile" },
  { icon: Clock, label: "Attendance", href: "/attendance" },
  { icon: Calendar, label: "Leave/Movement", href: "/leave-movement" },
  { icon: Car, label: "Vehicle Profile", href: "/vehicle-profile" },
  { icon: FileText, label: "Reports", href: "/reports" },
]

export function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("userEmail")
    router.push("/login")
  }

  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col">
      <div className="flex flex-col items-center gap-3 mb-8">
        <div className="w-20 h-20 relative">
          <Image src="/logo.webp" alt="Ybala Wrq Enab Restaurant Logo" fill className="object-contain" />
        </div>
        <div className="text-center">
          <h1 className="text-lg font-bold text-gray-900">Ybala Wrq Enab</h1>
          <p className="text-xs text-gray-500">Restaurant HR System</p>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="space-y-1 flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive ? "bg-purple-50 text-purple-700" : "text-gray-600 hover:bg-gray-50",
              )}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      <button
        onClick={handleLogout}
        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors mt-4"
      >
        <LogOut className="w-5 h-5" />
        <span>Logout</span>
      </button>
    </aside>
  )
}
