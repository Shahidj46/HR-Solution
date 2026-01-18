"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ViewVehiclePage({ params }: { params: { id: string } }) {
  // Mock data - in real app, fetch based on params.id
  const vehicleData = {
    id: params.id,
    vehicleType: "Sedan",
    make: "Toyota",
    model: "Camry",
    year: "2022",
    color: "White",
    plateNumber: "ABC-1234",
    vin: "1HGBH41JXMN109186",
    registrationNumber: "REG-2022-001",
    registrationDate: "2022-01-15",
    registrationExpiry: "2024-12-31",
    insuranceCompany: "ABC Insurance Co.",
    policyNumber: "POL-123456",
    insuranceStartDate: "2023-01-01",
    insuranceExpiry: "2024-06-30",
    assignedTo: "John Smith",
    purchaseDate: "2022-01-10",
    purchasePrice: "28000",
    currentMileage: "35000",
    lastServiceDate: "2023-10-15",
    nextServiceDate: "2024-04-15",
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link href="/vehicle-profile">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Vehicle Details</h1>
        </div>
        <Link href={`/vehicle-profile/${params.id}/edit`}>
          <Button className="bg-purple-600 hover:bg-purple-700">Edit Vehicle</Button>
        </Link>
      </div>

      {/* Basic Information */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">Basic Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">Vehicle ID</label>
            <p className="text-gray-900">{vehicleData.id}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">Vehicle Type</label>
            <p className="text-gray-900">{vehicleData.vehicleType}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">Make</label>
            <p className="text-gray-900">{vehicleData.make}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">Model</label>
            <p className="text-gray-900">{vehicleData.model}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">Year</label>
            <p className="text-gray-900">{vehicleData.year}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">Color</label>
            <p className="text-gray-900">{vehicleData.color}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">License Plate Number</label>
            <p className="text-gray-900">{vehicleData.plateNumber}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">VIN</label>
            <p className="text-gray-900">{vehicleData.vin}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">Assigned To</label>
            <p className="text-gray-900">{vehicleData.assignedTo}</p>
          </div>
        </div>
      </div>

      {/* Registration Details */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">Registration Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">Registration Number</label>
            <p className="text-gray-900">{vehicleData.registrationNumber}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">Registration Date</label>
            <p className="text-gray-900">{vehicleData.registrationDate}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">Registration Expiry Date</label>
            <p className="text-gray-900">{vehicleData.registrationExpiry}</p>
          </div>
        </div>
      </div>

      {/* Insurance Details */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">Insurance Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">Insurance Company</label>
            <p className="text-gray-900">{vehicleData.insuranceCompany}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">Policy Number</label>
            <p className="text-gray-900">{vehicleData.policyNumber}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">Insurance Start Date</label>
            <p className="text-gray-900">{vehicleData.insuranceStartDate}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">Insurance Expiry Date</label>
            <p className="text-gray-900">{vehicleData.insuranceExpiry}</p>
          </div>
        </div>
      </div>

      {/* Purchase & Maintenance Details */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          Purchase & Maintenance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">Purchase Date</label>
            <p className="text-gray-900">{vehicleData.purchaseDate}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">Purchase Price</label>
            <p className="text-gray-900">${vehicleData.purchasePrice}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">Current Mileage</label>
            <p className="text-gray-900">{vehicleData.currentMileage} km</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">Last Service Date</label>
            <p className="text-gray-900">{vehicleData.lastServiceDate}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">Next Service Date</label>
            <p className="text-gray-900">{vehicleData.nextServiceDate}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
