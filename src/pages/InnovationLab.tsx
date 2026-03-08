import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Search, Cog, Factory, Heart, Leaf, Wheat, DollarSign, Atom, ChevronRight, Lightbulb, Layers, Zap, Shield, TrendingUp } from "lucide-react";
import FadeIn from "@/components/shared/FadeIn";
import SectionHeading from "@/components/shared/SectionHeading";
import PageBanner from "@/components/shared/PageBanner";

const whatWeDo = [
  { icon: Search, title: "Patent Intelligence", desc: "Global patent landscape analysis to uncover opportunity gaps and white spaces before competitors do." },
  { icon: Cpu, title: "AI-Powered Analysis", desc: "AI-driven analysis to detect patterns, forecast direction and accelerate strategic decisions." },
  { icon: Cog, title: "TRIZ Methodology", desc: "Systematic innovation frameworks that remove guesswork and replace it with repeatable processes." },
];

const innovationProcess = [
  { num: "01", title: "Discover", desc: "Identify innovation challenges and strategic objectives." },
  { num: "02", title: "Analyse", desc: "Map patent landscapes and competitive positioning." },
  { num: "03", title: "Ideate", desc: "Generate solutions using TRIZ and AI frameworks." },
  { num: "04", title: "Validate", desc: "Test and refine concepts with data-backed models." },
  { num: "05", title: "Execute", desc: "Develop roadmap and support implementation." },
];

const recentProjects = [
  { image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=600&q=80", title: "Smart Manufacturing Platform", desc: "Patent-led innovation strategy for an industrial automation company." },
  { image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80", title: "Healthcare AI Diagnostic Tool", desc: "AI-assisted product development for medical device innovation." },
  { image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80", title: "Sustainable Energy Solutions", desc: "TRIZ-based innovation framework for renewable energy products." },
];

const whyChooseUs = [
  { icon: Lightbulb, title: "Proven Methodology", desc: "Structured TRIZ + AI approach ensures repeatable innovation outcomes." },
  { icon: Shield, title: "Patent Expertise", desc: "Deep patent intelligence capabilities across multiple industries." },
  { icon: TrendingUp, title: "Measurable ROI", desc: "Every innovation project is tied to strategic business impact." },
  { icon: Zap, title: "Fast Execution", desc: "From insight to validated product pathways in weeks, not months." },
];

const deliverables = [
  "Patent landscape analysis and opportunity mapping",
  "AI assisted product direction modelling",
  "Structured solution exploration using TRIZ",
  "Innovation automation workflows",
  "Strategic product roadmap advisory",
  "Innovation project execution support",
];

const industries = [
  { icon: Factory, name: "Manufacturing and industrial technologies" },
  { icon: Heart, name: "Healthcare and medical devices" },
  { icon: Leaf, name: "Energy and sustainability" },
  { icon: Wheat, name: "Agriculture and food innovation" },
  { icon: DollarSign, name: "Financial technology and digital platforms" },
  { icon: Atom, name: "Advanced materials and engineering" },
];

const InnovationLab = () => (
  <main>
    {/* Banner */}
    <PageBanner
      image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80"
      title="m5 Innovation Lab"
      subtitle="Stop Guessing Your Next Product Move"
    />

    {/* What We Do */}
    <section className="py-20 section-light">
      <div className="container mx-auto px-6">
        <SectionHeading title="What We Do" subtitle="Engineered Innovation. Not Brainstorming." light />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {whatWeDo.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.15}>
              <div className="bg-card rounded-xl p-8 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center h-full">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <p.icon className="text-accent" size={28} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Innovation Process */}
    <section className="py-20 section-dark">
      <div className="container mx-auto px-6">
        <SectionHeading title="Innovation Process" subtitle="A structured 5-step approach to systematic innovation." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {innovationProcess.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.1}>
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {step.num}
                </div>
                <h3 className="text-base font-bold text-primary-foreground mb-2">{step.title}</h3>
                <p className="text-xs text-primary-foreground/60 leading-relaxed">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Evotra */}
    <section className="py-20 section-navy">
      <div className="container mx-auto px-6">
    <SectionHeading title="Where Strategy Meets AI" subtitle="Powered by m5 Innovation Lab, our proprietary innovation engine." />
        <FadeIn>
          <div className="glass-card p-8 max-w-3xl mx-auto text-center">
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              m5 Innovation Lab integrates TRIZ principles, AI analysis and global patent data to support innovation decisions without relying solely on traditional R&D structures.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* Recent Projects */}
    <section className="py-20 section-light">
      <div className="container mx-auto px-6">
        <SectionHeading title="Recent Projects" subtitle="Innovation case studies across industries." light />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {recentProjects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.15}>
              <div className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" loading="lazy" />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20 section-dark">
      <div className="container mx-auto px-6">
        <SectionHeading title="Why Choose Us" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {whyChooseUs.map((b, i) => (
            <FadeIn key={b.title} delay={i * 0.1}>
              <div className="glass-card p-8 flex gap-4 h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <b.icon className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-primary-foreground/60 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* What We Deliver */}
    <section className="py-20 section-navy">
      <div className="container mx-auto px-6">
        <SectionHeading title="What We Deliver" />
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="glass-card p-8">
              <ul className="space-y-4">
                {deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-primary-foreground/80">
                    <ChevronRight className="text-accent shrink-0 mt-0.5" size={18} />
                    <span className="text-sm">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    {/* Industries */}
    <section className="py-20 section-light">
      <div className="container mx-auto px-6">
        <SectionHeading title="Where m5 Innovation Lab Drives Innovation" light />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {industries.map((ind, i) => (
            <FadeIn key={ind.name} delay={i * 0.1}>
              <div className="bg-card rounded-xl p-6 border border-border flex items-center gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <ind.icon className="text-accent" size={22} />
                </div>
                <p className="text-sm font-medium text-foreground">{ind.name}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 section-dark text-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Build What's Next</h2>
          <p className="text-primary-foreground/60 text-lg max-w-2xl mx-auto mb-8">
            Whether you are exploring a new product line, strengthening competitive positioning or redefining existing offerings, m5 Innovation Lab supports strategic innovation from analysis to execution.
          </p>
          <Link to="/contact" className="btn-primary-m5 text-lg w-full sm:w-auto">
            Define Your Next Move <ArrowRight className="ml-2" size={20} />
          </Link>
        </FadeIn>
      </div>
    </section>
  </main>
);

export default InnovationLab;
