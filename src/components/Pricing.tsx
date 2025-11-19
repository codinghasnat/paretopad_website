import { motion } from 'framer-motion'
import { Check, Zap } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const plans = [
  {
    name: "Skill Packs",
    price: "£15",
    period: "one-time",
    description: "Master a specific domain.",
    features: ["One-time masterclass", "Lifetime access", "Specific action guide", "Community access"],
    highlight: false
  },
  {
    name: "ParetoPad Monthly",
    price: "£20",
    period: "per month",
    description: "Everything included.",
    features: ["All Skill Packs", "Unlimited Action Guides", "Parrot AI Accountability", "Buddy Mode Access", "Identity Engine"],
    highlight: true
  },
  {
    name: "ParetoPad Pro",
    price: "£49",
    period: "per month",
    description: "For serious transformation.",
    features: ["Priority Support", "1-on-1 Onboarding", "Beta Features Access", "Private Community Channel", "All Monthly Features"],
    highlight: false
  }
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-forest-green text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mint/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-mint/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Invest in your <span className="text-mint">future self</span>.
          </h2>
          <p className="text-white/70 text-lg">Simple pricing. No hidden fees. Cancel anytime.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border ${plan.highlight ? 'bg-white/10 border-mint shadow-2xl shadow-mint/10 scale-105 z-10' : 'bg-white/5 border-white/10 hover:bg-white/10 transition-colors'}`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-mint text-forest-green text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold font-heading">{plan.price}</span>
                <span className="text-sm text-white/60">{plan.period}</span>
              </div>
              <p className="text-sm text-white/70 mb-8">{plan.description}</p>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-white/80">
                    <Check className="w-4 h-4 text-mint mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.highlight ? "primary" : "outline"} 
                className="w-full"
              >
                {plan.highlight ? "Start Free Trial" : "Get Started"}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
