"use client"

import { useParams, useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

const reportDetails = {
  1: { title: "Employee Details Report", description: "Comprehensive employee information report" },
  2: { title: "Outlet Summary Report", description: "Outlet operational summary" },
  3: { title: "Attendance Summary Report", description: "Attendance patterns and trends" },
  4: { title: "Daily Attendance Report", description: "Daily attendance records" },
  5: { title: "Movement Summary Report", description: "Leave and movement records" },
  6: { title: "Vehicle Summary Report", description: "Vehicle fleet status" },
  7: { title: "Salary Sheet Report", description: "Salary disbursement details" },
  8: { title: "Document Expiry Report", description: "Expiring documents alert" },
}

export default function ReportDetailPage() {
  const router = useRouter()
  const params = useParams()
  const reportId = Number.parseInt(params.id as string)
  const report = reportDetails[reportId as keyof typeof reportDetails]

  if (!report) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Report not found</p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => router.push("/reports")} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{report.title}</h1>
          <p className="text-gray-600">{report.description}</p>
        </div>
      </div>

      {/* Report Content Area */}
      <div className="bg-white rounded-lg shadow border border-gray-200 p-8">
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-4">Report content will be displayed here</p>
          <p className="text-gray-400 text-sm">Configure report data and filters to generate report</p>
        </div>
      </div>
    </div>
  )
}
