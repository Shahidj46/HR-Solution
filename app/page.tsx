import { MetricCard } from "@/components/metric-card"
import { AttendanceChart } from "@/components/attendance-chart"
import { SalarySnapshot } from "@/components/salary-snapshot"
import { Users, UserCheck, UserX, Car, DollarSign, Clock } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <MetricCard
          title="Total Employees"
          value="1,248"
          change="+12%"
          changeLabel="vs last month"
          trend="up"
          icon={Users}
          iconColor="bg-blue-500"
        />
        <MetricCard
          title="Present Today"
          value="1,089"
          change="+5%"
          changeLabel="vs last month"
          trend="up"
          icon={UserCheck}
          iconColor="bg-green-500"
        />
        <MetricCard
          title="On Leave"
          value="89"
          change="-3%"
          changeLabel="vs last month"
          trend="down"
          icon={UserX}
          iconColor="bg-orange-500"
        />
        <MetricCard
          title="Vehicles Active"
          value="45"
          change="0%"
          changeLabel="vs last month"
          trend="neutral"
          icon={Car}
          iconColor="bg-purple-500"
        />
        <MetricCard
          title="Salary Processed"
          value="$425K"
          change="+8%"
          changeLabel="vs last month"
          trend="up"
          icon={DollarSign}
          iconColor="bg-green-500"
        />
        <MetricCard
          title="Pending Approvals"
          value="24"
          change="+2"
          changeLabel="vs last month"
          trend="up"
          icon={Clock}
          iconColor="bg-red-500"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AttendanceChart />
        </div>
        <div className="lg:col-span-1">
          <SalarySnapshot />
        </div>
      </div>
    </div>
  )
}
