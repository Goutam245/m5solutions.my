import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import logo from "@/assets/m5-logo.jpg";

const Footer = () => (
  <footer className="pt-20 pb-8" style={{ background: "#0D0D0D" }}>
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div>
          <img src={logo} alt="m5 Solutions" className="h-10 mb-4" />
          <p className="text-sm text-white/60 leading-relaxed">
            m5 Solutions brings together data clarity, strategic AI and organizational insight to help leaders navigate complexity and make confident decisions.
          </p>
        </div>

        {/* Our Work */}
        <div>
          <h4 className="font-semibold text-white mb-4">Our Work</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><Link to="/data-ai" className="hover:text-accent transition-colors">Data and AI Training</Link></li>
            <li><Link to="/data-ai" className="hover:text-accent transition-colors">Data and AI Development</Link></li>
            <li><Link to="/innovation-lab" className="hover:text-accent transition-colors">m5 Innovation Lab</Link></li>
            <li><Link to="/workplace-assessment" className="hover:text-accent transition-colors">Workplace Assessment</Link></li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h4 className="font-semibold text-white mb-4">Address</h4>
          <div className="flex gap-2 text-sm text-white/60">
            <MapPin size={16} className="shrink-0 mt-0.5 text-accent" />
            <p>D-01-01, Menara Mitraland, 13A, Jalan PJU 5/1, Kota Damansara, Petaling Jaya, Selangor 47810, Malaysia</p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-white mb-4">Start a Conversation</h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-accent" />
              <a href="mailto:contact@m5solutions.my" className="hover:text-accent transition-colors">contact@m5solutions.my</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-accent" />
              <a href="tel:+60122779585" className="hover:text-accent transition-colors">+6012 277 9585</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-accent" />
              <a href="tel:+60376248113" className="hover:text-accent transition-colors">+603 7624 8113</a>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin size={14} className="text-accent" />
              <a href="https://linkedin.com/company/m5-solutions-malaysia" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-accent pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
        <p>© {new Date().getFullYear()} m5 Solutions Sdn Bhd. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <Link to="/data-ai" className="hover:text-accent transition-colors">Data & AI</Link>
          <Link to="/innovation-lab" className="hover:text-accent transition-colors">Innovation Lab</Link>
          <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
