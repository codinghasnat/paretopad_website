import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Problem } from '@/components/Problem'
import { Solution } from '@/components/Solution'
import { ActionGuides } from '@/components/ActionGuides'
import { Accountability } from '@/components/Accountability'
import { IdentityEngine } from '@/components/IdentityEngine'
import { Credibility } from '@/components/Credibility'
import { Pricing } from '@/components/Pricing'
import { Founder } from '@/components/Founder'
import { Footer } from '@/components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-off-white text-charcoal font-body selection:bg-mint selection:text-forest-green relative">
      <div className="bg-noise"></div>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <ActionGuides />
        <Accountability />
        <IdentityEngine />
        <Credibility />
        <Pricing />
        <Founder />
      </main>
      <Footer />
    </div>
  )
}

export default App
