import FadeIn from "@/components/shared/FadeIn";

const HeroBanner = () => (
  <section className="bg-background py-16 md:py-24">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <FadeIn>
          <div>
            <h1 className="text-[26px] md:text-[42px] font-bold text-foreground leading-tight mb-6">
              Data and AI Training Development Readiness
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Tell us the KPI you want to improve.
              <br />
              We'll map the path forward.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
              alt="Team collaborating on data strategy"
              className="w-full h-[350px] md:h-[420px] object-cover"
              loading="eager"
            />
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

export default HeroBanner;
