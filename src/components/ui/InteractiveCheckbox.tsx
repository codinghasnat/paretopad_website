import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'

export const InteractiveCheckbox = ({ label }: { label: string }) => {
  const [checked, setChecked] = useState(false)

  const handleCheck = () => {
    setChecked(!checked)
  }

  return (
    <div 
      className="flex items-center gap-3 cursor-pointer group"
      onClick={handleCheck}
    >
      <div className={`w-5 h-5 rounded border transition-colors flex items-center justify-center ${checked ? 'bg-mint border-mint' : 'border-gray-300 group-hover:border-mint'}`}>
        <AnimatePresence>
          {checked && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <Check className="w-3.5 h-3.5 text-forest-green" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <span className={`text-sm transition-all ${checked ? 'text-gray-400 line-through' : 'text-charcoal/80'}`}>
        {label}
      </span>
    </div>
  )
}
