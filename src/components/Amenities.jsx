import { Wifi, Car, Wind, UtensilsCrossed, Tv, Sun, Shirt, Coffee } from 'lucide-react'

const pogodnosti = [
  {
    icon: Wifi,
    title: 'Besplatan Wi-Fi',
    description: 'Brza internet konekcija dostupna u celom apartmanu.',
  },
  {
    icon: Wind,
    title: 'Klima uređaj',
    description: 'Individualna klima u svakoj sobi za ugodnu temperaturu.',
  },
  {
    icon: Tv,
    title: 'Smart TV',
    description: 'Veliki Smart TV sa satelitskim programima u dnevnoj sobi.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Opremljena kuhinja',
    description: 'Šporet, frižider, mikrotalasna i sav neophodni pribor.',
  },
  {
    icon: Car,
    title: 'Besplatan parking',
    description: 'Privatno parking mesto uključeno u cenu.',
  },
  {
    icon: Sun,
    title: 'Blizu plaže',
    description: 'Peščana plaža na samo 80 metara od apartmana.',
  },
  {
    icon: Shirt,
    title: 'Veš mašina',
    description: 'Veš mašina na raspolaganju svim gostima.',
  },
  {
    icon: Coffee,
    title: 'Dobrodošlica',
    description: 'Kafa, čaj i lokalni proizvodi dočekuju vas po dolasku.',
  },
]

export default function Amenities() {
  return (
    <section id="amenities" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Šta nudimo
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 mb-4">
            Sve što vam je potrebno
          </h2>
          <p className="text-stone-500 text-base md:text-lg leading-relaxed">
            Apartman je opremljen svim potrebnim kako bi vaš boravak bio
            što udobniji i bezbrižniji.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pogodnosti.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group p-6 rounded-2xl border border-stone-100 hover:border-accent/25 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 bg-white cursor-default"
            >
              <div className="w-11 h-11 bg-cream-100 group-hover:bg-accent/10 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                <Icon size={22} className="text-accent" strokeWidth={1.75} />
              </div>
              <h3 className="font-semibold text-stone-900 text-sm mb-1.5">{title}</h3>
              <p className="text-stone-400 text-xs leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
