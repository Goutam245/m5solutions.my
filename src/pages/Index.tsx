import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/shared/FadeIn";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import ClientLogos from "@/components/shared/ClientLogos";
import ThreePillars from "@/components/sections/ThreePillars";
import ServicesCards from "@/components/sections/ServicesCards";
import Leadership from "@/components/sections/Leadership";

const Homepage = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex items-center overflow-hidden pt-16" style={{ background: "#0D0D0D" }}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80"
            alt="Professional business environment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.82)" }} />
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Text */}
            <div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "60px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-accent rounded-full mb-8"
              />

              {[
                { white: "TURNING DATA INTO ", red: "DECISIONS." },
                { white: "TURNING AI INTO REAL IMPACT.", red: "" },
                { white: "TURNING INSIGHT INTO ", red: "PERFORMANCE." },
              ].map((line, i) => (
                <motion.h1
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.25 }}
                  className="text-[26px] md:text-[42px] font-extrabold leading-[1.4] tracking-tight mb-2"
                >
                  <span className="text-white">{line.white}</span>
                  {line.red && <span className="text-accent">{line.red}</span>}
                </motion.h1>
              ))}

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="mt-6 text-lg text-white/60"
              >
                Helping leaders make confident decisions in complex environments.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                className="mt-8"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-full transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 w-full sm:w-auto"
                >
                  Get Started <ArrowRight className="ml-2" size={18} />
                </Link>
              </motion.div>
            </div>

            {/* Right — Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden lg:block"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                alt="Business team collaborating in a meeting"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos />

      {/* Three Pillars */}
      <ThreePillars />

      {/* Services Cards */}
      <ServicesCards />

      {/* Leadership */}
      <Leadership />

      {/* Stats */}
      <section className="py-20" style={{ background: "#000000" }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { end: 50, suffix: "+", label: "Clients Served" },
              { end: 10, suffix: "+", label: "Years Experience" },
              { end: 200, suffix: "+", label: "Programs Delivered" },
              { end: 15, suffix: "+", label: "Industries" },
            ].map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div>
                  <p className="text-4xl md:text-5xl font-black text-accent mb-2">
                    <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                  </p>
                  <p className="text-sm text-white/60">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden" style={{ background: "#0D0D0D" }}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
              Partner with m5 Solutions to turn insight into meaningful progress.
            </p>
            <Link to="/contact" className="btn-primary-m5 text-lg w-full sm:w-auto">
              Start a Conversation <ArrowRight className="ml-2" size={20} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
};

export default Homepage;
