import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { CartItem } from '../types';
import { formatPrice } from '../utils/format';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onOpenCheckout: () => void;
}

const FREE_SHIPPING_THRESHOLD = 49.0;
const STANDARD_SHIPPING_FEE = 4.95;

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onOpenCheckout,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const amountToFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const shippingCost = items.length === 0 ? 0 : isFreeShipping ? 0 : STANDARD_SHIPPING_FEE;
  const grandTotal = subtotal + shippingCost;
  const shippingProgress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          {/* Cart Header */}
          <div className="p-5 border-b border-[#E5E9E5] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#173F35]" />
              <h2 className="text-lg font-bold text-[#173F35]">
                Warenkorb ({items.reduce((s, i) => s + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#69716C] hover:text-[#252B29] hover:bg-[#F7F8F5] transition-colors"
              aria-label="Warenkorb schließen"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Meter */}
          <div className="px-5 py-3.5 bg-[#F7F8F5] border-b border-[#E5E9E5]">
            <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
              {isFreeShipping ? (
                <span className="text-[#4F7D62] font-semibold flex items-center gap-1">
                  <Truck className="w-4 h-4" /> Deine Bestellung ist versandkostenfrei!
                </span>
              ) : (
                <span className="text-[#252B29]">
                  Noch <strong className="text-[#173F35]">{formatPrice(amountToFreeShipping)}</strong> bis zum kostenlosen Versand
                </span>
              )}
              <span className="text-[#69716C] tabular-nums">
                {Math.round(shippingProgress)}%
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#E5E9E5] overflow-hidden">
              <div
                className="h-full bg-[#4F7D62] rounded-full transition-all duration-300"
                style={{ width: `${shippingProgress}%` }}
              />
            </div>
          </div>

          {/* Items List or Empty */}
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-[#E5E9E5]">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#F7F8F5] flex items-center justify-center text-[#69716C] mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-[#173F35] mb-1">
                  Dein Warenkorb ist leer
                </h3>
                <p className="text-xs text-[#69716C] max-w-xs mb-6">
                  Stöbere durch unsere Produktwelten für Koifutter, Wasserpflege und Teichtechnik.
                </p>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-[#173F35] text-white text-xs font-semibold hover:bg-[#4F7D62] transition-colors"
                >
                  Jetzt einkaufen
                </button>
              </div>
            ) : (
              items.map(({ product, quantity }) => (
                <div key={product.id} className="py-4 flex gap-4 items-start">
                  {/* Thumbnail */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-lg border border-[#E5E9E5] bg-[#F7F8F5] shrink-0"
                    referrerPolicy="no-referrer"
                  />

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-semibold text-[#4F7D62] block">
                      {product.brand}
                    </span>
                    <h4 className="text-xs sm:text-sm font-semibold text-[#252B29] truncate mb-1">
                      {product.name}
                    </h4>
                    <p className="text-xs font-bold text-[#173F35] tabular-nums mb-2">
                      {formatPrice(product.price)}
                    </p>

                    {/* Stepper & Trash */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-[#E5E9E5] rounded-lg bg-[#F7F8F5]">
                        <button
                          onClick={() => onUpdateQuantity(product.id, quantity - 1)}
                          className="p-1.5 text-[#69716C] hover:text-[#252B29] transition-colors"
                          aria-label="Menge verringern"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2.5 text-xs font-bold tabular-nums text-[#252B29]">
                          {quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                          className="p-1.5 text-[#69716C] hover:text-[#252B29] transition-colors"
                          aria-label="Menge erhöhen"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(product.id)}
                        className="text-[#69716C] hover:text-red-600 p-1 transition-colors"
                        title="Artikel entfernen"
                        aria-label={`${product.name} aus dem Warenkorb entfernen`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer */}
          {items.length > 0 && (
            <div className="p-5 border-t border-[#E5E9E5] bg-[#F7F8F5]">
              <div className="space-y-1.5 text-xs text-[#69716C] mb-3">
                <div className="flex justify-between">
                  <span>Zwischensumme:</span>
                  <span className="font-semibold text-[#252B29] tabular-nums">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Versandkosten (DHL / DPD):</span>
                  <span className="font-semibold text-[#252B29] tabular-nums">
                    {isFreeShipping ? 'Kostenlos' : formatPrice(shippingCost)}
                  </span>
                </div>
                <div className="flex justify-between text-sm sm:text-base font-bold text-[#173F35] pt-2 border-t border-[#E5E9E5]">
                  <span>Gesamtsumme inkl. MwSt.:</span>
                  <span className="tabular-nums">{formatPrice(grandTotal)}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenCheckout();
                }}
                className="w-full py-3.5 rounded-xl bg-[#173F35] hover:bg-[#4F7D62] text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Zur Kasse gehen</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-[#69716C]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4F7D62]" />
                <span>Sichere SSL-Verschlüsselung & 30 Tage Rückgaberecht</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
