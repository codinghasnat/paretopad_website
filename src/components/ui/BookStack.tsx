import { motion } from 'framer-motion'

export const BookStack = ({ onOpen, image, title, notificationCount }: { onOpen: () => void, image: string, title: string, notificationCount?: number }) => {
  return (
    <div className="relative w-48 h-64 cursor-pointer group" onClick={onOpen}>
      {/* Book 3 (Bottom) */}
      <motion.div 
        className="absolute top-4 left-4 w-full h-full bg-blue-900 rounded-r-lg shadow-xl border-l-4 border-blue-950 flex items-center justify-center"
        whileHover={{ x: 10, y: 10, rotate: 2 }}
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent to-black/20"></div>
      </motion.div>

      {/* Book 2 (Middle) */}
      <motion.div 
        className="absolute top-2 left-2 w-full h-full bg-emerald-900 rounded-r-lg shadow-xl border-l-4 border-emerald-950 flex items-center justify-center"
        whileHover={{ x: 5, y: 5, rotate: -1 }}
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent to-black/20"></div>
      </motion.div>

      {/* Book 1 (Top) */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full bg-forest-green rounded-r-lg shadow-2xl border-l-4 border-emerald-950"
        whileHover={{ scale: 1.05, rotate: 1 }}
        layoutId={`book-cover-${title}`}
      >
        <div className="relative w-full h-full rounded-r-lg overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
        </div>
        
        {/* Handwritten Doodle Overlay - Top Left */}
        <div className="absolute -top-10 -left-20 z-20 pointer-events-none opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
          <div className="relative w-32 h-20">
            <span className="absolute top-0 left-2 font-handwriting text-charcoal font-bold text-xl -rotate-12">Open me!</span>
            <svg width="100%" height="100%" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-6 left-4">
              {/* Arrow pointing from top-left to bottom-right (towards book) */}
              <path d="M 10 10 C 30 10, 50 20, 70 40" stroke="#2D3436" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M 70 40 L 62 34 M 70 40 L 64 30" stroke="#2D3436" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>
          </div>
        </div>
        
        {/* Notification Badge */}
        {notificationCount && (
          <div className="absolute -top-4 -right-4 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center border-2 border-white z-40 shadow-xl">
            <span className="text-white font-bold text-base">{notificationCount}</span>
          </div>
        )}
      </motion.div>
    </div>
  )
}
