import React from 'react';
import { ArrowDown, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { HERO_IMAGE } from '../data/products';
import { scrollToSection } from '../utils/format';

interface HeroProps {
  onExploreProducts: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts }) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#173F35]">
      {/* Background Image with dark green overlay for optimal legibility */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Kristallklarer Gartenteich mit farbenprächtigen Nishikigoi Koi-Karpfen und üppiger Uferbepflanzung"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Measured dark green overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#173F35]/95 via-[#173F35]/80 to-[#173F35]/40" />
        <div className="absolute inset-0 bg-radial from-transparent to-[#173F35]/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 py-20 sm:py-28 lg:py-36 min-h-[580px] flex flex-col justify-center">
        <div className="max-w-2xl text-white">
          {/* Subtle unboxed kicker without pill box */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#DCEBE8] mb-4">
            <span className="w-6 h-0.5 bg-[#4F7D62]" />
            <span>Dein Fachshop für Teich & Koi</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] text-balance mb-6">
            Alles für deinen Gartenteich
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-[#F7F8F5]/90 font-normal leading-relaxed mb-8 max-w-xl">
            Entdecke hochwertige Produkte für klares Wasser, gesunde Koi und einen gepflegten Gartenteich.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <a
              href="#produkte"
              onClick={(e) => {
                e.preventDefault();
                onExploreProducts();
                scrollToSection('produkte');
              }}
              className="px-8 py-4 rounded-xl bg-[#4F7D62] hover:bg-[#3D664F] text-white font-semibold text-center shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 text-base group"
            >
              <span>Produkte entdecken</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#ratgeber"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('ratgeber');
              }}
              className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-center backdrop-blur-xs border border-white/20 transition-all text-base"
            >
              Teich-Ratgeber lesen
            </a>
          </div>

          {/* Trust Highlights Strip */}
          <div className="pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-[#DCEBE8]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#DCEBE8] shrink-0" />
              <span>Versandkostenfrei ab 49 €</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#DCEBE8] shrink-0" />
              <span>1–3 Werktage Lieferzeit</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#DCEBE8] shrink-0" />
              <span>Fachberatung vom Teichprofi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
