import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ShoppingBag, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { formatPrice } from '../utils/format';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const results = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.brand.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-[#E5E9E5] overflow-hidden">
        {/* Search Input bar */}
        <div className="p-4 sm:p-5 border-b border-[#E5E9E5] flex items-center gap-3 bg-[#F7F8F5]">
          <Search className="w-5 h-5 text-[#173F35] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Wonach suchst du? (z. B. Koifutter, Algen, Pumpe, Oase...)"
            className="flex-1 bg-transparent text-sm sm:text-base text-[#252B29] placeholder-[#69716C] focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#69716C] hover:text-[#252B29]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-[#E5E9E5] text-[#252B29] hover:bg-white"
          >
            ESC
          </button>
        </div>

        {/* Results or Suggestions */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-5">
          {query.trim() === '' ? (
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#69716C] block mb-3">
                Häufig gesucht
              </span>
              <div className="flex flex-wrap gap-2">
                {['Takazumi Koifutter', 'Fadenalgenvernichter', 'Oase Pumpe', 'Druckfilter', 'Starterbakterien', 'Teichkescher'].map(
                  (term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-3 py-1.5 rounded-lg bg-[#F7F8F5] hover:bg-[#DCEBE8] text-xs font-medium text-[#173F35] border border-[#E5E9E5] transition-colors"
                    >
                      {term}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-3">
              <span className="text-xs text-[#69716C] block mb-2">
                {results.length} Suchergebnisse gefunden:
              </span>
              {results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="p-3 rounded-xl border border-[#E5E9E5] hover:border-[#173F35] hover:bg-[#F7F8F5] transition-all cursor-pointer flex items-center gap-3.5 group"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-14 h-14 object-cover rounded-lg bg-[#F7F8F5] shrink-0 border border-[#E5E9E5]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 text-[11px] text-[#69716C]">
                      <span className="font-semibold text-[#4F7D62]">{product.brand}</span>
                      <span>·</span>
                      <span>{product.category}</span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-semibold text-[#252B29] group-hover:text-[#173F35] truncate">
                      {product.name}
                    </h4>
                    <span className="text-xs font-bold text-[#173F35] tabular-nums">
                      {formatPrice(product.price)}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#69716C] group-hover:text-[#173F35] group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-sm font-semibold text-[#252B29] mb-1">
                Keine Treffer für "{query}"
              </p>
              <p className="text-xs text-[#69716C]">
                Überprüfe deine Schreibweise oder versuche einen allgemeineren Begriff.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
