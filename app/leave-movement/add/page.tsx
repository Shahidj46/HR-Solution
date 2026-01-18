"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AddMovementPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    employee: "",
    movementType: "",
    fromDate: "",
    toDate: "",
    startTime: "",
    endTime: "",
    location: "",
    reason: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Movement data:", formData)
    alert("Movement record created successfully!")
    router.push("/leave-movement")
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.push("/leave-movement")}
            className="hover:bg-gray-100"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-bold text-gray-900">Add New Movement</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Employee */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Employee</label>
              <Select value={formData.employee} onValueChange={(value) => handleChange("employee", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Employee" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="01955534393">Md. Zubair Hossain Turja [01955534393]</SelectItem>
                  <SelectItem value="01955534394">Sarah Johnson [01955534394]</SelectItem>
                  <SelectItem value="01955534395">Michael Chen [01955534395]</SelectItem>
                  <SelectItem value="01955534396">Emily Davis [01955534396]</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Movement Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Movement Type <span className="text-red-500">*</span>
              </label>
              <Select value={formData.movementType} onValueChange={(value) => handleChange("movementType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Movement Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Site Visit">Site Visit</SelectItem>
                  <SelectItem value="Field Work">Field Work</SelectItem>
                  <SelectItem value="Training">Training</SelectItem>
                  <SelectItem value="Client Meeting">Client Meeting</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* From Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">From Date</label>
              <Input type="date" value={formData.fromDate} onChange={(e) => handleChange("fromDate", e.target.value)} />
            </div>

            {/* To Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">To Date</label>
              <Input type="date" value={formData.toDate} onChange={(e) => handleChange("toDate", e.target.value)} />
            </div>

            {/* Start Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Start Time</label>
              <Input
                type="time"
                value={formData.startTime}
                onChange={(e) => handleChange("startTime", e.target.value)}
              />
            </div>

            {/* End Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">End Time</label>
              <Input type="time" value={formData.endTime} onChange={(e) => handleChange("endTime", e.target.value)} />
            </div>

            {/* Location */}
            <div className="md:col-span-3">
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <Input
                placeholder="Write Your Location"
                value={formData.location}
                onChange={(e) => handleChange("location", e.target.value)}
              />
            </div>

            {/* Reason */}
            <div className="md:col-span-3">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reason <span className="text-red-500">*</span>
              </label>
              <Textarea
                placeholder="Reason"
                rows={4}
                value={formData.reason}
                onChange={(e) => handleChange("reason", e.target.value)}
                className="resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex justify-start">
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 px-8">
              Apply
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
