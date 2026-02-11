import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, ChevronUp, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'et', label: 'Eesti', flag: '🇪🇪' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = languages.find(l => l.code === language) || languages[0];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-full right-0 mb-4 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden w-48"
          >
            <div className="py-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code as any);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-slate-50 transition-colors ${
                    language === lang.code ? 'bg-orange-50/50 text-[#F73B20]' : 'text-slate-600'
                  }`}
                >
                  <span className="text-xl">{lang.flag}</span>
                  <span className="font-medium flex-1">{lang.label}</span>
                  {language === lang.code && <Check className="w-4 h-4" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 bg-white pl-4 pr-5 py-3 rounded-full shadow-lg border border-slate-200 text-slate-900 hover:border-[#F73B20] transition-colors group"
      >
        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-lg group-hover:bg-[#F73B20] group-hover:text-white transition-colors">
          <Globe className="w-5 h-5" />
        </div>
        <div className="flex flex-col items-start">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Language</span>
            <span className="font-bold text-sm leading-none">{currentLang.label}</span>
        </div>
        {isOpen ? <ChevronDown className="w-4 h-4 text-slate-400" /> : <ChevronUp className="w-4 h-4 text-slate-400" />}
      </motion.button>
    </div>
  );
};

export default LanguageSwitcher;
