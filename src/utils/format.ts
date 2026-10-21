export const formatPrice = (price: number): string =>
  new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(price);

export const scrollToSection = (sectionId: string, event?: React.MouseEvent) => {
  if (event) {
    event.preventDefault();
  }
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Update hash without jump
    window.history.pushState(null, '', `#${sectionId}`);
  }
};
