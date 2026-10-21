import React, { useState } from 'react';
import { X, ShoppingBag, Check, Star, ShieldCheck, Truck, RotateCcw, Package } from 'lucide-react';
import { Product } from '../types';
import { formatPrice } from '../utils/format';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-[#E5E9E5] relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-[#69716C] hover:text-[#252B29] hover:bg-[#F7F8F5] transition-colors"
          aria-label="Schließen"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Product Image */}
          <div className="aspect-4/3 w-full bg-[#F7F8F5] rounded-xl overflow-hidden border border-[#E5E9E5] relative p-3">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
              referrerPolicy="no-referrer"
            />
            {product.originalPrice && (
              <span className="absolute top-3 left-3 bg-[#173F35] text-white text-[11px] font-bold px-2 py-0.5 rounded-md">
                Aktionspreis
              </span>
            )}
          </div>

          {/* Product Info & Purchase Module */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#69716C] mb-2">
                <span className="font-semibold text-[#4F7D62]">{product.brand}</span>
                <span aria-hidden="true">·</span>
                <span>{product.category}</span>
                {product.subcategory && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span>{product.subcategory}</span>
                  </>
                )}
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-[#173F35] mb-3 leading-snug">
                {product.name}
              </h2>

              {product.rating && (
                <div className="flex items-center gap-1.5 text-xs text-[#69716C] mb-4">
                  <div className="flex items-center text-amber-500">
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <span className="font-bold text-[#252B29]">{product.rating.toFixed(1)}</span>
                  {product.reviewsCount && (
                    <span>({product.reviewsCount} verifizierte Bewertungen)</span>
                  )}
                </div>
              )}

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-2xl font-bold text-[#173F35] tabular-nums">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-[#69716C] line-through tabular-nums">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                <span className="text-xs text-[#69716C]">inkl. MwSt.</span>
              </div>

              {/* Availability */}
              <div className="flex items-center gap-2 text-xs text-[#4F7D62] font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-[#4F7D62]" />
                <span>Auf Lager · Lieferzeit 1–3 Werktage mit DHL / DPD</span>
              </div>

              <p className="text-xs sm:text-sm text-[#69716C] leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Key Features Bullet list */}
              {product.features && (
                <div className="mb-6 space-y-1.5 text-xs text-[#252B29]">
                  <span className="font-bold text-[#173F35] block mb-1">Besondere Merkmale:</span>
                  {product.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <span className="text-[#4F7D62] font-bold">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Technical Specifications */}
              {product.specs && (
                <div className="mb-6 border-t border-[#E5E9E5] pt-4">
                  <span className="font-bold text-xs text-[#173F35] block mb-2">Technische Daten:</span>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {Object.entries(product.specs).map(([key, val]) => (
                      <div key={key} className="bg-[#F7F8F5] p-2 rounded-lg">
                        <span className="text-[#69716C] block text-[11px]">{key}</span>
                        <span className="font-medium text-[#252B29]">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Purchase Controls */}
            <div className="pt-4 border-t border-[#E5E9E5]">
              <div className="flex items-center gap-3">
                {/* Quantity */}
                <div className="flex items-center border border-[#E5E9E5] rounded-xl bg-[#F7F8F5]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-sm text-[#69716C] hover:text-[#252B29]"
                    aria-label="Menge verringern"
                  >
                    -
                  </button>
                  <span className="px-3 text-sm font-bold tabular-nums text-[#252B29]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-sm text-[#69716C] hover:text-[#252B29]"
                    aria-label="Menge erhöhen"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart button */}
                <button
                  onClick={handleAdd}
                  disabled={justAdded}
                  className={`flex-1 py-3 px-6 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xs ${
                    justAdded
                      ? 'bg-[#4F7D62] text-white'
                      : 'bg-[#173F35] hover:bg-[#4F7D62] text-white'
                  }`}
                >
                  {justAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>In den Warenkorb gelegt!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>In den Warenkorb ({formatPrice(product.price * quantity)})</span>
                    </>
                  )}
                </button>
              </div>

              {/* Trust markers */}
              <div className="mt-4 flex items-center justify-between text-[11px] text-[#69716C]">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#4F7D62]" /> 100% Original
                </span>
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-[#4F7D62]" /> Versandkostenfrei ab 49 €
                </span>
                <span className="flex items-center gap-1">
                  <RotateCcw className="w-3.5 h-3.5 text-[#4F7D62]" /> 30 Tage Rückgaberecht
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
