"use client"

import { useState } from "react"
import { Search, Download, Plus, Eye, Edit, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from "next/navigation"

// Sample employee data
const employees = [
  {
    id: "EMP001",
    name: "John Smith",
    designation: "Manager",
    mobile: "+1 234-567-8901",
    joiningDate: "2023-01-15",
    eidExp: "2025-06-30",
    passportExp: "2027-03-20",
    laborExp: "2024-12-31",
    healthExp: "2024-08-15",
    branch: "Dubai",
    isActive: true,
  },
  {
    id: "EMP002",
    name: "Sarah Johnson",
    designation: "Developer",
    mobile: "+1 234-567-8902",
    joiningDate: "2023-02-20",
    eidExp: "2025-07-15",
    passportExp: "2026-11-10",
    laborExp: "2024-11-30",
    healthExp: "2024-09-20",
    branch: "Abu Dhabi",
    isActive: true,
  },
  {
    id: "EMP003",
    name: "Michael Brown",
    designation: "Designer",
    mobile: "+1 234-567-8903",
    joiningDate: "2023-03-10",
    eidExp: "2025-08-20",
    passportExp: "2028-01-05",
    laborExp: "2025-01-15",
    healthExp: "2024-10-10",
    branch: "Dubai",
    isActive: false,
  },
  {
    id: "EMP004",
    name: "Emily Davis",
    designation: "HR Specialist",
    mobile: "+1 234-567-8904",
    joiningDate: "2023-04-05",
    eidExp: "2025-09-10",
    passportExp: "2027-08-25",
    laborExp: "2024-10-20",
    healthExp: "2024-07-30",
    branch: "Sharjah",
    isActive: true,
  },
  {
    id: "EMP005",
    name: "David Wilson",
    designation: "Accountant",
    mobile: "+1 234-567-8905",
    joiningDate: "2023-05-12",
    eidExp: "2025-10-05",
    passportExp: "2026-12-15",
    laborExp: "2024-09-30",
    healthExp: "2024-11-05",
    branch: "Abu Dhabi",
    isActive: true,
  },
]

const employeeNames = ["John Smith", "Sarah Johnson", "Michael Brown", "Emily Davis", "David Wilson"]

export default function EmployeeProfilePage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [filters, setFilters] = useState({
    designation: "",
    branch: "",
    name: "",
  })

  const itemsPerPage = 10
  const totalPages = Math.ceil(employees.length / itemsPerPage)

  const handleExcelDownload = () => {
    console.log("Downloading Excel...")
  }

  const handleAddEmployee = () => {
    router.push("/employee-profile/add")
  }

  const handleEdit = (id: string) => {
    router.push(`/employee-profile/${id}/edit`)
  }

  const handleView = (id: string) => {
    router.push(`/employee-profile/${id}`)
  }

  const handleToggleActive = (id: string) => {
    console.log("Toggling active status for:", id)
  }

  return (
    <div className="mx-auto max-w-7xl">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Employee Profile</h1>
          <p className="text-sm text-gray-500 mt-1">Manage and view employee information</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search all fields..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" onClick={handleExcelDownload}>
            <Download className="w-4 h-4 mr-2" />
            Excel
          </Button>
          <Button onClick={handleAddEmployee} className="bg-purple-600 hover:bg-purple-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Employee
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        {/* Filter Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Select value={filters.designation} onValueChange={(value) => setFilters({ ...filters, designation: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Designation" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Designations</SelectItem>
              <SelectItem value="manager">Manager</SelectItem>
              <SelectItem value="developer">Developer</SelectItem>
              <SelectItem value="designer">Designer</SelectItem>
              <SelectItem value="hr">HR Specialist</SelectItem>
              <SelectItem value="accountant">Accountant</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filters.branch} onValueChange={(value) => setFilters({ ...filters, branch: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Branch" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Branches</SelectItem>
              <SelectItem value="dubai">Dubai</SelectItem>
              <SelectItem value="abu-dhabi">Abu Dhabi</SelectItem>
              <SelectItem value="sharjah">Sharjah</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filters.name} onValueChange={(value) => setFilters({ ...filters, name: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Name" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Employees</SelectItem>
              {employeeNames.map((name) => (
                <SelectItem key={name} value={name.toLowerCase().replace(/\s+/g, "-")}>
                  {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Designation
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mobile
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Joining Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  EID Exp.
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Passport Exp.
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Labor Exp.
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Health Exp.
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Branch
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {employees.map((employee) => (
                <tr key={employee.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    <div className="flex items-center gap-3">
                      <button onClick={() => handleEdit(employee.id)} className="text-blue-600 hover:text-blue-800">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleView(employee.id)} className="text-green-600 hover:text-green-800">
                        <Eye className="w-4 h-4" />
                      </button>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={employee.isActive}
                          onChange={() => handleToggleActive(employee.id)}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-600"></div>
                      </label>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{employee.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{employee.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{employee.designation}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{employee.mobile}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{employee.joiningDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{employee.eidExp}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{employee.passportExp}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{employee.laborExp}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{employee.healthExp}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{employee.branch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="bg-white px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, employees.length)}{" "}
            of {employees.length} entries
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {[...Array(totalPages)].map((_, i) => (
              <Button
                key={i + 1}
                variant={currentPage === i + 1 ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(i + 1)}
                className={currentPage === i + 1 ? "bg-purple-600 hover:bg-purple-700" : ""}
              >
                {i + 1}
              </Button>
            ))}

            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
