import { Link } from "react-router-dom";
import FadeIn from "@/components/shared/FadeIn";

const services = [
  {
    title: "Data & AI",
    description: "Turning data into clarity and applying AI where it creates real value across capability, decisions and solutions. We help organizations move from experimentation to confident adoption.",
    image: "/images/data-tech.jpg",
    imageAlt: "Data analytics and technology visualization",
    link: "/data-ai",
  },
  {
    title: "m5 Innovation Lab",
    description: "The Innovation Lab brings together experimentation, research and new initiatives that extend how we help organizations navigate change and explore new possibilities.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Innovation and creative thinking concept",
    link: "/innovation-lab",
  },
  {
    title: "m5 Workplace Assessment",
    description: "A proprietary diagnostic that provides leaders with insight into organizational health and performance.",
    image: "/images/team-meeting.jpg",
    imageAlt: "Professional team in a meeting discussing workplace strategy",
    link: "/workplace-assessment",
  },
];

const ServicesCards = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.15}>
              <Link to={s.link} className="block group h-full">
                <div className="h-full">
                  <h3 className="text-xl font-bold mb-3 text-accent">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {s.description}
                  </p>
                  <div className="rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300 border-2 border-transparent group-hover:border-accent">
                    <img
                      src={s.image}
                      alt={s.imageAlt}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;
