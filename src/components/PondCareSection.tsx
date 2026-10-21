import React from 'react';
import { ArrowRight, Droplets, CheckCircle2 } from 'lucide-react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { TEICHPFLEGE_IMAGE } from '../data/products';
import { scrollToSection } from '../utils/format';

interface PondCareSectionProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onViewAllCare: () => void;
}

export const PondCareSection: React.FC<PondCareSectionProps> = ({
  products,
  onAddToCart,
  onQuickView,
  onViewAllCare,
}) => {
  const careProducts = products.filter((p) => p.category === 'Teichpflege');

  return (
    <section id="teichpflege" className="py-16 sm:py-24 bg-white border-b border-[#E5E9E5]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Editorial Feature Split */}
        <div className="bg-[#F7F8F5] rounded-[14px] border border-[#E5E9E5] overflow-hidden mb-12 shadow-xs grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center order-2 lg:order-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4F7D62] block mb-2">
              Wasserbalance & Biologie
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#173F35] mb-4">
              Teichpflege für kristallklares Wasser
            </h2>
            <p className="text-[#69716C] text-sm sm:text-base leading-relaxed mb-6">
              Ein gesunder Gartenteich basiert auf einem biologischen Gleichgewicht. Mit unseren wirkungsvollen Pflegeprodukten befreist du das Wasser gezielt von lästigen Fadenalgen, aktivierst nützliche Filterbakterien, stabilisierst den pH- und Karbonathärtewert und schützt deine Fische vor Schadstoffen.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-xs sm:text-sm text-[#252B29]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4F7D62] shrink-0" />
                <span>Schnelle Fadenalgenbekämpfung mit Aktivsauerstoff</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4F7D62] shrink-0" />
                <span>Bio-Filterstarter für raschen Schadstoffabbau</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4F7D62] shrink-0" />
                <span>Biologische Schlammentferner ohne Abpumpen</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4F7D62] shrink-0" />
                <span>Präzise 6-in-1 Wassertests für Teichparameter</span>
              </div>
            </div>

            <div>
              <button
                onClick={() => {
                  onViewAllCare();
                  scrollToSection('produkte');
                }}
                className="px-6 py-3 rounded-xl bg-[#173F35] hover:bg-[#4F7D62] text-white font-semibold text-xs sm:text-sm transition-colors inline-flex items-center gap-2"
              >
                <span>Alle Teichpflege-Produkte anzeigen ({careProducts.length})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[300px] overflow-hidden bg-[#173F35] order-1 lg:order-2">
            <img
              src={TEICHPFLEGE_IMAGE}
              alt="Natürliche Teichpflege und Wasseraufbereiter"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
        </div>

        {/* Care Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {careProducts.slice(0, 3).map((product) => (
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
