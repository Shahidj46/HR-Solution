import { Card } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface MetricCardProps {
  title: string
  value: string
  change: string
  changeLabel: string
  trend: "up" | "down" | "neutral"
  icon: LucideIcon
  iconColor: string
}

export function MetricCard({ title, value, change, changeLabel, trend, icon: Icon, iconColor }: MetricCardProps) {
  return (
    <Card className="p-6 bg-white border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-2">{title}</p>
          <h3 className="text-4xl font-bold text-gray-900 mb-2">{value}</h3>
          <div className="flex items-center gap-2 text-xs">
            {trend === "up" && (
              <>
                <TrendingUp className="w-3 h-3 text-green-500" />
                <span className="text-green-500 font-medium">{change}</span>
              </>
            )}
            {trend === "down" && (
              <>
                <TrendingDown className="w-3 h-3 text-red-500" />
                <span className="text-red-500 font-medium">{change}</span>
              </>
            )}
            {trend === "neutral" && <span className="text-green-500 font-medium">{change}</span>}
            <span className="text-gray-400">{changeLabel}</span>
          </div>
        </div>
        <div className={`${iconColor} rounded-xl p-3 flex items-center justify-center`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </Card>
  )
}
