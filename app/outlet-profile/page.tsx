"use client"

import { useState } from "react"
import { Search, Download, Plus, Eye, Edit, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from "next/navigation"

// Mock data for outlets
const mockOutlets = [
  {
    id: 1,
    shopId: "SHP001",
    shopName: "Downtown Branch",
    tradeLicenseExp: "2025-12-31",
    tenancyExp: "2025-06-30",
    fireCertificateExp: "2025-09-15",
    hassantukExp: "2025-11-20",
    immigrationCardExp: "2025-10-10",
    expType: "Trade License",
    status: "Active",
  },
  {
    id: 2,
    shopId: "SHP002",
    shopName: "Mall Branch",
    tradeLicenseExp: "2026-01-15",
    tenancyExp: "2025-08-30",
    fireCertificateExp: "2025-07-20",
    hassantukExp: "2025-12-05",
    immigrationCardExp: "2025-11-25",
    expType: "Tenancy",
    status: "Active",
  },
  {
    id: 3,
    shopId: "SHP003",
    shopName: "Airport Branch",
    tradeLicenseExp: "2025-05-20",
    tenancyExp: "2025-04-15",
    fireCertificateExp: "2025-06-30",
    hassantukExp: "2025-08-10",
    immigrationCardExp: "2025-09-05",
    expType: "Fire Certificate",
    status: "Inactive",
  },
]

const shopNames = ["Downtown Branch", "Mall Branch", "Airport Branch"]

export default function OutletProfilePage() {
  const router = useRouter()
  const [outlets, setOutlets] = useState(mockOutlets)
  const [searchTerm, setSearchTerm] = useState("")
  const [shopNameFilter, setShopNameFilter] = useState("")
  const [expTypeFilter, setExpTypeFilter] = useState("")
  const [statusFilter, setStatusFilter] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  // Filter outlets
  const filteredOutlets = outlets.filter((outlet) => {
    const matchesSearch =
      outlet.shopName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      outlet.shopId.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesShopName = !shopNameFilter || shopNameFilter === "all" || outlet.shopName === shopNameFilter
    const matchesExpType = !expTypeFilter || expTypeFilter === "all" || outlet.expType === expTypeFilter
    const matchesStatus = !statusFilter || statusFilter === "all" || outlet.status === statusFilter

    return matchesSearch && matchesShopName && matchesExpType && matchesStatus
  })

  // Pagination
  const totalPages = Math.ceil(filteredOutlets.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedOutlets = filteredOutlets.slice(startIndex, startIndex + itemsPerPage)

  const handleDownloadExcel = () => {
    console.log("Downloading Excel...")
  }

  const handleAddShop = () => {
    router.push("/outlet-profile/add")
  }

  const handleEdit = (id: number) => {
    router.push(`/outlet-profile/${id}/edit`)
  }

  const handleView = (id: number) => {
    router.push(`/outlet-profile/${id}`)
  }

  const toggleStatus = (id: number) => {
    setOutlets(
      outlets.map((outlet) =>
        outlet.id === id ? { ...outlet, status: outlet.status === "Active" ? "Inactive" : "Active" } : outlet,
      ),
    )
  }

  // Shared Action Buttons Component
  const ActionButtons = ({ outlet }: { outlet: (typeof mockOutlets)[0] }) => (
    <div className="flex items-center gap-3">
      <button onClick={() => handleEdit(outlet.id)} className="text-blue-600 hover:text-blue-800 p-1">
        <Edit className="w-4 h-4" />
      </button>
      <button onClick={() => handleView(outlet.id)} className="text-green-600 hover:text-green-800 p-1">
        <Eye className="w-4 h-4" />
      </button>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={outlet.status === "Active"}
          onChange={() => toggleStatus(outlet.id)}
          className="sr-only peer"
        />
        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-600"></div>
      </label>
    </div>
  )

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6">
      {/* Header Section */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Outlet Profile</h1>
          <p className="text-sm text-gray-500 mt-1">Manage all outlet information</p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search by shop name or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full"
            />
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={handleDownloadExcel} className="flex-1 sm:flex-none">
              <Download className="w-4 h-4 mr-2" />
              Excel
            </Button>
            <Button onClick={handleAddShop} className="bg-purple-600 hover:bg-purple-700 flex-1 sm:flex-none">
              <Plus className="w-4 h-4 mr-2" />
              Add Outlet
            </Button>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Shop Name Filter */}
          <Select value={shopNameFilter} onValueChange={setShopNameFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Shop Name" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Shops</SelectItem>
              {shopNames.map((name) => (
                <SelectItem key={name} value={name}>
                  {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Exp. Type Filter */}
          <Select value={expTypeFilter} onValueChange={setExpTypeFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Exp. Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Trade License">Trade License</SelectItem>
              <SelectItem value="Tenancy">Tenancy</SelectItem>
              <SelectItem value="Fire Certificate">Fire Certificate</SelectItem>
              <SelectItem value="Hassantuk">Hassantuk</SelectItem>
              <SelectItem value="Immigration Card">Immigration Card</SelectItem>
            </SelectContent>
          </Select>

          {/* Status Filter */}
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Responsive Content Area */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        
        {/* Desktop Table View (Hidden on Mobile) */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Shop ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Shop Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Trade License Exp.
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tenancy Exp.
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fire Certificate Exp.
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hassantuk Exp.
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Immigration Card Exp.
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedOutlets.map((outlet) => (
                <tr key={outlet.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <ActionButtons outlet={outlet} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{outlet.shopId}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{outlet.shopName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{outlet.tradeLicenseExp}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{outlet.tenancyExp}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{outlet.fireCertificateExp}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{outlet.hassantukExp}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{outlet.immigrationCardExp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View (Hidden on Desktop) */}
        <div className="md:hidden">
          <div className="divide-y divide-gray-200">
            {paginatedOutlets.map((outlet) => (
              <div key={outlet.id} className="p-4 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{outlet.shopName}</h3>
                    <p className="text-xs text-gray-500">{outlet.shopId}</p>
                  </div>
                  <ActionButtons outlet={outlet} />
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                        <span className="text-gray-500 block">Trade License</span>
                        <span className="font-medium">{outlet.tradeLicenseExp}</span>
                    </div>
                    <div>
                        <span className="text-gray-500 block">Tenancy</span>
                        <span className="font-medium">{outlet.tenancyExp}</span>
                    </div>
                    <div>
                        <span className="text-gray-500 block">Fire Cert.</span>
                        <span className="font-medium">{outlet.fireCertificateExp}</span>
                    </div>
                    <div>
                        <span className="text-gray-500 block">Hassantuk</span>
                        <span className="font-medium">{outlet.hassantukExp}</span>
                    </div>
                     <div>
                        <span className="text-gray-500 block">Immigration</span>
                        <span className="font-medium">{outlet.immigrationCardExp}</span>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="bg-white px-4 sm:px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600 text-center sm:text-left">
            Showing {filteredOutlets.length > 0 ? startIndex + 1 : 0} to {Math.min(startIndex + itemsPerPage, filteredOutlets.length)} of{" "}
            {filteredOutlets.length} outlets
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(page)}
                className={currentPage === page ? "bg-purple-600 hover:bg-purple-700" : ""}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages || totalPages === 0}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}