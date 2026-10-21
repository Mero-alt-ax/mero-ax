import React from 'react';
import { ShieldCheck, HeartHandshake, Award, Truck, MessageSquare } from 'lucide-react';
import { scrollToSection } from '../utils/format';

export const AboutUsSection: React.FC = () => {
  return (
    <section id="ueber-uns" className="py-16 sm:py-24 bg-white border-b border-[#E5E9E5]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#4F7D62] block mb-2">
            Fachkompetenz & Leidenschaft
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#173F35] mb-4">
            Über Gartenteichdiscount
          </h2>
          <p className="text-[#69716C] text-sm sm:text-base leading-relaxed">
            Gartenteichdiscount ist dein verlässlicher Fachhandel für anspruchsvolle Gartenteiche, Koibecken und moderne Wassertechnik. Wir verbinden geprüfte Markenqualität mit praxisnaher Teichberatung.
          </p>
        </div>

        {/* 3 Pillar Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 rounded-[14px] bg-[#F7F8F5] border border-[#E5E9E5] flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-[#173F35] text-white flex items-center justify-center mb-5">
              <Award className="w-6 h-6 text-[#DCEBE8]" />
            </div>
            <h3 className="text-lg font-bold text-[#173F35] mb-2">
              Geprüfte Markenqualität
            </h3>
            <p className="text-xs sm:text-sm text-[#69716C] leading-relaxed">
              Wir führen ausschließlich Originalprodukte von etablierten Herstellern wie Takazumi, Hikari, OASE, Tripond und AquaForte. Bei uns erhältst du Frische und Langlebigkeit garantiert.
            </p>
          </div>

          <div className="p-8 rounded-[14px] bg-[#F7F8F5] border border-[#E5E9E5] flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-[#4F7D62] text-white flex items-center justify-center mb-5">
              <HeartHandshake className="w-6 h-6 text-[#DCEBE8]" />
            </div>
            <h3 className="text-lg font-bold text-[#173F35] mb-2">
              Praxisnahe Fachberatung
            </h3>
            <p className="text-xs sm:text-sm text-[#69716C] leading-relaxed">
              Hinter Gartenteichdiscount stehen Menschen mit jahrelanger praktischer Teicherfahrung. Ob Algenproblem, Filterneubau oder Koi-Ernährung: Wir beraten dich kompetent und ehrlich.
            </p>
          </div>

          <div className="p-8 rounded-[14px] bg-[#F7F8F5] border border-[#E5E9E5] flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-[#173F35] text-white flex items-center justify-center mb-5">
              <Truck className="w-6 h-6 text-[#DCEBE8]" />
            </div>
            <h3 className="text-lg font-bold text-[#173F35] mb-2">
              Schnelle Direktlieferung
            </h3>
            <p className="text-xs sm:text-sm text-[#69716C] leading-relaxed">
              Dank unseres zentralen Logistikstandorts in Deutschland versenden wir deine Bestellung werktags zügig mit DHL oder DPD – damit deine Teichfische und Pflanzen nie lange warten müssen.
            </p>
          </div>
        </div>

        {/* Company Commitment & CTA */}
        <div className="bg-[#173F35] text-white rounded-[14px] p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
              Hast du Fragen zu deinem Teichprojekt?
            </h3>
            <p className="text-[#DCEBE8] text-xs sm:text-sm leading-relaxed">
              Nutze unsere telefonische Fachberatung oder schicke uns eine Nachricht mit deinen Teichmaßen oder Wasserwerten. Wir helfen dir gerne weiter.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href="#kontakt"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('kontakt');
              }}
              className="px-6 py-3.5 rounded-xl bg-[#4F7D62] hover:bg-[#3D664F] text-white font-semibold text-xs sm:text-sm transition-colors flex items-center gap-2 shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Jetzt Kontakt aufnehmen</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
