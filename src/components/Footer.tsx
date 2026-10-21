import React from 'react';
import { Truck, ShieldCheck, Phone, Mail, Cookie } from 'lucide-react';
import { scrollToSection } from '../utils/format';

interface FooterProps {
  onOpenCookies: () => void;
  onOpenLegalModal: (type: 'impressum' | 'datenschutz' | 'agb' | 'versand') => void;
  onSelectCategoryFilter: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenCookies,
  onOpenLegalModal,
  onSelectCategoryFilter,
}) => {
  const handleNav = (sectionId: string, filter?: string) => {
    if (filter) {
      onSelectCategoryFilter(filter);
    }
    scrollToSection(sectionId);
  };

  return (
    <footer className="bg-[#173F35] text-white border-t border-[#255246] pt-16 pb-12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Brand Intro & Contact Bar */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-white text-[#173F35] flex items-center justify-center font-bold">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" strokeOpacity="0.3" />
                  <path d="M8 14c1.5 1.5 4 1.5 5.5 0l4.5-4.5c.5-.5.5-1.5 0-2s-1.5-.5-2 0l-4.5 4.5c-.8.8-2 .8-2.8 0L7 10" />
                  <path d="M15 8c.5 1 .5 2 0 3" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Gartenteich<span className="text-[#DCEBE8]">discount</span><span className="text-xs text-white/60">.de</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-sm mb-4">
              Dein Spezialist für Gartenteich, Koifutter, biologische Teichpflege und energiesparende Teichtechnik. Premium-Produkte für klares Wasser und vitale Koi.
            </p>
            <div className="flex items-center gap-3 text-xs text-[#DCEBE8]">
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5" /> Versandkostenfrei ab 49 €
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% Originalware
              </span>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <span className="text-[11px] uppercase tracking-wider text-[#DCEBE8] font-bold block mb-1">
                Telefon-Hotline
              </span>
              <p className="text-sm font-bold text-white">02306 / 9413000</p>
              <span className="text-[11px] text-white/60 block mt-0.5">Mo–Fr 9–17 Uhr</span>
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <span className="text-[11px] uppercase tracking-wider text-[#DCEBE8] font-bold block mb-1">
                E-Mail Support
              </span>
              <p className="text-xs sm:text-sm font-semibold text-white break-all">kundenservice@gartenteichdiscount.de</p>
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10 col-span-2 sm:col-span-1">
              <span className="text-[11px] uppercase tracking-wider text-[#DCEBE8] font-bold block mb-1">
                Versandpartner
              </span>
              <p className="text-xs sm:text-sm font-medium text-white/90">DHL & DPD Paketdienst</p>
              <span className="text-[11px] text-white/60 block mt-0.5">1–3 Tage Regellaufzeit</span>
            </div>
          </div>
        </div>

        {/* 4-COLUMN FOOTER NAVIGATION */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-white/10 text-xs sm:text-sm">
          {/* COLUMN 1: SHOP */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-wide uppercase mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5 text-white/80">
              <li>
                <button
                  onClick={() => handleNav('produkte', 'Alle')}
                  className="hover:text-[#DCEBE8] transition-colors text-left"
                >
                  Alle Produkte
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('koifutter', 'Koifutter')}
                  className="hover:text-[#DCEBE8] transition-colors text-left"
                >
                  Koifutter
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('teichpflege', 'Teichpflege')}
                  className="hover:text-[#DCEBE8] transition-colors text-left"
                >
                  Teichpflege & Algen
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('teichtechnik', 'Teichtechnik')}
                  className="hover:text-[#DCEBE8] transition-colors text-left"
                >
                  Teichtechnik & Pumpen
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('produkte', 'Teichzubehör')}
                  className="hover:text-[#DCEBE8] transition-colors text-left"
                >
                  Teichzubehör & Netze
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 2: SERVICE */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-wide uppercase mb-4">
              Service
            </h4>
            <ul className="space-y-2.5 text-white/80">
              <li>
                <button
                  onClick={() => handleNav('kontakt')}
                  className="hover:text-[#DCEBE8] transition-colors text-left"
                >
                  Kontakt & Beratung
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalModal('versand')}
                  className="hover:text-[#DCEBE8] transition-colors text-left"
                >
                  Versandinformationen
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalModal('versand')}
                  className="hover:text-[#DCEBE8] transition-colors text-left"
                >
                  Zahlungsinformationen
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalModal('versand')}
                  className="hover:text-[#DCEBE8] transition-colors text-left"
                >
                  Rückgabeinformationen (30 Tage)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('ratgeber')}
                  className="hover:text-[#DCEBE8] transition-colors text-left"
                >
                  Teich-Ratgeber & FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: UNTERNEHMEN */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-wide uppercase mb-4">
              Unternehmen
            </h4>
            <ul className="space-y-2.5 text-white/80">
              <li>
                <button
                  onClick={() => handleNav('ueber-uns')}
                  className="hover:text-[#DCEBE8] transition-colors text-left"
                >
                  Über uns
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalModal('impressum')}
                  className="hover:text-[#DCEBE8] transition-colors text-left"
                >
                  Impressum
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalModal('datenschutz')}
                  className="hover:text-[#DCEBE8] transition-colors text-left"
                >
                  Datenschutzerklärung
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalModal('agb')}
                  className="hover:text-[#DCEBE8] transition-colors text-left"
                >
                  Allgemeine Geschäftsbedingungen
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: EINSTELLUNGEN */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-wide uppercase mb-4">
              Einstellungen
            </h4>
            <ul className="space-y-2.5 text-white/80">
              <li>
                <button
                  onClick={onOpenCookies}
                  className="hover:text-[#DCEBE8] transition-colors text-left flex items-center gap-1.5"
                >
                  <Cookie className="w-3.5 h-3.5 text-[#DCEBE8]" />
                  <span>Cookie-Einstellungen</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalModal('datenschutz')}
                  className="hover:text-[#DCEBE8] transition-colors text-left"
                >
                  Datenschutzeinstellungen
                </button>
              </li>
              <li>
                <span className="text-white/40 block text-xs mt-2">
                  Zahlungsarten:
                </span>
                <div className="flex flex-wrap gap-2 pt-2 text-[11px] text-white/70">
                  <span className="px-2 py-1 rounded-sm bg-white/10">PayPal</span>
                  <span className="px-2 py-1 rounded-sm bg-white/10">Klarna</span>
                  <span className="px-2 py-1 rounded-sm bg-white/10">Kreditkarte</span>
                  <span className="px-2 py-1 rounded-sm bg-white/10">Vorkasse</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT & LEGAL NOTICE */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            © {new Date().getFullYear()} Gartenteichdiscount.de — Alle Rechte vorbehalten. Alle Preise inkl. MwSt. zzgl. Versand.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenLegalModal('impressum')}
              className="hover:text-white transition-colors"
            >
              Impressum
            </button>
            <span>·</span>
            <button
              onClick={() => onOpenLegalModal('datenschutz')}
              className="hover:text-white transition-colors"
            >
              Datenschutz
            </button>
            <span>·</span>
            <button
              onClick={() => onOpenLegalModal('agb')}
              className="hover:text-white transition-colors"
            >
              AGB
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
