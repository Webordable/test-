import React from "react";
import { motion } from "motion/react";
import { Monitor, Zap, Target, BarChart, Rocket, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Capabilities = () => {
  const { t } = useLanguage();

  const capabilities = [
    {
      title: t('cap_visuals_title'),
      description: t('cap_visuals_desc'),
      icon: Monitor,
    },
    {
      title: t('cap_speed_title'),
      description: t('cap_speed_desc'),
      icon: Zap,
    },
    {
      title: t('cap_conversion_title'),
      description: t('cap_conversion_desc'),
      icon: Target,
    },
    {
      title: t('cap_seo_title'),
      description: t('cap_seo_desc'),
      icon: Globe,
    },
    {
      title: t('cap_growth_title'),
      description: t('cap_growth_desc'),
      icon: BarChart,
    },
    {
      title: t('cap_innovation_title'),
      description: t('cap_innovation_desc'),
      icon: Rocket,
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            {t('cap_title_main')} <br />
            <span className="text-[#F73B20]">{t('cap_title_sub')}</span>
          </h2>
          <p className="text-lg text-slate-600">
            {t('cap_desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
            >
              <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-[#F73B20] transition-colors duration-300">
                <cap.icon className="w-7 h-7 text-[#F73B20] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#F73B20] transition-colors">
                {cap.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
