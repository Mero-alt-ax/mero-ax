import React, { useState } from 'react';
import { ShoppingBag, Eye, Check, Star } from 'lucide-react';
import { Product } from '../types';
import { formatPrice } from '../utils/format';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onQuickView,
}) => {
  const [imageLoaded, setImageLoaded] = useState(true);
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <div
      onClick={() => onQuickView(product)}
      className="group bg-white rounded-[14px] border border-[#E5E9E5] overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer"
    >
      {/* Product Image Area */}
      <div className="relative aspect-4/3 w-full bg-[#F7F8F5] overflow-hidden flex items-center justify-center p-3">
        {imageLoaded ? (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setImageLoaded(false)}
            className="w-full h-full object-cover rounded-lg group-hover:scale-103 transition-transform duration-300"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        ) : (
          /* Styled Fallback Container */
          <div className="w-full h-full flex flex-col items-center justify-center bg-[#E5E9E5]/40 rounded-lg text-center p-4">
            <span className="text-xs font-semibold text-[#173F35] mb-1">{product.brand}</span>
            <span className="text-xs text-[#69716C] line-clamp-2">{product.name}</span>
          </div>
        )}

        {/* Quick View Button on Image hover */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(product);
          }}
          className="absolute top-3 right-3 p-2 rounded-lg bg-white/90 hover:bg-white text-[#252B29] shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-150 backdrop-blur-xs"
          title="Schnellansicht"
          aria-label="Schnellansicht öffnen"
        >
          <Eye className="w-4 h-4 text-[#173F35]" />
        </button>

        {product.originalPrice && (
          <span className="absolute top-3 left-3 bg-[#173F35] text-white text-[11px] font-bold px-2 py-0.5 rounded-md">
            Angebot
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand & Category line (Clean unboxed text) */}
          <div className="flex items-center gap-1.5 text-xs text-[#69716C] mb-1.5">
            <span className="font-semibold text-[#4F7D62]">{product.brand}</span>
            <span aria-hidden="true">·</span>
            <span>{product.category}</span>
            {product.weightOrVolume && (
              <>
                <span aria-hidden="true">·</span>
                <span>{product.weightOrVolume}</span>
              </>
            )}
          </div>

          {/* Product Name */}
          <h3 className="text-sm sm:text-base font-semibold text-[#252B29] group-hover:text-[#173F35] transition-colors leading-snug line-clamp-2 mb-2">
            {product.name}
          </h3>

          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-1 text-xs text-[#69716C] mb-3">
              <div className="flex items-center text-amber-500">
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
              <span className="font-medium text-[#252B29]">{product.rating.toFixed(1)}</span>
              {product.reviewsCount && (
                <span className="text-[#69716C]">({product.reviewsCount})</span>
              )}
            </div>
          )}
        </div>

        {/* Price & Cart Action */}
        <div className="pt-3 border-t border-[#E5E9E5] mt-2">
          {/* Availability */}
          <div className="flex items-center gap-1.5 text-[11px] text-[#4F7D62] mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F7D62]" />
            <span>Auf Lager · Sofort lieferbar</span>
          </div>

          <div className="flex items-center justify-between gap-2">
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold text-[#173F35] tabular-nums">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-[#69716C] line-through tabular-nums -mt-0.5">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            <button
              onClick={handleAdd}
              disabled={justAdded}
              className={`px-3 sm:px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                justAdded
                  ? 'bg-[#173F35] text-white'
                  : 'bg-[#F7F8F5] hover:bg-[#DCEBE8] text-[#173F35] border border-[#E5E9E5]'
              }`}
              aria-label={`${product.name} in den Warenkorb legen`}
            >
              {justAdded ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Hinzugefügt</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Kaufen</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
