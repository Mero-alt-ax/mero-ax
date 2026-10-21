import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, AlertCircle, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';
import { formatPrice } from '../utils/format';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderCompleted: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderCompleted,
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: 'Markus Weber',
    email: 'markus.weber@example.de',
    street: 'Teichweg 14',
    city: 'Dortmund',
    zip: '44137',
    payment: 'paypal',
  });

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const shippingCost = subtotal >= 49.0 ? 0 : 4.95;
  const grandTotal = subtotal + shippingCost;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const handleFinish = () => {
    onOrderCompleted();
    onClose();
    setStep('form');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-[#E5E9E5] relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-[#69716C] hover:text-[#252B29] hover:bg-[#F7F8F5] transition-colors"
          aria-label="Schließen"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Demo Indicator Note */}
        <div className="mb-5 p-3 rounded-xl bg-[#DCEBE8]/50 border border-[#DCEBE8] flex items-center gap-2.5 text-xs text-[#173F35]">
          <AlertCircle className="w-4 h-4 shrink-0 text-[#4F7D62]" />
          <span>
            <strong>Demo-Modus:</strong> Dies ist eine sichere Checkout-Simulation für Gartenteichdiscount.de. Es werden keine echten Zahlungen abgebucht.
          </span>
        </div>

        {step === 'form' ? (
          <form onSubmit={handlePlaceOrder}>
            <h3 className="text-xl font-bold text-[#173F35] mb-1">
              Bestellung abschließen
            </h3>
            <p className="text-xs text-[#69716C] mb-6">
              Überprüfe deine Lieferadresse und wähle deine bevorzugte Zahlungsart.
            </p>

            {/* Address fields */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-xs font-semibold text-[#252B29] mb-1">
                  Vollständiger Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E9E5] bg-[#F7F8F5] text-sm focus:bg-white focus:outline-hidden focus:border-[#4F7D62]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#252B29] mb-1">
                  E-Mail-Adresse für Bestellbestätigung *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E9E5] bg-[#F7F8F5] text-sm focus:bg-white focus:outline-hidden focus:border-[#4F7D62]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#252B29] mb-1">
                  Straße und Hausnummer *
                </label>
                <input
                  type="text"
                  required
                  value={formData.street}
                  onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E9E5] bg-[#F7F8F5] text-sm focus:bg-white focus:outline-hidden focus:border-[#4F7D62]"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#252B29] mb-1">
                    PLZ *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.zip}
                    onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E9E5] bg-[#F7F8F5] text-sm focus:bg-white focus:outline-hidden focus:border-[#4F7D62]"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-semibold text-[#252B29] mb-1">
                    Stadt *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E9E5] bg-[#F7F8F5] text-sm focus:bg-white focus:outline-hidden focus:border-[#4F7D62]"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="mb-6">
              <label className="block text-xs font-semibold text-[#252B29] mb-2">
                Zahlungsart wählen
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, payment: 'paypal' })}
                  className={`p-3 rounded-xl border text-xs font-semibold text-center transition-colors ${
                    formData.payment === 'paypal'
                      ? 'border-[#173F35] bg-[#DCEBE8]/40 text-[#173F35]'
                      : 'border-[#E5E9E5] bg-[#F7F8F5] text-[#252B29]'
                  }`}
                >
                  PayPal
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, payment: 'klarna' })}
                  className={`p-3 rounded-xl border text-xs font-semibold text-center transition-colors ${
                    formData.payment === 'klarna'
                      ? 'border-[#173F35] bg-[#DCEBE8]/40 text-[#173F35]'
                      : 'border-[#E5E9E5] bg-[#F7F8F5] text-[#252B29]'
                  }`}
                >
                  Klarna Rechnung
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, payment: 'card' })}
                  className={`p-3 rounded-xl border text-xs font-semibold text-center transition-colors ${
                    formData.payment === 'card'
                      ? 'border-[#173F35] bg-[#DCEBE8]/40 text-[#173F35]'
                      : 'border-[#E5E9E5] bg-[#F7F8F5] text-[#252B29]'
                  }`}
                >
                  Kreditkarte
                </button>
              </div>
            </div>

            {/* Order Summary box */}
            <div className="p-4 rounded-xl bg-[#F7F8F5] border border-[#E5E9E5] mb-6 text-xs text-[#69716C] space-y-1">
              <div className="flex justify-between">
                <span>Warenwert ({items.length} Positionen):</span>
                <span className="font-semibold text-[#252B29] tabular-nums">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Versand DHL/DPD:</span>
                <span className="font-semibold text-[#252B29] tabular-nums">
                  {shippingCost === 0 ? 'Kostenlos' : formatPrice(shippingCost)}
                </span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#173F35] pt-2 border-t border-[#E5E9E5]">
                <span>Gesamtbetrag (inkl. MwSt.):</span>
                <span className="tabular-nums">{formatPrice(grandTotal)}</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#173F35] hover:bg-[#4F7D62] text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Jetzt kostenpflichtig bestellen (Demo)</span>
            </button>
          </form>
        ) : (
          /* Order Confirmation View */
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#DCEBE8] text-[#173F35] flex items-center justify-center mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-xs font-bold uppercase tracking-wider text-[#4F7D62] block mb-1">
              Demo-Auftrag Bestätigt
            </span>
            <h3 className="text-2xl font-bold text-[#173F35] mb-2">
              Vielen Dank für deine Bestellung!
            </h3>
            <p className="text-xs sm:text-sm text-[#69716C] max-w-md mb-6 leading-relaxed">
              Deine Demo-Bestellung <strong>#GTD-84291</strong> wurde erfolgreich erfasst. Eine Bestätigung wurde an <em>{formData.email}</em> gesendet.
            </p>

            <div className="w-full text-left p-4 rounded-xl bg-[#F7F8F5] border border-[#E5E9E5] text-xs text-[#252B29] mb-6 space-y-2">
              <div className="font-bold text-[#173F35] border-b border-[#E5E9E5] pb-2">
                Lieferadresse:
              </div>
              <p>{formData.name}</p>
              <p>{formData.street}</p>
              <p>{formData.zip} {formData.city}</p>
              <div className="pt-2 border-t border-[#E5E9E5] flex justify-between font-bold text-[#173F35]">
                <span>Gesamtsumme bezahlt:</span>
                <span className="tabular-nums">{formatPrice(grandTotal)}</span>
              </div>
            </div>

            <button
              onClick={handleFinish}
              className="px-6 py-3 rounded-xl bg-[#173F35] text-white text-xs font-semibold hover:bg-[#4F7D62] transition-colors"
            >
              Zurück zum Shop & Warenkorb leeren
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
