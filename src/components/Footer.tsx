import { Twitter, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-white text-charcoal py-16 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="block mb-4">
              <img 
                // src="/brand_related/banner_light.png" 
                src="/brand_related/icon.png" 
                alt="ParetoPad" 
                className="h-12 w-auto object-contain" 
              />
            </a>
            <p className="text-charcoal/60 max-w-sm mb-6">
              Turn wisdom into action. Turn action into identity. The operating system for your personal growth.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-charcoal/5 flex items-center justify-center hover:bg-forest-green hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-charcoal/5 flex items-center justify-center hover:bg-forest-green hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-charcoal/5 flex items-center justify-center hover:bg-forest-green hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-forest-green">Product</h4>
            <ul className="space-y-4 text-sm text-charcoal/70">
              <li><a href="#" className="hover:text-forest-green transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-forest-green transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-forest-green transition-colors">Action Guides</a></li>
              <li><a href="#" className="hover:text-forest-green transition-colors">Manifesto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-forest-green">Legal</h4>
            <ul className="space-y-4 text-sm text-charcoal/70">
              <li><a href="#" className="hover:text-forest-green transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-forest-green transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-forest-green transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-forest-green transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-charcoal/10 text-center text-sm text-charcoal/40">
          &copy; {new Date().getFullYear()} ParetoPad. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
