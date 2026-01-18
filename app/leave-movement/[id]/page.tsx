"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"
import { useRouter, useParams } from "next/navigation"
import { useState } from "react"

export default function ViewMovementPage() {
  const router = useRouter()
  const params = useParams()
  const id = params.id

  // Mock data - in real app, fetch based on id
  const [formData, setFormData] = useState({
    employeeName: "Md. Zubair Hossain Turja [01955534393]",
    movementType: "Site Visit",
    fromDate: "2026-01-10",
    toDate: "2026-01-10",
    startTime: "09:00",
    endTime: "17:00",
    location: "Construction Site A",
    reason: "Project inspection and client meeting",
    status: "Approved",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Movement updated:", formData)
    router.push("/leave-movement")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-8">
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.push("/leave-movement")}
            className="hover:bg-gray-100"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-bold text-gray-900">Movement Details</h1>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Employee */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Employee <span className="text-red-500">*</span>
              </label>
              <Select
                value={formData.employeeName}
                onValueChange={(value) => setFormData({ ...formData, employeeName: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Md. Zubair Hossain Turja [01955534393]">
                    Md. Zubair Hossain Turja [01955534393]
                  </SelectItem>
                  <SelectItem value="Ahmed Hassan [01234567890]">Ahmed Hassan [01234567890]</SelectItem>
                  <SelectItem value="Fatima Khan [09876543210]">Fatima Khan [09876543210]</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Movement Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Movement Type <span className="text-red-500">*</span>
              </label>
              <Select
                value={formData.movementType}
                onValueChange={(value) => setFormData({ ...formData, movementType: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Site Visit">Site Visit</SelectItem>
                  <SelectItem value="Client Meeting">Client Meeting</SelectItem>
                  <SelectItem value="Business Trip">Business Trip</SelectItem>
                  <SelectItem value="Training">Training</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Approved">Approved</SelectItem>
                  <SelectItem value="Rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* From Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                From Date <span className="text-red-500">*</span>
              </label>
              <Input
                type="date"
                value={formData.fromDate}
                onChange={(e) => setFormData({ ...formData, fromDate: e.target.value })}
                required
              />
            </div>

            {/* To Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                To Date <span className="text-red-500">*</span>
              </label>
              <Input
                type="date"
                value={formData.toDate}
                onChange={(e) => setFormData({ ...formData, toDate: e.target.value })}
                required
              />
            </div>

            {/* Start Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Start Time <span className="text-red-500">*</span>
              </label>
              <Input
                type="time"
                value={formData.startTime}
                onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                required
              />
            </div>

            {/* End Time */}
            <div className="md:col-span-3">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                End Time <span className="text-red-500">*</span>
              </label>
              <Input
                type="time"
                value={formData.endTime}
                onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                required
              />
            </div>

            {/* Location */}
            <div className="md:col-span-3">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                placeholder="Write Your Location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
              />
            </div>

            {/* Reason */}
            <div className="md:col-span-3">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reason <span className="text-red-500">*</span>
              </label>
              <Textarea
                placeholder="Reason"
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                rows={4}
                required
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 mt-6">
            <Button type="button" variant="outline" onClick={() => router.push("/leave-movement")}>
              Cancel
            </Button>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              Update
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
