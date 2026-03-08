import FadeIn from "@/components/shared/FadeIn";

const leaders = [
  {
    name: "Mazuin Mohd Ismail",
    role: "Chief Executive Officer",
    photo: "/images/leader-ceo.jpg",
    focus: ["Data-Driven Growth", "Entrepreneurship", "Financial Services", "Strategic Leadership"],
  },
  {
    name: "Dr Nasir Ismail",
    role: "Chief Scientific Officer",
    photo: "/images/leader-cso.jpg",
    focus: ["Data Skills", "Workplace Assessment", "Organizational Interventions", "Behavioural Science"],
  },
  {
    name: "Dr Mostafa Ghane",
    role: "Chief of AI",
    photo: "/images/leader-cai.jpg",
    focus: ["Artificial Intelligence", "Machine Learning", "Innovation Methods", "TRIZ"],
  },
];

const Leadership = () => {
  return (
    <section className="py-24" style={{ backgroundColor: "#0D0D0D" }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          <FadeIn direction="left">
            <div className="lg:pr-4">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-6">
                Leadership<br />Behind the <span className="text-accent">Work</span>
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                Builders at heart, we bring together experience in{" "}
                <span className="text-accent font-semibold">data, AI</span> and{" "}
                <span className="text-accent font-semibold">organizational insight</span>{" "}
                to help leaders navigate complexity and create meaningful progress across industries and environments.
              </p>
            </div>
          </FadeIn>

          {leaders.map((l, i) => (
            <FadeIn key={l.name} delay={i * 0.15}>
              <div
                className="shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center"
                style={{ borderRadius: 12, padding: 24, minHeight: 380, background: "#1A1A1A" }}
              >
                {/* Photo */}
                <div
                  className="rounded-full overflow-hidden shrink-0"
                  style={{
                    width: 160,
                    height: 160,
                    border: "3px solid hsl(355 82% 56%)",
                    marginTop: 20,
                    marginBottom: 16,
                  }}
                >
                  <img
                    src={l.photo}
                    alt={l.name}
                    className="w-full h-full"
                    style={{ objectFit: "cover", objectPosition: "center 5%" }}
                    loading="lazy"
                  />
                </div>

                {/* Name */}
                <h3
                  className="text-center font-bold text-white"
                  style={{ fontSize: 18, marginTop: 16 }}
                >
                  {l.name}
                </h3>

                {/* Role */}
                <p
                  className="text-center text-white/60 italic"
                  style={{ fontSize: 14, marginBottom: 12 }}
                >
                  {l.role}
                </p>

                {/* Focus Areas */}
                <span className="bg-accent text-white text-[10px] font-semibold px-3 py-0.5 rounded-full mb-2">
                  Focus Areas
                </span>
                <ul className="space-y-1 w-full">
                  {l.focus.map((f) => (
                    <li key={f} className="text-xs text-white/70 flex items-start gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-accent mt-1.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
