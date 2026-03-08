import { Star, User, Linkedin } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import FadeIn from "@/components/shared/FadeIn";

const testimonials = [
  {
    name: "Anard Yasmeen",
    text: "The session was not just theory, this training changed my perception about data and helped me enhance my skills. I attribute this significant improvement to you as a great trainer. Thank you!",
  },
  {
    name: "Alfiah Harwood",
    text: "The training on Usage of Data for Business Growth was enlightening and provided valuable insights on leveraging data for strategic decisions. The practical tips and real-world examples have reshaped my approach to work and I'm eager to implement the feedback shared by Dr Nasir.",
  },
  {
    name: "Mohd Azreen",
    text: "The course was highly valuable and practical, offering clear techniques to use data for learning decisions, impact measurement, and alignment with organizational goals. The hands-on activities and real cases boosted my confidence in using data tools for training evaluation and ROI assessment.",
  },
];

const Testimonials = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Client Testimonials
          </h2>
        </FadeIn>

        <div className="max-w-6xl mx-auto overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-6">
            {testimonials.map((t) => (
              <div key={t.name} className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/3 pl-6">
                <div className="bg-background rounded-xl p-8 shadow-md border-t-[3px] border-accent h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="text-accent fill-accent" size={14} />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-6 italic leading-relaxed flex-1">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                      <User className="text-muted-foreground" size={18} />
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-sm text-foreground">{t.name}</p>
                      <Linkedin className="text-muted-foreground" size={14} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
