import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Zap, TrendingUp, Layers, MousePointerClick } from "lucide-react";
import { cn } from "../../lib/utils";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white pt-20">
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-orange-100/50 blur-3xl opacity-60 mix-blend-multiply animate-blob" />
        <div className="absolute top-[-10%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-slate-100 blur-3xl opacity-60 mix-blend-multiply animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-orange-50/50 blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-4000" />
        
        {/* 3D Floating Elements (CSS only for performance) */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] w-16 h-16 rounded-full bg-gradient-to-br from-[#F73B20] to-orange-400 opacity-20 blur-sm hidden lg:block"
        />
        <motion.div 
          animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[30%] right-[10%] w-24 h-24 rounded-full bg-slate-900 opacity-5 blur-sm hidden lg:block"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-orange-50 text-[#F73B20] text-sm font-semibold tracking-wide uppercase mb-6 border border-orange-100">
            {t('hero_badge')}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
            {t('hero_title_1')} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F73B20] to-orange-500">
              {t('hero_title_2')}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            {t('hero_desc')}
          </p>
        </motion.div>

        {/* Convergence Pills */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 perspective-1000">
          {[
            { label: t('hero_pill_design'), icon: Layers, color: "bg-slate-50 border-slate-200" },
            { label: t('hero_pill_launch'), icon: Zap, color: "bg-slate-50 border-slate-200" },
            { label: t('hero_pill_grow'), icon: TrendingUp, color: "bg-slate-50 border-slate-200" },
            { label: t('hero_pill_convert'), icon: MousePointerClick, color: "bg-slate-900 text-white border-slate-900" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4 + (index * 0.1),
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -5, 
                scale: 1.05,
                zIndex: 10,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" 
              }}
              className={cn(
                "relative group flex items-center gap-3 px-6 py-4 md:py-5 border rounded-full shadow-sm cursor-pointer transition-all duration-300",
                "md:-ml-4 first:ml-0", // Negative margin for overlap effect
                item.color === "bg-slate-900 text-white border-slate-900" 
                  ? "bg-slate-900 text-white hover:bg-[#F73B20] hover:border-[#F73B20]" 
                  : "bg-white text-slate-600 hover:border-[#F73B20] hover:text-[#F73B20]"
              )}
            >
              <item.icon className={cn(
                "w-5 h-5 transition-colors",
                item.color.includes("text-white") ? "text-white" : "text-[#F73B20]"
              )} />
              <span className="font-semibold whitespace-nowrap">{item.label}</span>
              {index === 3 && (
                <div className="absolute inset-0 rounded-full ring-2 ring-[#F73B20] ring-offset-2 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6"
        >
            <button className="px-8 py-4 bg-[#F73B20] text-white rounded-full font-bold text-lg hover:bg-orange-700 transition-all hover:scale-105 shadow-lg shadow-orange-500/30 flex items-center gap-2">
                {t('hero_start')} <ArrowRight className="w-5 h-5" />
            </button>
            <button className="text-slate-500 font-medium hover:text-slate-900 transition-colors flex items-center gap-2">
                {t('hero_view_work')}
            </button>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400"
      >
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
