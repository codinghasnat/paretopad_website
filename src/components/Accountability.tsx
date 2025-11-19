import { motion } from 'framer-motion'
import { Users, MessageCircle, Flame } from 'lucide-react'

const pillars = [
  {
    icon: Users,
    title: "Buddy Mode",
    description: "Progress sharing, nudges, weekly check-ins. Don't go it alone."
  },
  {
    icon: MessageCircle,
    title: "Parrot SMS",
    description: "Your assistant texts you — or your friend — when you slip. Ruthless accountability."
  },
  {
    icon: Flame,
    title: "Stakes",
    description: "Charity pledges + micro-consequences. Put skin in the game."
  }
]

export function Accountability() {
  return (
    <section className="py-24 bg-forest-green text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#A8E6CF_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Self-improvement doesn’t fail because you’re weak. <br/>
            <span className="text-mint">It fails because you’re alone.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
            >
              <div className="w-14 h-14 bg-mint/10 rounded-full flex items-center justify-center mb-6 text-mint">
                <pillar.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
              <p className="text-white/70 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
