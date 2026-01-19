import { BatteryCharging } from 'lucide-react'

export default function ChargingView() {
  return (
    <div className="flex h-full w-full items-center justify-between px-5">
      <span className="text-sm font-medium text-green-500">Charging</span>
      <div className="flex items-center gap-2">
        <span className="text-sm font-bold">75%</span>
        <BatteryCharging size={18} className="text-green-500" />
      </div>
    </div>
  )
}
