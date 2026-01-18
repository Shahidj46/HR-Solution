"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Pencil } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function ViewOutletPage() {
  const params = useParams()
  const id = params.id

  // Mock data - in real app, fetch based on id
  const outlet = {
    id,
    shopId: "SHP001",
    shopName: "Downtown Branch",
    location: "Dubai Marina",
    area: "Commercial District",
    contactPerson: "Ahmed Hassan",
    contactNumber: "+971 50 123 4567",
    email: "downtown@company.com",
    tradeLicenseNo: "TL-2023-001",
    tradeLicenseExpiry: "2025-12-31",
    tenancyContractNo: "TC-2023-001",
    tenancyExpiry: "2025-06-30",
    fireCertificateNo: "FC-2023-001",
    fireCertificateExpiry: "2025-09-15",
    hassantukNo: "HS-2023-001",
    hassantukExpiry: "2025-11-20",
    immigrationCardNo: "IC-2023-001",
    immigrationCardExpiry: "2025-10-10",
    status: "Active",
  }

  return (
    <div className="flex-1 bg-gray-50">
      <div className="p-8">
        {/* Header */}
        <div className="mb-6">
          <Link href="/outlet-profile">
            <Button variant="ghost" className="gap-2 mb-4">
              <ArrowLeft className="w-4 h-4" />
              Back to Outlet Profile
            </Button>
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Shop Details</h1>
              <p className="text-sm text-gray-600">View all shop information</p>
            </div>
            <Link href={`/outlet-profile/${id}/edit`}>
              <Button className="bg-purple-600 hover:bg-purple-700 gap-2">
                <Pencil className="w-4 h-4" />
                Edit
              </Button>
            </Link>
          </div>
        </div>

        {/* Basic Information */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b">Basic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Shop ID</label>
              <p className="text-sm text-gray-900">{outlet.shopId}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Shop Name</label>
              <p className="text-sm text-gray-900">{outlet.shopName}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Status</label>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  outlet.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}
              >
                {outlet.status}
              </span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Location</label>
              <p className="text-sm text-gray-900">{outlet.location}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Area</label>
              <p className="text-sm text-gray-900">{outlet.area}</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Contact Person</label>
              <p className="text-sm text-gray-900">{outlet.contactPerson}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Contact Number</label>
              <p className="text-sm text-gray-900">{outlet.contactNumber}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Email</label>
              <p className="text-sm text-gray-900">{outlet.email}</p>
            </div>
          </div>
        </div>

        {/* Trade License Information */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b">Trade License Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Trade License No</label>
              <p className="text-sm text-gray-900">{outlet.tradeLicenseNo}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Expiry Date</label>
              <p className="text-sm text-gray-900">{outlet.tradeLicenseExpiry}</p>
            </div>
          </div>
        </div>

        {/* Tenancy Information */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b">Tenancy Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Tenancy Contract No</label>
              <p className="text-sm text-gray-900">{outlet.tenancyContractNo}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Expiry Date</label>
              <p className="text-sm text-gray-900">{outlet.tenancyExpiry}</p>
            </div>
          </div>
        </div>

        {/* Fire Certificate Information */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b">Fire Certificate Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Fire Certificate No</label>
              <p className="text-sm text-gray-900">{outlet.fireCertificateNo}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Expiry Date</label>
              <p className="text-sm text-gray-900">{outlet.fireCertificateExpiry}</p>
            </div>
          </div>
        </div>

        {/* Hassantuk Information */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b">Hassantuk Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Hassantuk No</label>
              <p className="text-sm text-gray-900">{outlet.hassantukNo}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Expiry Date</label>
              <p className="text-sm text-gray-900">{outlet.hassantukExpiry}</p>
            </div>
          </div>
        </div>

        {/* Immigration Card Information */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b">Immigration Card Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Immigration Card No</label>
              <p className="text-sm text-gray-900">{outlet.immigrationCardNo}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Expiry Date</label>
              <p className="text-sm text-gray-900">{outlet.immigrationCardExpiry}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
