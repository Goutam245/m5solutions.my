const clients = [
  {
    name: "AICB",
    logo: () => (
      <div className="flex items-center gap-3 shrink-0">
        <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
          <span className="text-white font-extrabold text-base tracking-wide">AICB</span>
        </div>
        <div className="text-left">
          <p className="font-bold text-base leading-tight text-foreground">Asian Institute of</p>
          <p className="font-bold text-base leading-tight text-foreground">Chartered Bankers</p>
        </div>
      </div>
    ),
  },
  {
    name: "Boustead Plantations",
    logo: () => (
      <div className="flex flex-col items-center gap-1 shrink-0">
        <div className="w-[70px] h-[70px] border-[3px] border-foreground rounded-lg flex items-center justify-center">
          <span className="text-foreground font-black text-4xl">B</span>
        </div>
        <span className="text-foreground font-bold text-base">Plantations</span>
      </div>
    ),
  },
  {
    name: "Etiqa",
    logo: () => (
      <div className="flex flex-col items-center shrink-0">
        <span className="text-5xl font-bold tracking-tight text-foreground">
          <span>e</span><span className="uppercase">T</span><span>i</span><span className="uppercase">Q</span><span>a</span>
        </span>
        <svg width="70" height="14" viewBox="0 0 70 14" className="-mt-1">
          <path d="M5 12 Q35 -2 65 12" stroke="#f5a623" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        </svg>
      </div>
    ),
  },
  {
    name: "FGV",
    logo: () => (
      <div className="flex flex-col items-center shrink-0">
        <span className="text-6xl font-black text-foreground tracking-tight">FGV</span>
        <svg width="110" height="18" viewBox="0 0 110 18" className="-mt-2">
          <path d="M10 16 Q55 2 100 8" stroke="#e8a830" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M10 16 Q55 6 100 14" stroke="#cc3333" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        </svg>
      </div>
    ),
  },
  {
    name: "Kenanga",
    logo: () => (
      <span className="text-5xl font-bold text-accent tracking-tight shrink-0" style={{ fontFamily: "Georgia, serif" }}>
        kenanga
      </span>
    ),
  },
  {
    name: "Maybank",
    logo: () => (
      <div className="flex items-center px-8 py-4 shrink-0">
        <div className="w-12 h-12 rounded-full bg-[#ffc500] flex items-center justify-center mr-3">
          <span className="text-black text-xl">🐯</span>
        </div>
        <span className="text-3xl font-bold text-foreground">Maybank</span>
      </div>
    ),
  },
  {
    name: "Pelaburan MARA",
    logo: () => (
      <div className="flex items-center gap-3 shrink-0">
        <div className="w-16 h-16 bg-accent flex items-center justify-center">
          <span className="text-white text-4xl font-bold" style={{ transform: "rotate(-15deg)" }}>/</span>
        </div>
        <div>
          <span className="text-base tracking-[0.3em] text-muted-foreground font-light">PELABURAN</span>
          <span className="text-base tracking-[0.2em] text-accent font-bold ml-1">MARA</span>
        </div>
      </div>
    ),
  },
  {
    name: "RHB",
    logo: () => (
      <div className="flex items-center gap-1 shrink-0">
        <span className="text-5xl font-black text-foreground italic" style={{ fontFamily: "Georgia, serif" }}>RHB</span>
        <div className="w-7 h-7 bg-accent rotate-45 ml-1" />
      </div>
    ),
  },
  {
    name: "SD Guthrie",
    logo: () => (
      <div className="flex items-center gap-2 shrink-0">
        <svg width="48" height="48" viewBox="0 0 40 40">
          <path d="M20 5 Q35 15 25 30 Q15 40 5 25 Q-2 15 15 5 Q18 3 20 5Z" fill="#e84420" />
          <path d="M22 8 Q32 18 25 28 Q20 33 15 25 Q10 18 18 10 Q20 7 22 8Z" fill="#f56530" />
        </svg>
        <span className="text-3xl font-bold text-foreground">SD Guthrie</span>
      </div>
    ),
  },
  {
    name: "SMBC",
    logo: () => (
      <div className="flex items-center bg-[#004d40] px-8 py-4 rounded shrink-0">
        <div className="flex gap-0.5 mr-3">
          <div className="w-2.5 h-7 bg-[#a8d134]" />
          <div className="w-2.5 h-7 bg-[#c8e040]" />
          <div className="w-2.5 h-7 bg-[#a8d134]" />
        </div>
        <span className="text-3xl font-bold text-white tracking-wider">SMBC</span>
      </div>
    ),
  },
  {
    name: "UKM",
    logo: () => (
      <div className="flex items-center gap-3 shrink-0">
        <div className="w-16 h-16 rounded border-2 border-foreground flex items-center justify-center">
          <span className="text-sm font-bold text-center leading-tight text-foreground">UKM</span>
        </div>
        <div className="text-left">
          <p className="font-bold text-base leading-tight text-foreground">UNIVERSITI</p>
          <p className="font-bold text-base leading-tight text-foreground">KEBANGSAAN</p>
          <p className="font-bold text-base leading-tight text-foreground">MALAYSIA</p>
          <p className="text-xs text-muted-foreground italic">The National University of Malaysia</p>
        </div>
      </div>
    ),
  },
  {
    name: "MOH",
    logo: () => (
      <div className="flex flex-col items-center text-center shrink-0">
        <div className="w-14 h-14 mb-1 flex items-center justify-center">
          <span className="text-4xl">🏛️</span>
        </div>
        <p className="font-bold text-sm leading-tight text-foreground">MINISTRY OF HEALTH MALAYSIA</p>
        <p className="text-xs text-muted-foreground mt-0.5">INSTITUTE FOR PUBLIC HEALTH</p>
      </div>
    ),
  },
];

const ClientLogos = () => {
  return (
    <section className="py-20 overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-2 text-foreground">
          Our Clients
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto mb-14 rounded-full" />
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

        <div className="flex animate-scroll-left w-max">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex items-center justify-center mx-10 min-h-[80px]"
            >
              <client.logo />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
