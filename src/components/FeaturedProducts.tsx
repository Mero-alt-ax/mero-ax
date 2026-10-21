import React, { useState, useMemo } from 'react';
import { Search, X, SlidersHorizontal } from 'lucide-react';
import { Product } from '../types';
import { ProductGrid } from './ProductGrid';

interface FeaturedProductsProps {
  products: Product[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

const CATEGORY_TABS = [
  'Alle',
  'Koifutter',
  'Teichpflege',
  'Teichtechnik',
  'Teichzubehör',
];

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onAddToCart,
  onQuickView,
}) => {
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesCategory =
        selectedCategory === 'Alle' || item.category === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.brand.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        (item.subcategory && item.subcategory.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  return (
    <section id="produkte" className="py-16 sm:py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Section Heading & Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#E5E9E5]">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#4F7D62] block mb-2">
              Große Auswahl & Markenqualität
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#173F35]">
              Unsere Produkte
            </h2>
            <p className="text-[#69716C] text-sm sm:text-base mt-2 max-w-xl">
              Ausgewählte Markenartikel für deine Teichbiologie, Koi-Fütterung und Wasserfilterung.
            </p>
          </div>

          {/* Search input in product section */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#69716C] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Artikel oder Marke suchen..."
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-[#F7F8F5] border border-[#E5E9E5] text-sm text-[#252B29] placeholder-[#69716C] focus:outline-hidden focus:border-[#4F7D62] focus:bg-white transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#69716C] hover:text-[#252B29]"
                aria-label="Suche zurücksetzen"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs (Interactive Filter Controls) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {CATEGORY_TABS.map((tab) => {
            const isActive = selectedCategory === tab;
            return (
              <button
                key={tab}
                onClick={() => onSelectCategory(tab)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#173F35] text-white shadow-xs'
                    : 'bg-[#F7F8F5] text-[#252B29] hover:bg-[#E5E9E5] border border-[#E5E9E5]'
                }`}
              >
                {tab}
              </button>
            );
          })}

          {(selectedCategory !== 'Alle' || searchQuery) && (
            <button
              onClick={() => {
                onSelectCategory('Alle');
                onSearchChange('');
              }}
              className="ml-auto text-xs text-[#4F7D62] hover:text-[#173F35] font-semibold underline whitespace-nowrap px-2"
            >
              Filter zurücksetzen
            </button>
          )}
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between text-xs text-[#69716C] mb-6">
          <span>
            {filteredProducts.length} {filteredProducts.length === 1 ? 'Artikel' : 'Artikel'} gefunden
          </span>
          {searchQuery && (
            <span>
              Suchbegriff: <strong className="text-[#252B29]">"{searchQuery}"</strong>
            </span>
          )}
        </div>

        {/* Products Grid or Empty State */}
        {filteredProducts.length > 0 ? (
          <ProductGrid
            products={filteredProducts}
            onAddToCart={onAddToCart}
            onQuickView={onQuickView}
          />
        ) : (
          <div className="py-16 text-center bg-[#F7F8F5] rounded-[14px] border border-[#E5E9E5] p-8 max-w-lg mx-auto">
            <h3 className="text-base font-bold text-[#173F35] mb-2">
              Keine passenden Produkte gefunden
            </h3>
            <p className="text-xs sm:text-sm text-[#69716C] mb-6">
              Für deine Suche nach "{searchQuery}" in der Kategorie "{selectedCategory}" konnten wir leider keinen Artikel finden.
            </p>
            <button
              onClick={() => {
                onSelectCategory('Alle');
                onSearchChange('');
              }}
              className="px-5 py-2.5 rounded-xl bg-[#173F35] text-white text-xs font-semibold hover:bg-[#4F7D62] transition-colors"
            >
              Alle Produkte anzeigen
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
