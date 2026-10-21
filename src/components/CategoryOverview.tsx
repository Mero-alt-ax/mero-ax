import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data/products';
import { scrollToSection } from '../utils/format';

interface CategoryOverviewProps {
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryOverview: React.FC<CategoryOverviewProps> = ({ onSelectCategory }) => {
  const handleCardClick = (catId: string, anchorId: string) => {
    onSelectCategory(catId);
    scrollToSection(anchorId);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#F7F8F5] border-b border-[#E5E9E5]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#4F7D62] block mb-2">
            Sortimentsübersicht
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#173F35] mb-3">
            Entdecke unsere Produktwelten
          </h2>
          <p className="text-[#69716C] text-sm sm:text-base leading-relaxed">
            Alles für klares Wasser, vitale Koi und verlässliche Teichtechnik. Wähle deine Kategorie für gezielte Lösungen.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCardClick(category.id, category.anchorId)}
              className="group cursor-pointer bg-white rounded-[14px] border border-[#E5E9E5] overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardClick(category.id, category.anchorId);
                }
              }}
            >
              {/* Category Image with fallback */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#F7F8F5]">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                  <span className="text-xs font-semibold bg-[#173F35]/90 px-2.5 py-1 rounded-md backdrop-blur-xs">
                    {category.itemCount} Premium-Artikel
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#173F35] group-hover:text-[#4F7D62] transition-colors mb-1.5">
                    {category.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#69716C] line-clamp-2 leading-relaxed mb-4">
                    {category.description}
                  </p>
                </div>

                {/* Subcategories list */}
                <div className="pt-3 border-t border-[#E5E9E5] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#4F7D62] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Jetzt ansehen <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[11px] text-[#69716C]">
                    Direkt zum Sortiment
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
