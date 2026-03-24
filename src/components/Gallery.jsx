import {
  galleryTerasa,
  galleryKuhinja,
  gallerySpavaca1,
  gallerySpavaca2,
  galleryDnevni,
  galleryKupatilo,
} from '../data/images'

// ─────────────────────────────────────────────────────────────────────────────
// Da biste promenili slike u galeriji, uredite src/data/images.js
// ─────────────────────────────────────────────────────────────────────────────
const sobe = [
  {
    id: 1,
    title: 'Terasa',
    description: 'Spoljašnji prostor za opuštanje',
    src: galleryTerasa,
  },
  {
    id: 2,
    title: 'Kuhinja',
    description: 'Potpuno opremljena kuhinja',
    src: galleryKuhinja,
  },
  {
    id: 3,
    title: 'Spavaća soba 1',
    description: 'Udoban bračni krevet',
    src: gallerySpavaca1,
  },
  {
    id: 4,
    title: 'Spavaća soba 2',
    description: 'Višenamenska soba za goste',
    src: gallerySpavaca2,
  },
  {
    id: 5,
    title: 'Dnevni boravak',
    description: 'Prostrani dnevni boravak sa TV',
    src: galleryDnevni,
  },
  {
    id: 6,
    title: 'Kupatilo',
    description: 'Kupatilo sa tuš kabinom',
    src: galleryKupatilo,
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Galerija
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 mb-4">
            Pronađite savršen prostor
          </h2>
          <p className="text-stone-500 text-base md:text-lg leading-relaxed">
            Svaki kutak apartmana je pažljivo uređen kako biste se osećali
            kao kod kuće — čak i na odmoru.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {sobe.map((soba) => (
            <article
              key={soba.id}
              className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 bg-stone-100"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={soba.src}
                  alt={soba.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Card label — slides up on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <h3 className="font-semibold text-white">{soba.title}</h3>
                  <p className="text-stone-300 text-xs mt-1">{soba.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-accent hover:bg-accent-dark text-white px-9 py-3.5 rounded-full font-semibold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Proverite dostupnost
          </a>
        </div>
      </div>
    </section>
  )
}
