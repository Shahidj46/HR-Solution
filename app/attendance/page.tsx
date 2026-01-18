"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Eye, Pencil, Clock } from "lucide-react"
import { Search, Download } from "lucide-react"

const employees = [
  {
    id: "013250881",
    name: "Md. Usuf Ali",
    code: "10000",
    designation: "Chief Executive Officer (CEO)",
    department: "Executive",
  },
  { id: "013250882", name: "Sarah Ahmed", code: "10001", designation: "HR Manager", department: "Human Resources" },
  { id: "013250883", name: "John Smith", code: "10002", designation: "Accountant", department: "Finance" },
]

const departments = ["Executive", "Human Resources", "Finance", "Operations", "Marketing", "IT"]
const designations = [
  "Chief Executive Officer (CEO)",
  "HR Manager",
  "Accountant",
  "Operations Manager",
  "Marketing Executive",
  "Software Engineer",
]

const initialAttendanceData = [
  {
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
  {
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
  {
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
  {
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
  {
    id: 5,
    employeeCode: "10001",
    employee: "Sarah Ahmed",
    designation: "HR Manager",
    department: "Human Resources",
    date: "2025-12-12",
    day: "Fri",
    calendar: "General-G",
    inTime: "09:00",
    outTime: "18:00",
    inTimeLocation: "Main Office",
    outTimeLocation: "Main Office",
    actualAttendance: "Present",
    requestAttendance: "",
    remarks: "",
    approvalStatus: "",
  },
  {
    id: 6,
    employeeCode: "10001",
    employee: "Sarah Ahmed",
    designation: "HR Manager",
    department: "Human Resources",
    date: "2025-12-13",
    day: "Sat",
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
]

export default function AttendancePage() {
  const [fromDate, setFromDate] = useState("2025-12-12")
  const [toDate, setToDate] = useState("2026-01-12")
  const [viewBy, setViewBy] = useState("employee")
  const [selectedEmployee, setSelectedEmployee] = useState("013250881")
  const [selectedDepartment, setSelectedDepartment] = useState("Executive")
  const [selectedDesignation, setSelectedDesignation] = useState("Chief Executive Officer (CEO)")
  const [calendar, setCalendar] = useState("General-G")
  const [attendanceData, setAttendanceData] = useState(initialAttendanceData)
  const [filteredData, setFilteredData] = useState(initialAttendanceData.filter((a) => a.employeeCode === "10000"))
  const [searchTerm, setSearchTerm] = useState("")

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingRecord, setEditingRecord] = useState<(typeof initialAttendanceData)[0] | null>(null)
  const [modalData, setModalData] = useState({
    changeStatus: "",
    remarks: "",
    inTime: "",
    outTime: "",
  })

  const [isViewModalOpen, setIsViewModalOpen] = useState(false)
  const [viewingRecord, setViewingRecord] = useState<(typeof initialAttendanceData)[0] | null>(null)

  const [selectedRows, setSelectedRows] = useState<number[]>([])
  const [isBulkEditModalOpen, setIsBulkEditModalOpen] = useState(false)
  const [bulkEditData, setBulkEditData] = useState({
    changeStatus: "",
    remarks: "",
    inTime: "",
    outTime: "",
  })

  // Add overtime modal state
  const [isOvertimeModalOpen, setIsOvertimeModalOpen] = useState(false)
  const [overtimeRecord, setOvertimeRecord] = useState<(typeof initialAttendanceData)[0] | null>(null)
  const [overtimeData, setOvertimeData] = useState({
    overtimeHours: "",
    overtimeType: "",
    remarks: "",
  })

  const handleViewByChange = (value: string) => {
    setViewBy(value)
    setSelectedEmployee("")
    setSelectedDepartment("")
    setSelectedDesignation("")
  }

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(filteredData.map((record) => record.id))
    } else {
      setSelectedRows([])
    }
  }

  const handleSelectRow = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedRows([...selectedRows, id])
    } else {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id))
    }
  }

  const handleOpenBulkEditModal = () => {
    setBulkEditData({
      changeStatus: "",
      remarks: "",
      inTime: "",
      outTime: "",
    })
    setIsBulkEditModalOpen(true)
  }

  const handleCloseBulkEditModal = () => {
    setIsBulkEditModalOpen(false)
    setBulkEditData({
      changeStatus: "",
      remarks: "",
      inTime: "",
      outTime: "",
    })
  }

  const handleSaveBulkEdit = () => {
    const updatedData = attendanceData.map((record) =>
      selectedRows.includes(record.id)
        ? {
            ...record,
            requestAttendance: bulkEditData.changeStatus || record.requestAttendance,
            remarks: bulkEditData.remarks || record.remarks,
            inTime: bulkEditData.inTime || record.inTime,
            outTime: bulkEditData.outTime || record.outTime,
            approvalStatus: bulkEditData.changeStatus ? "Pending" : record.approvalStatus,
          }
        : record,
    )
    setAttendanceData(updatedData)
    setFilteredData(updatedData.filter((a) => filteredData.some((f) => f.id === a.id)))
    setSelectedRows([])
    handleCloseBulkEditModal()
  }

  const handleOpenEditModal = (record: (typeof initialAttendanceData)[0]) => {
    setEditingRecord(record)
    setModalData({
      changeStatus: "",
      remarks: record.remarks || "",
      inTime: record.inTime || "",
      outTime: record.outTime || "",
    })
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setEditingRecord(null)
    setModalData({
      changeStatus: "",
      remarks: "",
      inTime: "",
      outTime: "",
    })
  }

  const handleSaveModal = () => {
    if (editingRecord) {
      const updatedData = attendanceData.map((record) =>
        record.id === editingRecord.id
          ? {
              ...record,
              requestAttendance: modalData.changeStatus,
              remarks: modalData.remarks,
              inTime: modalData.inTime || record.inTime,
              outTime: modalData.outTime || record.outTime,
              approvalStatus: "Pending",
            }
          : record,
      )
      setAttendanceData(updatedData)
      setFilteredData(updatedData.filter((a) => filteredData.some((f) => f.id === a.id)))
    }
    handleCloseModal()
  }

  const handleOpenViewModal = (record: (typeof initialAttendanceData)[0]) => {
    setViewingRecord(record)
    setIsViewModalOpen(true)
  }

  const handleCloseViewModal = () => {
    setIsViewModalOpen(false)
    setViewingRecord(null)
  }

  const handleView = () => {
    let filtered = [...attendanceData]

    // Filter by date range
    filtered = filtered.filter((a) => {
      const recordDate = new Date(a.date)
      const from = new Date(fromDate)
      const to = new Date(toDate)
      return recordDate >= from && recordDate <= to
    })

    // Filter based on viewBy selection
    if (viewBy === "employee" && selectedEmployee) {
      const emp = employees.find((e) => e.id === selectedEmployee)
      if (emp) {
        filtered = filtered.filter((a) => a.employeeCode === emp.code)
      }
    } else if (viewBy === "department" && selectedDepartment) {
      filtered = filtered.filter((a) => a.department === selectedDepartment)
    } else if (viewBy === "designation" && selectedDesignation) {
      filtered = filtered.filter((a) => a.designation === selectedDesignation)
    }

    setFilteredData(filtered)
  }

  const getAttendanceColor = (attendance: string) => {
    switch (attendance.toLowerCase()) {
      case "present":
        return "text-green-600"
      case "absent":
        return "text-red-500"
      case "offday":
        return "text-red-500"
      case "late":
        return "text-orange-500"
      default:
        return "text-gray-600"
    }
  }

  // Add overtime modal handlers
  const handleOpenOvertimeModal = (record: (typeof initialAttendanceData)[0]) => {
    setOvertimeRecord(record)
    setOvertimeData({
      overtimeHours: "",
      overtimeType: "",
      remarks: "",
    })
    setIsOvertimeModalOpen(true)
  }

  const handleCloseOvertimeModal = () => {
    setIsOvertimeModalOpen(false)
    setOvertimeRecord(null)
    setOvertimeData({
      overtimeHours: "",
      overtimeType: "",
      remarks: "",
    })
  }

  const handleSaveOvertime = () => {
    if (overtimeRecord && overtimeData.overtimeHours && overtimeData.overtimeType) {
      console.log("[v0] Overtime saved for:", {
        employee: overtimeRecord.employee,
        date: overtimeRecord.date,
        ...overtimeData,
      })
      handleCloseOvertimeModal()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Daily Attendance</h1>
          <div className="flex gap-3 items-center">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="gap-2 bg-transparent">
              <Download className="w-4 h-4" />
              Excel
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">From Date</label>
              <Input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">To Date</label>
              <Input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Calendar</label>
              <Select value={calendar} onValueChange={setCalendar}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Calendar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Calendars</SelectItem>
                  <SelectItem value="general">General-G</SelectItem>
                  <SelectItem value="special">Special-S</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">View By</label>
              <Select value={viewBy} onValueChange={handleViewByChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select View" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="employee">Employee</SelectItem>
                  <SelectItem value="department">Department</SelectItem>
                  <SelectItem value="designation">Designation</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {viewBy === "employee" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Employee</label>
                <Select value={selectedEmployee} onValueChange={setSelectedEmployee}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Employee" />
                  </SelectTrigger>
                  <SelectContent>
                    {employees.map((emp) => (
                      <SelectItem key={emp.id} value={emp.id}>
                        {emp.name} ({emp.id})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {viewBy === "department" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Department" />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map((dept) => (
                      <SelectItem key={dept} value={dept}>
                        {dept}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {viewBy === "designation" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Designation</label>
                <Select value={selectedDesignation} onValueChange={setSelectedDesignation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Designation" />
                  </SelectTrigger>
                  <SelectContent>
                    {designations.map((des) => (
                      <SelectItem key={des} value={des}>
                        {des}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
        </div>

        {/* Add overtime modal */}
        {isOvertimeModalOpen && overtimeRecord && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-xl mx-4">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Add Overtime</h2>
                <p className="text-sm text-gray-600 mb-6">
                  {overtimeRecord.employee} - {overtimeRecord.date}
                </p>

                <div className="border border-gray-200 rounded-lg p-4 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">
                        Overtime Hours <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="number"
                        placeholder="Enter overtime hours"
                        value={overtimeData.overtimeHours}
                        onChange={(e) => setOvertimeData({ ...overtimeData, overtimeHours: e.target.value })}
                        className="bg-white border border-gray-300"
                        step="0.5"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">
                        Overtime Type <span className="text-red-500">*</span>
                      </label>
                      <Select
                        value={overtimeData.overtimeType}
                        onValueChange={(value) => setOvertimeData({ ...overtimeData, overtimeType: value })}
                      >
                        <SelectTrigger className="bg-white border border-gray-300">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="regular">Regular</SelectItem>
                          <SelectItem value="weekend">Weekend</SelectItem>
                          <SelectItem value="holiday">Holiday</SelectItem>
                          <SelectItem value="emergency">Emergency</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">Remarks</label>
                    <Input
                      placeholder="Enter remarks"
                      value={overtimeData.remarks}
                      onChange={(e) => setOvertimeData({ ...overtimeData, remarks: e.target.value })}
                      className="bg-white border border-gray-300"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-4">
                  <button onClick={handleCloseOvertimeModal} className="text-blue-600 hover:text-blue-700 font-medium">
                    CLOSE
                  </button>
                  <button onClick={handleSaveOvertime} className="text-red-500 hover:text-red-600 font-medium">
                    SAVE
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {isBulkEditModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl mx-4">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-6">
                  Edit Attendance ({selectedRows.length} records selected)
                </h2>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">
                        Change Status <span className="text-red-500">*</span>
                      </label>
                      <Select
                        value={bulkEditData.changeStatus}
                        onValueChange={(value) => setBulkEditData({ ...bulkEditData, changeStatus: value })}
                      >
                        <SelectTrigger className="bg-gray-100 border-0">
                          <SelectValue placeholder="Change Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="present">Present</SelectItem>
                          <SelectItem value="absent">Absent</SelectItem>
                          <SelectItem value="late">Late</SelectItem>
                          <SelectItem value="half-day">Half Day</SelectItem>
                          <SelectItem value="work-from-home">Work From Home</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">
                        Remarks <span className="text-red-500">*</span>
                      </label>
                      <Input
                        placeholder="Remarks"
                        value={bulkEditData.remarks}
                        onChange={(e) => setBulkEditData({ ...bulkEditData, remarks: e.target.value })}
                        className="bg-white border border-gray-300"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">In Time</label>
                      <Input
                        type="time"
                        placeholder="--:-- --"
                        value={bulkEditData.inTime}
                        onChange={(e) => setBulkEditData({ ...bulkEditData, inTime: e.target.value })}
                        className="bg-gray-100 border-0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">Out Time</label>
                      <Input
                        type="time"
                        placeholder="--:-- --"
                        value={bulkEditData.outTime}
                        onChange={(e) => setBulkEditData({ ...bulkEditData, outTime: e.target.value })}
                        className="bg-gray-100 border-0"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-4 mt-6">
                  <button onClick={handleCloseBulkEditModal} className="text-blue-600 hover:text-blue-700 font-medium">
                    CLOSE
                  </button>
                  <button onClick={handleSaveBulkEdit} className="text-red-500 hover:text-red-600 font-medium">
                    SAVE
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {isViewModalOpen && viewingRecord && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-xl mx-4">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-6">In/Out Details</h2>

                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 border border-gray-200">
                        Date
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 border border-gray-200">
                        In Time
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 border border-gray-200">
                        Out Time
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-3 text-center text-sm text-gray-700 border border-gray-200">
                        {viewingRecord.date}
                      </td>
                      <td className="px-4 py-3 text-center text-sm text-gray-700 border border-gray-200">
                        {viewingRecord.inTime || "0:00 AM"}
                      </td>
                      <td className="px-4 py-3 text-center text-sm text-gray-700 border border-gray-200">
                        {viewingRecord.outTime || "0:00 AM"}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="flex justify-end mt-6">
                  <button onClick={handleCloseViewModal} className="text-red-500 hover:text-red-600 font-medium">
                    CLOSE
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-xl mx-4">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-6">Request</h2>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">
                        Change Status <span className="text-red-500">*</span>
                      </label>
                      <Select
                        value={modalData.changeStatus}
                        onValueChange={(value) => setModalData({ ...modalData, changeStatus: value })}
                      >
                        <SelectTrigger className="bg-gray-100 border-0">
                          <SelectValue placeholder="Change Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="present">Present</SelectItem>
                          <SelectItem value="absent">Absent</SelectItem>
                          <SelectItem value="late">Late</SelectItem>
                          <SelectItem value="half-day">Half Day</SelectItem>
                          <SelectItem value="work-from-home">Work From Home</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">
                        Remarks <span className="text-red-500">*</span>
                      </label>
                      <Input
                        placeholder="Remarks"
                        value={modalData.remarks}
                        onChange={(e) => setModalData({ ...modalData, remarks: e.target.value })}
                        className="bg-white border border-gray-300"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">In Time</label>
                      <Input
                        type="time"
                        placeholder="--:-- --"
                        value={modalData.inTime}
                        onChange={(e) => setModalData({ ...modalData, inTime: e.target.value })}
                        className="bg-gray-100 border-0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">Out Time</label>
                      <Input
                        type="time"
                        placeholder="--:-- --"
                        value={modalData.outTime}
                        onChange={(e) => setModalData({ ...modalData, outTime: e.target.value })}
                        className="bg-gray-100 border-0"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-4 mt-6">
                  <button onClick={handleCloseModal} className="text-blue-600 hover:text-blue-700 font-medium">
                    CLOSE
                  </button>
                  <button onClick={handleSaveModal} className="text-red-500 hover:text-red-600 font-medium">
                    SAVE
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-50 border-b border-gray-200">
                <th className="px-3 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedRows.length === filteredData.length && filteredData.length > 0}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                    className="rounded border-gray-300"
                  />
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-600">SL</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-600">Employee Code</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-600">Employee</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-600">Designation</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-600">Department</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-600">Date</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-600">Day</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-600">Calendar</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-600">In-Time</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-600">Out-Time</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-600">Attendance</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-600">Remarks</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((record, index) => (
                <tr key={record.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-3 py-3">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(record.id)}
                      onChange={(e) => handleSelectRow(record.id, e.target.checked)}
                      className="rounded border-gray-300"
                    />
                  </td>
                  <td className="px-3 py-3 text-sm text-gray-700">{index + 1}</td>
                  <td className="px-3 py-3 text-sm text-gray-700">{record.employeeCode}</td>
                  <td className="px-3 py-3 text-sm text-gray-700">{record.employee}</td>
                  <td className="px-3 py-3 text-sm text-gray-700">{record.designation}</td>
                  <td className="px-3 py-3 text-sm text-gray-700">{record.department}</td>
                  <td className="px-3 py-3 text-sm text-gray-700">{record.date}</td>
                  <td className="px-3 py-3 text-sm text-gray-700">{record.day}</td>
                  <td className="px-3 py-3 text-sm text-blue-500">{record.calendar}</td>
                  <td className="px-3 py-3 text-sm text-gray-700">{record.inTime}</td>
                  <td className="px-3 py-3 text-sm text-gray-700">{record.outTime}</td>
                  <td className={`px-3 py-3 text-sm ${getAttendanceColor(record.actualAttendance)}`}>
                    {record.actualAttendance}
                  </td>
                  <td className="px-3 py-3 text-sm text-gray-700">{record.remarks}</td>
                  <td className="px-3 py-3">
                    <div className="flex gap-2">
                      {/* Add overtime icon button */}
                      <button
                        onClick={() => handleOpenOvertimeModal(record)}
                        className="text-gray-500 hover:text-purple-600"
                        title="Add Overtime"
                      >
                        <Clock className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleOpenEditModal(record)}
                        className="text-gray-500 hover:text-blue-600"
                        title="Edit"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleOpenViewModal(record)}
                        className="text-gray-500 hover:text-green-600"
                        title="View"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
