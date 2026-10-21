import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryOverview } from './components/CategoryOverview';
import { FeaturedProducts } from './components/FeaturedProducts';
import { KoiFoodSection } from './components/KoiFoodSection';
import { PondCareSection } from './components/PondCareSection';
import { PondTechSection } from './components/PondTechSection';
import { AboutUsSection } from './components/AboutUsSection';
import { PondGuideSection } from './components/PondGuideSection';
import { TrustAndServiceSection } from './components/TrustAndServiceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { SearchModal } from './components/SearchModal';
import { CookieBanner } from './components/CookieBanner';
import { LegalModal } from './components/LegalModal';
import { PRODUCTS } from './data/products';
import { Product, CartItem } from './types';
import { scrollToSection } from './utils/format';

const CART_STORAGE_KEY = 'gtd_cart_items';

export default function App() {
  const [products] = useState<Product[]>(PRODUCTS);
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Navigation and Filter states
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCookieSettingsOpen, setIsCookieSettingsOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'impressum' | 'datenschutz' | 'agb' | 'versand' | null>(null);

  // Persist cart
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch {
      // storage blocked
    }
  }, [cartItems]);

  // Cart operations
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleOrderCompleted = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleCategoryCardSelect = (catId: string) => {
    const categoryMap: Record<string, string> = {
      koifutter: 'Koifutter',
      teichpflege: 'Teichpflege',
      teichtechnik: 'Teichtechnik',
      teichfilter: 'Teichtechnik',
      teichpumpen: 'Teichtechnik',
      teichzubehoer: 'Teichzubehör',
    };
    setSelectedCategory(categoryMap[catId] || 'Alle');
  };

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#F7F8F5] text-[#252B29] selection:bg-[#DCEBE8] selection:text-[#173F35]">
      {/* SECTION 1 & 2: ANNOUNCEMENT BAR & STICKY HEADER */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onSelectCategoryFilter={(cat) => setSelectedCategory(cat)}
      />

      <main className="flex-1">
        {/* SECTION 3: HERO SECTION */}
        <Hero
          onExploreProducts={() => {
            setSelectedCategory('Alle');
            setSearchQuery('');
          }}
        />

        {/* SECTION 4: CATEGORY OVERVIEW */}
        <CategoryOverview onSelectCategory={handleCategoryCardSelect} />

        {/* SECTION 5: FEATURED PRODUCTS (id="produkte") */}
        <FeaturedProducts
          products={products}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onAddToCart={handleAddToCart}
          onQuickView={setSelectedProduct}
        />

        {/* SECTION 6: KOIFUTTER (id="koifutter") */}
        <KoiFoodSection
          products={products}
          onAddToCart={handleAddToCart}
          onQuickView={setSelectedProduct}
          onViewAllKoi={() => {
            setSelectedCategory('Koifutter');
            setSearchQuery('');
          }}
        />

        {/* SECTION 7: TEICHPFLEGE (id="teichpflege") */}
        <PondCareSection
          products={products}
          onAddToCart={handleAddToCart}
          onQuickView={setSelectedProduct}
          onViewAllCare={() => {
            setSelectedCategory('Teichpflege');
            setSearchQuery('');
          }}
        />

        {/* SECTION 8: TEICHTECHNIK (id="teichtechnik") */}
        <PondTechSection
          products={products}
          onAddToCart={handleAddToCart}
          onQuickView={setSelectedProduct}
          onViewAllTech={() => {
            setSelectedCategory('Teichtechnik');
            setSearchQuery('');
          }}
        />

        {/* SECTION 9: ABOUT US (id="ueber-uns") */}
        <AboutUsSection />

        {/* SECTION 10: GARDEN POND GUIDE (id="ratgeber") */}
        <PondGuideSection />

        {/* SECTION 11: TRUST AND SERVICE */}
        <TrustAndServiceSection />

        {/* SECTION 12: CONTACT (id="kontakt") */}
        <ContactSection />
      </main>

      {/* SECTION 13: FOOTER */}
      <Footer
        onOpenCookies={() => setIsCookieSettingsOpen(true)}
        onOpenLegalModal={(type) => setLegalModalType(type)}
        onSelectCategoryFilter={(cat) => setSelectedCategory(cat)}
      />

      {/* Interactive Drawers & Modals */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onOpenCheckout={() => setIsCheckoutOpen(true)}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onOrderCompleted={handleOrderCompleted}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={products}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      <CookieBanner
        isSettingsOpen={isCookieSettingsOpen}
        onCloseSettings={() => setIsCookieSettingsOpen(false)}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
