import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Send, Clock } from "lucide-react";
import FadeIn from "@/components/shared/FadeIn";
import PageBanner from "@/components/shared/PageBanner";
import { toast } from "sonner";

const serviceOptions = [
  "Data & AI Training",
  "Data & AI Development",
  "AI & Data Readiness Assessment",
  "m5 Innovation Lab",
  "m5 Workplace Assessment",
  "General Inquiry",
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", service: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Thank you! We'll be in touch shortly.");
      setForm({ name: "", company: "", email: "", phone: "", service: "", message: "" });
      setSubmitting(false);
    }, 1000);
  };

  const inputCls = "w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all";

  return (
    <main>
      {/* Banner */}
      <PageBanner
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1920&q=80"
        title="Contact Us"
        subtitle="We'd love to hear from you"
      />

      {/* Contact Section */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left — Info */}
            <FadeIn>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Let's Start a Conversation</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Ready to transform your organization with data and AI? We'd love to hear from you.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <MapPin className="text-accent" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">Address</p>
                      <p className="text-sm text-muted-foreground">D-01-01, Menara Mitraland, 13A, Jalan PJU 5/1, Kota Damansara, Petaling Jaya, Selangor 47810, Malaysia</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Mail className="text-accent" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">Email</p>
                      <a href="mailto:contact@m5solutions.my" className="text-sm text-muted-foreground hover:text-accent transition-colors">contact@m5solutions.my</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Phone className="text-accent" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">Phone</p>
                      <a href="tel:+60122779585" className="text-sm text-muted-foreground hover:text-accent transition-colors block">+6012 277 9585</a>
                      <a href="tel:+60376248113" className="text-sm text-muted-foreground hover:text-accent transition-colors block">+603 7624 8113</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Linkedin className="text-accent" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">LinkedIn</p>
                      <a href="https://linkedin.com/company/m5-solutions-malaysia" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent transition-colors">m5-solutions-malaysia</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Clock className="text-accent" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">Business Hours</p>
                      <p className="text-sm text-muted-foreground">Mon–Fri: 9:00 AM – 6:00 PM (MYT)</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right — Form */}
            <FadeIn delay={0.2}>
              <div className="bg-card rounded-xl p-8 md:p-10 border border-border shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-6">Send us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
                      <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} placeholder="Your name" maxLength={100} />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Company Name</label>
                      <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className={inputCls} placeholder="Your company" maxLength={100} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                      <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} placeholder="your@email.com" maxLength={255} />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                      <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} placeholder="+60 12 345 6789" maxLength={20} />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Select Service</label>
                    <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className={inputCls}>
                      <option value="">Select a service</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Message *</label>
                    <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} className={`${inputCls} resize-none`} placeholder="How can we help?" maxLength={1000} />
                  </div>
                  <button type="submit" disabled={submitting} className="btn-primary-m5 w-full justify-center disabled:opacity-50">
                    {submitting ? "Sending..." : "Send Message"} <Send className="ml-2" size={16} />
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-0">
        <div className="w-full">
          <iframe
            title="m5 Solutions Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.6!2d101.6!3d3.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDknMDAuMCJOIDEwMcKwMzYnMDAuMCJF!5e0!3m2!1sen!2smy!4v1!5m2!1sen!2smy"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
};

export default Contact;
