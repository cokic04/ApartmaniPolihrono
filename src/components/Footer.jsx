import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";

const navLinks = [
  { label: "Početna", href: "#home" },
  { label: "Galerija", href: "#gallery" },
  { label: "Pogodnosti", href: "#amenities" },
  { label: "O nama", href: "#about" },
  { label: "Lokacija", href: "#location" },
  { label: "Kontakt", href: "#contact" },
];

export default function Footer() {
  const godina = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-stone-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 pb-12 border-b border-stone-800">
          {/* Brand */}
          <div className="sm:col-span-2">
            <a
              href="#home"
              className="flex items-center gap-2.5 mb-4 w-fit group"
            >
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center group-hover:bg-accent-dark transition-colors">
                <span className="text-white font-bold text-sm font-serif">
                  A
                </span>
              </div>
              <div className="leading-none">
                <span className="font-serif font-semibold text-lg text-white tracking-tight block">
                  Apartmani
                </span>
                <span className="text-xs font-medium tracking-widest uppercase text-accent">
                  Polihrono
                </span>
              </div>
            </a>
            <p className="text-stone-500 text-sm leading-relaxed max-w-xs mb-6">
              Savršen smeštaj za vaš odmor u Polihronuu, Grčka. Na samo 100m od
              mora — toplo, porodično i udobno.
            </p>

            {/* Društvene mreže */}
            <div className="flex gap-3">
              <SocijalnaVeza
                href="https://www.facebook.com/profile.php?id=61574962762984"
                icon={Facebook}
                label="Facebook"
              />
              <SocijalnaVeza href="#" icon={Instagram} label="Instagram" />
            </div>
          </div>

          {/* Navigacija */}
          <div>
            <h3 className="text-white font-semibold text-xs tracking-widest uppercase mb-5">
              Navigacija
            </h3>
            <ul className="space-y-3">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-stone-500 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-white font-semibold text-xs tracking-widest uppercase mb-5">
              Kontakt
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={15}
                  className="text-accent flex-shrink-0 mt-0.5"
                />
                <span className="text-sm leading-relaxed">
                  Polihrono,
                  <br />
                  Halkidiki, Grčka
                </span>
              </li>
              <li>
                <a
                  href="tel:+3816803177242"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Phone size={15} className="text-accent flex-shrink-0" />
                  <span className="text-sm">+381 68 031 77 242</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:milospusa5@gmail.com"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Mail size={15} className="text-accent flex-shrink-0" />
                  <span className="text-sm">milospusa5@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-stone-600 text-xs">
          <p>© {godina} Apartmani Polihrono. Sva prava zadržana.</p>
          <a
            href="#contact"
            className="text-accent hover:text-accent-light transition-colors font-medium"
          >
            Rezervišite odmor →
          </a>
        </div>
      </div>
    </footer>
  );
}

function SocijalnaVeza({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 bg-stone-800 hover:bg-accent rounded-xl flex items-center justify-center transition-colors"
    >
      <Icon size={16} className="text-white" />
    </a>
  );
}
