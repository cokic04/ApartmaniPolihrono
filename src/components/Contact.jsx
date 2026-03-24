import { useState, useRef } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { contactImg } from "../data/images";

// ═════════════════════════════════════════════════════════════════════════════
//  EmailJS integracija — uputstvo
// ─────────────────────────────────────────────────────────────────────────────
//  1. Instalirajte paket:
//       npm install @emailjs/browser
//
//  2. Dodajte import na vrhu fajla:
//       import emailjs from '@emailjs/browser'
//
//  3. Registrujte se na https://www.emailjs.com/ (besplatno do 200 mejlova/mes)
//     • Napravite Service (npr. Gmail)
//     • Napravite Email Template — koristite ove promenljive:
//         {{ime}}  {{email}}  {{telefon}}  {{dolazak}}  {{odlazak}}
//         {{gosti}}  {{poruka}}
//     • Kopirajte Service ID, Template ID i Public Key
//
//  4. Zamenite blok "// ── DEMO ──" u handleSubmit() sledećim kodom:
//
//       emailjs
//         .sendForm(
//           'VAŠ_SERVICE_ID',   // npr. 'service_abc123'
//           'VAŠ_TEMPLATE_ID',  // npr. 'template_xyz789'
//           formRef.current,
//           'VAŠ_PUBLIC_KEY'    // npr. 'AbCdEfGhIj...'
//         )
//         .then(() => setSubmitted(true))
//         .catch((err) => {
//           console.error('EmailJS greška:', err)
//           alert('Greška pri slanju. Molimo kontaktirajte nas telefonom.')
//         })
//         .finally(() => setLoading(false))
// ═════════════════════════════════════════════════════════════════════════════

const PRAZAN_FORM = {
  ime: "",
  email: "",
  telefon: "",
  dolazak: "",
  odlazak: "",
  gosti: "",
  poruka: "",
};

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState(PRAZAN_FORM);
  const [greske, setGreske] = useState({});
  const [loading, setLoading] = useState(false);
  const [poslato, setPoslato] = useState(false);

  // Validacija
  const validiraj = () => {
    const g = {};
    if (!form.ime.trim()) g.ime = "Ime i prezime je obavezno.";
    if (!form.email.trim()) g.email = "Email adresa je obavezna.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      g.email = "Unesite ispravnu email adresu.";
    if (!form.dolazak) g.dolazak = "Datum dolaska je obavezan.";
    if (!form.odlazak) g.odlazak = "Datum odlaska je obavezan.";
    else if (form.dolazak && form.odlazak <= form.dolazak)
      g.odlazak = "Datum odlaska mora biti posle dolaska.";
    if (!form.gosti) g.gosti = "Odaberite broj gostiju.";
    return g;
  };

  const handleChange = ({ target: { name, value } }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    if (greske[name]) setGreske((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validacioneGreske = validiraj();
    if (Object.keys(validacioneGreske).length) {
      setGreske(validacioneGreske);
      const prvoPolje = Object.keys(validacioneGreske)[0];
      document.querySelector(`[name="${prvoPolje}"]`)?.focus();
      return;
    }
    setLoading(true);

    // ── DEMO — zamenite ovaj blok sa EmailJS pozivom (vidi uputstvo iznad) ──
    setTimeout(() => {
      setLoading(false);
      setPoslato(true);
      setForm(PRAZAN_FORM);
    }, 1400);
    // ─────────────────────────────────────────────────────────────────────────
  };

  const danas = new Date().toISOString().split("T")[0];

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Leva kolona */}
          <div className="lg:sticky lg:top-28">
            <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Javite nam se
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 mb-6 leading-[1.15]">
              Rezervišite vaš
              <br />
              <span className="italic text-accent">savršen odmor</span>
            </h2>
            <p className="text-stone-500 text-base md:text-lg leading-relaxed mb-8">
              Popunite formular i mi ćemo vam odgovoriti u roku od 24 sata sa
              svim detaljima o dostupnosti i cenama.
            </p>

            {/* Slika — menjajte u src/data/images.js → contactImg */}
            <img
              src={contactImg}
              alt="Spavaća soba — Apartmani Polihrono"
              className="w-full rounded-2xl object-cover h-56 md:h-72 shadow-xl"
              loading="lazy"
            />

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "Bez naknade za rezervaciju",
                "Odgovaramo u roku od 24h",
                "Fleksibilni uslovi",
              ].map((badge) => (
                <span
                  key={badge}
                  className="bg-cream-100 text-stone-600 text-xs font-medium px-3 py-1.5 rounded-full border border-stone-200"
                >
                  ✓ {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Formular / Uspeh */}
          <div>
            {poslato ? (
              <UspehKartica onReset={() => setPoslato(false)} />
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5 bg-white rounded-3xl border border-stone-100 shadow-xl p-6 md:p-8"
              >
                <div className="mb-2">
                  <h3 className="font-serif text-xl font-semibold text-stone-900">
                    Upit za rezervaciju
                  </h3>
                  <p className="text-stone-400 text-sm mt-1">
                    Polja označena * su obavezna.
                  </p>
                </div>

                {/* Ime */}
                <Polje label="Ime i prezime *" greska={greske.ime}>
                  <input
                    type="text"
                    name="ime"
                    value={form.ime}
                    onChange={handleChange}
                    placeholder="Marko Marković"
                    className={inputKls(greske.ime)}
                    autoComplete="name"
                  />
                </Polje>

                {/* Email + Telefon */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Polje label="Email adresa *" greska={greske.email}>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="marko@primer.com"
                      className={inputKls(greske.email)}
                      autoComplete="email"
                    />
                  </Polje>
                  <Polje label="Broj telefona" greska={greske.telefon}>
                    <input
                      type="tel"
                      name="telefon"
                      value={form.telefon}
                      onChange={handleChange}
                      placeholder="+381 60 000 0000"
                      className={inputKls(greske.telefon)}
                      autoComplete="tel"
                    />
                  </Polje>
                </div>

                {/* Datum dolaska + odlaska */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Polje label="Datum dolaska *" greska={greske.dolazak}>
                    <input
                      type="date"
                      name="dolazak"
                      value={form.dolazak}
                      onChange={handleChange}
                      min={danas}
                      className={inputKls(greske.dolazak)}
                    />
                  </Polje>
                  <Polje label="Datum odlaska *" greska={greske.odlazak}>
                    <input
                      type="date"
                      name="odlazak"
                      value={form.odlazak}
                      onChange={handleChange}
                      min={form.dolazak || danas}
                      className={inputKls(greske.odlazak)}
                    />
                  </Polje>
                </div>

                {/* Broj gostiju */}
                <Polje label="Broj gostiju *" greska={greske.gosti}>
                  <select
                    name="gosti"
                    value={form.gosti}
                    onChange={handleChange}
                    className={inputKls(greske.gosti)}
                  >
                    <option value="" disabled>
                      Odaberite broj gostiju
                    </option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "gost" : n < 5 ? "gosta" : "gostiju"}
                      </option>
                    ))}
                  </select>
                </Polje>

                {/* Poruka */}
                <Polje
                  label="Poruka ili posebni zahtevi"
                  greska={greske.poruka}
                >
                  <textarea
                    name="poruka"
                    value={form.poruka}
                    onChange={handleChange}
                    placeholder="Napišite nam nešto — posebne potrebe, pitanja, datume..."
                    rows={4}
                    className={inputKls(greske.poruka) + " resize-none"}
                  />
                </Polje>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-accent hover:bg-accent-dark disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-2xl font-semibold text-base flex items-center justify-center gap-2.5 transition-all hover:shadow-lg"
                >
                  {loading ? (
                    <>
                      <Spinner />
                      Slanje upita…
                    </>
                  ) : (
                    <>
                      <Send size={17} />
                      Pošaljite upit
                    </>
                  )}
                </button>

                <p className="text-stone-400 text-xs text-center leading-relaxed">
                  Vaši podaci se koriste isključivo za odgovor na vaš upit i
                  neće biti deljeni.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Pomoćne komponente ────────────────────────────────────────────────────────

function Polje({ label, greska, children }) {
  return (
    <div>
      <label className="block text-sm font-medium text-stone-700 mb-1.5">
        {label}
      </label>
      {children}
      {greska && (
        <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
          <span>⚠</span> {greska}
        </p>
      )}
    </div>
  );
}

function inputKls(greska) {
  return [
    "w-full px-4 py-3 rounded-xl border text-stone-800 text-sm placeholder:text-stone-300",
    "focus:outline-none focus:ring-4 transition-all",
    greska
      ? "border-red-400 bg-red-50/50 focus:ring-red-200 focus:border-red-400"
      : "border-stone-200 bg-stone-50 focus:ring-accent/15 focus:border-accent",
  ].join(" ");
}

function Spinner() {
  return (
    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v8H4z"
      />
    </svg>
  );
}

function UspehKartica({ onReset }) {
  return (
    <div className="bg-green-50 border border-green-200 rounded-3xl p-10 md:p-14 text-center shadow-sm">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
        <CheckCircle2 size={36} className="text-green-500" />
      </div>
      <h3 className="font-serif text-2xl font-semibold text-stone-900 mb-3">
        Upit je primljen!
      </h3>
      <p className="text-stone-500 leading-relaxed mb-8 max-w-sm mx-auto">
        Hvala na interesovanju! Odgovorićemo vam u roku od 24 sata sa svim
        informacijama o dostupnosti i cenama.
      </p>
      <button
        onClick={onReset}
        className="text-accent font-semibold text-sm hover:underline"
      >
        ← Pošalji novi upit
      </button>
    </div>
  );
}
