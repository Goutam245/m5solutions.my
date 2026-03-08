import { CheckCircle, Award, GraduationCap } from "lucide-react";
import FadeIn from "@/components/shared/FadeIn";

const bullets = [
  "UKM-certified programs",
  "HRD Corp Claimable",
  "Delivered across banking, public listed companies and public sector organizations",
  "From capability building to implemented solutions",
  "Outcome-focused approach anchored on real KPIs",
];

const Certifications = () => (
  <section className="py-20" style={{ background: "#0D0D0D" }}>
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <FadeIn>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Certified Excellence<br />Proven Results
            </h2>
            <ul className="space-y-4">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle className="text-accent shrink-0 mt-0.5" size={20} />
                  <span className="text-sm text-white/70 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center gap-3 w-[200px]">
              <Award className="text-accent" size={48} />
              <p className="text-sm font-bold text-foreground text-center">UKM Institute of Visual Informatics</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center gap-3 w-[200px]">
              <GraduationCap className="text-accent" size={48} />
              <p className="text-sm font-bold text-foreground text-center">HRD Corp Claimable</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

export default Certifications;
