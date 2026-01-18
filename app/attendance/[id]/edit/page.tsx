"use client"

import type React from "react"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"

const attendanceRecords: Record<
  string,
  {
    id: number
    employeeCode: string
    employee: string
    designation: string
    department: string
    date: string
    day: string
    calendar: string
    inTime: string
    outTime: string
    inTimeLocation: string
    outTimeLocation: string
    actualAttendance: string
    requestAttendance: string
    remarks: string
    approvalStatus: string
  }
> = {
  "1": {
    id: 1,
    employeeCode: "10000",
    employee: "Md. Usuf Ali",
    designation: "Chief Executive Officer (CEO)",
    department: "Executive",
    date: "2025-12-12",
    day: "Fri",
    calendar: "General-G",
    inTime: "",
    outTime: "",
    inTimeLocation: "",
    outTimeLocation: "",
    actualAttendance: "Offday",
    requestAttendance: "",
    remarks: "",
    approvalStatus: "",
  },
  "2": {
    id: 2,
    employeeCode: "10000",
    employee: "Md. Usuf Ali",
    designation: "Chief Executive Officer (CEO)",
    department: "Executive",
    date: "2025-12-13",
    day: "Sat",
    calendar: "General-G",
    inTime: "",
    outTime: "",
    inTimeLocation: "",
    outTimeLocation: "",
    actualAttendance: "Absent",
    requestAttendance: "",
    remarks: "",
    approvalStatus: "",
  },
  "3": {
    id: 3,
    employeeCode: "10000",
    employee: "Md. Usuf Ali",
    designation: "Chief Executive Officer (CEO)",
    department: "Executive",
    date: "2025-12-14",
    day: "Sun",
    calendar: "General-G",
    inTime: "",
    outTime: "",
    inTimeLocation: "",
    outTimeLocation: "",
    actualAttendance: "Absent",
    requestAttendance: "",
    remarks: "",
    approvalStatus: "",
  },
  "4": {
    id: 4,
    employeeCode: "10000",
    employee: "Md. Usuf Ali",
    designation: "Chief Executive Officer (CEO)",
    department: "Executive",
    date: "2025-12-15",
    day: "Mon",
    calendar: "General-G",
    inTime: "",
    outTime: "",
    inTimeLocation: "",
    outTimeLocation: "",
    actualAttendance: "Absent",
    requestAttendance: "",
    remarks: "",
    approvalStatus: "",
  },
}

export default function EditAttendancePage() {
  const params = useParams()
  const router = useRouter()
  const record = attendanceRecords[params.id as string]

  const [formData, setFormData] = useState({
    inTime: record?.inTime || "",
    outTime: record?.outTime || "",
    inTimeLocation: record?.inTimeLocation || "",
    outTimeLocation: record?.outTimeLocation || "",
    actualAttendance: record?.actualAttendance || "",
    requestAttendance: record?.requestAttendance || "",
    remarks: record?.remarks || "",
    approvalStatus: record?.approvalStatus || "",
  })

  if (!record) {
    return (
      <div className="p-6">
        <p>Attendance record not found.</p>
        <Button onClick={() => router.push("/attendance")} className="mt-4">
          Back to Attendance
        </Button>
      </div>
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle save logic here
    router.push("/attendance")
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" size="sm" onClick={() => router.push("/attendance")}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <h1 className="text-xl font-semibold text-gray-800">Edit Attendance</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">Employee Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm text-gray-500 mb-1">Employee Code</label>
              <p className="text-gray-800 font-medium">{record.employeeCode}</p>
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Employee Name</label>
              <p className="text-gray-800 font-medium">{record.employee}</p>
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Designation</label>
              <p className="text-gray-800 font-medium">{record.designation}</p>
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Department</label>
              <p className="text-gray-800 font-medium">{record.department}</p>
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Date</label>
              <p className="text-gray-800 font-medium">{record.date}</p>
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Day</label>
              <p className="text-gray-800 font-medium">{record.day}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">Attendance Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">In-Time</label>
              <Input
                type="time"
                value={formData.inTime}
                onChange={(e) => setFormData({ ...formData, inTime: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Out-Time</label>
              <Input
                type="time"
                value={formData.outTime}
                onChange={(e) => setFormData({ ...formData, outTime: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">In-Time Location</label>
              <Input
                type="text"
                value={formData.inTimeLocation}
                onChange={(e) => setFormData({ ...formData, inTimeLocation: e.target.value })}
                placeholder="Enter location"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Out-Time Location</label>
              <Input
                type="text"
                value={formData.outTimeLocation}
                onChange={(e) => setFormData({ ...formData, outTimeLocation: e.target.value })}
                placeholder="Enter location"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Actual Attendance</label>
              <Select
                value={formData.actualAttendance}
                onValueChange={(value) => setFormData({ ...formData, actualAttendance: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Present">Present</SelectItem>
                  <SelectItem value="Absent">Absent</SelectItem>
                  <SelectItem value="Offday">Offday</SelectItem>
                  <SelectItem value="Late">Late</SelectItem>
                  <SelectItem value="Half Day">Half Day</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Request Attendance</label>
              <Select
                value={formData.requestAttendance}
                onValueChange={(value) => setFormData({ ...formData, requestAttendance: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Present">Present</SelectItem>
                  <SelectItem value="Absent">Absent</SelectItem>
                  <SelectItem value="Leave">Leave</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Approval Status</label>
              <Select
                value={formData.approvalStatus}
                onValueChange={(value) => setFormData({ ...formData, approvalStatus: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Approved">Approved</SelectItem>
                  <SelectItem value="Rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Remarks</label>
              <Textarea
                value={formData.remarks}
                onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
                placeholder="Enter remarks"
                rows={3}
              />
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
            Update
          </Button>
          <Button type="button" variant="outline" onClick={() => router.push("/attendance")}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  )
}
