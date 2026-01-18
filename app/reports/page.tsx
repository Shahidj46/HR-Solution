"use client"
import { useRouter } from "next/navigation"
import { FileText, Users, Store, Clock, Calendar, Car, DollarSign, AlertTriangle, Zap, ArrowLeft } from "lucide-react"

const reports = [
  {
    id: 1,
    title: "Employee Details Report",
    description: "Comprehensive employee information and profile data",
    icon: Users,
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Outlet Summary Report",
    description: "Summary of all outlets and their operational status",
    icon: Store,
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "Attendance Summary Report",
    description: "Monthly attendance summary by employee and department",
    icon: Clock,
    color: "bg-purple-500",
  },
  {
    id: 4,
    title: "Daily Attendance Report",
    description: "Daily attendance details with in/out times",
    icon: Calendar,
    color: "bg-orange-500",
  },
  {
    id: 5,
    title: "Movement Summary Report",
    description: "Employee leave and movement records summary",
    icon: Calendar,
    color: "bg-indigo-500",
  },
  {
    id: 6,
    title: "Vehicle Summary Report",
    description: "Fleet vehicles status and utilization report",
    icon: Car,
    color: "bg-pink-500",
  },
  {
    id: 7,
    title: "Salary Sheet Report",
    description: "Salary details and disbursement information",
    icon: DollarSign,
    color: "bg-cyan-500",
  },
  {
    id: 8,
    title: "Document Expiry Report",
    description: "Expiring documents and compliance alerts",
    icon: AlertTriangle,
    color: "bg-red-500",
  },
  {
    id: 9,
    title: "Overtime Summary Report",
    description: "Employee overtime hours and compensation details",
    icon: Zap,
    color: "bg-yellow-500",
  },
]

export default function ReportsPage() {
  const router = useRouter()

  const handleReportClick = (reportId: number) => {
    // Navigate to report details page
    router.push(`/reports/${reportId}`)
  }

  return (
    <div className="mx-auto max-w-7xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <button onClick={() => router.push("/")} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
        </div>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reports.map((report) => {
          const Icon = report.icon
          return (
            <button
              key={report.id}
              onClick={() => handleReportClick(report.id)}
              className="group relative bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200"
            >
              {/* Colored Top Bar */}
              <div className={`h-2 ${report.color} w-full`}></div>

              {/* Content */}
              <div className="p-6">
                {/* Icon */}
                <div className={`${report.color} rounded-lg p-3 w-fit mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-left">{report.title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-600 text-left line-clamp-2 mb-4">{report.description}</p>

                {/* View Button */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500">Click to view</span>
                  <FileText className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
