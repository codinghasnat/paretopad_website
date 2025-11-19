import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ArrowRight, PlayCircle, CheckCircle2, BookOpen, MessageCircle } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-forest-green pt-20">
      {/* Aurora Background Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/40 via-forest-green to-transparent animate-shimmer opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-mint/10 via-forest-green/0 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-emerald-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-[1.1] mb-6">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="block"
            >
              Consume Less.
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-mint to-emerald-400"
            >
              Be More.
            </motion.span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-white/70 mb-8 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed"
          >
            Turn wisdom into action. Turn action into identity. <br/>
            A system for real personal transformation — not another AI toy.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <Button size="lg" className="w-full sm:w-auto gap-2 group shadow-[0_0_20px_rgba(168,230,207,0.3)] hover:shadow-[0_0_30px_rgba(168,230,207,0.5)] transition-shadow duration-300">
              Start Your Transformation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="relative inline-flex overflow-hidden rounded-full p-[2px]">
              <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,rgba(255,255,255,0.5)_50%,transparent_100%)] blur-sm" />
              <Button variant="outline" size="lg" className="relative w-full sm:w-auto gap-2 backdrop-blur-3xl bg-forest-green/90 border-transparent hover:bg-forest-green/80 z-10">
                <PlayCircle className="w-4 h-4" />
                See How It Works
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Visual: LifeOS Panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          {/* Floating Glass Panel */}
          <div className="relative w-full max-w-md mx-auto glass-panel rounded-3xl p-6 animate-float">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-mint/20 flex items-center justify-center text-mint">
                  <div className="w-2 h-2 bg-mint rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-white font-medium">Identity Script</h3>
                  <p className="text-xs text-white/50">Daily Protocol</p>
                </div>
              </div>
              <div className="text-mint text-sm font-bold">85% Match</div>
            </div>

            {/* Content Items */}
            <div className="space-y-4">
              {/* Item 1 */}
              <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                <div className="mt-0.5 p-1 rounded-full bg-mint/10 group-hover:bg-mint/20 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-mint" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Morning Deep Work</p>
                  <p className="text-xs text-white/50 mt-1">Completed at 07:30 AM</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                 <div className="mt-0.5 p-1 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                  <BookOpen className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Read "Atomic Habits"</p>
                  <p className="text-xs text-white/50 mt-1">Chapter 4: Actionable Steps Extracted</p>
                </div>
              </div>

              {/* Item 3 (Notification) */}
              <div className="bg-mint/10 rounded-xl p-4 flex items-start gap-3 border border-mint/20 animate-pulse-glow">
                <div className="mt-0.5 p-1 rounded-full bg-mint/20">
                  <MessageCircle className="w-4 h-4 text-mint" />
                </div>
                <div>
                  <p className="text-mint text-sm font-medium">Parrot Accountability</p>
                  <p className="text-xs text-mint/70 mt-1">"You missed your evening review. Get back on track."</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
