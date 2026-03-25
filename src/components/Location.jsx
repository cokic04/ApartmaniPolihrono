import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Location() {
  return (
    <section id="location" className="py-20 md:py-28 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Gde se nalazimo
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 mb-4">
            Lokacija
          </h2>
          <p className="text-stone-500 text-base md:text-lg leading-relaxed">
            Polihrono, poluostrvo Halkidiki, Grčka — idealna lokacija za
            nezaboravan letnji odmor uz more.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Google Maps embed */}
          <div className="lg:col-span-2 rounded-3xl overflow-hidden shadow-xl h-72 md:h-[440px]">
            {/*
              ── Google Maps embed ──────────────────────────────────────────────
              Da biste dobili tačan embed link:
              1. Otvorite Google Maps i pronađite lokaciju
              2. Kliknite "Deli" → "Ugradi mapu" → kopirajte src iz <iframe>
              3. Zalepite src vrednost ispod umesto trenutnog linka
              ──────────────────────────────────────────────────────────────────
            */}
            <iframe
              title="Lokacija — Apartmani Polihrono"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.2!2d23.3784!3d39.9778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a629224889f0b5%3A0x6f044aaff45aa289!2sVila%20Rea%20Magda!5e0!3m2!1ssr!2srs!4v1711234567890!5m2!1ssr!2srs"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info cards */}
          <div className="flex flex-col gap-4">
            <InfoCard
              icon={MapPin}
              title="Adresa"
              content="Polihrono, Halkidiki, Grčka"
            />
            <InfoCard
              icon={Phone}
              title="Telefon (SRB)"
              content="+381 68 031 77 242"
              href="tel:+3816803177242"
            />
            <InfoCard
              icon={Phone}
              title="Rezervacije (Viber / WhatsApp)"
              content="+43 680 317 7242"
              href="tel:+436803177242"
            />
            <InfoCard
              icon={Mail}
              title="Email"
              content="milospusa5@gmail.com"
              href="mailto:milospusa5@gmail.com"
            />
            <InfoCard
              icon={Clock}
              title="Prijem / Odjava"
              content="Po dogovoru"
            />

            <a
              href="#contact"
              className="mt-2 bg-accent hover:bg-accent-dark text-white py-3.5 px-6 rounded-2xl font-semibold text-sm text-center transition-all hover:shadow-md"
            >
              Pošaljite upit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, title, content, href }) {
  const Tag = href ? "a" : "div";
  return (
    <Tag
      {...(href ? { href } : {})}
      className="bg-white rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow group"
    >
      <div className="w-10 h-10 bg-cream-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors">
        <Icon size={19} className="text-accent" strokeWidth={1.75} />
      </div>
      <div>
        <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">
          {title}
        </p>
        <p className="text-stone-800 font-medium text-sm leading-relaxed">
          {content}
        </p>
      </div>
    </Tag>
  );
}
