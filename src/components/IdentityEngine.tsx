import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Trophy, TrendingUp, Activity } from 'lucide-react'

export function IdentityEngine() {
  const [voteCount, setVoteCount] = useState(0)
  const [identity, setIdentity] = useState("I procrastinate")

  const handleVote = () => {
    setVoteCount(prev => Math.min(prev + 20, 100))
    if (voteCount >= 80) {
      setIdentity("I execute")
    }
  }

  return (
    <section className="py-32 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-forest-green/20 via-charcoal to-charcoal pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              The Identity Engine. <br/>
              <span className="text-mint">Prove it to yourself.</span>
            </h2>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              Every action you take is a vote for the type of person you wish to become. 
              ParetoPad visualizes these votes, turning invisible habits into visible identity shifts.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <Activity className="w-6 h-6 text-mint" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Identity Scripts</h3>
                  <p className="text-white/50">Daily protocols that align your actions with your ideal self.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <Trophy className="w-6 h-6 text-mint" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Skill Scoreboards</h3>
                  <p className="text-white/50">Track your mastery in specific domains (Social, Health, Focus).</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Demo */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-mint to-emerald-500 rounded-3xl blur opacity-20"></div>
            <div className="relative bg-neutral-900 border border-white/10 rounded-3xl p-8 overflow-hidden">
              
              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <div className="text-sm font-bold text-white/40 uppercase tracking-wider">Current Identity</div>
                <div className="px-3 py-1 rounded-full bg-white/5 text-xs text-white/60 border border-white/10">Live Demo</div>
              </div>

              {/* Identity Morph */}
              <div className="text-center mb-12">
                <motion.h3 
                  key={identity}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-4xl font-bold ${identity === "I execute" ? "text-mint" : "text-white/30"}`}
                >
                  "{identity}"
                </motion.h3>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-white/50">Votes Cast</span>
                  <span className="text-mint font-bold">{voteCount}%</span>
                </div>
                <div className="h-4 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-mint to-emerald-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${voteCount}%` }}
                    transition={{ type: "spring", bounce: 0.2 }}
                  />
                </div>
              </div>

              {/* Action Button */}
              <button 
                onClick={handleVote}
                className="w-full py-4 bg-white text-charcoal font-bold rounded-xl hover:bg-mint transition-colors active:scale-95 transform duration-100 flex items-center justify-center gap-2"
              >
                <TrendingUp className="w-5 h-5" />
                Cast Vote (Take Action)
              </button>

              <p className="text-center text-xs text-white/30 mt-4">
                Click to simulate completing a task
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
