import { Settings } from "lucide-react";
import FadeIn from "@/components/shared/FadeIn";

const programs = [
  {
    num: "01",
    title: "Lead with Data and AI",
    items: ["Certified Data-Driven Business Growth", "AI-Driven Leadership", "AI Foundations", "AI Management", "Digital Agility"],
  },
  {
    num: "02",
    title: "Build Analytics Capability",
    items: ["Structured Data & AI Upskilling Journey", "Data Storytelling", "Power BI", "Python Programs"],
  },
  {
    num: "03",
    title: "Apply AI Responsibly",
    items: ["Generative AI Bootcamp", "AI Hackathon", "Data & AI Governance", "Ethics Programs"],
  },
  {
    num: "04",
    title: "Innovate What's Next",
    items: ["Automation of Innovation Process (TRIZ + AI)", "Emerging Tech Governance"],
  },
];

const Programs = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-6">
      <FadeIn>
        <div className="flex items-center gap-3 justify-center mb-2">
          <Settings className="text-accent" size={28} />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Programs</h2>
        </div>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Not sure where to start? We recommend the right program based on the KPI you want to improve.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto items-start">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {programs.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.1}>
              <div className="rounded-xl p-5 h-full text-white border-t-4 border-accent" style={{ background: "#1A1A1A" }}>
                <span className="text-sm font-bold text-accent">{p.num}</span>
                <h3 className="text-base font-bold mb-3">{p.title}</h3>
                <ul className="space-y-1.5">
                  {p.items.map((item) => (
                    <li key={item} className="text-sm opacity-80 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
              alt="Data analytics dashboard"
              className="w-full h-[480px] object-cover"
              loading="lazy"
            />
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

export default Programs;
