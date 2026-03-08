import FadeIn from "@/components/shared/FadeIn";

interface PageBannerProps {
  image: string;
  title: string;
  subtitle?: string;
}

const PageBanner = ({ image, title, subtitle }: PageBannerProps) => (
  <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />
    <div className="absolute inset-0 bg-primary/70" />
    <div className="relative z-10 text-center px-6">
      <FadeIn>
        <h1 className="text-[26px] md:text-[42px] font-bold text-primary-foreground mb-3">{title}</h1>
        {subtitle && <p className="text-lg text-primary-foreground/60 max-w-2xl mx-auto">{subtitle}</p>}
      </FadeIn>
    </div>
  </section>
);

export default PageBanner;
