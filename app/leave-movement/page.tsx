"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Download, Plus, Eye, Pencil } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

// Mock data for leave/movement records
const mockMovements = [
  {
    id: "1",
    employeeName: "Md. Zubair Hossain Turja",
    employeeId: "01955534393",
    movementType: "Site Visit",
    fromDate: "2026-01-10",
    toDate: "2026-01-10",
    startTime: "09:00",
    endTime: "17:00",
    location: "Construction Site A",
    reason: "Project inspection and client meeting",
    status: "Approved",
  },
  {
    id: "2",
    employeeName: "Sarah Johnson",
    employeeId: "01955534394",
    movementType: "Field Work",
    fromDate: "2026-01-12",
    toDate: "2026-01-13",
    startTime: "08:00",
    endTime: "16:00",
    location: "Downtown Office",
    reason: "Client presentation and document collection",
    status: "Pending",
  },
  {
    id: "3",
    employeeName: "Michael Chen",
    employeeId: "01955534395",
    movementType: "Training",
    fromDate: "2026-01-15",
    toDate: "2026-01-15",
    startTime: "10:00",
    endTime: "15:00",
    location: "Training Center",
    reason: "Attend safety training workshop",
    status: "Approved",
  },
]

export default function LeaveMovementPage() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [movementTypeFilter, setMovementTypeFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const filteredMovements = mockMovements.filter((movement) => {
    const matchesSearch =
      movement.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movement.employeeId.includes(searchTerm) ||
      movement.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = movementTypeFilter === "all" || movement.movementType === movementTypeFilter
    const matchesStatus = statusFilter === "all" || movement.status === statusFilter
    return matchesSearch && matchesType && matchesStatus
  })

  const totalPages = Math.ceil(filteredMovements.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedMovements = filteredMovements.slice(startIndex, startIndex + itemsPerPage)

  const handleDownloadExcel = () => {
    alert("Downloading Excel file...")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Leave/Movement</h1>
          <div className="flex gap-3 items-center">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button onClick={handleDownloadExcel} variant="outline" className="gap-2 bg-transparent">
              <Download className="w-4 h-4" />
              Excel
            </Button>
            <Link href="/leave-movement/add">
              <Button className="gap-2 bg-purple-600 hover:bg-purple-700">
                <Plus className="w-4 h-4" />
                Add Movement
              </Button>
            </Link>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Movement Type</label>
              <Select value={movementTypeFilter} onValueChange={setMovementTypeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Site Visit">Site Visit</SelectItem>
                  <SelectItem value="Field Work">Field Work</SelectItem>
                  <SelectItem value="Training">Training</SelectItem>
                  <SelectItem value="Client Meeting">Client Meeting</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Approved">Approved</SelectItem>
                  <SelectItem value="Rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Employee
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Movement Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    From Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    To Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedMovements.map((movement) => (
                  <tr key={movement.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{movement.employeeName}</div>
                        <div className="text-sm text-gray-500">[{movement.employeeId}]</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{movement.movementType}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{movement.fromDate}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{movement.toDate}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {movement.startTime} - {movement.endTime}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{movement.location}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          movement.status === "Approved"
                            ? "bg-green-100 text-green-800"
                            : movement.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }`}
                      >
                        {movement.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => router.push(`/leave-movement/${movement.id}`)}
                          className="hover:bg-blue-50"
                        >
                          <Eye className="w-4 h-4 text-blue-600" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => router.push(`/leave-movement/${movement.id}/edit`)}
                          className="hover:bg-green-50"
                        >
                          <Pencil className="w-4 h-4 text-green-600" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
            <div className="text-sm text-gray-700">
              Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredMovements.length)} of{" "}
              {filteredMovements.length} results
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              {[...Array(totalPages)].map((_, i) => (
                <Button
                  key={i}
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
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
