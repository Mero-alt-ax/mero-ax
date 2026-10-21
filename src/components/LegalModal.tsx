import React from 'react';
import { X, ShieldCheck, Truck, Scale, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'impressum' | 'datenschutz' | 'agb' | 'versand' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-[#E5E9E5] relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-[#69716C] hover:text-[#252B29] hover:bg-[#F7F8F5] transition-colors"
          aria-label="Schließen"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'impressum' && (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#4F7D62] uppercase tracking-wider mb-2">
              <Scale className="w-4 h-4" />
              <span>Gesetzliche Anbieterkennzeichnung</span>
            </div>
            <h2 className="text-2xl font-bold text-[#173F35] mb-6">
              Impressum
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-[#252B29] leading-relaxed">
              <div>
                <strong className="block text-[#173F35] text-sm">Angaben gemäß § 5 TMG:</strong>
                <p>Gartenteichdiscount.de — Spezialhandel für Gartenteich- und Koibedarf</p>
                <p>Logistik- und Beratungszentrum Deutschland</p>
              </div>

              <div>
                <strong className="block text-[#173F35] text-sm">Kontakt:</strong>
                <p>Telefon: 02306 / 9413000</p>
                <p>E-Mail: kundenservice@gartenteichdiscount.de</p>
                <p>Erreichbarkeit: Montag bis Freitag von 09:00 bis 17:00 Uhr</p>
              </div>

              <div>
                <strong className="block text-[#173F35] text-sm">Umsatzsteuer:</strong>
                <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE 294821039</p>
              </div>

              <div>
                <strong className="block text-[#173F35] text-sm">Verbraucherstreitbeilegung:</strong>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit. Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>
          </div>
        )}

        {type === 'datenschutz' && (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#4F7D62] uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>DSGVO-Transparenz</span>
            </div>
            <h2 className="text-2xl font-bold text-[#173F35] mb-6">
              Datenschutzerklärung
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-[#252B29] leading-relaxed">
              <p>
                Der Schutz deiner persönlichen Daten hat für uns höchste Priorität. Nachfolgend informieren wir dich über die Erhebung und Verarbeitung deiner personenbezogenen Daten bei Nutzung unseres Onlineshops.
              </p>
              <div>
                <strong className="block text-[#173F35] text-sm">1. Verantwortliche Stelle:</strong>
                <p>Gartenteichdiscount.de, vertreten durch die Geschäftsführung.</p>
              </div>
              <div>
                <strong className="block text-[#173F35] text-sm">2. Datenerfassung bei Bestellungen:</strong>
                <p>
                  Zur Durchführung von Kaufverträgen und zur Auslieferung von Waren über Paketdienste (DHL/DPD) erheben wir Name, Anschrift und E-Mail-Adresse. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
                </p>
              </div>
              <div>
                <strong className="block text-[#173F35] text-sm">3. SSL-Verschlüsselung:</strong>
                <p>
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine moderne TLS/SSL-Verschlüsselung.
                </p>
              </div>
            </div>
          </div>
        )}

        {type === 'agb' && (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#4F7D62] uppercase tracking-wider mb-2">
              <FileText className="w-4 h-4" />
              <span>Vertragsbedingungen</span>
            </div>
            <h2 className="text-2xl font-bold text-[#173F35] mb-6">
              Allgemeine Geschäftsbedingungen
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-[#252B29] leading-relaxed">
              <div>
                <strong className="block text-[#173F35] text-sm">§ 1 Geltungsbereich</strong>
                <p>
                  Für alle Lieferungen von Gartenteichdiscount.de an Verbraucher und Unternehmer gelten diese Allgemeinen Geschäftsbedingungen.
                </p>
              </div>
              <div>
                <strong className="block text-[#173F35] text-sm">§ 2 Vertragsschluss</strong>
                <p>
                  Die Präsentation der Produkte im Online-Shop stellt kein rechtlich bindendes Angebot, sondern einen unverbindlichen Online-Katalog dar.
                </p>
              </div>
              <div>
                <strong className="block text-[#173F35] text-sm">§ 3 Widerrufsrecht & 30 Tage Rückgabe</strong>
                <p>
                  Verbrauchern steht ein gesetzliches 14-tägiges Widerrufsrecht zu. Gartenteichdiscount gewährt freiwillig ein erweitertes Rückgaberecht von insgesamt 30 Tagen auf originalverpackte Ware.
                </p>
              </div>
            </div>
          </div>
        )}

        {type === 'versand' && (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#4F7D62] uppercase tracking-wider mb-2">
              <Truck className="w-4 h-4" />
              <span>Lieferung & Zahlung</span>
            </div>
            <h2 className="text-2xl font-bold text-[#173F35] mb-6">
              Versand- & Zahlungsinformationen
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-[#252B29] leading-relaxed">
              <div className="p-4 rounded-xl bg-[#F7F8F5] border border-[#E5E9E5]">
                <strong className="block text-[#173F35] text-sm mb-1">Versandkosten innerhalb Deutschlands:</strong>
                <ul className="space-y-1 text-xs">
                  <li>• Ab einem Bestellwert von <strong>49,00 €</strong>: <strong>Kostenloser Versand</strong></li>
                  <li>• Unter 49,00 € Bestellwert: <strong>4,95 € Pauschale</strong></li>
                  <li>• Versanddienstleister: DHL und DPD Paketversand</li>
                  <li>• Lieferzeit: 1 bis 3 Werktage ab Lager</li>
                </ul>
              </div>

              <div>
                <strong className="block text-[#173F35] text-sm mb-1">Zahlungsmöglichkeiten:</strong>
                <p>
                  Wir akzeptieren PayPal, Klarna Rechnungskauf, Kreditkarte (Visa, Mastercard) sowie Vorkasse per Banküberweisung.
                </p>
              </div>

              <div>
                <strong className="block text-[#173F35] text-sm mb-1">Transportschäden:</strong>
                <p>
                  Sollte ein Paket während des Transports beschädigt werden, bitten wir um kurze Rückmeldung an unseren Kundenservice, damit wir umgehend kostenfreien Ersatz versenden können.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-[#E5E9E5] text-right">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#173F35] text-white text-xs font-semibold hover:bg-[#4F7D62] transition-colors"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
};
