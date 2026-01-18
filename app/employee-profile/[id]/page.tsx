"use client"

import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Edit } from "lucide-react"
import { useRouter, useParams } from "next/navigation"

// Mock data - in a real app, this would come from your database
const mockEmployeeData = {
  id: "EMP001",
  fullName: "John Smith",
  mobile: "+1 234-567-8901",
  employeePicture: "/placeholder.svg?height=200&width=200",
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

export default function ViewEmployeePage() {
  const router = useRouter()
  const params = useParams()
  const employeeId = params.id

  // In a real app, fetch the employee data based on the ID
  const employee = mockEmployeeData

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" onClick={() => router.back()}>
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Employee Details</h1>
                <p className="text-sm text-gray-500 mt-1">View employee information</p>
              </div>
            </div>
            <Button
              onClick={() => router.push(`/employee-profile/${employeeId}/edit`)}
              className="bg-purple-600 hover:bg-purple-700"
            >
              <Edit className="w-4 h-4 mr-2" />
              Edit Employee
            </Button>
          </div>

          <div className="space-y-6">
            {/* Personal & Contact Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 border-b pb-3">Personal & Contact Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">ID No</label>
                  <p className="text-base text-gray-900">{employee.id}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Full Name</label>
                  <p className="text-base text-gray-900">{employee.fullName}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Mobile</label>
                  <p className="text-base text-gray-900">{employee.mobile}</p>
                </div>

                <div className="md:col-span-3">
                  <label className="block text-sm font-medium text-gray-500 mb-2">Employee Picture</label>
                  <img
                    src={employee.employeePicture || "/placeholder.svg"}
                    alt={employee.fullName}
                    className="w-32 h-32 rounded-lg object-cover border border-gray-200"
                  />
                </div>
              </div>
            </div>

            {/* Employment Details */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 border-b pb-3">Employment Details</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Designation</label>
                  <p className="text-base text-gray-900">{employee.designation}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Joining Date</label>
                  <p className="text-base text-gray-900">{employee.joiningDate}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Salary</label>
                  <p className="text-base text-gray-900">${employee.salary}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Visa For</label>
                  <p className="text-base text-gray-900">{employee.visaFor}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Working Branch</label>
                  <p className="text-base text-gray-900">{employee.workingBranch}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Country</label>
                  <p className="text-base text-gray-900">{employee.country}</p>
                </div>
              </div>
            </div>

            {/* Document Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 border-b pb-3">Document Information</h2>

              {/* EID Section */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Emirates ID</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">EID No</label>
                    <p className="text-base text-gray-900">{employee.eidNo}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">EID Issuing Date</label>
                    <p className="text-base text-gray-900">{employee.eidIssuingDate}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">EID Exp. Date</label>
                    <p className="text-base text-gray-900">{employee.eidExpDate}</p>
                  </div>
                </div>
              </div>

              {/* Passport Section */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Passport</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Passport No</label>
                    <p className="text-base text-gray-900">{employee.passportNo}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Passport Issuing Date</label>
                    <p className="text-base text-gray-900">{employee.passportIssuingDate}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Passport Exp. Date</label>
                    <p className="text-base text-gray-900">{employee.passportExpDate}</p>
                  </div>
                </div>
              </div>

              {/* Labor Card Section */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Labor Card</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Labor Card No</label>
                    <p className="text-base text-gray-900">{employee.laborCardNo}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Labor Issuing Date</label>
                    <p className="text-base text-gray-900">{employee.laborIssuingDate}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Labor Exp. Date</label>
                    <p className="text-base text-gray-900">{employee.laborExpDate}</p>
                  </div>
                </div>
              </div>

              {/* Health Card Section */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Health Card</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Health Card No</label>
                    <p className="text-base text-gray-900">{employee.healthCardNo}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Health Card Issue Date</label>
                    <p className="text-base text-gray-900">{employee.healthCardIssueDate}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Health Card Exp. Date</label>
                    <p className="text-base text-gray-900">{employee.healthCardExpDate}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Communication */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 border-b pb-3">Communication</h2>

              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2">Last Sent Message</label>
                <p className="text-base text-gray-900 bg-gray-50 p-4 rounded-lg">{employee.lastSentMessage}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
