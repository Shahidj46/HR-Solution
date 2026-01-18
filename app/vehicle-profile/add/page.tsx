"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function AddVehiclePage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    vehicleType: "",
    make: "",
    model: "",
    year: "",
    color: "",
    plateNumber: "",
    vin: "",
    registrationNumber: "",
    registrationDate: "",
    registrationExpiry: "",
    insuranceCompany: "",
    policyNumber: "",
    insuranceStartDate: "",
    insuranceExpiry: "",
    assignedTo: "",
    purchaseDate: "",
    purchasePrice: "",
    currentMileage: "",
    lastServiceDate: "",
    nextServiceDate: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Vehicle data:", formData)
    router.push("/vehicle-profile")
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Link href="/vehicle-profile">
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Add New Vehicle</h1>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Basic Information */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">Basic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle ID</label>
              <Input value="Auto generated" disabled className="bg-gray-50" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Type</label>
              <Select value={formData.vehicleType} onValueChange={(value) => handleChange("vehicleType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
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
              <Input
                value={formData.make}
                onChange={(e) => handleChange("make", e.target.value)}
                placeholder="e.g., Toyota, Honda"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Model</label>
              <Input
                value={formData.model}
                onChange={(e) => handleChange("model", e.target.value)}
                placeholder="e.g., Camry, CR-V"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
              <Input
                value={formData.year}
                onChange={(e) => handleChange("year", e.target.value)}
                placeholder="e.g., 2023"
                type="number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
              <Input
                value={formData.color}
                onChange={(e) => handleChange("color", e.target.value)}
                placeholder="e.g., White, Black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">License Plate Number</label>
              <Input
                value={formData.plateNumber}
                onChange={(e) => handleChange("plateNumber", e.target.value)}
                placeholder="e.g., ABC-1234"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">VIN</label>
              <Input
                value={formData.vin}
                onChange={(e) => handleChange("vin", e.target.value)}
                placeholder="Vehicle Identification Number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Assigned To</label>
              <Select value={formData.assignedTo} onValueChange={(value) => handleChange("assignedTo", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select employee" />
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
                placeholder="Registration number"
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
                placeholder="Company name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Policy Number</label>
              <Input
                value={formData.policyNumber}
                onChange={(e) => handleChange("policyNumber", e.target.value)}
                placeholder="Policy number"
              />
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
                placeholder="e.g., 25000"
                type="number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Current Mileage</label>
              <Input
                value={formData.currentMileage}
                onChange={(e) => handleChange("currentMileage", e.target.value)}
                placeholder="e.g., 15000"
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
          <Link href="/vehicle-profile">
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </Link>
          <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
            Add Vehicle
          </Button>
        </div>
      </form>
    </div>
  )
}
