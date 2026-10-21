import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { KOI_IMAGE } from '../data/products';
import { scrollToSection } from '../utils/format';

interface KoiFoodSectionProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onViewAllKoi: () => void;
}

export const KoiFoodSection: React.FC<KoiFoodSectionProps> = ({
  products,
  onAddToCart,
  onQuickView,
  onViewAllKoi,
}) => {
  const koiProducts = products.filter((p) => p.category === 'Koifutter');

  return (
    <section id="koifutter" className="py-16 sm:py-24 bg-[#F7F8F5] border-b border-[#E5E9E5]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Editorial Feature Split */}
        <div className="bg-white rounded-[14px] border border-[#E5E9E5] overflow-hidden mb-12 shadow-xs grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[300px] overflow-hidden bg-[#173F35]">
            <img
              src={KOI_IMAGE}
              alt="Premium Spirulina Koifutter Pellets"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:hidden" />
          </div>

          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4F7D62] block mb-2">
              Artgerechte Ernährung
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#173F35] mb-4">
              Premium Koifutter für vitale Nishikigoi
            </h2>
            <p className="text-[#69716C] text-sm sm:text-base leading-relaxed mb-6">
              Nishikigoi benötigen je nach Jahreszeit und Wassertemperatur die exakt abgestimmte Nährstoffkombination. Von leicht verdaulichem Wheatgerm-Futter im Frühjahr über farbintensive Spirulina-Pellets bis hin zu nährstoffreichem Ganzjahresfutter führender Marken wie Takazumi, Hikari und Coppens.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-xs sm:text-sm text-[#252B29]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4F7D62] shrink-0" />
                <span>Hohe Verdaulichkeit ohne Wassertrübung</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4F7D62] shrink-0" />
                <span>Brillantes Farbbild durch natürliches Spirulina</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4F7D62] shrink-0" />
                <span>Pelletgrößen für Jung- und Großfische</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4F7D62] shrink-0" />
                <span>Ganzjahres-, Wachstums- & Sinkfutter</span>
              </div>
            </div>

            <div>
              <button
                onClick={() => {
                  onViewAllKoi();
                  scrollToSection('produkte');
                }}
                className="px-6 py-3 rounded-xl bg-[#173F35] hover:bg-[#4F7D62] text-white font-semibold text-xs sm:text-sm transition-colors inline-flex items-center gap-2"
              >
                <span>Alle Koifutter-Produkte anzeigen ({koiProducts.length})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Koi Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {koiProducts.slice(0, 3).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
