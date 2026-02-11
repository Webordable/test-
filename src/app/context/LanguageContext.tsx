import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'et' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    nav_services: "Services",
    nav_work: "Work",
    nav_process: "Process",
    nav_why_us: "Why Us",
    nav_talk: "Let's Talk",

    // Hero
    hero_badge: "Agency of the Future",
    hero_title_1: "Unify Your",
    hero_title_2: "Digital Future.",
    hero_desc: "We build websites that don't just exist — they dominate, convert, and scale your vision with pixel-perfect precision.",
    hero_pill_design: "Design Epic",
    hero_pill_launch: "Launch Lightning",
    hero_pill_grow: "Grow Explosive",
    hero_pill_convert: "Convert Relentless",
    hero_start: "Start Your Project",
    hero_view_work: "View Our Work",

    // Capabilities
    cap_title_main: "We Don't Just Build Websites.",
    cap_title_sub: "We Build Empires.",
    cap_desc: "Our capabilities span the entire digital spectrum, delivering award-winning quality at startup speed.",
    cap_visuals_title: "Next-Level Visuals",
    cap_visuals_desc: "Jaw-dropping aesthetics that captivate instantly. We design for the 2030s, not the 2020s.",
    cap_speed_title: "Blazing Speed",
    cap_speed_desc: "Lightning-fast load times. We optimize every byte for a buttery-smooth experience.",
    cap_conversion_title: "Conversion Engines",
    cap_conversion_desc: "Strategic layouts and psychological triggers that turn passive visitors into active leads.",
    cap_seo_title: "SEO Engineered",
    cap_seo_desc: "Built-in technical SEO that puts you on the map. We code for Google's love.",
    cap_growth_title: "Scalable Growth",
    cap_growth_desc: "Future-proof architecture that grows with your business. No limits, no rebuilding.",
    cap_innovation_title: "Innovation Labs",
    cap_innovation_desc: "We experiment with the latest tech—WebGL, 3D, AI—to keep you ahead of the curve.",

    // Portfolio
    port_title: "Selected Works",
    port_desc: "A curation of digital experiences that set new standards.",
    port_view_all: "View All Projects",
    port_view_case: "View Case Study",
    port_lumina_cat: "Banking / UI/UX",
    port_vogue_cat: "E-Commerce / Fashion",
    port_estates_cat: "Real Estate / Premium",
    port_neon_cat: "Web3 / Dark Mode",

    // Process
    proc_badge: "How We Win",
    proc_title_1: "From Concept to",
    proc_title_2: "Iconic",
    proc_step_1_title: "Consultation",
    proc_step_1_desc: "We deep dive into your vision, goals, and audience. No stone left unturned.",
    proc_step_2_title: "Strategic Blueprint",
    proc_step_2_desc: "We map out the user journey, wireframes, and technical architecture for success.",
    proc_step_3_title: "Masterpiece Build",
    proc_step_3_desc: "Our artisans design and code pixel-perfect interfaces with buttery-smooth motion.",
    proc_step_4_title: "Launch & Scale",
    proc_step_4_desc: "We deploy to the edge, optimize for speed, and hand you the keys to your empire.",

    // Why Us
    why_lead_growth: "Avg. Lead Growth",
    why_awards: "Design Awards",
    why_pagespeed: "PageSpeed Score",
    why_roi: "ROI First Year",
    why_testimonial: "\"Webordable didn't just redesign our site; they reimagined our entire digital identity. Our conversion rate tripled in the first month. Simply world-class.\"",

    // CTA
    cta_title: "Your Epic Digital Era Starts Here.",
    cta_desc: "Stop competing. Start dominating. Schedule your free strategy call and let's map out your victory.",
    cta_placeholder: "Enter your email",
    cta_button: "Get Instant Quote",
    cta_spam: "No spam. Unsubscribe anytime.",

    // Footer
    footer_privacy: "Privacy",
    footer_terms: "Terms",
    footer_sitemap: "Sitemap",
    footer_rights: "© 2026 Webordable Agency. All rights reserved.",
    footer_designed: "Designed with",
    footer_in_future: "in the Future."
  },
  et: {
    // Navbar
    nav_services: "Teenused",
    nav_work: "Tööd",
    nav_process: "Protsess",
    nav_why_us: "Miks Meie",
    nav_talk: "Räägime",

    // Hero
    hero_badge: "Tuleviku Agentuur",
    hero_title_1: "Ühendage Oma",
    hero_title_2: "Digitaalne Tulevik.",
    hero_desc: "Ehitame veebilehti, mis ei eksisteeri lihtsalt — need domineerivad, konverteerivad ja skaleerivad teie visiooni piksel-täpse täpsusega.",
    hero_pill_design: "Eepiline Disain",
    hero_pill_launch: "Välkkiire Käivitamine",
    hero_pill_grow: "Plahvatuslik Kasv",
    hero_pill_convert: "Järeleandmatu Konversioon",
    hero_start: "Alusta Oma Projekti",
    hero_view_work: "Vaata Meie Töid",

    // Capabilities
    cap_title_main: "Me Ei Ehita Lihtsalt Veebilehti.",
    cap_title_sub: "Me Ehitame Impeeriume.",
    cap_desc: "Meie võimekus katab kogu digitaalse spektri, pakkudes auhinnatud kvaliteeti idufirma kiirusel.",
    cap_visuals_title: "Järgmise Taseme Visuaalid",
    cap_visuals_desc: "Lõua lõunasse panev esteetika, mis köidab koheselt. Me disainime 2030ndateks, mitte 2020ndateks.",
    cap_speed_title: "Põletav Kiirus",
    cap_speed_desc: "Välkkiired laadimisajad. Optimeerime iga baiti siidiselt sujuvaks kogemuseks.",
    cap_conversion_title: "Konversioonimootorid",
    cap_conversion_desc: "Strateegilised paigutused ja psühholoogilised päästikud, mis muudavad passiivsed külastajad aktiivseteks klientideks.",
    cap_seo_title: "SEO Projekteeritud",
    cap_seo_desc: "Sisseehitatud tehniline SEO, mis paneb teid kaardile. Me kodeerime Google'i armastuse nimel.",
    cap_growth_title: "Skaleeritav Kasv",
    cap_growth_desc: "Tulevikukindel arhitektuur, mis kasvab koos teie ettevõttega. Ei mingeid piire, ei mingit ümberehitamist.",
    cap_innovation_title: "Innovatsioonilaborid",
    cap_innovation_desc: "Eksperimenteerime uusima tehnoloogiaga—WebGL, 3D, AI—et hoida teid kurvi ees.",

    // Portfolio
    port_title: "Valitud Tööd",
    port_desc: "Digitaalsete kogemuste kuraatorlus, mis seab uued standardid.",
    port_view_all: "Vaata Kõiki Projekte",
    port_view_case: "Vaata Juhtumiuuringut",
    port_lumina_cat: "Pangandus / UI/UX",
    port_vogue_cat: "E-kaubandus / Mood",
    port_estates_cat: "Kinnisvara / Premium",
    port_neon_cat: "Web3 / Tume Režiim",

    // Process
    proc_badge: "Kuidas Me Võidame",
    proc_title_1: "Kontseptsioonist",
    proc_title_2: "Ikoonini",
    proc_step_1_title: "Konsultatsioon",
    proc_step_1_desc: "Sukeldume sügavale teie visiooni, eesmärkidesse ja sihtrühma. Ühtegi kivi ei jäeta pööramata.",
    proc_step_2_title: "Strateegiline Plaan",
    proc_step_2_desc: "Kaardistame kasutaja teekonna, traatvõrgustikud ja tehnilise arhitektuuri edu saavutamiseks.",
    proc_step_3_title: "Meistriteose Ehitamine",
    proc_step_3_desc: "Meie käsitöölised disainivad ja kodeerivad piksel-täpsed liidesed siidiselt sujuva liikumisega.",
    proc_step_4_title: "Käivita ja Skaleeri",
    proc_step_4_desc: "Juurutame äärele, optimeerime kiiruse jaoks ja anname teile impeeriumi võtmed.",

    // Why Us
    why_lead_growth: "Keskmine Müügivihjete Kasv",
    why_awards: "Disainiauhinda",
    why_pagespeed: "PageSpeed Skoor",
    why_roi: "Esimese Aasta ROI",
    why_testimonial: "\"Webordable ei kujundanud lihtsalt meie saiti ümber; nad mõtestasid ümber kogu meie digitaalse identiteedi. Meie konversioonimäär kolmekordistus esimese kuuga. Lihtsalt maailmatasemel.\"",

    // CTA
    cta_title: "Sinu Eepiline Digitaalne Ajastu Algab Siin.",
    cta_desc: "Lõpeta võistlemine. Alusta domineerimist. Broneeri oma tasuta strateegiakõne ja kaardistame sinu võidu.",
    cta_placeholder: "Sisesta oma e-post",
    cta_button: "Saa Kohene Hinnapakkumine",
    cta_spam: "Ei mingit rämpsposti. Tühista tellimus igal ajal.",

    // Footer
    footer_privacy: "Privaatsus",
    footer_terms: "Tingimused",
    footer_sitemap: "Sisukaart",
    footer_rights: "© 2026 Webordable Agentuur. Kõik õigused kaitstud.",
    footer_designed: "Kujundatud",
    footer_in_future: "tulevikus."
  },
  ru: {
    // Navbar
    nav_services: "Услуги",
    nav_work: "Портфолио",
    nav_process: "Процесс",
    nav_why_us: "Почему Мы",
    nav_talk: "Связаться",

    // Hero
    hero_badge: "Агентство Будущего",
    hero_title_1: "Объедините Ваше",
    hero_title_2: "Цифровое Будущее.",
    hero_desc: "Мы создаем сайты, которые не просто существуют — они доминируют, конвертируют и масштабируют ваше видение с пиксельной точностью.",
    hero_pill_design: "Эпический Дизайн",
    hero_pill_launch: "Молниеносный Запуск",
    hero_pill_grow: "Взрывной Рост",
    hero_pill_convert: "Беспощадная Конверсия",
    hero_start: "Начать Проект",
    hero_view_work: "Смотреть Работы",

    // Capabilities
    cap_title_main: "Мы Не Просто Создаем Сайты.",
    cap_title_sub: "Мы Строим Империи.",
    cap_desc: "Наши возможности охватывают весь цифровой спектр, обеспечивая отмеченное наградами качество со скоростью стартапа.",
    cap_visuals_title: "Визуал Нового Уровня",
    cap_visuals_desc: "Потрясающая эстетика, которая мгновенно захватывает. Мы создаем дизайн для 2030-х, а не 2020-х.",
    cap_speed_title: "Молниеносная Скорость",
    cap_speed_desc: "Молниеносная загрузка. Мы оптимизируем каждый байт для невероятно плавной работы.",
    cap_conversion_title: "Двигатели Конверсии",
    cap_conversion_desc: "Стратегические макеты и психологические триггеры, превращающие пассивных посетителей в активных клиентов.",
    cap_seo_title: "SEO Инжиниринг",
    cap_seo_desc: "Встроенный технический SEO, который наносит вас на карту. Мы пишем код ради любви Google.",
    cap_growth_title: "Масштабируемый Рост",
    cap_growth_desc: "Архитектура будущего, растущая вместе с вашим бизнесом. Без границ, без перестройки.",
    cap_innovation_title: "Лаборатории Инноваций",
    cap_innovation_desc: "Мы экспериментируем с новейшими технологиями — WebGL, 3D, AI — чтобы вы всегда были впереди.",

    // Portfolio
    port_title: "Избранные Работы",
    port_desc: "Подборка цифровых впечатлений, задающих новые стандарты.",
    port_view_all: "Смотреть Все Проекты",
    port_view_case: "Смотреть Кейс",
    port_lumina_cat: "Банкинг / UI/UX",
    port_vogue_cat: "E-Commerce / Мода",
    port_estates_cat: "Недвижимость / Премиум",
    port_neon_cat: "Web3 / Темная Тема",

    // Process
    proc_badge: "Как Мы Побеждаем",
    proc_title_1: "От Концепции к",
    proc_title_2: "Иконе",
    proc_step_1_title: "Консультация",
    proc_step_1_desc: "Мы глубоко погружаемся в ваше видение, цели и аудиторию. Ни один камень не останется неперевернутым.",
    proc_step_2_title: "Стратегический План",
    proc_step_2_desc: "Мы намечаем путь пользователя, вайрфреймы и техническую архитектуру для успеха.",
    proc_step_3_title: "Создание Шедевра",
    proc_step_3_desc: "Наши мастера создают дизайн и код пиксельно точных интерфейсов с невероятно плавной анимацией.",
    proc_step_4_title: "Запуск и Масштабирование",
    proc_step_4_desc: "Мы развертываем на edge-серверах, оптимизируем скорость и передаем вам ключи от вашей империи.",

    // Why Us
    why_lead_growth: "Средний Рост Лидов",
    why_awards: "Наград за Дизайн",
    why_pagespeed: "Оценка PageSpeed",
    why_roi: "ROI Первого Года",
    why_testimonial: "\"Webordable не просто переработали наш сайт; они переосмыслили всю нашу цифровую идентичность. Наша конверсия утроилась в первый месяц. Просто мировой уровень.\"",

    // CTA
    cta_title: "Ваша Эпическая Цифровая Эра Начинается Здесь.",
    cta_desc: "Хватит конкурировать. Начни доминировать. Запишитесь на бесплатную стратегическую сессию, и мы наметим вашу победу.",
    cta_placeholder: "Введите ваш email",
    cta_button: "Получить Мгновенную Квоту",
    cta_spam: "Никакого спама. Отписка в любое время.",

    // Footer
    footer_privacy: "Конфиденциальность",
    footer_terms: "Условия",
    footer_sitemap: "Карта Сайта",
    footer_rights: "© 2026 Агентство Webordable. Все права защищены.",
    footer_designed: "Создано с",
    footer_in_future: "в будущем."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
