import React, { useState, useEffect } from 'react';
import { Cookie, X, Check, Shield } from 'lucide-react';
import { CookieConsent } from '../types';

interface CookieBannerProps {
  isSettingsOpen: boolean;
  onCloseSettings: () => void;
}

const STORAGE_KEY = 'gtd_cookie_consent';

export const CookieBanner: React.FC<CookieBannerProps> = ({
  isSettingsOpen,
  onCloseSettings,
}) => {
  const [consent, setConsent] = useState<CookieConsent>({
    essential: true,
    analytics: false,
    functional: false,
    marketing: false,
    hasAnswered: false,
  });

  const [showBanner, setShowBanner] = useState(false);
  const [modalSettingsOpen, setModalSettingsOpen] = useState(false);

  // Sync external triggers (e.g. from footer)
  useEffect(() => {
    if (isSettingsOpen) {
      setModalSettingsOpen(true);
    }
  }, [isSettingsOpen]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setConsent(JSON.parse(stored));
      } else {
        // Show banner after brief delay
        const timer = setTimeout(() => setShowBanner(true), 1000);
        return () => clearTimeout(timer);
      }
    } catch {
      setShowBanner(true);
    }
  }, []);

  const saveConsent = (updated: CookieConsent) => {
    setConsent(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // storage blocked fallback
    }
    setShowBanner(false);
    setModalSettingsOpen(false);
    onCloseSettings();
  };

  const handleAcceptAll = () => {
    saveConsent({
      essential: true,
      analytics: true,
      functional: true,
      marketing: true,
      hasAnswered: true,
    });
  };

  const handleRejectNonEssential = () => {
    saveConsent({
      essential: true,
      analytics: false,
      functional: false,
      marketing: false,
      hasAnswered: true,
    });
  };

  const handleSaveCustom = () => {
    saveConsent({
      ...consent,
      hasAnswered: true,
    });
  };

  return (
    <>
      {/* Cookie Banner (Bottom fixed bar) */}
      {showBanner && !consent.hasAnswered && !modalSettingsOpen && (
        <div className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 bg-white/95 backdrop-blur-md border-t border-[#E5E9E5] shadow-2xl animate-in slide-in-from-bottom-5 duration-300">
          <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-3.5 max-w-3xl">
              <div className="p-2.5 rounded-xl bg-[#DCEBE8] text-[#173F35] shrink-0 mt-0.5">
                <Cookie className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm text-[#252B29]">
                <h4 className="font-bold text-[#173F35] mb-1">
                  Privatsphäre- & Cookie-Einstellungen auf Gartenteichdiscount.de
                </h4>
                <p className="text-[#69716C] leading-relaxed">
                  Wir nutzen notwendige Cookies, um unseren Online-Shop funktionsfähig zu halten (Warenkorb & Session). Zusätzliche Cookies für Reichweitenmessung und Komfort helfen uns, das Einkaufserlebnis kontinuierlich zu verbessern.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 shrink-0 w-full md:w-auto justify-end">
              <button
                onClick={() => setModalSettingsOpen(true)}
                className="px-4 py-2.5 rounded-xl border border-[#E5E9E5] bg-[#F7F8F5] text-xs font-semibold text-[#252B29] hover:bg-[#E5E9E5] transition-colors"
              >
                Einstellungen
              </button>
              <button
                onClick={handleRejectNonEssential}
                className="px-4 py-2.5 rounded-xl border border-[#173F35] text-xs font-semibold text-[#173F35] hover:bg-[#F7F8F5] transition-colors"
              >
                Nur essenzielle
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-5 py-2.5 rounded-xl bg-[#173F35] hover:bg-[#4F7D62] text-xs font-semibold text-white shadow-xs transition-colors"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Detailed Cookie Settings Modal */}
      {modalSettingsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E5E9E5] relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setModalSettingsOpen(false);
                onCloseSettings();
              }}
              className="absolute top-5 right-5 p-2 rounded-xl text-[#69716C] hover:text-[#252B29] hover:bg-[#F7F8F5] transition-colors"
              aria-label="Schließen"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5 mb-3">
              <div className="p-2 rounded-xl bg-[#DCEBE8] text-[#173F35]">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#173F35]">
                Cookie-Einstellungen anpassen
              </h3>
            </div>

            <p className="text-xs text-[#69716C] mb-6 leading-relaxed">
              Hier kannst du festlegen, welche Kategorien von Cookies du für deinen Besuch auf Gartenteichdiscount.de erlauben möchtest.
            </p>

            <div className="space-y-4 mb-6">
              {/* Essential */}
              <div className="p-4 rounded-xl bg-[#F7F8F5] border border-[#E5E9E5] flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[#173F35]">1. Technisch essenziell</span>
                    <span className="text-[10px] uppercase font-bold text-[#4F7D62] bg-[#DCEBE8] px-2 py-0.5 rounded-sm">
                      Immer aktiv
                    </span>
                  </div>
                  <p className="text-xs text-[#69716C] mt-1 leading-relaxed">
                    Unverzichtbar für Kernfunktionen wie den Warenkorb, die Session-Verwaltung und die Sicherheitsrichtlinien.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="mt-1 h-4 w-4 rounded-sm text-[#173F35] cursor-not-allowed opacity-70"
                />
              </div>

              {/* Functional */}
              <div className="p-4 rounded-xl bg-white border border-[#E5E9E5] flex items-start justify-between gap-4">
                <div>
                  <span className="text-sm font-bold text-[#252B29]">2. Komfort & Funktionalität</span>
                  <p className="text-xs text-[#69716C] mt-1 leading-relaxed">
                    Ermöglicht das Merken deiner Filtereinstellungen, Suchbegriffe und personalisierten Teichempfehlungen.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={consent.functional}
                  onChange={(e) =>
                    setConsent({ ...consent, functional: e.target.checked })
                  }
                  className="mt-1 h-4 w-4 rounded-sm text-[#173F35] cursor-pointer"
                />
              </div>

              {/* Analytics */}
              <div className="p-4 rounded-xl bg-white border border-[#E5E9E5] flex items-start justify-between gap-4">
                <div>
                  <span className="text-sm font-bold text-[#252B29]">3. Statistische Analyse</span>
                  <p className="text-xs text-[#69716C] mt-1 leading-relaxed">
                    Hilft uns in anonymisierter Form zu verstehen, welche Teichartikel besonders häufig gesucht werden.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={consent.analytics}
                  onChange={(e) =>
                    setConsent({ ...consent, analytics: e.target.checked })
                  }
                  className="mt-1 h-4 w-4 rounded-sm text-[#173F35] cursor-pointer"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-[#E5E9E5]">
              <button
                onClick={handleRejectNonEssential}
                className="flex-1 py-2.5 rounded-xl border border-[#E5E9E5] bg-[#F7F8F5] text-xs font-semibold text-[#252B29] hover:bg-[#E5E9E5] transition-colors"
              >
                Nur essenzielle
              </button>
              <button
                onClick={handleSaveCustom}
                className="flex-1 py-2.5 rounded-xl bg-[#173F35] hover:bg-[#4F7D62] text-xs font-semibold text-white transition-colors"
              >
                Auswahl speichern
              </button>
              <button
                onClick={handleAcceptAll}
                className="flex-1 py-2.5 rounded-xl bg-[#4F7D62] hover:bg-[#3D664F] text-xs font-semibold text-white transition-colors"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
