"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function EditVehiclePage({ params }: { params: { id: string } }) {
  const router = useRouter()

  // Mock data - in real app, fetch based on params.id
  const [formData, setFormData] = useState({
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
    assignedTo: "john",
    purchaseDate: "2022-01-10",
    purchasePrice: "28000",
    currentMileage: "35000",
    lastServiceDate: "2023-10-15",
    nextServiceDate: "2024-04-15",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Updated vehicle data:", formData)
    router.push(`/vehicle-profile/${params.id}`)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Link href={`/vehicle-profile/${params.id}`}>
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Edit Vehicle - {params.id}</h1>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Basic Information */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">Basic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle ID</label>
              <Input value={params.id} disabled className="bg-gray-50" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Type</label>
              <Select value={formData.vehicleType} onValueChange={(value) => handleChange("vehicleType", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sedan">Sedan</SelectItem>
                  <SelectItem value="suv">SUV</SelectItem>
                  <SelectItem value="truck">Truck</SelectItem>
                  <SelectItem value="van">Van</SelectItem>
                  <SelectItem value="coupe">Coupe</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Make</label>
              <Input value={formData.make} onChange={(e) => handleChange("make", e.target.value)} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Model</label>
              <Input value={formData.model} onChange={(e) => handleChange("model", e.target.value)} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
              <Input value={formData.year} onChange={(e) => handleChange("year", e.target.value)} type="number" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
              <Input value={formData.color} onChange={(e) => handleChange("color", e.target.value)} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">License Plate Number</label>
              <Input value={formData.plateNumber} onChange={(e) => handleChange("plateNumber", e.target.value)} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">VIN</label>
              <Input value={formData.vin} onChange={(e) => handleChange("vin", e.target.value)} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Assigned To</label>
              <Select value={formData.assignedTo} onValueChange={(value) => handleChange("assignedTo", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="john">John Smith</SelectItem>
                  <SelectItem value="sarah">Sarah Johnson</SelectItem>
                  <SelectItem value="michael">Michael Brown</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Registration Details */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Registration Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Registration Number</label>
              <Input
                value={formData.registrationNumber}
                onChange={(e) => handleChange("registrationNumber", e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Registration Date</label>
              <Input
                type="date"
                value={formData.registrationDate}
                onChange={(e) => handleChange("registrationDate", e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Registration Expiry Date</label>
              <Input
                type="date"
                value={formData.registrationExpiry}
                onChange={(e) => handleChange("registrationExpiry", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Insurance Details */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">Insurance Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Insurance Company</label>
              <Input
                value={formData.insuranceCompany}
                onChange={(e) => handleChange("insuranceCompany", e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Policy Number</label>
              <Input value={formData.policyNumber} onChange={(e) => handleChange("policyNumber", e.target.value)} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Insurance Start Date</label>
              <Input
                type="date"
                value={formData.insuranceStartDate}
                onChange={(e) => handleChange("insuranceStartDate", e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Insurance Expiry Date</label>
              <Input
                type="date"
                value={formData.insuranceExpiry}
                onChange={(e) => handleChange("insuranceExpiry", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Purchase & Maintenance Details */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            Purchase & Maintenance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Purchase Date</label>
              <Input
                type="date"
                value={formData.purchaseDate}
                onChange={(e) => handleChange("purchaseDate", e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Purchase Price</label>
              <Input
                value={formData.purchasePrice}
                onChange={(e) => handleChange("purchasePrice", e.target.value)}
                type="number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Current Mileage</label>
              <Input
                value={formData.currentMileage}
                onChange={(e) => handleChange("currentMileage", e.target.value)}
                type="number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Service Date</label>
              <Input
                type="date"
                value={formData.lastServiceDate}
                onChange={(e) => handleChange("lastServiceDate", e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Next Service Date</label>
              <Input
                type="date"
                value={formData.nextServiceDate}
                onChange={(e) => handleChange("nextServiceDate", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3">
          <Link href={`/vehicle-profile/${params.id}`}>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </Link>
          <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  )
}
