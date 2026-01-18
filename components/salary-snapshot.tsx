"use client"

import { Card } from "@/components/ui/card"

export function SalarySnapshot() {
  return (
    <Card className="p-6 bg-white border-gray-200 h-full">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Salary Snapshot</h3>

      <div className="flex items-center justify-center h-64">
        <div className="relative w-48 h-48">
          {/* Semi-circular gauge */}
          <svg viewBox="0 0 200 120" className="w-full h-full">
            {/* Background arc */}
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="20"
              strokeLinecap="round"
            />
            {/* Progress arc (approximately 75%) */}
            <path
              d="M 20 100 A 80 80 0 0 1 163 42"
              fill="none"
              stroke="#10b981"
              strokeWidth="20"
              strokeLinecap="round"
            />
          </svg>

          {/* Center value */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center mt-8">
              <p className="text-3xl font-bold text-gray-900">$425K</p>
              <p className="text-sm text-gray-500 mt-1">Processed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Total Budget</span>
          <span className="font-semibold text-gray-900">$550K</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Remaining</span>
          <span className="font-semibold text-gray-900">$125K</span>
        </div>
      </div>
    </Card>
  )
}
