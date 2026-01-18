"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Grid, DollarSign, Trash2, GraduationCap, Clock, Home, Plus, FileText } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function AddEmployeePage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    employeeId: "",
    name: "",
    designation: "",
    hrPosition: "",
    mobileNo: "",
    email: "",
    joiningDate: "",
    confirmationDate: "",
    employeeType: "",
    office: "",
    location: "",
    attendanceDeviceCardNo: "",
    department: "",
    departmentSection: "",
    religion: "",
    gender: "",
    bloodGroup: "",
    fatherName: "",
    motherName: "",
    dateOfBirth: "",
    officialContact: "",
    nid: "",
    presentAddress: "",
    permanentAddress: "",
    supervisor: "",
    lineManager: "",
    uploadSignature: null as File | null,
    profileImage: null as File | null,
  })

  const [officialInfo, setOfficialInfo] = useState({
    generateDate: "",
    calendarType: "",
    offdays: {
      sunday: false,
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: true,
      saturday: false,
    },
  })

  const [salaryInfo, setSalaryInfo] = useState({
    salaryType: "Regular",
    salaryStructure: "gross",
    grossSalary: "",
  })

  const [additionDeduction, setAdditionDeduction] = useState({
    fromMonth: "",
    toMonth: "",
    type: "",
    deduction: "",
    amount: "",
  })

  const [additionDeductionList, setAdditionDeductionList] = useState<
    Array<{
      id: number
      additionDeduction: string
      type: string
      applicableMonth: string
      advance: string
      amount: string
      remarks: string
    }>
  >([])

  const [academicInfo, setAcademicInfo] = useState({
    isForeign: false,
    instituteName: "",
    degree: "",
    fieldOfStudy: "",
    result: "",
    scale: "",
    startDate: "",
    finishDate: "",
    attachment: null as File | null,
  })

  const [academicList, setAcademicList] = useState<
    Array<{
      id: number
      instituteName: string
      degree: string
      fieldOfStudy: string
      result: string
      dateRange: string
    }>
  >([])

  const [employmentHistory, setEmploymentHistory] = useState({
    companyName: "",
    jobTitle: "",
    location: "",
    jobDescription: "",
    fromDate: "",
    toDate: "",
  })

  const [employmentHistoryList, setEmploymentHistoryList] = useState<
    Array<{
      id: number
      companyName: string
      jobTitle: string
      location: string
      jobDescription: string
      fromDate: string
      toDate: string
    }>
  >([])

  const [documentInfo, setDocumentInfo] = useState({
    eidNo: "",
    eidIssuingDate: "",
    eidExpDate: "",
    eidCopy: null as File | null,
    passportNo: "",
    passportIssuingDate: "",
    passportExpDate: "",
    passportCopy: null as File | null,
    laborCardNo: "",
    laborIssuingDate: "",
    laborExpDate: "",
    laborCardCopy: null as File | null,
    healthCardNo: "",
    healthCardIssueDate: "",
    healthCardExpDate: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(
      "Form submitted:",
      formData,
      officialInfo,
      salaryInfo,
      academicList,
      employmentHistoryList,
      documentInfo,
    )
    router.push("/employee-profile")
  }

  const handleFileChange = (field: string, file: File | null) => {
    setFormData({ ...formData, [field]: file })
  }

  const handleDocumentFileChange = (field: string, file: File | null) => {
    setDocumentInfo({ ...documentInfo, [field]: file })
  }

  const handleOffdayChange = (day: string) => {
    setOfficialInfo({
      ...officialInfo,
      offdays: {
        ...officialInfo.offdays,
        [day]: !officialInfo.offdays[day as keyof typeof officialInfo.offdays],
      },
    })
  }

  const handleAddEntry = () => {
    if (additionDeduction.type && additionDeduction.amount) {
      setAdditionDeductionList([
        ...additionDeductionList,
        {
          id: Date.now(),
          additionDeduction: additionDeduction.deduction,
          type: additionDeduction.type,
          applicableMonth: `${additionDeduction.fromMonth} - ${additionDeduction.toMonth}`,
          advance: "",
          amount: additionDeduction.amount,
          remarks: "",
        },
      ])
      setAdditionDeduction({
        fromMonth: "",
        toMonth: "",
        type: "",
        deduction: "",
        amount: "",
      })
    }
  }

  const handleRemoveEntry = (id: number) => {
    setAdditionDeductionList(additionDeductionList.filter((item) => item.id !== id))
  }

  const handleAddAcademic = () => {
    if (academicInfo.instituteName && academicInfo.degree) {
      setAcademicList([
        ...academicList,
        {
          id: Date.now(),
          instituteName: academicInfo.instituteName,
          degree: academicInfo.degree,
          fieldOfStudy: academicInfo.fieldOfStudy,
          result: academicInfo.result,
          dateRange: `${academicInfo.startDate} - ${academicInfo.finishDate}`,
        },
      ])
      setAcademicInfo({
        isForeign: false,
        instituteName: "",
        degree: "",
        fieldOfStudy: "",
        result: "",
        scale: "",
        startDate: "",
        finishDate: "",
        attachment: null,
      })
    }
  }

  const handleRemoveAcademic = (id: number) => {
    setAcademicList(academicList.filter((item) => item.id !== id))
  }

  const handleAddEmployment = () => {
    if (employmentHistory.companyName && employmentHistory.jobTitle) {
      setEmploymentHistoryList([
        ...employmentHistoryList,
        {
          id: Date.now(),
          companyName: employmentHistory.companyName,
          jobTitle: employmentHistory.jobTitle,
          location: employmentHistory.location,
          jobDescription: employmentHistory.jobDescription,
          fromDate: employmentHistory.fromDate,
          toDate: employmentHistory.toDate,
        },
      ])
      setEmploymentHistory({
        companyName: "",
        jobTitle: "",
        location: "",
        jobDescription: "",
        fromDate: "",
        toDate: "",
      })
    }
  }

  const handleRemoveEmployment = (id: number) => {
    setEmploymentHistoryList(employmentHistoryList.filter((item) => item.id !== id))
  }

  const employees = [
    { id: "01325088120", name: "Md. Usuf Ali" },
    { id: "01955534393", name: "Md. Zubair Hossain Turja" },
    { id: "01712345678", name: "Ahmed Rahman" },
    { id: "01898765432", name: "Fatima Begum" },
  ]

  const employeeList = employees // Renamed for clarity, same data

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-6 flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Add New Employee</h1>
            <p className="text-sm text-gray-500 mt-1">Fill in the employee information</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6 border-b pb-3">
              <div className="flex items-center gap-2">
                <Home className="w-5 h-5 text-gray-700" />
                <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
              </div>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  className="text-orange-500 border-orange-500 hover:bg-orange-50 bg-transparent"
                  onClick={() => router.back()}
                >
                  Cancel
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  Save
                </Button>
              </div>
            </div>

            {/* Row 1: Employee Id, Name, Designation, HR Position */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Employee Id</label>
                <Input
                  value={formData.employeeId}
                  onChange={(e) => setFormData({ ...formData, employeeId: e.target.value })}
                  placeholder="10030"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name<span className="text-red-500">*</span>
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter Name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center justify-between">
                  <span>
                    Designation<span className="text-red-500">*</span>
                  </span>
                  <button type="button" className="text-blue-600 text-xs flex items-center gap-1 hover:underline">
                    <Plus className="w-3 h-3" /> ADD NEW
                  </button>
                </label>
                <Select
                  value={formData.designation}
                  onValueChange={(value) => setFormData({ ...formData, designation: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Designation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="supervisor">Supervisor</SelectItem>
                    <SelectItem value="executive">Executive</SelectItem>
                    <SelectItem value="officer">Officer</SelectItem>
                    <SelectItem value="assistant">Assistant</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center justify-between">
                  <span>HR Position</span>
                  <button type="button" className="text-blue-600 text-xs flex items-center gap-1 hover:underline">
                    <Plus className="w-3 h-3" /> ADD NEW
                  </button>
                </label>
                <Select
                  value={formData.hrPosition}
                  onValueChange={(value) => setFormData({ ...formData, hrPosition: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select/Search HR Position" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="probation">Probation</SelectItem>
                    <SelectItem value="permanent">Permanent</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Row 2: Mobile No (full width) */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mobile No<span className="text-red-500">*</span>
              </label>
              <Input
                value={formData.mobileNo}
                onChange={(e) => setFormData({ ...formData, mobileNo: e.target.value })}
                placeholder="Enter Mobile Number"
                required
              />
            </div>

            {/* Row 3: Email, Joining Date, Confirmation Date, Employee Type */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="email@gmail.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Joining Date<span className="text-red-500">*</span>
                </label>
                <Input
                  type="date"
                  value={formData.joiningDate}
                  onChange={(e) => setFormData({ ...formData, joiningDate: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirmation Date</label>
                <Input
                  type="date"
                  value={formData.confirmationDate}
                  onChange={(e) => setFormData({ ...formData, confirmationDate: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Employee Type<span className="text-red-500">*</span>
                </label>
                <Select
                  value={formData.employeeType}
                  onValueChange={(value) => setFormData({ ...formData, employeeType: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Employee Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="probation">Probation</SelectItem>
                    <SelectItem value="permanent">Permanent</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="intern">Intern</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Row 4: Office, Location, Attendance Device/Card No */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Office<span className="text-red-500">*</span>
                </label>
                <Select value={formData.office} onValueChange={(value) => setFormData({ ...formData, office: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Office" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dhaka-head">Dhaka Head Office</SelectItem>
                    <SelectItem value="chittagong">Chittagong Branch</SelectItem>
                    <SelectItem value="sylhet">Sylhet Branch</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <Input
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="Location"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Attendance Device/Card No</label>
                <Input
                  value={formData.attendanceDeviceCardNo}
                  onChange={(e) => setFormData({ ...formData, attendanceDeviceCardNo: e.target.value })}
                  placeholder="Attendance Device/Card No"
                />
              </div>
            </div>

            {/* Row 5: Department, Department Section, Religion, Gender */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center justify-between">
                  <span>Department</span>
                  <button type="button" className="text-blue-600 text-xs flex items-center gap-1 hover:underline">
                    <Plus className="w-3 h-3" /> ADD NEW
                  </button>
                </label>
                <Select
                  value={formData.department}
                  onValueChange={(value) => setFormData({ ...formData, department: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="accounts">Accounts & Finance</SelectItem>
                    <SelectItem value="hr">Human Resources</SelectItem>
                    <SelectItem value="it">Information Technology</SelectItem>
                    <SelectItem value="operations">Operations</SelectItem>
                    <SelectItem value="sales">Sales & Marketing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center justify-between">
                  <span>Department Section</span>
                  <button type="button" className="text-blue-600 text-xs flex items-center gap-1 hover:underline">
                    <Plus className="w-3 h-3" /> ADD NEW
                  </button>
                </label>
                <Select
                  value={formData.departmentSection}
                  onValueChange={(value) => setFormData({ ...formData, departmentSection: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Section" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="section-a">Section A</SelectItem>
                    <SelectItem value="section-b">Section B</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Religion</label>
                <Select
                  value={formData.religion}
                  onValueChange={(value) => setFormData({ ...formData, religion: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Religion" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="islam">Islam</SelectItem>
                    <SelectItem value="hinduism">Hinduism</SelectItem>
                    <SelectItem value="christianity">Christianity</SelectItem>
                    <SelectItem value="buddhism">Buddhism</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                <Select value={formData.gender} onValueChange={(value) => setFormData({ ...formData, gender: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Row 6: Blood Group, Father Name, Mother Name */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Blood Group</label>
                <Select
                  value={formData.bloodGroup}
                  onValueChange={(value) => setFormData({ ...formData, bloodGroup: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Blood Group" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="a+">A+</SelectItem>
                    <SelectItem value="a-">A-</SelectItem>
                    <SelectItem value="b+">B+</SelectItem>
                    <SelectItem value="b-">B-</SelectItem>
                    <SelectItem value="ab+">AB+</SelectItem>
                    <SelectItem value="ab-">AB-</SelectItem>
                    <SelectItem value="o+">O+</SelectItem>
                    <SelectItem value="o-">O-</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Father Name</label>
                <Input
                  value={formData.fatherName}
                  onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                  placeholder="Father Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mother Name</label>
                <Input
                  value={formData.motherName}
                  onChange={(e) => setFormData({ ...formData, motherName: e.target.value })}
                  placeholder="Mother Name"
                />
              </div>
            </div>

            {/* Row 7: Date Of Birth, Official Contact, NID, Present Address */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date Of Birth</label>
                <Input
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Official Contact</label>
                <Input
                  value={formData.officialContact}
                  onChange={(e) => setFormData({ ...formData, officialContact: e.target.value })}
                  placeholder="Official Contact"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  NID<span className="text-red-500">*</span>
                </label>
                <Input
                  value={formData.nid}
                  onChange={(e) => setFormData({ ...formData, nid: e.target.value })}
                  placeholder="Enter NID"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Present Address</label>
                <Input
                  value={formData.presentAddress}
                  onChange={(e) => setFormData({ ...formData, presentAddress: e.target.value })}
                  placeholder="Present Address"
                />
              </div>
            </div>

            {/* Row 8: Permanent Address, Supervisor, Line Manager, Upload Signature */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Permanent Address</label>
                <Input
                  value={formData.permanentAddress}
                  onChange={(e) => setFormData({ ...formData, permanentAddress: e.target.value })}
                  placeholder="Permanent Address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Supervisor<span className="text-red-500">*</span>
                </label>
                <Select
                  value={formData.supervisor}
                  onValueChange={(value) => setFormData({ ...formData, supervisor: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Supervisor" />
                  </SelectTrigger>
                  <SelectContent>
                    {employeeList.map((emp) => (
                      <SelectItem key={emp.id} value={emp.id}>
                        {emp.name}({emp.id})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Line Manager<span className="text-red-500">*</span>
                </label>
                <Select
                  value={formData.lineManager}
                  onValueChange={(value) => setFormData({ ...formData, lineManager: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Line Manager" />
                  </SelectTrigger>
                  <SelectContent>
                    {employeeList.map((emp) => (
                      <SelectItem key={emp.id} value={emp.id}>
                        {emp.name}({emp.id})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Upload Signature</label>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange("uploadSignature", e.target.files?.[0] || null)}
                />
              </div>
            </div>

            {/* Row 9: Profile Image */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Profile Image</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange("profileImage", e.target.files?.[0] || null)}
                  className="hidden"
                  id="profileImage"
                />
                <label htmlFor="profileImage" className="cursor-pointer">
                  <span className="text-gray-500">Attachment</span>
                </label>
              </div>
            </div>
          </div>

          {/* Official Information */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6 border-b pb-3">
              <div className="flex items-center gap-2">
                <Grid className="w-5 h-5 text-gray-700" />
                <h2 className="text-xl font-semibold text-gray-900">Official Information</h2>
              </div>
              <Button
                type="button"
                variant="outline"
                className="text-orange-500 border-orange-500 hover:bg-orange-50 bg-transparent"
                onClick={() => {
                  setOfficialInfo({
                    generateDate: "",
                    calendarType: "",
                    offdays: {
                      sunday: false,
                      monday: false,
                      tuesday: false,
                      wednesday: false,
                      thursday: false,
                      friday: true,
                      saturday: false,
                    },
                  })
                }}
              >
                Cancel
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Calendar Assign */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-gray-800">Calendar Assign</h3>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="text-blue-600 border-blue-600 bg-transparent"
                  >
                    Save
                  </Button>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Generate Date</label>
                    <Input
                      type="date"
                      value={officialInfo.generateDate}
                      onChange={(e) => setOfficialInfo({ ...officialInfo, generateDate: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Calendar Type<span className="text-red-500">*</span>
                    </label>
                    <Select
                      value={officialInfo.calendarType}
                      onValueChange={(value) => setOfficialInfo({ ...officialInfo, calendarType: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Calendar Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General</SelectItem>
                        <SelectItem value="shift-a">Shift A</SelectItem>
                        <SelectItem value="shift-b">Shift B</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Offday Assign */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-gray-800">Offday Assign</h3>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="text-blue-600 border-blue-600 bg-transparent"
                  >
                    Save
                  </Button>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].map((day) => (
                    <div key={day} className="flex flex-col items-center">
                      <label className="text-xs font-medium text-gray-600 mb-2 capitalize">{day.slice(0, 3)}</label>
                      <input
                        type="checkbox"
                        checked={officialInfo.offdays[day as keyof typeof officialInfo.offdays]}
                        onChange={() => handleOffdayChange(day)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Salary Information */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6 border-b pb-3">
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-gray-700" />
                <h2 className="text-xl font-semibold text-gray-900">Salary Information</h2>
              </div>
              <Button
                type="button"
                variant="outline"
                className="text-orange-500 border-orange-500 hover:bg-orange-50 bg-transparent"
                onClick={() => {
                  setSalaryInfo({
                    salaryType: "Regular",
                    salaryStructure: "gross",
                    grossSalary: "",
                  })
                  setAdditionDeductionList([])
                }}
              >
                Cancel
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Salary Structure */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-gray-800">Salary Structure</h3>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="text-blue-600 border-blue-600 bg-transparent"
                  >
                    Save
                  </Button>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Salary Type</label>
                    <Select
                      value={salaryInfo.salaryType}
                      onValueChange={(value) => setSalaryInfo({ ...salaryInfo, salaryType: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Salary Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Regular">Regular</SelectItem>
                        <SelectItem value="Contract">Contract</SelectItem>
                        <SelectItem value="Part-time">Part-time</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="salaryStructure"
                        value="gross"
                        checked={salaryInfo.salaryStructure === "gross"}
                        onChange={(e) => setSalaryInfo({ ...salaryInfo, salaryStructure: e.target.value })}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="text-sm text-blue-600">Gross</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="salaryStructure"
                        value="structure-basic"
                        checked={salaryInfo.salaryStructure === "structure-basic"}
                        onChange={(e) => setSalaryInfo({ ...salaryInfo, salaryStructure: e.target.value })}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="text-sm text-gray-600">Structure (Basic)</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="salaryStructure"
                        value="daily-rate"
                        checked={salaryInfo.salaryStructure === "daily-rate"}
                        onChange={(e) => setSalaryInfo({ ...salaryInfo, salaryStructure: e.target.value })}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="text-sm text-gray-400">Daily Rate</span>
                    </label>
                  </div>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="salaryStructure"
                      value="structure-gross"
                      checked={salaryInfo.salaryStructure === "structure-gross"}
                      onChange={(e) => setSalaryInfo({ ...salaryInfo, salaryStructure: e.target.value })}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="text-sm text-blue-600">Structure (Gross)</span>
                  </label>
                  <div className="flex items-center gap-4">
                    <label className="text-sm font-medium text-gray-700 whitespace-nowrap">Gross Salary</label>
                    <Input
                      type="number"
                      value={salaryInfo.grossSalary}
                      onChange={(e) => setSalaryInfo({ ...salaryInfo, grossSalary: e.target.value })}
                      placeholder="Enter Gross Salary"
                    />
                  </div>
                </div>
              </div>

              {/* Addition & Deduction */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-gray-800">Addition & Deduction</h3>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="text-blue-600 border-blue-600 bg-transparent"
                  >
                    Save
                  </Button>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">From Month</label>
                      <Input
                        type="date"
                        value={additionDeduction.fromMonth}
                        onChange={(e) => setAdditionDeduction({ ...additionDeduction, fromMonth: e.target.value })}
                        className="text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">To Month</label>
                      <Input
                        type="date"
                        value={additionDeduction.toMonth}
                        onChange={(e) => setAdditionDeduction({ ...additionDeduction, toMonth: e.target.value })}
                        className="text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Type<span className="text-red-500">*</span>
                      </label>
                      <Select
                        value={additionDeduction.type}
                        onValueChange={(value) => setAdditionDeduction({ ...additionDeduction, type: value })}
                      >
                        <SelectTrigger className="text-sm">
                          <SelectValue placeholder="Select Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="addition">Addition</SelectItem>
                          <SelectItem value="deduction">Deduction</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Deduction<span className="text-red-500">*</span>
                      </label>
                      <Select
                        value={additionDeduction.deduction}
                        onValueChange={(value) => setAdditionDeduction({ ...additionDeduction, deduction: value })}
                      >
                        <SelectTrigger className="text-sm">
                          <SelectValue placeholder="Select Deduction" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tax">Tax</SelectItem>
                          <SelectItem value="insurance">Insurance</SelectItem>
                          <SelectItem value="loan">Loan</SelectItem>
                          <SelectItem value="advance">Advance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Amount</label>
                      <Input
                        type="number"
                        value={additionDeduction.amount}
                        onChange={(e) => setAdditionDeduction({ ...additionDeduction, amount: e.target.value })}
                        placeholder="Enter Amount"
                        className="text-sm"
                      />
                    </div>
                    <div className="flex items-end">
                      <Button
                        type="button"
                        onClick={handleAddEntry}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Add
                      </Button>
                    </div>
                  </div>

                  {/* Addition & Deduction Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-blue-100">
                          <th className="p-2 text-left font-medium text-gray-700">SL</th>
                          <th className="p-2 text-left font-medium text-gray-700">Addition & Deduction</th>
                          <th className="p-2 text-left font-medium text-gray-700">Type</th>
                          <th className="p-2 text-left font-medium text-gray-700">Applicable Month</th>
                          <th className="p-2 text-left font-medium text-gray-700">Advance</th>
                          <th className="p-2 text-left font-medium text-gray-700">Amount</th>
                          <th className="p-2 text-left font-medium text-gray-700">Remarks</th>
                          <th className="p-2 text-left font-medium text-gray-700">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {additionDeductionList.map((item, index) => (
                          <tr key={item.id} className="border-b">
                            <td className="p-2">{index + 1}</td>
                            <td className="p-2">{item.additionDeduction}</td>
                            <td className="p-2">{item.type}</td>
                            <td className="p-2">{item.applicableMonth}</td>
                            <td className="p-2">{item.advance}</td>
                            <td className="p-2">{item.amount}</td>
                            <td className="p-2">{item.remarks}</td>
                            <td className="p-2">
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => handleRemoveEntry(item.id)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </td>
                          </tr>
                        ))}
                        {additionDeductionList.length === 0 && (
                          <tr>
                            <td colSpan={8} className="p-4 text-center text-gray-500">
                              No entries added yet
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Information */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6 border-b pb-3">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-gray-700" />
                <h2 className="text-xl font-semibold text-gray-900">Academic Information</h2>
              </div>
              <Button
                type="button"
                variant="outline"
                className="text-orange-500 border-orange-500 hover:bg-orange-50 bg-transparent"
                onClick={() => {
                  setAcademicInfo({
                    isForeign: false,
                    instituteName: "",
                    degree: "",
                    fieldOfStudy: "",
                    result: "",
                    scale: "",
                    startDate: "",
                    finishDate: "",
                    attachment: null,
                  })
                  setAcademicList([])
                }}
              >
                Cancel
              </Button>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-800">Education</h3>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="text-blue-600 border-blue-600 bg-transparent"
                  onClick={handleAddAcademic}
                >
                  Save
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="foreign"
                    checked={academicInfo.isForeign}
                    onChange={(e) => setAcademicInfo({ ...academicInfo, isForeign: e.target.checked })}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="foreign" className="text-sm text-gray-700">
                    Foreign
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Institute Name<span className="text-red-500">*</span>
                    </label>
                    <Input
                      value={academicInfo.instituteName}
                      onChange={(e) => setAcademicInfo({ ...academicInfo, instituteName: e.target.value })}
                      placeholder="Institute Name"
                      className="text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Degree<span className="text-red-500">*</span>
                    </label>
                    <Select
                      value={academicInfo.degree}
                      onValueChange={(value) => setAcademicInfo({ ...academicInfo, degree: value })}
                    >
                      <SelectTrigger className="text-sm">
                        <SelectValue placeholder="Select Degree" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ssc">SSC</SelectItem>
                        <SelectItem value="hsc">HSC</SelectItem>
                        <SelectItem value="bachelor">Bachelor</SelectItem>
                        <SelectItem value="master">Master</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Field of Study<span className="text-red-500">*</span>
                    </label>
                    <Input
                      value={academicInfo.fieldOfStudy}
                      onChange={(e) => setAcademicInfo({ ...academicInfo, fieldOfStudy: e.target.value })}
                      placeholder="Field of Study"
                      className="text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Result/CGPA/Division<span className="text-red-500">*</span>
                    </label>
                    <Input
                      value={academicInfo.result}
                      onChange={(e) => setAcademicInfo({ ...academicInfo, result: e.target.value })}
                      placeholder="Result/CGPA/Division"
                      className="text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Scale (Out of)<span className="text-red-500">*</span>
                    </label>
                    <Input
                      value={academicInfo.scale}
                      onChange={(e) => setAcademicInfo({ ...academicInfo, scale: e.target.value })}
                      placeholder="Scale (Out of)"
                      className="text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Start Date<span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="date"
                      value={academicInfo.startDate}
                      onChange={(e) => setAcademicInfo({ ...academicInfo, startDate: e.target.value })}
                      className="text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Finish Date<span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="date"
                      value={academicInfo.finishDate}
                      onChange={(e) => setAcademicInfo({ ...academicInfo, finishDate: e.target.value })}
                      className="text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Attachment</label>
                    <div className="border-2 border-dashed border-gray-300 rounded p-4 text-center">
                      <Input
                        type="file"
                        className="hidden"
                        id="academicAttachment"
                        onChange={(e) => setAcademicInfo({ ...academicInfo, attachment: e.target.files?.[0] || null })}
                      />
                      <label htmlFor="academicAttachment" className="cursor-pointer text-xs text-gray-500">
                        Attachment
                      </label>
                    </div>
                  </div>
                </div>

                {/* Academic Table */}
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="p-2 text-left font-medium text-gray-700">SL</th>
                        <th className="p-2 text-left font-medium text-gray-700">Institute Name</th>
                        <th className="p-2 text-left font-medium text-gray-700">Degree</th>
                        <th className="p-2 text-left font-medium text-gray-700">Field of Study</th>
                        <th className="p-2 text-left font-medium text-gray-700">Result</th>
                        <th className="p-2 text-left font-medium text-gray-700">Date Range</th>
                        <th className="p-2 text-left font-medium text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {academicList.map((item, index) => (
                        <tr key={item.id} className="border-b">
                          <td className="p-2">{index + 1}</td>
                          <td className="p-2">{item.instituteName}</td>
                          <td className="p-2">{item.degree}</td>
                          <td className="p-2">{item.fieldOfStudy}</td>
                          <td className="p-2">{item.result}</td>
                          <td className="p-2">{item.dateRange}</td>
                          <td className="p-2">
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => handleRemoveAcademic(item.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                      {academicList.length === 0 && (
                        <tr>
                          <td colSpan={7} className="p-4 text-center text-gray-500">
                            No academic records added yet
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Employment History */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6 border-b pb-3">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-gray-700" />
                <h2 className="text-xl font-semibold text-gray-900">Employment History</h2>
              </div>
              <Button
                type="button"
                variant="outline"
                className="text-orange-500 border-orange-500 hover:bg-orange-50 bg-transparent"
                onClick={() => {
                  setEmploymentHistory({
                    companyName: "",
                    jobTitle: "",
                    location: "",
                    jobDescription: "",
                    fromDate: "",
                    toDate: "",
                  })
                  setEmploymentHistoryList([])
                }}
              >
                Cancel
              </Button>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-4">Employment History</h3>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Company Name<span className="text-red-500">*</span>
                    </label>
                    <Input
                      value={employmentHistory.companyName}
                      onChange={(e) => setEmploymentHistory({ ...employmentHistory, companyName: e.target.value })}
                      placeholder="Company Name"
                      className="text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Job Title<span className="text-red-500">*</span>
                    </label>
                    <Input
                      value={employmentHistory.jobTitle}
                      onChange={(e) => setEmploymentHistory({ ...employmentHistory, jobTitle: e.target.value })}
                      placeholder="Job Title"
                      className="text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Location<span className="text-red-500">*</span>
                    </label>
                    <Input
                      value={employmentHistory.location}
                      onChange={(e) => setEmploymentHistory({ ...employmentHistory, location: e.target.value })}
                      placeholder="Location"
                      className="text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Job Description<span className="text-red-500">*</span>
                    </label>
                    <Input
                      value={employmentHistory.jobDescription}
                      onChange={(e) => setEmploymentHistory({ ...employmentHistory, jobDescription: e.target.value })}
                      placeholder="Job Description"
                      className="text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">From Date</label>
                    <Input
                      type="date"
                      value={employmentHistory.fromDate}
                      onChange={(e) => setEmploymentHistory({ ...employmentHistory, fromDate: e.target.value })}
                      className="text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">To Date</label>
                    <Input
                      type="date"
                      value={employmentHistory.toDate}
                      onChange={(e) => setEmploymentHistory({ ...employmentHistory, toDate: e.target.value })}
                      className="text-sm"
                    />
                  </div>
                  <div className="flex items-end">
                    <Button
                      type="button"
                      onClick={handleAddEmployment}
                      variant="outline"
                      className="text-blue-600 border-blue-600 bg-transparent"
                    >
                      Save
                    </Button>
                  </div>
                </div>

                {/* Employment History List */}
                <div className="mt-4">
                  <h4 className="font-medium text-gray-800 mb-2">Employment History List</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-blue-100">
                          <th className="p-2 text-left font-medium text-gray-700">SL</th>
                          <th className="p-2 text-left font-medium text-gray-700">Company Name</th>
                          <th className="p-2 text-left font-medium text-gray-700">Job Title</th>
                          <th className="p-2 text-left font-medium text-gray-700">Location</th>
                          <th className="p-2 text-left font-medium text-gray-700">Job Description</th>
                          <th className="p-2 text-left font-medium text-gray-700">From Date</th>
                          <th className="p-2 text-left font-medium text-gray-700">To Date</th>
                          <th className="p-2 text-left font-medium text-gray-700">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {employmentHistoryList.map((item, index) => (
                          <tr key={item.id} className="border-b">
                            <td className="p-2">{index + 1}</td>
                            <td className="p-2">{item.companyName}</td>
                            <td className="p-2">{item.jobTitle}</td>
                            <td className="p-2">{item.location}</td>
                            <td className="p-2">{item.jobDescription}</td>
                            <td className="p-2">{item.fromDate}</td>
                            <td className="p-2">{item.toDate}</td>
                            <td className="p-2">
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => handleRemoveEmployment(item.id)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </td>
                          </tr>
                        ))}
                        {employmentHistoryList.length === 0 && (
                          <tr>
                            <td colSpan={8} className="p-4 text-center text-gray-500">
                              No employment history added yet
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Document Information */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6 border-b pb-3">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-gray-700" />
                <h2 className="text-xl font-semibold text-gray-900">Document Information</h2>
              </div>
              <Button
                type="button"
                variant="outline"
                className="text-orange-500 border-orange-500 hover:bg-orange-50 bg-transparent"
                onClick={() => {
                  setDocumentInfo({
                    eidNo: "",
                    eidIssuingDate: "",
                    eidExpDate: "",
                    eidCopy: null,
                    passportNo: "",
                    passportIssuingDate: "",
                    passportExpDate: "",
                    passportCopy: null,
                    laborCardNo: "",
                    laborIssuingDate: "",
                    laborExpDate: "",
                    laborCardCopy: null,
                    healthCardNo: "",
                    healthCardIssueDate: "",
                    healthCardExpDate: "",
                  })
                }}
              >
                Cancel
              </Button>
            </div>

            <div className="space-y-6">
              {/* EID Information */}
              <div className="border rounded-lg p-4">
                <h3 className="font-medium text-gray-800 mb-4">EID Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">EID No</label>
                    <Input
                      value={documentInfo.eidNo}
                      onChange={(e) => setDocumentInfo({ ...documentInfo, eidNo: e.target.value })}
                      placeholder="Enter EID number"
                      className="text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">EID Issuing Date</label>
                    <Input
                      type="date"
                      value={documentInfo.eidIssuingDate}
                      onChange={(e) => setDocumentInfo({ ...documentInfo, eidIssuingDate: e.target.value })}
                      className="text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">EID Exp. Date</label>
                    <Input
                      type="date"
                      value={documentInfo.eidExpDate}
                      onChange={(e) => setDocumentInfo({ ...documentInfo, eidExpDate: e.target.value })}
                      className="text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">EID Copy</label>
                    <Input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleDocumentFileChange("eidCopy", e.target.files?.[0] || null)}
                      className="text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Passport Information */}
              <div className="border rounded-lg p-4">
                <h3 className="font-medium text-gray-800 mb-4">Passport Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Passport No</label>
                    <Input
                      value={documentInfo.passportNo}
                      onChange={(e) => setDocumentInfo({ ...documentInfo, passportNo: e.target.value })}
                      placeholder="Enter passport number"
                      className="text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Passport Issuing Date</label>
                    <Input
                      type="date"
                      value={documentInfo.passportIssuingDate}
                      onChange={(e) => setDocumentInfo({ ...documentInfo, passportIssuingDate: e.target.value })}
                      className="text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Passport Exp. Date</label>
                    <Input
                      type="date"
                      value={documentInfo.passportExpDate}
                      onChange={(e) => setDocumentInfo({ ...documentInfo, passportExpDate: e.target.value })}
                      className="text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Passport Copy</label>
                    <Input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleDocumentFileChange("passportCopy", e.target.files?.[0] || null)}
                      className="text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Labor Card Information */}
              <div className="border rounded-lg p-4">
                <h3 className="font-medium text-gray-800 mb-4">Labor Card Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Labor Card No</label>
                    <Input
                      value={documentInfo.laborCardNo}
                      onChange={(e) => setDocumentInfo({ ...documentInfo, laborCardNo: e.target.value })}
                      placeholder="Enter labor card number"
                      className="text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Labor Issuing Date</label>
                    <Input
                      type="date"
                      value={documentInfo.laborIssuingDate}
                      onChange={(e) => setDocumentInfo({ ...documentInfo, laborIssuingDate: e.target.value })}
                      className="text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Labor Exp. Date</label>
                    <Input
                      type="date"
                      value={documentInfo.laborExpDate}
                      onChange={(e) => setDocumentInfo({ ...documentInfo, laborExpDate: e.target.value })}
                      className="text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Labor Card Copy</label>
                    <Input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleDocumentFileChange("laborCardCopy", e.target.files?.[0] || null)}
                      className="text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Health Card Information */}
              <div className="border rounded-lg p-4">
                <h3 className="font-medium text-gray-800 mb-4">Health Card Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Health Card No</label>
                    <Input
                      value={documentInfo.healthCardNo}
                      onChange={(e) => setDocumentInfo({ ...documentInfo, healthCardNo: e.target.value })}
                      placeholder="Enter health card number"
                      className="text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Health Card Issue Date</label>
                    <Input
                      type="date"
                      value={documentInfo.healthCardIssueDate}
                      onChange={(e) => setDocumentInfo({ ...documentInfo, healthCardIssueDate: e.target.value })}
                      className="text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Health Card Exp. Date</label>
                    <Input
                      type="date"
                      value={documentInfo.healthCardExpDate}
                      onChange={(e) => setDocumentInfo({ ...documentInfo, healthCardExpDate: e.target.value })}
                      className="text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-4 pt-4">
            <Button type="button" variant="outline" onClick={() => router.push("/employee-profile")}>
              Cancel
            </Button>
            <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white">
              Save Employee
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
