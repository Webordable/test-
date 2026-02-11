import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const CTA = () => {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute inset-0 bg-slate-900 clip-path-slant" style={{ clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0% 100%)" }} />
        
        <div className="container mx-auto px-6 relative z-10 text-center text-white pt-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                    {t('cta_title')}
                </h2>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12">
                    {t('cta_desc')}
                </p>
                
                <form className="max-w-md mx-auto flex flex-col gap-4">
                    <input 
                        type="email" 
                        placeholder={t('cta_placeholder')}
                        className="w-full px-6 py-4 rounded-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#F73B20] transition-colors"
                    />
                    <button className="w-full px-6 py-4 rounded-full bg-[#F73B20] text-white font-bold text-lg hover:bg-orange-600 transition-all hover:scale-105 shadow-lg shadow-orange-900/50 flex items-center justify-center gap-2">
                        {t('cta_button')} <ArrowRight className="w-5 h-5" />
                    </button>
                    <p className="text-sm text-slate-500 mt-2">
                        {t('cta_spam')}
                    </p>
                </form>
            </motion.div>
        </div>
    </section>
  );
};

export default CTA;
