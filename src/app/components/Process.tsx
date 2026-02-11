import React from "react";
import { motion } from "motion/react";
import { MessageSquare, Lightbulb, PenTool, Rocket } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Process = () => {
  const { t } = useLanguage();

  const steps = [
    {
      title: t('proc_step_1_title'),
      description: t('proc_step_1_desc'),
      icon: MessageSquare,
    },
    {
      title: t('proc_step_2_title'),
      description: t('proc_step_2_desc'),
      icon: Lightbulb,
    },
    {
      title: t('proc_step_3_title'),
      description: t('proc_step_3_desc'),
      icon: PenTool,
    },
    {
      title: t('proc_step_4_title'),
      description: t('proc_step_4_desc'),
      icon: Rocket,
    },
  ];

  return (
    <section id="process" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-[#F73B20] opacity-10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
            <span className="text-[#F73B20] font-bold tracking-widest uppercase text-sm">{t('proc_badge')}</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            {t('proc_title_1')} <span className="text-[#F73B20]">{t('proc_title_2')}</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-slate-800 md:-translate-x-1/2" />
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Side */}
                <div className="pl-20 md:pl-0 md:w-1/2 md:px-12 text-left md:text-right">
                    <div className={index % 2 === 0 ? "md:text-left" : "md:text-right"}>
                        <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-slate-400 leading-relaxed">{step.description}</p>
                    </div>
                </div>

                {/* Center Icon */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-slate-800 border-4 border-slate-900 z-10 group hover:bg-[#F73B20] hover:border-slate-800 transition-colors duration-500">
                  <step.icon className="w-6 h-6 text-white" />
                </div>

                {/* Spacer Side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
