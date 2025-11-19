import { Quote } from 'lucide-react'

export function Founder() {
  return (
    <section className="py-24 bg-off-white">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <Quote className="w-12 h-12 text-mint mx-auto mb-8 opacity-50" />
        
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-forest-green mb-8">
          Software that builds people.
        </h2>
        
        <p className="text-xl md:text-2xl text-charcoal/80 font-light leading-relaxed mb-12 italic">
          "ParetoPad is built on the belief that anyone can transform — not through motivation, but through systems, accountability, and identity change. This is your LifeOS for the skills you were never taught."
        </p>

        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
            {/* Placeholder for founder image */}
            <div className="w-full h-full bg-forest-green flex items-center justify-center text-white font-bold">F</div>
          </div>
          <div className="text-left">
            <p className="font-bold text-forest-green">Founder Name</p>
            <p className="text-sm text-charcoal/60">Creator of ParetoPad</p>
          </div>
        </div>
      </div>
    </section>
  )
}
