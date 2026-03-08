import FadeIn from "@/components/shared/FadeIn";

const photos = [
  { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80", alt: "Training session", span: "col-span-2 row-span-2" },
  { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80", alt: "Conference event", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80", alt: "Workshop setup", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80", alt: "Team discussion", span: "col-span-1 row-span-2" },
  { src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80", alt: "Office collaboration", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80", alt: "Business meeting", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=600&q=80", alt: "Learning session", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80", alt: "Speaker presenting", span: "col-span-1 row-span-1" },
];

const SignaturePrograms = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-6">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-2">
          <span className="italic font-serif">Signature Training Programs</span>
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto mb-12 rounded-full" />
      </FadeIn>
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-3 max-w-6xl mx-auto">
        {photos.map((photo, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <div className={`${photo.span} rounded-xl overflow-hidden h-full`}>
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default SignaturePrograms;
