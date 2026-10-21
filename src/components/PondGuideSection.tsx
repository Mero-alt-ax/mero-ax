import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, X } from 'lucide-react';
import { GUIDE_ARTICLES } from '../data/products';
import { GuideArticle } from '../types';

export const PondGuideSection: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<GuideArticle | null>(null);

  return (
    <section id="ratgeber" className="py-16 sm:py-24 bg-[#F7F8F5] border-b border-[#E5E9E5]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#4F7D62] block mb-2">
              Praxiswissen für Teichbesitzer
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#173F35]">
              Teich-Ratgeber & Fachwissen
            </h2>
            <p className="text-[#69716C] text-sm sm:text-base mt-2 max-w-xl">
              Praktische Anleitungen und Fachbeiträge für biologisches Gleichgewicht, klares Wasser und artgerechte Koi-Haltung.
            </p>
          </div>
          <div className="text-xs text-[#69716C] flex items-center gap-1.5 font-medium">
            <BookOpen className="w-4 h-4 text-[#4F7D62]" />
            <span>Kostenloses Fachwissen unserer Experten</span>
          </div>
        </div>

        {/* 4 Guide Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GUIDE_ARTICLES.map((article) => (
            <article
              key={article.id}
              onClick={() => setActiveArticle(article)}
              className="group bg-white rounded-[14px] border border-[#E5E9E5] p-6 sm:p-8 hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#69716C] mb-3">
                  <span className="font-semibold text-[#4F7D62]">{article.category}</span>
                  <span className="flex items-center gap-1 text-[11px]">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#173F35] group-hover:text-[#4F7D62] transition-colors mb-3 leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#69716C] leading-relaxed mb-6">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5E9E5] flex items-center justify-between">
                <span className="text-xs font-semibold text-[#173F35] group-hover:text-[#4F7D62] flex items-center gap-1.5 transition-colors">
                  <span>Vollständigen Beitrag lesen</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
                <span className="text-[11px] text-[#69716C]">{article.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Guide Article Reading Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-[#E5E9E5] relative">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-[#69716C] hover:text-[#252B29] hover:bg-[#F7F8F5] transition-colors"
              aria-label="Schließen"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs text-[#4F7D62] font-semibold uppercase tracking-wider mb-2">
              <span>{activeArticle.category}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#69716C] font-normal">{activeArticle.readTime}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#173F35] mb-4 pr-8">
              {activeArticle.title}
            </h3>

            <div className="text-xs text-[#69716C] mb-6 pb-4 border-b border-[#E5E9E5]">
              {activeArticle.date} · Verfasst von Gartenteichdiscount Fachteam
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#252B29] leading-relaxed mb-8">
              {activeArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-[#E5E9E5] flex items-center justify-between">
              <span className="text-xs text-[#69716C]">
                Gartenteichdiscount.de Ratgeber
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2.5 rounded-xl bg-[#173F35] text-white text-xs font-semibold hover:bg-[#4F7D62] transition-colors"
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
