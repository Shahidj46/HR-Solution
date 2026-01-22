"use client"

import type React from "react"

import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft } from "lucide-react"
import { useRouter, useParams } from "next/navigation"
import { useState } from "react"

// Mock data - in a real app, this would come from your database
const mockEmployeeData = {
  id: "EMP001",
  fullName: "John Smith",
  mobile: "+1 234-567-8901",
  designation: "Manager",
  joiningDate: "2023-01-15",
  salary: "85000",
  visaFor: "Employment",
  workingBranch: "Dubai",
  country: "UAE",
  eidNo: "784-1234-5678901-2",
  eidIssuingDate: "2020-06-15",
  eidExpDate: "2025-06-30",
  passportNo: "AB1234567",
  passportIssuingDate: "2019-03-10",
  passportExpDate: "2027-03-20",
  laborCardNo: "LC-123456789",
  laborIssuingDate: "2023-01-01",
  laborExpDate: "2024-12-31",
  healthCardNo: "HC-987654321",
  healthCardIssueDate: "2023-08-01",
  healthCardExpDate: "2024-08-15",
  lastSentMessage: "Welcome to the company! Please complete your onboarding documents.",
}

export default function EditEmployeePage() {
  const router = useRouter()
  const params = useParams()
  const employeeId = params.id

  // Initialize form data with existing employee data
  const [formData, setFormData] = useState({
    fullName: mockEmployeeData.fullName,
    mobile: mockEmployeeData.mobile,
    employeePicture: null as File | null,
    designation: mockEmployeeData.designation,
    joiningDate: mockEmployeeData.joiningDate,
    salary: mockEmployeeData.salary,
    visaFor: mockEmployeeData.visaFor,
    workingBranch: mockEmployeeData.workingBranch,
    country: mockEmployeeData.country,
    eidNo: mockEmployeeData.eidNo,
    eidIssuingDate: mockEmployeeData.eidIssuingDate,
    eidExpDate: mockEmployeeData.eidExpDate,
    eidCopy: null as File | null,
    passportNo: mockEmployeeData.passportNo,
    passportIssuingDate: mockEmployeeData.passportIssuingDate,
    passportExpDate: mockEmployeeData.passportExpDate,
    passportCopy: null as File | null,
    laborCardNo: mockEmployeeData.laborCardNo,
    laborIssuingDate: mockEmployeeData.laborIssuingDate,
    laborExpDate: mockEmployeeData.laborExpDate,
    laborCardCopy: null as File | null,
    healthCardNo: mockEmployeeData.healthCardNo,
    healthCardIssueDate: mockEmployeeData.healthCardIssueDate,
    healthCardExpDate: mockEmployeeData.healthCardExpDate,
    lastSentMessage: mockEmployeeData.lastSentMessage,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form updated:", formData)
    // Here you would typically send the updated data to your backend
    router.push(`/employee-profile/${employeeId}`)
  }

  const handleFileChange = (field: string, file: File | null) => {
    setFormData({ ...formData, [field]: file })
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
   

      <main className="flex-1 p-8">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-6 flex items-center gap-4">
            <Button variant="outline" size="icon" onClick={() => router.back()}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Edit Employee</h1>
              <p className="text-sm text-gray-500 mt-1">Update employee information</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal & Contact Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 border-b pb-3">Personal & Contact Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ID No</label>
                  <Input placeholder={mockEmployeeData.id} disabled className="bg-gray-50" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <Input
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mobile</label>
                  <Input
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    placeholder="Enter mobile number"
                    required
                  />
                </div>

                <div className="md:col-span-3">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Employee Picture</label>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange("employeePicture", e.target.files?.[0] || null)}
                  />
                </div>
              </div>
            </div>

            {/* Employment Details */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 border-b pb-3">Employment Details</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Designation</label>
                  <Input
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    placeholder="Enter designation"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Joining Date</label>
                  <Input
                    type="date"
                    value={formData.joiningDate}
                    onChange={(e) => setFormData({ ...formData, joiningDate: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Salary</label>
                  <Input
                    type="number"
                    value={formData.salary}
                    onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                    placeholder="Enter salary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Visa For</label>
                  <Input
                    value={formData.visaFor}
                    onChange={(e) => setFormData({ ...formData, visaFor: e.target.value })}
                    placeholder="Enter visa information"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Working Branch</label>
                  <Input
                    value={formData.workingBranch}
                    onChange={(e) => setFormData({ ...formData, workingBranch: e.target.value })}
                    placeholder="Enter working branch"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                  <Input
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="Enter country"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Document Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 border-b pb-3">Document Information</h2>

              {/* EID Section */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">EID No</label>
                  <Input
                    value={formData.eidNo}
                    onChange={(e) => setFormData({ ...formData, eidNo: e.target.value })}
                    placeholder="Enter EID number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">EID Issuing Date</label>
                  <Input
                    type="date"
                    value={formData.eidIssuingDate}
                    onChange={(e) => setFormData({ ...formData, eidIssuingDate: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">EID Exp. Date</label>
                  <Input
                    type="date"
                    value={formData.eidExpDate}
                    onChange={(e) => setFormData({ ...formData, eidExpDate: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">EID Copy</label>
                  <Input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileChange("eidCopy", e.target.files?.[0] || null)}
                  />
                </div>
              </div>

              {/* Passport Section */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Passport No</label>
                  <Input
                    value={formData.passportNo}
                    onChange={(e) => setFormData({ ...formData, passportNo: e.target.value })}
                    placeholder="Enter passport number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Passport Issuing Date</label>
                  <Input
                    type="date"
                    value={formData.passportIssuingDate}
                    onChange={(e) => setFormData({ ...formData, passportIssuingDate: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Passport Exp. Date</label>
                  <Input
                    type="date"
                    value={formData.passportExpDate}
                    onChange={(e) => setFormData({ ...formData, passportExpDate: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Passport Copy</label>
                  <Input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileChange("passportCopy", e.target.files?.[0] || null)}
                  />
                </div>
              </div>

              {/* Labor Card Section */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Labor Card No</label>
                  <Input
                    value={formData.laborCardNo}
                    onChange={(e) => setFormData({ ...formData, laborCardNo: e.target.value })}
                    placeholder="Enter labor card number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Labor Issuing Date</label>
                  <Input
                    type="date"
                    value={formData.laborIssuingDate}
                    onChange={(e) => setFormData({ ...formData, laborIssuingDate: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Labor Exp. Date</label>
                  <Input
                    type="date"
                    value={formData.laborExpDate}
                    onChange={(e) => setFormData({ ...formData, laborExpDate: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Labor Card Copy</label>
                  <Input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileChange("laborCardCopy", e.target.files?.[0] || null)}
                  />
                </div>
              </div>

              {/* Health Card Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Health Card No</label>
                  <Input
                    value={formData.healthCardNo}
                    onChange={(e) => setFormData({ ...formData, healthCardNo: e.target.value })}
                    placeholder="Enter health card number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Health Card Issue Date</label>
                  <Input
                    type="date"
                    value={formData.healthCardIssueDate}
                    onChange={(e) => setFormData({ ...formData, healthCardIssueDate: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Health Card Exp. Date</label>
                  <Input
                    type="date"
                    value={formData.healthCardExpDate}
                    onChange={(e) => setFormData({ ...formData, healthCardExpDate: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* Communication */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 border-b pb-3">Communication</h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Sent Message</label>
                <textarea
                  value={formData.lastSentMessage}
                  onChange={(e) => setFormData({ ...formData, lastSentMessage: e.target.value })}
                  placeholder="Enter message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4">
              <Button type="button" variant="outline" onClick={() => router.back()}>
                Cancel
              </Button>
              <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                Update Employee
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
