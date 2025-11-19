import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookStack } from '@/components/ui/BookStack'
import { InteractiveCheckbox } from '@/components/ui/InteractiveCheckbox'
import { Star, ArrowRight, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function ActionGuides() {
  const [activeGuide, setActiveGuide] = useState<string | null>(null)
  const [guides, setGuides] = useState([
    {
      id: 'friends',
      title: "How to Win Friends and Influence People",
      author: "Dale Carnegie",
      image: "/generic/win_friends.jpg",
      notificationCount: 3,
      tasks: [
        "Smile at 5 strangers today",
        "Ask 3 people 'How did you get started?'",
        "Use a person's name 3 times in conversation"
      ]
    },
    {
      id: 'habits',
      title: "Atomic Habits",
      author: "James Clear",
      image: "/generic/atomic_habits.jpg",
      notificationCount: 5,
      tasks: [
        "Stack a new habit on an old one",
        "Prepare your gym clothes tonight",
        "Write down your implementation intention"
      ]
    },
    {
      id: 'thinking',
      title: "Thinking Fast and Slow",
      author: "Daniel Kahneman",
      image: "/generic/thinking_fast.jpg",
      notificationCount: 2,
      tasks: [
        "Identify a cognitive bias in your decision",
        "Slow down before answering a complex question",
        "Analyze a recent intuitive judgment"
      ]
    }
  ])

  const handleOpenGuide = (id: string) => {
    setActiveGuide(id)
    setGuides(prevGuides => 
      prevGuides.map(guide => 
        guide.id === id 
          ? { ...guide, notificationCount: 0 } 
          : guide
      )
    )
  }

  return (
    <section id="guides" className="py-32 bg-off-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-6">
            Summaries don't lead to transformations. <br/>
            <span className="text-forest-green">Actions do.</span>
          </h2>
          <p className="text-lg text-charcoal/60">
            We turn passive reading into active identity shifts. <br/>
            Select a book to see how ParetoPad transforms it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-start justify-items-center pb-12 md:pb-0">
          {guides.map((guide) => (
            <div key={guide.id} className="relative flex flex-col items-center">
              <BookStack 
                onOpen={() => handleOpenGuide(guide.id)} 
                image={guide.image}
                title={guide.title}
                notificationCount={guide.notificationCount}
              />
              <div className="text-center mt-8">
                <h3 className="font-bold text-xl text-charcoal">{guide.title}</h3>
                <p className="text-sm text-charcoal/50">{guide.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Modal Overlay */}
      <AnimatePresence>
        {activeGuide && (
          <div className="fixed inset-0 z-50 flex justify-end pointer-events-none">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/20 backdrop-blur-sm pointer-events-auto"
              onClick={() => setActiveGuide(null)}
            />
            
            <motion.div 
              layoutId={`card-${activeGuide}`}
              className="relative w-full md:w-[600px] h-full bg-white shadow-2xl overflow-y-auto pointer-events-auto"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="p-8 md:p-12">
                <div className="flex justify-end mb-2">
                  <button 
                    onClick={() => setActiveGuide(null)}
                    className="p-2 bg-off-white hover:bg-gray-200 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-charcoal" />
                  </button>
                </div>

                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-mint/20 rounded-full flex items-center justify-center text-2xl">
                    📖
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-charcoal">
                      {guides.find(g => g.id === activeGuide)?.title}
                    </h3>
                    <p className="text-charcoal/50">Action Plan</p>
                  </div>
                </div>

                <div className="space-y-8">
                  {/* Micro Tasks */}
                  <div>
                    <h4 className="text-sm font-bold text-charcoal/40 uppercase tracking-wider mb-4">Micro-Tasks</h4>
                    <div className="space-y-3">
                      {guides.find(g => g.id === activeGuide)?.tasks.map((task, i) => (
                        <InteractiveCheckbox key={i} label={task} />
                      ))}
                    </div>
                  </div>

                  {/* Reflection */}
                  <div>
                    <h4 className="text-sm font-bold text-charcoal/40 uppercase tracking-wider mb-4">Quick Reflection</h4>
                    <textarea 
                      className="w-full p-4 bg-off-white rounded-xl border-none focus:ring-2 focus:ring-mint resize-none text-sm"
                      rows={3}
                      placeholder="What was the hardest part of this task?"
                    />
                  </div>

                  {/* Scorecard */}
                  <div className="flex items-center justify-between bg-forest-green/5 p-4 rounded-xl">
                    <div>
                      <p className="font-bold text-forest-green">Skill Score</p>
                      <p className="text-xs text-forest-green/60">Rate your performance</p>
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button key={star} className="hover:scale-110 transition-transform">
                          <Star className="w-6 h-6 text-mint fill-mint" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <Button onClick={() => setActiveGuide(null)}>
                    Save Progress <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
