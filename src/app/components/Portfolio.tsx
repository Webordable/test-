import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Portfolio = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Lumina Fintech",
      category: t('port_lumina_cat'),
      image: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwZGFzaGJvYXJkJTIwdWklMjBkZXNpZ258ZW58MXx8fHwxNzcwODM2Mzc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Vogue Commerce",
      category: t('port_vogue_cat'),
      image: "https://images.unsplash.com/photo-1564518160120-94178fcdf5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZS1jb21tZXJjZSUyMHdlYnNpdGUlMjBkZXNpZ258ZW58MXx8fHwxNzcwODAxNzU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Estates Royale",
      category: t('port_estates_cat'),
      image: "https://images.unsplash.com/photo-1710883734891-93709398496d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZWFsJTIwZXN0YXRlJTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwxfHx8fDE3NzA4MzYzNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Neon Nexus",
      category: t('port_neon_cat'),
      image: "https://images.unsplash.com/photo-1752302112992-7d463feb9963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZGlnaXRhbCUyMG5ldHdvcmslMjBvcmFuZ2V8ZW58MXx8fHwxNzcwODM2MzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section id="work" className="py-24 bg-white text-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              {t('port_title')}
            </h2>
            <p className="text-lg text-slate-500">
              {t('port_desc')}
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-[#F73B20] font-bold border-b-2 border-[#F73B20] pb-1 hover:text-orange-700 hover:border-orange-700 transition-colors">
            {t('port_view_all')} <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative cursor-pointer"
            >
              <div className="overflow-hidden rounded-2xl aspect-[4/3] bg-slate-100 relative">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-300" />
                
                {/* Floating pill on hover */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-sm font-bold text-slate-900 flex items-center gap-2">
                        {t('port_view_case')} <ArrowUpRight className="w-4 h-4" />
                    </span>
                </div>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-[#F73B20] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 font-medium">{project.category}</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-[#F73B20] group-hover:text-white group-hover:border-[#F73B20] transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
            <button className="inline-flex items-center gap-2 text-[#F73B20] font-bold border-b-2 border-[#F73B20] pb-1 hover:text-orange-700 hover:border-orange-700 transition-colors">
                {t('port_view_all')} <ArrowUpRight className="w-5 h-5" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
