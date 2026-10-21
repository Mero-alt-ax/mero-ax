import React, { useState } from 'react';
import { Truck, ShieldCheck, CreditCard, RotateCcw, Headphones, ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/products';

export const TrustAndServiceSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E5E9E5]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Trust Badges 5-Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 mb-16 pb-16 border-b border-[#E5E9E5]">
          <div className="flex flex-col items-center text-center p-4 rounded-xl bg-[#F7F8F5] border border-[#E5E9E5]">
            <Truck className="w-6 h-6 text-[#173F35] mb-2" />
            <span className="text-xs font-bold text-[#173F35]">Gratis-Versand</span>
            <span className="text-[11px] text-[#69716C] mt-0.5">ab 49 € Bestellwert</span>
          </div>

          <div className="flex flex-col items-center text-center p-4 rounded-xl bg-[#F7F8F5] border border-[#E5E9E5]">
            <ShieldCheck className="w-6 h-6 text-[#173F35] mb-2" />
            <span className="text-xs font-bold text-[#173F35]">Marken-Originale</span>
            <span className="text-[11px] text-[#69716C] mt-0.5">100% Herstellergarantie</span>
          </div>

          <div className="flex flex-col items-center text-center p-4 rounded-xl bg-[#F7F8F5] border border-[#E5E9E5]">
            <RotateCcw className="w-6 h-6 text-[#173F35] mb-2" />
            <span className="text-xs font-bold text-[#173F35]">30 Tage Rückgabe</span>
            <span className="text-[11px] text-[#69716C] mt-0.5">Einfache Retoure</span>
          </div>

          <div className="flex flex-col items-center text-center p-4 rounded-xl bg-[#F7F8F5] border border-[#E5E9E5]">
            <CreditCard className="w-6 h-6 text-[#173F35] mb-2" />
            <span className="text-xs font-bold text-[#173F35]">Sicher Bezahlen</span>
            <span className="text-[11px] text-[#69716C] mt-0.5">PayPal, Karte & Klarna</span>
          </div>

          <div className="flex flex-col items-center text-center p-4 rounded-xl bg-[#F7F8F5] border border-[#E5E9E5] col-span-2 md:col-span-1">
            <Headphones className="w-6 h-6 text-[#173F35] mb-2" />
            <span className="text-xs font-bold text-[#173F35]">Fachberatung</span>
            <span className="text-[11px] text-[#69716C] mt-0.5">Mo–Fr 9–17 Uhr</span>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4F7D62] block mb-2">
              Häufige Fragen
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#173F35]">
              Service & Einkauf bei Gartenteichdiscount
            </h2>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-[#E5E9E5] bg-[#F7F8F5] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#173F35] hover:bg-[#E5E9E5]/50 transition-colors"
                  aria-expanded={openFaq === idx}
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#69716C] shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? 'rotate-180 text-[#173F35]' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#69716C] leading-relaxed border-t border-[#E5E9E5]/60 bg-white">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
