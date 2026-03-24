import { ChevronDown } from 'lucide-react'
import { heroImg } from '../data/images'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image (5.jpg — terasa) */}
      <img
        src={heroImg}
        alt="Apartmani Polihrono — terasa"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/65" />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6">

        <p
          className="text-accent-light text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-5 animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}
        >
          Dobrodošli u Apartmane Polihrono
        </p>

        <h1
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] mb-6 animate-fade-in-up"
          style={{ animationDelay: '0.25s' }}
        >
          Vaš savršen odmor
          <br />
          <span className="italic text-accent-light">u Polihronuu</span>
        </h1>

        <p
          className="text-white/80 text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          Na samo 80m od mora nudimo vam savršen smeštaj sa 2 spavaće sobe,
          dnevnim boravkom i potpuno opremljenom kuhinjom.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: '0.55s' }}
        >
          <a
            href="#contact"
            className="w-full sm:w-auto bg-accent hover:bg-accent-dark text-white px-9 py-4 rounded-full font-semibold text-base transition-all hover:shadow-xl hover:-translate-y-0.5"
          >
            Rezervišite smeštaj
          </a>
          <a
            href="#gallery"
            className="w-full sm:w-auto border-2 border-white/60 hover:border-white hover:bg-white/10 text-white px-9 py-4 rounded-full font-semibold text-base transition-all"
          >
            Pogledajte apartman
          </a>
        </div>

        {/* Quick stats */}
        <div
          className="mt-16 flex flex-wrap items-center justify-center gap-10 animate-fade-in-up"
          style={{ animationDelay: '0.7s' }}
        >
          {[
            { value: '80m',  label: 'od mora' },
            { value: '2',    label: 'spavaće sobe' },
            { value: '5+',   label: 'godina iskustva' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-3xl font-bold font-serif text-accent-light">{value}</p>
              <p className="text-white/55 text-xs mt-1 tracking-widest uppercase">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#gallery"
        aria-label="Skrolujte dole"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown size={30} />
      </a>
    </section>
  )
}
