export const navigationViewSource = `import { Navigation } from 'lucide-react'
import { motion } from 'motion/react'

export default function NavigationView() {
  return (
    <div className="flex h-full w-full flex-col justify-between p-5">
      <div className="flex items-start gap-4">
        <div className="bg-foreground text-background p-2 rounded-lg">
          <Navigation size={24} className="fill-current" />
        </div>
        <div>
          <div className="text-muted-foreground text-xs font-medium uppercase tracking-wider">
            In 500m
          </div>
          <div className="text-lg font-bold leading-tight mt-1">
            Turn right onto
            <br />
            Market Street
          </div>
        </div>
      </div>
      <div className="h-1 w-full bg-muted/80 rounded-full overflow-hidden mt-2">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: '30%' }}
          animate={{ width: '85%' }}
          transition={{
            duration: 5,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop'
          }}
        />
      </div>
    </div>
  )
}`
