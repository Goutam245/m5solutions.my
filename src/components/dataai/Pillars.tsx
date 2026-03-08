import { Settings } from "lucide-react";
import FadeIn from "@/components/shared/FadeIn";

const pillars = [
  {
    num: "01",
    title: "Data & AI Training",
    desc: "Training designed to improve real business outcomes, not just attendance. Programs span leadership decision-making, analytics capability and practical AI application.",
  },
  {
    num: "02",
    title: "Data & AI Development",
    desc: "We design and build dashboards, analytics workflows, automation and AI-enabled solutions that support better decisions.",
  },
  {
    num: "03",
    title: "AI & Data Readiness Assessment",
    desc: "You leave with a readiness scorecard and a prioritized roadmap across awareness, governance, pilot, platform and scale.",
  },
];

const Pillars = () => (
  <section className="py-20 bg-muted">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
        <FadeIn>
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Settings className="text-accent" size={28} />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                m5 Data & AI Pillars
              </h2>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-accent/30" />

              <div className="space-y-10">
                {pillars.map((p) => (
                  <div key={p.num} className="relative">
                    <div className="absolute -left-8 top-0 w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold z-10">
                      {p.num}
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-foreground mb-2">{p.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Team working on laptops"
              className="w-full h-[450px] object-cover"
              loading="lazy"
            />
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

export default Pillars;
