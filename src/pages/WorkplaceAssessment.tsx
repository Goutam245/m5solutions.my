import { Link } from "react-router-dom";
import { ArrowRight, Eye, ShieldCheck, TrendingUp, Map, ClipboardCheck, FileBarChart, Settings, GraduationCap, CheckCircle, Users, BarChart3, Target } from "lucide-react";
import FadeIn from "@/components/shared/FadeIn";
import SectionHeading from "@/components/shared/SectionHeading";
import PageBanner from "@/components/shared/PageBanner";

const whatIsWA = {
  text: [
    "The m5 Workplace Assessment is a proprietary diagnostic tool that measures organisational health across ten critical workplace domains.",
    "It identifies root causes behind turnover, burnout, absenteeism and productivity loss — giving leadership teams the data they need to act with confidence.",
    "Built on evidence-based behavioural science, the assessment translates complex workforce dynamics into clear, prioritised recommendations.",
  ],
  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
};

const framework = [
  { icon: Users, title: "People & Culture", desc: "Assess team dynamics, engagement levels, leadership effectiveness and cultural alignment across the organisation." },
  { icon: BarChart3, title: "Performance & Productivity", desc: "Measure operational efficiency, output quality, absenteeism impact and workflow effectiveness." },
  { icon: Target, title: "Strategy & Alignment", desc: "Evaluate how well organisational goals align with team execution, communication and resource allocation." },
];

const whatYouGet = [
  "Comprehensive workplace health scorecard",
  "Domain-by-domain risk and opportunity analysis",
  "Benchmarking against industry standards",
  "Prioritised action recommendations",
  "Executive summary for leadership review",
  "Implementation roadmap with milestones",
  "Progress tracking and follow-up support",
  "Customised intervention design",
];

const assessmentProcess = [
  { num: "01", icon: ClipboardCheck, title: "Comprehensive Assessment", desc: "We collect and analyse data across ten workplace domains to identify performance gaps, engagement risks and organisational misalignment." },
  { num: "02", icon: FileBarChart, title: "Evidence-Based Analysis", desc: "Findings are synthesised into a clear scorecard with benchmarks, trends and priority areas for improvement." },
  { num: "03", icon: Settings, title: "Action Planning", desc: "Together with leadership, we translate findings into focused, prioritised actions grounded in data and aligned with business objectives." },
  { num: "04", icon: TrendingUp, title: "Implementation Support", desc: "We support execution, monitor progress and track improvements in retention, engagement and performance." },
];

const benefits = [
  { icon: Eye, title: "Clarity on What Drives Performance", desc: "Understand the root causes behind turnover and inefficiencies through a data-driven diagnostic." },
  { icon: ShieldCheck, title: "Measurable Reduction in Risk", desc: "Identify retention risks early and strengthen alignment before productivity declines." },
  { icon: TrendingUp, title: "Stronger Productivity and Execution", desc: "Reduce absenteeism, improve engagement and expand teams to perform effectively." },
  { icon: Map, title: "A Clear Roadmap for Action", desc: "Receive a workplace scorecard and priorities that guide leadership decisions with confidence." },
];

const WorkplaceAssessment = () => (
  <main>
    {/* Banner */}
    <PageBanner
      image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80"
      title="m5 Workplace Assessment"
      subtitle="Measure Your Workplace. Improve What Matters."
    />

    {/* What is Workplace Assessment */}
    <section className="py-20 section-light">
      <div className="container mx-auto px-6">
        <SectionHeading title="What is Workplace Assessment?" light />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <FadeIn>
            <div className="space-y-4">
              {whatIsWA.text.map((t, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">{t}</p>
              ))}
              <p className="text-foreground font-semibold mt-4">
                Workplace health can be measured. With the right diagnostic tool, leaders gain clarity on root causes, prioritise action and drive measurable improvement.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <img
              src={whatIsWA.image}
              alt="Team collaboration in workplace"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
              loading="lazy"
            />
          </FadeIn>
        </div>
      </div>
    </section>

    {/* Assessment Framework */}
    <section className="py-20 section-dark">
      <div className="container mx-auto px-6">
        <SectionHeading title="Assessment Framework" subtitle="Three pillars that form the foundation of our diagnostic." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {framework.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.15}>
              <div className="glass-card p-8 text-center h-full hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <f.icon className="text-accent" size={28} />
                </div>
                <h3 className="text-lg font-bold text-primary-foreground mb-3">{f.title}</h3>
                <p className="text-sm text-primary-foreground/60 leading-relaxed">{f.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* What You Get */}
    <section className="py-20 section-light">
      <div className="container mx-auto px-6">
        <SectionHeading title="What You Get" subtitle="A comprehensive package designed for leadership teams." light />
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whatYouGet.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="text-accent shrink-0 mt-0.5" size={18} />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    {/* Assessment Process */}
    <section className="py-20 section-navy">
      <div className="container mx-auto px-6">
        <SectionHeading title="Assessment Process" subtitle="Measure. Prioritise. Improve." />
        <div className="max-w-4xl mx-auto space-y-6">
          {assessmentProcess.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.15}>
              <div className="glass-card p-8 flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <s.icon className="text-accent" size={24} />
                  </div>
                  {i < assessmentProcess.length - 1 && <div className="w-0.5 h-8 bg-accent/20 mt-2 hidden sm:block" />}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-primary-foreground/60 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-20 section-light">
      <div className="container mx-auto px-6">
        <SectionHeading title="What You Gain" light />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <FadeIn key={b.title} delay={i * 0.1}>
              <div className="bg-card rounded-xl p-8 border border-border shadow-sm flex gap-4 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <b.icon className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Dr. Nasir */}
    <section className="py-20 section-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <SectionHeading title="Built on Science. Designed for Performance." />
            <div className="glass-card p-8 md:p-12">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <img
                  src="/images/leader-cso.jpg"
                  alt="Dr. Nasir Ismail"
                  className="w-20 h-20 rounded-full object-cover border-2 border-accent shrink-0"
                />
                <div>
                  <h3 className="text-xl font-bold text-primary-foreground mb-1">Dr. Nasir Ismail</h3>
                  <p className="text-accent text-sm font-semibold mb-4">PhD in Social and Behavioural Sciences, Johns Hopkins University</p>
                  <p className="text-primary-foreground/60 text-sm leading-relaxed mb-3">
                    Dr. Nasir applies behavioural science to strengthen organisational performance and workforce resilience. His research on burnout and organisational risk informed evidence-based approaches that reduce attrition, strengthen engagement and improve productivity.
                  </p>
                  <p className="text-primary-foreground/60 text-sm leading-relaxed">
                    He has led safety culture studies across more than 200 hospitals and manufacturers. His work shaped the m5 Workplace Assessment.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 section-navy text-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Turn Workplace Insight into Performance Impact
          </h2>
          <p className="text-primary-foreground/60 text-lg max-w-xl mx-auto mb-8">Ready to Measure What Matters</p>
          <Link to="/contact" className="btn-primary-m5 text-lg w-full sm:w-auto">
            Start Your Assessment <ArrowRight className="ml-2" size={20} />
          </Link>
        </FadeIn>
      </div>
    </section>
  </main>
);

export default WorkplaceAssessment;
