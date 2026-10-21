import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Beratung',
    pondSize: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-16 sm:py-24 bg-[#F7F8F5]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#4F7D62] block mb-2">
            Wir sind für dich da
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#173F35] mb-3">
            Kontakt & Fachberatung
          </h2>
          <p className="text-[#69716C] text-sm sm:text-base leading-relaxed">
            Hast du Fragen zu einem Produkt, benötigst du Hilfe bei der Filterberechnung oder möchtest du deine Teichwasserwerte mit uns besprechen?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-[#173F35] text-white rounded-[14px] p-6 sm:p-10 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white">
                Direkter Kontakt
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#DCEBE8]" />
                  </div>
                  <div>
                    <span className="text-xs text-[#DCEBE8] uppercase font-semibold tracking-wider block">
                      Telefonische Hotline
                    </span>
                    <a
                      href="tel:023069413000"
                      className="text-base sm:text-lg font-bold hover:text-[#DCEBE8] transition-colors"
                    >
                      02306 / 9413000
                    </a>
                    <span className="text-xs text-white/70 block mt-0.5">
                      Montag bis Freitag: 09:00 – 17:00 Uhr
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#DCEBE8]" />
                  </div>
                  <div>
                    <span className="text-xs text-[#DCEBE8] uppercase font-semibold tracking-wider block">
                      E-Mail Support
                    </span>
                    <a
                      href="mailto:kundenservice@gartenteichdiscount.de"
                      className="text-sm sm:text-base font-semibold hover:text-[#DCEBE8] transition-colors"
                    >
                      kundenservice@gartenteichdiscount.de
                    </a>
                    <span className="text-xs text-white/70 block mt-0.5">
                      Antwort meist innerhalb von 24 Stunden
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#DCEBE8]" />
                  </div>
                  <div>
                    <span className="text-xs text-[#DCEBE8] uppercase font-semibold tracking-wider block">
                      Standort & Logistik
                    </span>
                    <p className="text-sm font-medium text-white/90">
                      Gartenteichdiscount Logistikzentrum
                    </p>
                    <p className="text-xs text-white/70">
                      Versandlager & Fachberatung Deutschland
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#DCEBE8]" />
                  </div>
                  <div>
                    <span className="text-xs text-[#DCEBE8] uppercase font-semibold tracking-wider block">
                      Beste Erreichbarkeit
                    </span>
                    <p className="text-xs text-white/80 leading-relaxed">
                      Für technische Pumpenberatung halte bitte deine ungefähre Teichgröße in Litern und den Höhenunterschied bereit.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15 text-xs text-[#DCEBE8]/80">
              ✓ Kostenlose Vorab-Fachberatung vor dem Pumpenkauf
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-[14px] border border-[#E5E9E5] p-6 sm:p-10 shadow-xs">
            {formSubmitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#DCEBE8] text-[#173F35] flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#173F35] mb-2">
                  Vielen Dank für deine Nachricht!
                </h3>
                <p className="text-xs sm:text-sm text-[#69716C] max-w-md mb-6 leading-relaxed">
                  Deine Anfrage wurde erfolgreich an unser Fachteam übermittelt. Wir prüfen dein Anliegen und melden uns in Kürze bei dir.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', topic: 'Beratung', pondSize: '', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-[#173F35] text-white text-xs font-semibold hover:bg-[#4F7D62] transition-colors"
                >
                  Weitere Nachricht senden
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-[#173F35] mb-1">
                  Nachricht an das Gartenteichdiscount-Team
                </h3>
                <p className="text-xs text-[#69716C] mb-6">
                  Fülle einfach das Formular aus – wir antworten werktags zügig und kompetent.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#252B29] mb-1">
                      Dein Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="z. B. Markus Weber"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E9E5] bg-[#F7F8F5] text-sm focus:bg-white focus:outline-hidden focus:border-[#4F7D62]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#252B29] mb-1">
                      Deine E-Mail-Adresse *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="markus@beispiel.de"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E9E5] bg-[#F7F8F5] text-sm focus:bg-white focus:outline-hidden focus:border-[#4F7D62]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#252B29] mb-1">
                      Themenbereich
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E9E5] bg-[#F7F8F5] text-sm focus:bg-white focus:outline-hidden focus:border-[#4F7D62]"
                    >
                      <option value="Beratung">Allgemeine Fachberatung</option>
                      <option value="Algen">Algenbekämpfung / Wasserwerte</option>
                      <option value="Pumpe">Pumpen- & Filterdimensionierung</option>
                      <option value="Koifutter">Koi-Ernährungsempfehlung</option>
                      <option value="Bestellung">Frage zu einer Bestellung</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#252B29] mb-1">
                      Teichgröße (optional)
                    </label>
                    <input
                      type="text"
                      value={formData.pondSize}
                      onChange={(e) => setFormData({ ...formData, pondSize: e.target.value })}
                      placeholder="z. B. 15.000 Liter mit Koi"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E9E5] bg-[#F7F8F5] text-sm focus:bg-white focus:outline-hidden focus:border-[#4F7D62]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#252B29] mb-1">
                    Deine Nachricht *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Beschreibe dein Teichanliegen möglichst genau..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E9E5] bg-[#F7F8F5] text-sm focus:bg-white focus:outline-hidden focus:border-[#4F7D62]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-[#173F35] hover:bg-[#4F7D62] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors w-full sm:w-auto shadow-xs"
                  >
                    <Send className="w-4 h-4" />
                    <span>Nachricht absenden</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
