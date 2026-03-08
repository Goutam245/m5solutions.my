import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  children?: ReactNode;
}

const SectionHeading = ({ title, subtitle, light = false }: SectionHeadingProps) => (
  <div className="text-center mb-16">
    <div className="red-line mx-auto mb-6" />
    <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${light ? "text-foreground" : "text-white"}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg max-w-2xl mx-auto ${light ? "text-muted-foreground" : "text-white/60"}`}>
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeading;
