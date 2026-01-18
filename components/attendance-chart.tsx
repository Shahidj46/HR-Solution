"use client"

import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts"

const data = [
  { name: "Mon", value: 1050 },
  { name: "Tue", value: 1080 },
  { name: "Wed", value: 1090 },
  { name: "Thu", value: 1070 },
  { name: "Fri", value: 1020 },
  { name: "Sat", value: 890 },
  { name: "Sun", value: 0 },
]

export function AttendanceChart() {
  return (
    <Card className="p-6 bg-white border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Attendance Overview</h3>
        <Select defaultValue="this-week">
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="this-week">This Week</SelectItem>
            <SelectItem value="last-week">Last Week</SelectItem>
            <SelectItem value="this-month">This Month</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#9ca3af", fontSize: 12 }} />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9ca3af", fontSize: 12 }}
            domain={[0, 1200]}
            ticks={[0, 300, 600, 900, 1200]}
          />
          <Bar dataKey="value" fill="#10b981" radius={[8, 8, 0, 0]} barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}
