import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const steps = [
  {
    number: "01",
    title: "Diagnose",
    description: "We identify the bottlenecks in your current behavior."
  },
  {
    number: "02",
    title: "Learn",
    description: "You consume high-value content (books, courses) with intent."
  },
  {
    number: "03",
    title: "Apply",
    description: "ParetoPad extracts actionable micro-tasks from the content."
  },
  {
    number: "04",
    title: "Reinforce",
    description: "Accountability pillars ensure you actually do the work."
  },
  {
    number: "05",
    title: "Transform",
    description: "Consistent action shifts your identity permanently."
  }
]

export function Solution() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  return (
    <section id="solution" ref={containerRef} className="py-32 bg-off-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-6">
            The Pareto Protocol.
          </h2>
          <p className="text-lg text-charcoal/60">
            A 5-step engine to move from consumption to creation.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line (Desktop) */}
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gray-200 hidden md:block -translate-x-1/2">
            <motion.div 
              style={{ scaleY: scrollYProgress }}
              className="absolute top-0 left-0 w-full h-full bg-forest-green origin-top"
            />
          </div>

          <div className="space-y-24">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Text Side */}
                <div className={`flex-1 text-center ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <h3 className="text-2xl font-bold text-charcoal mb-2">{step.title}</h3>
                  <p className="text-charcoal/60">{step.description}</p>
                </div>

                {/* Center Node */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-off-white shadow-xl flex items-center justify-center font-bold text-forest-green text-xl relative group">
                    {step.number}
                    <div className="absolute inset-0 rounded-full border-2 border-forest-green opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
                  </div>
                </div>

                {/* Empty Side for Balance */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
