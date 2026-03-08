import FadeIn from "@/components/shared/FadeIn";

const pillars = [
  {
    num: "01",
    title: "Data Clarity",
    items: ["Data for Business Growth", "Data & AI Governance", "Power BI", "AI Tools & Management", "Ethics", "Coding", "TRIZ & Innovation"],
  },
  {
    num: "02",
    title: "Strategic AI",
    items: ["m5 Data & AI Readiness Pathway", "Customised AI Solutions", "Machine Learning", "Generative AI", "Agentic AI", "Business Intelligence"],
  },
  {
    num: "03",
    title: "Human Insight",
    items: ["m5 Workplace Assessment", "m5 Leadership Assessment", "m5 Ethical Analysis of KPIs"],
  },
];

const ThreePillars = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-foreground mb-16 leading-tight">
            When these three move together,<br />
            organizations move forward.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Business woman photo */}
          <FadeIn direction="left">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/business-woman.jpg"
                alt="Professional business woman working with data technology"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
            </div>
          </FadeIn>

          {/* Right: 3 Pillars */}
          <div className="space-y-8">
            {pillars.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.15} direction="right">
                <div className="flex gap-6">
                  {/* Number + Arrow line */}
                  <div className="flex flex-col items-center shrink-0">
                    <span className="bg-accent text-white font-black text-xl w-12 h-12 rounded-lg flex items-center justify-center">
                      {p.num}
                    </span>
                    {i < pillars.length - 1 && (
                      <div className="w-0.5 h-full bg-accent/30 mt-2" />
                    )}
                  </div>

                  <div>
                    <span className="bg-accent text-white font-bold text-sm px-4 py-1.5 rounded-full inline-block mb-3">
                      {p.title}
                    </span>
                    <ul className="space-y-1.5">
                      {p.items.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                          <span className="font-medium text-foreground/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreePillars;
