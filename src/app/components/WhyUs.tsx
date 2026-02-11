import React from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const WhyUs = () => {
  const { t } = useLanguage();

  const stats = [
    { value: "300%", label: t('why_lead_growth') },
    { value: "50+", label: t('why_awards') },
    { value: "98/100", label: t('why_pagespeed') },
    { value: "10x", label: t('why_roi') },
  ];

  return (
    <section id="why-us" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-b border-slate-100 pb-12">
            {stats.map((stat, index) => (
                <div key={index} className="text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, type: "spring" }}
                        className="text-4xl md:text-5xl font-bold text-[#F73B20] mb-2"
                    >
                        {stat.value}
                    </motion.div>
                    <div className="text-slate-500 font-medium text-sm md:text-base uppercase tracking-wide">
                        {stat.label}
                    </div>
                </div>
            ))}
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto text-center relative">
            <div className="absolute top-0 left-0 text-9xl text-slate-100 font-serif -translate-y-1/2 translate-x-[-20%] z-0 select-none">
                "
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10"
            >
                <div className="flex justify-center gap-1 mb-8">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-6 h-6 fill-[#F73B20] text-[#F73B20]" />
                    ))}
                </div>
                <h3 className="text-2xl md:text-4xl font-medium text-slate-900 leading-snug mb-8">
                    {t('why_testimonial')}
                </h3>
                <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjcmVhdGl2ZSUyMG9mZmljZSUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3MDc5NTc5MXww&ixlib=rb-4.1.0&q=80&w=100" alt="Client" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-left">
                        <div className="font-bold text-slate-900">Alex Vane</div>
                        <div className="text-slate-500 text-sm">CEO, Lumina Fintech</div>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
