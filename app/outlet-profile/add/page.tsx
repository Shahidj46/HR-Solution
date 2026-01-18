"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function AddOutletPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    shopName: "",
    tradeLicenseNo: "",
    tradeLicenseExpiry: "",
    tenancyContractNo: "",
    tenancyExpiry: "",
    fireCertificateNo: "",
    fireCertificateExpiry: "",
    hassantukNo: "",
    hassantukExpiry: "",
    immigrationCardNo: "",
    immigrationCardExpiry: "",
    location: "",
    area: "",
    contactPerson: "",
    contactNumber: "",
    email: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Submitting outlet data:", formData)
    router.push("/outlet-profile")
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
          <h1 className="text-2xl font-bold text-gray-900">Add New Shop</h1>
          <p className="text-sm text-gray-600">Enter all shop details</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Basic Information */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b">Basic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Shop Name</label>
                <Input name="shopName" value={formData.shopName} onChange={handleChange} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <Input name="location" value={formData.location} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Area</label>
                <Input name="area" value={formData.area} onChange={handleChange} />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person</label>
                <Input name="contactPerson" value={formData.contactPerson} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number</label>
                <Input name="contactNumber" type="tel" value={formData.contactNumber} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <Input name="email" type="email" value={formData.email} onChange={handleChange} />
              </div>
            </div>
          </div>

          {/* Trade License Information */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b">Trade License Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Trade License No</label>
                <Input name="tradeLicenseNo" value={formData.tradeLicenseNo} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                <Input
                  name="tradeLicenseExpiry"
                  type="date"
                  value={formData.tradeLicenseExpiry}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Tenancy Information */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b">Tenancy Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tenancy Contract No</label>
                <Input name="tenancyContractNo" value={formData.tenancyContractNo} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                <Input name="tenancyExpiry" type="date" value={formData.tenancyExpiry} onChange={handleChange} />
              </div>
            </div>
          </div>

          {/* Fire Certificate Information */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b">Fire Certificate Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Fire Certificate No</label>
                <Input name="fireCertificateNo" value={formData.fireCertificateNo} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                <Input
                  name="fireCertificateExpiry"
                  type="date"
                  value={formData.fireCertificateExpiry}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Hassantuk Information */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b">Hassantuk Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Hassantuk No</label>
                <Input name="hassantukNo" value={formData.hassantukNo} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                <Input name="hassantukExpiry" type="date" value={formData.hassantukExpiry} onChange={handleChange} />
              </div>
            </div>
          </div>

          {/* Immigration Card Information */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b">Immigration Card Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Immigration Card No</label>
                <Input name="immigrationCardNo" value={formData.immigrationCardNo} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                <Input
                  name="immigrationCardExpiry"
                  type="date"
                  value={formData.immigrationCardExpiry}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
              Save Shop
            </Button>
            <Link href="/outlet-profile">
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
