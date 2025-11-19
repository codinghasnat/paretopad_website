import { motion } from 'framer-motion'
import { Activity, Repeat, Share2, GitGraph } from 'lucide-react'

const features = [
  {
    icon: Activity,
    title: "Real-world tasks",
    description: "Not theory. Actual implementation in your daily life."
  },
  {
    icon: Repeat,
    title: "Feedback loops",
    description: "Constant adjustment based on what's working for you."
  },
  {
    icon: Share2,
    title: "Social accountability",
    description: "Humans are tribal. We leverage social pressure for good."
  },
  {
    icon: GitGraph,
    title: "Action Graph engine",
    description: "Visualizing your behavior patterns to spot bottlenecks."
  }
]

export function Credibility() {
  return (
    <section className="py-24 bg-forest-green text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Because ParetoPad changes your behaviour, <br/>
            <span className="text-mint">not your dopamine levels.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center group"
            >
              <div className="w-12 h-12 mx-auto bg-mint/10 rounded-full flex items-center justify-center text-mint mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p className="text-white/60 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
