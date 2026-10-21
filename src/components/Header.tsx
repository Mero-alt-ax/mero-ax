import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, ChevronDown, Phone, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import { scrollToSection } from '../utils/format';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onSelectCategoryFilter?: (category: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onSelectCategoryFilter,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string, categoryFilter?: string) => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    if (categoryFilter && onSelectCategoryFilter) {
      onSelectCategoryFilter(categoryFilter);
    }
    scrollToSection(sectionId);
  };

  return (
    <header className="site-header w-full shadow-xs transition-all">
      {/* SECTION 1: ANNOUNCEMENT BAR */}
      <div className="bg-[#173F35] text-white text-xs py-2 px-4 border-b border-[#255246]">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <div className="flex items-center gap-4 text-[12px] font-medium tracking-wide">
            <span className="flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-[#DCEBE8]" />
              Kostenloser Versand ab 49 € innerhalb Deutschlands
            </span>
            <span className="hidden md:inline text-[#DCEBE8]/60">·</span>
            <span className="hidden md:flex items-center gap-1.5 text-white/90">
              <ShieldCheck className="w-3.5 h-3.5 text-[#DCEBE8]" />
              Schnelle Lieferung mit DHL & DPD
            </span>
          </div>
          <div className="flex items-center gap-4 text-[12px] text-white/90">
            <a
              href="tel:023069413000"
              className="hover:text-[#DCEBE8] transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-[#DCEBE8]" />
              Fachberatung: 02306 / 9413000
            </a>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="hidden sm:inline text-white/80">Mo–Fr: 09:00 – 17:00 Uhr</span>
          </div>
        </div>
      </div>

      {/* SECTION 2: MAIN STICKY BAR */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        {/* LEFT: Gartenteichdiscount Logo */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 text-[#173F35] group shrink-0"
          aria-label="Gartenteichdiscount.de Startseite"
        >
          <div className="w-10 h-10 rounded-xl bg-[#173F35] text-[#DCEBE8] flex items-center justify-center shadow-sm group-hover:bg-[#4F7D62] transition-colors">
            {/* Custom stylized koi / water lily pond mark */}
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" strokeOpacity="0.3" />
              <path d="M8 14c1.5 1.5 4 1.5 5.5 0l4.5-4.5c.5-.5.5-1.5 0-2s-1.5-.5-2 0l-4.5 4.5c-.8.8-2 .8-2.8 0L7 10" />
              <path d="M15 8c.5 1 .5 2 0 3" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-[#173F35] leading-none">
              Gartenteich<span className="text-[#4F7D62]">discount</span><span className="text-xs text-[#69716C]">.de</span>
            </span>
            <span className="text-[11px] text-[#69716C] tracking-wider uppercase font-medium mt-0.5">
              Alles für deinen Teich
            </span>
          </div>
        </a>

        {/* CENTER: Desktop Navigation with dropdown categories */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[14px] font-medium text-[#252B29]">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-3 py-2 rounded-lg hover:text-[#173F35] hover:bg-[#F7F8F5] transition-colors whitespace-nowrap"
          >
            Startseite
          </a>

          {/* PRODUKTE DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('produkte')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <a
              href="#produkte"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('produkte');
              }}
              className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1 whitespace-nowrap ${
                openDropdown === 'produkte'
                  ? 'text-[#173F35] bg-[#F7F8F5]'
                  : 'hover:text-[#173F35] hover:bg-[#F7F8F5]'
              }`}
            >
              Produkte
              <ChevronDown className="w-4 h-4 text-[#69716C]" />
            </a>

            {openDropdown === 'produkte' && (
              <div className="absolute left-0 top-full pt-2 w-64 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="bg-white rounded-xl shadow-xl border border-[#E5E9E5] py-2 overflow-hidden">
                  <button
                    onClick={() => handleNavClick('produkte', 'Alle')}
                    className="w-full text-left px-4 py-2 text-sm text-[#252B29] hover:bg-[#F7F8F5] hover:text-[#173F35] font-semibold flex items-center justify-between"
                  >
                    <span>Alle Produkte</span>
                    <span className="text-xs text-[#69716C] font-normal">Gesamtkatalog</span>
                  </button>
                  <div className="border-t border-[#E5E9E5] my-1" />
                  <button
                    onClick={() => handleNavClick('koifutter', 'Koifutter')}
                    className="w-full text-left px-4 py-2 text-sm text-[#252B29] hover:bg-[#F7F8F5] hover:text-[#173F35]"
                  >
                    Koifutter
                  </button>
                  <button
                    onClick={() => handleNavClick('teichpflege', 'Teichpflege')}
                    className="w-full text-left px-4 py-2 text-sm text-[#252B29] hover:bg-[#F7F8F5] hover:text-[#173F35]"
                  >
                    Teichpflege
                  </button>
                  <button
                    onClick={() => handleNavClick('teichtechnik', 'Teichtechnik')}
                    className="w-full text-left px-4 py-2 text-sm text-[#252B29] hover:bg-[#F7F8F5] hover:text-[#173F35]"
                  >
                    Teichfilter
                  </button>
                  <button
                    onClick={() => handleNavClick('teichtechnik', 'Teichtechnik')}
                    className="w-full text-left px-4 py-2 text-sm text-[#252B29] hover:bg-[#F7F8F5] hover:text-[#173F35]"
                  >
                    Teichpumpen
                  </button>
                  <button
                    onClick={() => handleNavClick('teichtechnik', 'Teichtechnik')}
                    className="w-full text-left px-4 py-2 text-sm text-[#252B29] hover:bg-[#F7F8F5] hover:text-[#173F35]"
                  >
                    Filteranlagen
                  </button>
                  <button
                    onClick={() => handleNavClick('produkte', 'Teichzubehör')}
                    className="w-full text-left px-4 py-2 text-sm text-[#252B29] hover:bg-[#F7F8F5] hover:text-[#173F35]"
                  >
                    Teichzubehör
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* TEICHPFLEGE DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('teichpflege')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <a
              href="#teichpflege"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('teichpflege', 'Teichpflege');
              }}
              className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1 whitespace-nowrap ${
                openDropdown === 'teichpflege'
                  ? 'text-[#173F35] bg-[#F7F8F5]'
                  : 'hover:text-[#173F35] hover:bg-[#F7F8F5]'
              }`}
            >
              Teichpflege
              <ChevronDown className="w-4 h-4 text-[#69716C]" />
            </a>

            {openDropdown === 'teichpflege' && (
              <div className="absolute left-0 top-full pt-2 w-56 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="bg-white rounded-xl shadow-xl border border-[#E5E9E5] py-2 overflow-hidden">
                  <button
                    onClick={() => handleNavClick('teichpflege', 'Teichpflege')}
                    className="w-full text-left px-4 py-2 text-sm text-[#252B29] hover:bg-[#F7F8F5] hover:text-[#173F35]"
                  >
                    Wasserpflege
                  </button>
                  <button
                    onClick={() => handleNavClick('teichpflege', 'Teichpflege')}
                    className="w-full text-left px-4 py-2 text-sm text-[#252B29] hover:bg-[#F7F8F5] hover:text-[#173F35]"
                  >
                    Algenbekämpfung
                  </button>
                  <button
                    onClick={() => handleNavClick('teichpflege', 'Teichpflege')}
                    className="w-full text-left px-4 py-2 text-sm text-[#252B29] hover:bg-[#F7F8F5] hover:text-[#173F35]"
                  >
                    Wasseraufbereitung
                  </button>
                  <button
                    onClick={() => handleNavClick('teichpflege', 'Teichpflege')}
                    className="w-full text-left px-4 py-2 text-sm text-[#252B29] hover:bg-[#F7F8F5] hover:text-[#173F35]"
                  >
                    Reinigungsprodukte
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* KOIFUTTER LINK */}
          <a
            href="#koifutter"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('koifutter', 'Koifutter');
            }}
            className="px-3 py-2 rounded-lg hover:text-[#173F35] hover:bg-[#F7F8F5] transition-colors whitespace-nowrap"
          >
            Koifutter
          </a>

          {/* TEICHTECHNIK DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('teichtechnik')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <a
              href="#teichtechnik"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('teichtechnik', 'Teichtechnik');
              }}
              className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1 whitespace-nowrap ${
                openDropdown === 'teichtechnik'
                  ? 'text-[#173F35] bg-[#F7F8F5]'
                  : 'hover:text-[#173F35] hover:bg-[#F7F8F5]'
              }`}
            >
              Teichtechnik
              <ChevronDown className="w-4 h-4 text-[#69716C]" />
            </a>

            {openDropdown === 'teichtechnik' && (
              <div className="absolute left-0 top-full pt-2 w-56 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="bg-white rounded-xl shadow-xl border border-[#E5E9E5] py-2 overflow-hidden">
                  <button
                    onClick={() => handleNavClick('teichtechnik', 'Teichtechnik')}
                    className="w-full text-left px-4 py-2 text-sm text-[#252B29] hover:bg-[#F7F8F5] hover:text-[#173F35]"
                  >
                    Teichpumpen
                  </button>
                  <button
                    onClick={() => handleNavClick('teichtechnik', 'Teichtechnik')}
                    className="w-full text-left px-4 py-2 text-sm text-[#252B29] hover:bg-[#F7F8F5] hover:text-[#173F35]"
                  >
                    Filteranlagen
                  </button>
                  <button
                    onClick={() => handleNavClick('teichtechnik', 'Teichtechnik')}
                    className="w-full text-left px-4 py-2 text-sm text-[#252B29] hover:bg-[#F7F8F5] hover:text-[#173F35]"
                  >
                    UVC-Geräte
                  </button>
                  <button
                    onClick={() => handleNavClick('teichtechnik', 'Teichtechnik')}
                    className="w-full text-left px-4 py-2 text-sm text-[#252B29] hover:bg-[#F7F8F5] hover:text-[#173F35]"
                  >
                    Belüftung
                  </button>
                  <button
                    onClick={() => handleNavClick('teichtechnik', 'Teichtechnik')}
                    className="w-full text-left px-4 py-2 text-sm text-[#252B29] hover:bg-[#F7F8F5] hover:text-[#173F35]"
                  >
                    Wassertechnik
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* UEBER UNS */}
          <a
            href="#ueber-uns"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('ueber-uns');
            }}
            className="px-3 py-2 rounded-lg hover:text-[#173F35] hover:bg-[#F7F8F5] transition-colors whitespace-nowrap"
          >
            Über uns
          </a>

          {/* RATGEBER */}
          <a
            href="#ratgeber"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('ratgeber');
            }}
            className="px-3 py-2 rounded-lg hover:text-[#173F35] hover:bg-[#F7F8F5] transition-colors whitespace-nowrap"
          >
            Ratgeber
          </a>

          {/* KONTAKT */}
          <a
            href="#kontakt"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('kontakt');
            }}
            className="px-3 py-2 rounded-lg hover:text-[#173F35] hover:bg-[#F7F8F5] transition-colors whitespace-nowrap"
          >
            Kontakt
          </a>
        </nav>

        {/* RIGHT: Search + Cart + Mobile hamburger */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Quick Search Button */}
          <button
            onClick={onOpenSearch}
            className="p-2.5 rounded-xl text-[#252B29] hover:text-[#173F35] hover:bg-[#F7F8F5] transition-colors flex items-center gap-2 border border-transparent hover:border-[#E5E9E5]"
            title="Produkte suchen"
            aria-label="Produkte suchen"
          >
            <Search className="w-5 h-5 text-[#69716C]" />
            <span className="hidden md:inline text-xs text-[#69716C] font-normal pr-1">Suchen...</span>
          </button>

          {/* Shopping Cart Button */}
          <button
            onClick={onOpenCart}
            className="relative p-2.5 rounded-xl bg-[#F7F8F5] text-[#173F35] hover:bg-[#DCEBE8] transition-colors flex items-center gap-2 border border-[#E5E9E5]"
            aria-label={`Warenkorb mit ${cartCount} Artikeln`}
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="hidden sm:inline text-xs font-semibold">Warenkorb</span>
            {cartCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-[#173F35] text-white text-[11px] font-bold flex items-center justify-center -ml-0.5 animate-in zoom-in">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-[#252B29] hover:bg-[#F7F8F5] border border-[#E5E9E5] transition-colors"
            aria-label={mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E5E9E5] bg-white px-4 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-120px)] overflow-y-auto">
          <div className="flex flex-col gap-1">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left px-4 py-3 rounded-lg text-base font-semibold text-[#173F35] hover:bg-[#F7F8F5]"
            >
              Startseite
            </button>

            {/* Mobile Produkte */}
            <div className="border-t border-[#E5E9E5]/60 pt-2">
              <button
                onClick={() => handleNavClick('produkte', 'Alle')}
                className="w-full text-left px-4 py-2.5 rounded-lg text-base font-semibold text-[#252B29] hover:bg-[#F7F8F5]"
              >
                Produkte (Alle anzeigen)
              </button>
              <div className="pl-6 flex flex-col gap-1 text-sm text-[#69716C]">
                <button
                  onClick={() => handleNavClick('koifutter', 'Koifutter')}
                  className="text-left py-1.5 hover:text-[#173F35]"
                >
                  · Koifutter
                </button>
                <button
                  onClick={() => handleNavClick('teichpflege', 'Teichpflege')}
                  className="text-left py-1.5 hover:text-[#173F35]"
                >
                  · Teichpflege & Algen
                </button>
                <button
                  onClick={() => handleNavClick('teichtechnik', 'Teichtechnik')}
                  className="text-left py-1.5 hover:text-[#173F35]"
                >
                  · Teichpumpen & Filter
                </button>
                <button
                  onClick={() => handleNavClick('produkte', 'Teichzubehör')}
                  className="text-left py-1.5 hover:text-[#173F35]"
                >
                  · Teichzubehör & Netze
                </button>
              </div>
            </div>

            <button
              onClick={() => handleNavClick('teichpflege', 'Teichpflege')}
              className="text-left px-4 py-3 rounded-lg text-base font-medium text-[#252B29] hover:bg-[#F7F8F5]"
            >
              Teichpflege
            </button>

            <button
              onClick={() => handleNavClick('koifutter', 'Koifutter')}
              className="text-left px-4 py-3 rounded-lg text-base font-medium text-[#252B29] hover:bg-[#F7F8F5]"
            >
              Koifutter
            </button>

            <button
              onClick={() => handleNavClick('teichtechnik', 'Teichtechnik')}
              className="text-left px-4 py-3 rounded-lg text-base font-medium text-[#252B29] hover:bg-[#F7F8F5]"
            >
              Teichtechnik
            </button>

            <button
              onClick={() => handleNavClick('ueber-uns')}
              className="text-left px-4 py-3 rounded-lg text-base font-medium text-[#252B29] hover:bg-[#F7F8F5]"
            >
              Über uns
            </button>

            <button
              onClick={() => handleNavClick('ratgeber')}
              className="text-left px-4 py-3 rounded-lg text-base font-medium text-[#252B29] hover:bg-[#F7F8F5]"
            >
              Ratgeber
            </button>

            <button
              onClick={() => handleNavClick('kontakt')}
              className="text-left px-4 py-3 rounded-lg text-base font-medium text-[#252B29] hover:bg-[#F7F8F5]"
            >
              Kontakt
            </button>
          </div>

          {/* Mobile Service Contacts */}
          <div className="mt-6 pt-6 border-t border-[#E5E9E5] bg-[#F7F8F5] p-4 rounded-xl">
            <p className="text-xs font-semibold text-[#173F35] uppercase tracking-wider mb-2">
              Persönliche Fachberatung
            </p>
            <p className="text-sm font-bold text-[#252B29]">02306 / 9413000</p>
            <p className="text-xs text-[#69716C] mt-0.5">Mo–Fr: 09:00 – 17:00 Uhr</p>
            <p className="text-xs text-[#4F7D62] mt-2 font-medium">Kostenloser Versand ab 49 €</p>
          </div>
        </div>
      )}
    </header>
  );
};
