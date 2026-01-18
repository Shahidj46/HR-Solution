"use client"

import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
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

export default function AttendanceDetailPage() {
  const params = useParams()
  const router = useRouter()
  const record = attendanceRecords[params.id as string]

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

  const getAttendanceColor = (attendance: string) => {
    switch (attendance.toLowerCase()) {
      case "present":
        return "text-green-600"
      case "absent":
        return "text-red-500"
      case "offday":
        return "text-red-500"
      default:
        return "text-gray-600"
    }
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" size="sm" onClick={() => router.push("/attendance")}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <h1 className="text-xl font-semibold text-gray-800">Attendance Details</h1>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
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
          <div>
            <label className="block text-sm text-gray-500 mb-1">Calendar</label>
            <p className="text-blue-600 font-medium">{record.calendar}</p>
          </div>
          <div>
            <label className="block text-sm text-gray-500 mb-1">In-Time</label>
            <p className="text-gray-800 font-medium">{record.inTime || "-"}</p>
          </div>
          <div>
            <label className="block text-sm text-gray-500 mb-1">Out-Time</label>
            <p className="text-gray-800 font-medium">{record.outTime || "-"}</p>
          </div>
          <div>
            <label className="block text-sm text-gray-500 mb-1">In-Time Location</label>
            <p className="text-gray-800 font-medium">{record.inTimeLocation || "-"}</p>
          </div>
          <div>
            <label className="block text-sm text-gray-500 mb-1">Out-Time Location</label>
            <p className="text-gray-800 font-medium">{record.outTimeLocation || "-"}</p>
          </div>
          <div>
            <label className="block text-sm text-gray-500 mb-1">Actual Attendance</label>
            <p className={`font-medium ${getAttendanceColor(record.actualAttendance)}`}>{record.actualAttendance}</p>
          </div>
          <div>
            <label className="block text-sm text-gray-500 mb-1">Request Attendance</label>
            <p className="text-gray-800 font-medium">{record.requestAttendance || "-"}</p>
          </div>
          <div>
            <label className="block text-sm text-gray-500 mb-1">Remarks</label>
            <p className="text-gray-800 font-medium">{record.remarks || "-"}</p>
          </div>
          <div>
            <label className="block text-sm text-gray-500 mb-1">Approval Status</label>
            <p className="text-gray-800 font-medium">{record.approvalStatus || "-"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
