import { motion } from 'framer-motion'
import { Brain, Layers, BatteryWarning } from 'lucide-react'
import { BentoGrid, BentoGridItem } from '@/components/ui/BentoGrid'
import { Spotlight } from '@/components/ui/Spotlight'

const problems = [
  {
    icon: <Brain className="w-8 h-8 text-mint" />,
    title: "You forget everything",
    description: "You read books but recall <10% of them a week later because nothing reinforces it.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 opacity-50"></div>,
    className: "md:col-span-1"
  },
  {
    icon: <Layers className="w-8 h-8 text-mint" />,
    title: "No structure",
    description: "You consume content endlessly but don't transform because there's no system to apply it.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 opacity-50"></div>,
    className: "md:col-span-1"
  },
  {
    icon: <BatteryWarning className="w-8 h-8 text-mint" />,
    title: "Motivation dies",
    description: "You start strong but quit in 48 hours because there's no real accountability.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 opacity-50"></div>,
    className: "md:col-span-1"
  }
]

export function Problem() {
  return (
    <section id="problem" className="py-24 bg-charcoal relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            We don’t need more information. <br/>
            <span className="text-white/50">We need a system that makes us change.</span>
          </h2>
        </div>

        <BentoGrid className="max-w-4xl mx-auto">
          {problems.map((item, i) => (
            <Spotlight key={i} className={item.className}>
              <div className="relative h-full flex flex-col p-6 z-20">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 border border-white/10">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Spotlight>
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}
