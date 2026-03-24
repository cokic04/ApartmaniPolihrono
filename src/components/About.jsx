import { CheckCircle } from "lucide-react";
import { aboutImg } from "../data/images";

const prednosti = [
  "2 spavaće sobe + dnevni boravak",
  "Potpuno opremljena kuhinja",
  "Wi-Fi, klima, Smart TV",
  "Parking u okviru objekta",
  "Samo 100m od mora",
  "Porodičan i topao prijem",
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            {/* Swap this photo in src/data/images.js → aboutImg */}
            <img
              src={aboutImg}
              alt="Terasa apartmana — Polihrono"
              className="w-full h-72 md:h-[480px] object-cover rounded-3xl shadow-xl"
              loading="lazy"
            />

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white rounded-2xl shadow-2xl px-6 py-5 hidden sm:flex flex-col items-center border border-stone-100">
              <p className="text-4xl font-bold font-serif text-accent leading-none">
                5+
              </p>
              <p className="text-stone-500 text-sm mt-1 font-medium text-center">
                godina iskustva
              </p>
            </div>

            {/* Tag */}
            <div className="absolute top-5 left-5 bg-accent text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
              Porodičan smeštaj
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              O nama
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 mb-6 leading-[1.15]">
              Apartman Grčka
              <br />
              <span className="italic text-accent">Polihrono</span>
            </h2>

            <p className="text-stone-600 text-base md:text-lg leading-relaxed mb-5">
              Tražite savršen smeštaj za vaš odmor u Polihronu? Na samo 100m od
              mora nudimo vam savršen smeštaj sa 2 spavaće sobe, dnevnim
              boravkom i potpuno opremljenom kuhinjom.
            </p>
            <p className="text-stone-500 text-base leading-relaxed mb-8">
              Apartman sadrži Smart TV, Wi-Fi i klimu. Prijem je porodičan i
              topao — svaki gost je poseban za nas, a vaš komfor je naš
              prioritet.
            </p>

            {/* Checklist */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {prednosti.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle
                    size={17}
                    className="text-accent flex-shrink-0"
                  />
                  <span className="text-stone-700 text-sm font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-block bg-accent hover:bg-accent-dark text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-all hover:shadow-md"
            >
              Kontaktirajte nas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
