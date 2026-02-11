import React from "react";
import { Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#F73B20] flex items-center justify-center text-white font-bold">W</div>
            <span className="text-xl font-bold text-white">Webordable</span>
          </div>
          
          <div className="flex gap-8 text-sm font-medium">
            <a href="#" className="hover:text-[#F73B20] transition-colors">{t('footer_privacy')}</a>
            <a href="#" className="hover:text-[#F73B20] transition-colors">{t('footer_terms')}</a>
            <a href="#" className="hover:text-[#F73B20] transition-colors">{t('footer_sitemap')}</a>
          </div>

          <div className="flex gap-4">
            {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#F73B20] hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                </a>
            ))}
          </div>
        </div>
        <div className="text-center mt-12 text-sm text-slate-600">
            {t('footer_rights')} <br />
            {t('footer_designed')} <span className="text-[#F73B20]">♥</span> {t('footer_in_future')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
