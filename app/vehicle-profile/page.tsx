"use client"

import { useState } from "react"
import { Search, Download, Plus, Eye, Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"
import { useRouter } from "next/navigation"

// Sample vehicle data
const vehicleData = [
  {
    id: "V001",
    type: "Sedan",
    make: "Toyota",
    model: "Camry",
    year: "2022",
    plateNumber: "ABC-1234",
    registrationExp: "2024-12-31",
    insuranceExp: "2024-06-30",
    assignedTo: "John Smith",
    status: true,
  },
  {
    id: "V002",
    type: "SUV",
    make: "Honda",
    model: "CR-V",
    year: "2023",
    plateNumber: "XYZ-5678",
    registrationExp: "2025-03-15",
    insuranceExp: "2024-09-20",
    assignedTo: "Sarah Johnson",
    status: true,
  },
  {
    id: "V003",
    type: "Truck",
    make: "Ford",
    model: "F-150",
    year: "2021",
    plateNumber: "DEF-9012",
    registrationExp: "2024-08-10",
    insuranceExp: "2024-12-05",
    assignedTo: "Michael Brown",
    status: false,
  },
]

export default function VehicleProfilePage() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [vehicleTypeFilter, setVehicleTypeFilter] = useState("all")
  const [makeFilter, setMakeFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const handleExcelDownload = () => {
    console.log("Downloading Excel...")
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Vehicle Profile</h1>
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
          <Button variant="outline" className="gap-2 bg-transparent" onClick={handleExcelDownload}>
            <Download className="w-4 h-4" />
            Excel
          </Button>
          <Link href="/vehicle-profile/add">
            <Button className="gap-2 bg-purple-600 hover:bg-purple-700">
              <Plus className="w-4 h-4" />
              Add Vehicle
            </Button>
          </Link>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Type</label>
            <Select value={vehicleTypeFilter} onValueChange={setVehicleTypeFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="sedan">Sedan</SelectItem>
                <SelectItem value="suv">SUV</SelectItem>
                <SelectItem value="truck">Truck</SelectItem>
                <SelectItem value="van">Van</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Make</label>
            <Select value={makeFilter} onValueChange={setMakeFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All Makes" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Makes</SelectItem>
                <SelectItem value="toyota">Toyota</SelectItem>
                <SelectItem value="honda">Honda</SelectItem>
                <SelectItem value="ford">Ford</SelectItem>
                <SelectItem value="nissan">Nissan</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vehicle ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Make</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Model
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Plate Number
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Registration Exp.
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Insurance Exp.
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Assigned To
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
              {vehicleData.map((vehicle) => (
                <tr key={vehicle.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{vehicle.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{vehicle.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{vehicle.make}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{vehicle.model}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{vehicle.year}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{vehicle.plateNumber}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{vehicle.registrationExp}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{vehicle.insuranceExp}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{vehicle.assignedTo}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Switch checked={vehicle.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex items-center gap-2">
                      <Link href={`/vehicle-profile/${vehicle.id}`}>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Eye className="w-4 h-4 text-blue-600" />
                        </Button>
                      </Link>
                      <Link href={`/vehicle-profile/${vehicle.id}/edit`}>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Pencil className="w-4 h-4 text-green-600" />
                        </Button>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">{vehicleData.length}</span>{" "}
            of <span className="font-medium">{vehicleData.length}</span> results
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled={currentPage === 1}>
              Previous
            </Button>
            <Button variant="outline" size="sm" className="bg-purple-600 text-white hover:bg-purple-700">
              1
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
