const menuToggles = document.querySelectorAll(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");
const languageButtons = document.querySelectorAll(".language-btn");
const loader = document.getElementById("loader");

function hideLoader() {
  if (loader) {
    loader.classList.add("hidden");
    loader.style.display = "none";
  }
}

setTimeout(hideLoader, 900);

const translations = {
  en: {
    pageTitle: "Echonix IT | Intelligent Software, AI Automation & Cybersecurity",
    "brand.tagline": "Intelligent Solutions",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.caseStudies": "Case Studies",
    "nav.technologies": "Technologies",
    "nav.industries": "Industries",
    "nav.contact": "Contact",
    "hero.eyebrow": "Enterprise software studio for intelligent systems",
    "hero.heading": "Intelligent Solutions. Limitless Impact.",
    "hero.text": "Echonix IT engineers secure software, AI automation, custom web platforms, mobile apps, and digital systems for ambitious teams across Europe and the United States.",
    "hero.primary": "Start a Project",
    "hero.secondary": "Explore Work",
    "hero.metricServices": "Service Lines",
    "hero.metricMarkets": "Languages",
    "stats.capabilities": "Digital capabilities",
    "stats.markets": "Primary markets",
    "stats.delivery": "Responsive delivery",
    "stats.focus": "Client-focused strategy",
    "about.eyebrow": "About Echonix IT",
    "about.heading": "A modern technology partner for software, AI, and digital growth.",
    "about.text": "Echonix IT combines engineering discipline, intelligent automation, and premium design to build secure digital products that feel fast, reliable, and ready for scale.",
    "about.pointOne": "Built for startups, businesses, and enterprise teams.",
    "about.pointTwo": "Serving Europe and the United States.",
    "about.pointThree": "English, German, and Albanian communication.",
    "services.eyebrow": "Services",
    "services.heading": "Enterprise-grade digital services, designed as one connected system.",
    "serviceMeta.benefit": "Benefit",
    "serviceMeta.technology": "Technology",
    "serviceMeta.process": "Process",
    "serviceMeta.industries": "Industries",
    "serviceMeta.cta": "Discuss this service",
    "services.custom.title": "Custom Software",
    "services.custom.text": "Tailored platforms, portals, dashboards, and business systems engineered around your workflows.",
    "services.custom.benefit": "Architecture, automation, and scalable delivery",
    "services.web.title": "Web Development",
    "services.web.text": "High-performance websites and web applications with premium UI, SEO structure, and conversion focus.",
    "services.web.benefit": "Fast, responsive, accessible interfaces",
    "services.ai.title": "AI Solutions",
    "services.ai.text": "AI assistants, prediction tools, data pipelines, and smart products powered by practical machine learning.",
    "services.ai.benefit": "Models, data processing, and intelligent UX",
    "services.automation.title": "AI Automation",
    "services.automation.text": "Workflow automation that connects tools, reduces manual work, and gives teams more speed.",
    "services.automation.benefit": "Automated operations and smart integrations",
    "services.mobile.title": "Mobile Apps",
    "services.mobile.text": "Mobile-first product experiences with clean interfaces, strong flows, and reliable backend support.",
    "services.mobile.benefit": "Product thinking from prototype to launch",
    "services.ux.title": "UI/UX Design",
    "services.ux.text": "Premium product interfaces, conversion-focused flows, design systems, and brand-aligned digital experiences.",
    "services.ux.benefit": "Clear journeys, polished visuals, and better user trust",
    "services.security.title": "Cybersecurity",
    "services.security.text": "Security-focused audits, hardening, authentication flows, and safer system architecture.",
    "services.security.benefit": "Risk reduction and secure development",
    "services.consulting.title": "IT Consulting",
    "services.consulting.text": "Technical strategy, architecture decisions, product planning, and roadmap support.",
    "services.consulting.benefit": "Clear technical direction before building",
    "services.seo.title": "SEO",
    "services.seo.text": "Technical SEO, metadata, content structure, speed optimization, and search-ready website foundations.",
    "services.seo.benefit": "Visibility, structure, and measurable growth",
    "process.eyebrow": "Process",
    "process.heading": "From strategy to launch, every project moves through a clear delivery system.",
    "process.discovery.title": "Discovery",
    "process.discovery.text": "We define goals, users, risks, scope, and the right technical path.",
    "process.design.title": "Design",
    "process.design.text": "We shape premium interfaces, flows, and product architecture.",
    "process.build.title": "Build",
    "process.build.text": "We develop the system with clean code, secure logic, and scalable structure.",
    "process.launch.title": "Launch",
    "process.launch.text": "We optimize, deploy, measure, and prepare the product for growth.",
    "cases.eyebrow": "Case Studies",
    "cases.heading": "Premium project narratives for AI, software, and secure digital operations.",
    "cases.one.title": "From manual workflows to intelligent operations",
    "cases.one.text": "A concept case study showing how AI assistants, routing logic, and dashboards reduce repetitive work.",
    "cases.two.title": "A full-stack portal for real-time business visibility",
    "cases.two.text": "A product story focused on analytics, roles, database structure, and clean enterprise UI.",
    "cases.three.title": "Security-first architecture for growing teams",
    "cases.three.text": "A system approach to safer authentication, controlled access, and audit-ready user journeys.",
    "portfolio.eyebrow": "Portfolio",
    "portfolio.heading": "Featured concepts built around real business outcomes.",
    "portfolio.filterAll": "All",
    "portfolio.filterSecurity": "Security",
    "portfolio.ai.title": "AI Automation Command Center",
    "portfolio.ai.text": "A dashboard concept for automated workflows, intelligent routing, and operational visibility.",
    "portfolio.web.title": "Full-Stack Analytics Platform",
    "portfolio.web.text": "A secure web platform with data views, reporting, admin workflows, and product-grade UI.",
    "portfolio.ecommerce.title": "E-commerce Growth System",
    "portfolio.ecommerce.text": "A conversion-focused storefront experience with product flows, checkout logic, and SEO structure.",
    "portfolio.security.title": "Security-First Client Portal",
    "portfolio.security.text": "A private portal concept with authentication, controlled access, audit-friendly UX, and secure data handling.",
    "portfolio.cta": "Request Similar Work",
    "tech.eyebrow": "Technologies",
    "tech.heading": "A pragmatic stack for fast, secure, and scalable digital products.",
    "industries.eyebrow": "Industries",
    "industries.heading": "Built for teams that need clarity, speed, and intelligent systems.",
    "industries.saas": "SaaS & Digital Products",
    "industries.retail": "Retail & E-commerce",
    "industries.finance": "Finance & Operations",
    "industries.education": "Education & Training",
    "industries.health": "Healthcare & Services",
    "industries.startups": "Startups & Agencies",
    "testimonials.eyebrow": "Testimonials",
    "testimonials.heading": "Designed to feel calm, precise, and trustworthy from first click.",
    "testimonials.one": "\"A clean technical partner for teams that need software strategy and execution in one place.\"",
    "testimonials.two": "\"The brand feels premium, modern, and ready for serious B2B clients.\"",
    "testimonials.three": "\"Strong positioning for AI automation, web platforms, and secure digital systems.\"",
    "blog.eyebrow": "Insights",
    "blog.heading": "Latest articles and technical notes.",
    "blog.one.title": "How businesses can use AI without adding complexity",
    "blog.one.text": "A simple framework for identifying automation opportunities that actually save time.",
    "blog.two.title": "Why secure architecture starts before code",
    "blog.two.text": "Good systems are planned around access, data, risks, and operational realities.",
    "blog.three.title": "Technical SEO foundations for modern websites",
    "blog.three.text": "Performance, metadata, schema, and structure are part of the product experience.",
    "careers.eyebrow": "Careers",
    "careers.heading": "Building a focused network of creators, engineers, and AI thinkers.",
    "careers.cta": "Send Your Profile",
    "faq.heading": "Questions before starting?",
    "faq.one.q": "What does Echonix IT build?",
    "faq.one.a": "Custom software, websites, AI tools, automations, mobile experiences, cybersecurity improvements, SEO foundations, and consulting roadmaps.",
    "faq.two.q": "Who do you work with?",
    "faq.two.a": "Businesses, startups, agencies, and teams in Europe and the United States that need reliable digital systems.",
    "faq.three.q": "Can you communicate in multiple languages?",
    "faq.three.a": "Yes. Echonix IT supports English, German, and Albanian communication.",
    "contact.eyebrow": "Contact",
    "contact.heading": "Let us design the system your business needs next.",
    "contact.name": "Name",
    "contact.namePlaceholder": "Your name",
    "contact.email": "Email",
    "contact.emailPlaceholder": "you@company.com",
    "contact.message": "Project Details",
    "contact.messagePlaceholder": "Tell us what you want to build",
    "contact.submit": "Send Request",
    "contact.phone": "Phone",
    "contact.market": "Markets",
    "contact.map": "Google Maps placeholder",
    "final.heading": "Ready to build intelligent digital infrastructure?",
    "final.cta": "Contact Echonix IT",
    "footer.tagline": "Intelligent Solutions. Limitless Impact.",
    "footer.copy": "\u00A9 2026 Echonix IT. All rights reserved."
  },
  de: {
    pageTitle: "Echonix IT | Intelligente Software, AI Automation & Cybersecurity",
    "brand.tagline": "Intelligente Losungen",
    "nav.about": "Uber uns",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.caseStudies": "Case Studies",
    "nav.technologies": "Technologien",
    "nav.industries": "Branchen",
    "nav.contact": "Kontakt",
    "hero.eyebrow": "Enterprise Software Studio fur intelligente Systeme",
    "hero.heading": "Intelligente Losungen. Grenzenlose Wirkung.",
    "hero.text": "Echonix IT entwickelt sichere Software, AI Automation, individuelle Webplattformen, Mobile Apps und digitale Systeme fur ambitionierte Teams in Europa und den Vereinigten Staaten.",
    "hero.primary": "Projekt starten",
    "hero.secondary": "Arbeiten ansehen",
    "hero.metricServices": "Servicebereiche",
    "hero.metricMarkets": "Sprachen",
    "stats.capabilities": "Digitale Kompetenzen",
    "stats.markets": "Primare Markte",
    "stats.delivery": "Reaktionsschnelle Lieferung",
    "stats.focus": "Kundenfokussierte Strategie",
    "about.eyebrow": "Uber Echonix IT",
    "about.heading": "Ein moderner Technologiepartner fur Software, AI und digitales Wachstum.",
    "about.text": "Echonix IT verbindet Engineering, intelligente Automatisierung und Premium Design, um sichere digitale Produkte zu bauen, die schnell, zuverlassig und skalierbar wirken.",
    "about.pointOne": "Gebaut fur Startups, Unternehmen und Enterprise Teams.",
    "about.pointTwo": "Fur Europa und die Vereinigten Staaten.",
    "about.pointThree": "Kommunikation auf Englisch, Deutsch und Albanisch.",
    "services.eyebrow": "Services",
    "services.heading": "Enterprise digitale Services, als ein verbundenes System gedacht.",
    "serviceMeta.benefit": "Vorteil",
    "serviceMeta.technology": "Technologie",
    "serviceMeta.process": "Prozess",
    "serviceMeta.industries": "Branchen",
    "serviceMeta.cta": "Service besprechen",
    "services.custom.title": "Individuelle Software",
    "services.custom.text": "Plattformen, Portale, Dashboards und Business Systeme, die exakt zu Ihren Workflows passen.",
    "services.custom.benefit": "Architektur, Automatisierung und skalierbare Lieferung",
    "services.web.title": "Webentwicklung",
    "services.web.text": "Performante Websites und Web Apps mit Premium UI, SEO Struktur und Conversion Fokus.",
    "services.web.benefit": "Schnelle, responsive, zugangliche Interfaces",
    "services.ai.title": "AI Losungen",
    "services.ai.text": "AI Assistenten, Prognose Tools, Datenpipelines und smarte Produkte mit praktischem Machine Learning.",
    "services.ai.benefit": "Modelle, Datenverarbeitung und intelligente UX",
    "services.automation.title": "AI Automation",
    "services.automation.text": "Workflow Automation, die Tools verbindet, manuelle Arbeit reduziert und Teams schneller macht.",
    "services.automation.benefit": "Automatisierte Prozesse und smarte Integrationen",
    "services.mobile.title": "Mobile Apps",
    "services.mobile.text": "Mobile-first Produkterlebnisse mit klaren Interfaces, starken Flows und stabilem Backend.",
    "services.mobile.benefit": "Produktdenken von Prototyp bis Launch",
    "services.ux.title": "UI/UX Design",
    "services.ux.text": "Premium Produktinterfaces, conversion-fokussierte Flows, Designsysteme und markenkonforme digitale Erlebnisse.",
    "services.ux.benefit": "Klare User Journeys, polierte Visuals und mehr Vertrauen",
    "services.security.title": "Cybersecurity",
    "services.security.text": "Security Audits, Hardening, Authentifizierung und sichere Systemarchitektur.",
    "services.security.benefit": "Weniger Risiko und sichere Entwicklung",
    "services.consulting.title": "IT Consulting",
    "services.consulting.text": "Technische Strategie, Architekturentscheidungen, Produktplanung und Roadmap Support.",
    "services.consulting.benefit": "Klare technische Richtung vor dem Bau",
    "services.seo.title": "SEO",
    "services.seo.text": "Technisches SEO, Metadaten, Content Struktur, Speed Optimierung und suchbereite Websites.",
    "services.seo.benefit": "Sichtbarkeit, Struktur und messbares Wachstum",
    "process.eyebrow": "Prozess",
    "process.heading": "Von Strategie bis Launch folgt jedes Projekt einem klaren Delivery System.",
    "process.discovery.title": "Discovery",
    "process.discovery.text": "Wir definieren Ziele, Nutzer, Risiken, Umfang und den richtigen technischen Weg.",
    "process.design.title": "Design",
    "process.design.text": "Wir gestalten Premium Interfaces, Flows und Produktarchitektur.",
    "process.build.title": "Build",
    "process.build.text": "Wir entwickeln mit sauberem Code, sicherer Logik und skalierbarer Struktur.",
    "process.launch.title": "Launch",
    "process.launch.text": "Wir optimieren, deployen, messen und bereiten das Produkt fur Wachstum vor.",
    "cases.eyebrow": "Case Studies",
    "cases.heading": "Premium Projektgeschichten fur AI, Software und sichere digitale Ablaufe.",
    "cases.one.title": "Von manuellen Workflows zu intelligenten Operations",
    "cases.one.text": "Eine Konzept-Case-Study, die zeigt, wie AI Assistenten, Routing Logik und Dashboards repetitive Arbeit reduzieren.",
    "cases.two.title": "Ein Full-Stack Portal fur Echtzeit Business Sichtbarkeit",
    "cases.two.text": "Eine Produktstory mit Fokus auf Analytics, Rollen, Datenbankstruktur und sauberer Enterprise UI.",
    "cases.three.title": "Security-first Architektur fur wachsende Teams",
    "cases.three.text": "Ein Systemansatz fur sichere Authentifizierung, kontrollierten Zugriff und auditbereite User Journeys.",
    "portfolio.eyebrow": "Portfolio",
    "portfolio.heading": "Ausgewahlte Konzepte fur echte Business Ergebnisse.",
    "portfolio.filterAll": "Alle",
    "portfolio.filterSecurity": "Security",
    "portfolio.ai.title": "AI Automation Command Center",
    "portfolio.ai.text": "Ein Dashboard Konzept fur automatisierte Workflows, intelligente Weiterleitung und operative Sichtbarkeit.",
    "portfolio.web.title": "Full-Stack Analytics Platform",
    "portfolio.web.text": "Eine sichere Webplattform mit Datenansichten, Reporting, Admin Workflows und produktreifer UI.",
    "portfolio.ecommerce.title": "E-commerce Growth System",
    "portfolio.ecommerce.text": "Ein conversion-fokussierter Storefront mit Produktflows, Checkout Logik und SEO Struktur.",
    "portfolio.security.title": "Security-First Client Portal",
    "portfolio.security.text": "Ein privates Portal mit Authentifizierung, kontrolliertem Zugriff, auditfreundlicher UX und sicherem Datenhandling.",
    "portfolio.cta": "Ahnliches Projekt anfragen",
    "tech.eyebrow": "Technologien",
    "tech.heading": "Ein pragmatischer Stack fur schnelle, sichere und skalierbare digitale Produkte.",
    "industries.eyebrow": "Branchen",
    "industries.heading": "Gebaut fur Teams, die Klarheit, Tempo und intelligente Systeme brauchen.",
    "industries.saas": "SaaS & Digitale Produkte",
    "industries.retail": "Retail & E-commerce",
    "industries.finance": "Finance & Operations",
    "industries.education": "Education & Training",
    "industries.health": "Healthcare & Services",
    "industries.startups": "Startups & Agenturen",
    "testimonials.eyebrow": "Testimonials",
    "testimonials.heading": "Gestaltet, um ab dem ersten Klick ruhig, prazise und vertrauenswurdig zu wirken.",
    "testimonials.one": "\"Ein klarer technischer Partner fur Teams, die Software Strategie und Umsetzung an einem Ort brauchen.\"",
    "testimonials.two": "\"Die Marke wirkt premium, modern und bereit fur ernsthafte B2B Kunden.\"",
    "testimonials.three": "\"Starke Positionierung fur AI Automation, Webplattformen und sichere digitale Systeme.\"",
    "blog.eyebrow": "Insights",
    "blog.heading": "Aktuelle Artikel und technische Notizen.",
    "blog.one.title": "Wie Unternehmen AI nutzen konnen, ohne Komplexitat zu erhohen",
    "blog.one.text": "Ein einfacher Rahmen, um Automatisierungen zu finden, die wirklich Zeit sparen.",
    "blog.two.title": "Warum sichere Architektur vor dem Code beginnt",
    "blog.two.text": "Gute Systeme werden rund um Zugriff, Daten, Risiken und reale Ablaufe geplant.",
    "blog.three.title": "Technische SEO Grundlagen fur moderne Websites",
    "blog.three.text": "Performance, Metadaten, Schema und Struktur sind Teil der Produkterfahrung.",
    "careers.eyebrow": "Karriere",
    "careers.heading": "Wir bauen ein fokussiertes Netzwerk aus Kreativen, Engineers und AI Denkern.",
    "careers.cta": "Profil senden",
    "faq.heading": "Fragen vor dem Start?",
    "faq.one.q": "Was baut Echonix IT?",
    "faq.one.a": "Individuelle Software, Websites, AI Tools, Automatisierungen, mobile Erlebnisse, Cybersecurity Verbesserungen, SEO Grundlagen und Consulting Roadmaps.",
    "faq.two.q": "Mit wem arbeitet ihr?",
    "faq.two.a": "Mit Unternehmen, Startups, Agenturen und Teams in Europa und den Vereinigten Staaten, die verlassliche digitale Systeme brauchen.",
    "faq.three.q": "Konnt ihr mehrsprachig kommunizieren?",
    "faq.three.a": "Ja. Echonix IT unterstutzt Englisch, Deutsch und Albanisch.",
    "contact.eyebrow": "Kontakt",
    "contact.heading": "Lassen Sie uns das System entwerfen, das Ihr Business als nachstes braucht.",
    "contact.name": "Name",
    "contact.namePlaceholder": "Ihr Name",
    "contact.email": "E-Mail",
    "contact.emailPlaceholder": "sie@firma.com",
    "contact.message": "Projektdetails",
    "contact.messagePlaceholder": "Erzahlen Sie uns, was Sie bauen mochten",
    "contact.submit": "Anfrage senden",
    "contact.phone": "Telefon",
    "contact.market": "Markte",
    "contact.map": "Google Maps Platzhalter",
    "final.heading": "Bereit, intelligente digitale Infrastruktur zu bauen?",
    "final.cta": "Echonix IT kontaktieren",
    "footer.tagline": "Intelligente Losungen. Grenzenlose Wirkung.",
    "footer.copy": "\u00A9 2026 Echonix IT. Alle Rechte vorbehalten."
  },
  sq: {
    pageTitle: "Echonix IT | Software Inteligjente, AI Automation & Cybersecurity",
    "brand.tagline": "Zgjidhje Inteligjente",
    "nav.about": "Rreth nesh",
    "nav.services": "Sherbimet",
    "nav.portfolio": "Portfolio",
    "nav.caseStudies": "Case Studies",
    "nav.technologies": "Teknologjite",
    "nav.industries": "Industrite",
    "nav.contact": "Kontakti",
    "hero.eyebrow": "Studio software enterprise per sisteme inteligjente",
    "hero.heading": "Zgjidhje Inteligjente. Ndikim Pa Kufij.",
    "hero.text": "Echonix IT nderton software te sigurt, AI automation, platforma web te personalizuara, mobile apps dhe sisteme digjitale per ekipe ambicioze ne Europe dhe Shtetet e Bashkuara.",
    "hero.primary": "Fillo Projektin",
    "hero.secondary": "Shiko Punet",
    "hero.metricServices": "Linja Sherbimi",
    "hero.metricMarkets": "Gjuhe",
    "stats.capabilities": "Aftesi digjitale",
    "stats.markets": "Tregje kryesore",
    "stats.delivery": "Pergjigje e shpejte",
    "stats.focus": "Strategji me fokus klientin",
    "about.eyebrow": "Rreth Echonix IT",
    "about.heading": "Partner modern teknologjik per software, AI dhe rritje digjitale.",
    "about.text": "Echonix IT bashkon disiplinen inxhinierike, automatizimin inteligjent dhe dizajnin premium per te ndertuar produkte digjitale te sigurta, te shpejta dhe gati per rritje.",
    "about.pointOne": "Ndertuar per startups, biznese dhe ekipe enterprise.",
    "about.pointTwo": "Sherben ne Europe dhe Shtetet e Bashkuara.",
    "about.pointThree": "Komunikim ne Anglisht, Gjermanisht dhe Shqip.",
    "services.eyebrow": "Sherbimet",
    "services.heading": "Sherbime digjitale enterprise, te dizajnuara si nje sistem i lidhur.",
    "serviceMeta.benefit": "Perfitimi",
    "serviceMeta.technology": "Teknologjia",
    "serviceMeta.process": "Procesi",
    "serviceMeta.industries": "Industrite",
    "serviceMeta.cta": "Diskuto kete sherbim",
    "services.custom.title": "Software i Personalizuar",
    "services.custom.text": "Platforma, portale, dashboards dhe sisteme biznesi te ndertuara rreth proceseve tuaja.",
    "services.custom.benefit": "Arkitekture, automatizim dhe delivery i shkallezueshem",
    "services.web.title": "Web Development",
    "services.web.text": "Website dhe aplikacione web me performance te larte, UI premium, strukture SEO dhe fokus konvertimi.",
    "services.web.benefit": "Interface te shpejta, responsive dhe te qasshme",
    "services.ai.title": "Zgjidhje AI",
    "services.ai.text": "AI assistants, mjete parashikimi, data pipelines dhe produkte inteligjente me machine learning praktik.",
    "services.ai.benefit": "Modele, perpunim te dhenash dhe UX inteligjent",
    "services.automation.title": "AI Automation",
    "services.automation.text": "Automatizim workflow qe lidh tools, ul punen manuale dhe i jep ekipeve me shume shpejtesi.",
    "services.automation.benefit": "Operacione automatike dhe integrime te menqura",
    "services.mobile.title": "Mobile Apps",
    "services.mobile.text": "Eksperienca mobile-first me interface te pastra, flows te forta dhe backend te besueshem.",
    "services.mobile.benefit": "Mendim produkti nga prototipi deri ne launch",
    "services.ux.title": "UI/UX Design",
    "services.ux.text": "Interface produkti premium, flows me fokus konvertimi, design systems dhe eksperienca digjitale te lidhura me brand-in.",
    "services.ux.benefit": "User journeys te qarta, pamje te rafinuara dhe me shume besim",
    "services.security.title": "Cybersecurity",
    "services.security.text": "Audite sigurie, hardening, autentikim dhe arkitekture me e sigurt sistemesh.",
    "services.security.benefit": "Ulja e riskut dhe zhvillim i sigurt",
    "services.consulting.title": "IT Consulting",
    "services.consulting.text": "Strategji teknike, vendime arkitekture, planifikim produkti dhe roadmap support.",
    "services.consulting.benefit": "Drejtim i qarte teknik para ndertimit",
    "services.seo.title": "SEO",
    "services.seo.text": "SEO teknik, metadata, strukture content-i, optimizim shpejtesie dhe baza te gatshme per search.",
    "services.seo.benefit": "Dukshmeri, strukture dhe rritje e matshme",
    "process.eyebrow": "Procesi",
    "process.heading": "Nga strategjia deri ne launch, cdo projekt ndjek nje sistem te qarte delivery.",
    "process.discovery.title": "Discovery",
    "process.discovery.text": "Definojme qellimet, perdoruesit, riskun, scope dhe rrugen teknike.",
    "process.design.title": "Design",
    "process.design.text": "Formesojme interface premium, flows dhe arkitekture produkti.",
    "process.build.title": "Build",
    "process.build.text": "Zhvillojme sistemin me kod te paster, logjike te sigurt dhe strukture te shkallezueshme.",
    "process.launch.title": "Launch",
    "process.launch.text": "Optimizojme, deploy-ojme, masim dhe pergatisim produktin per rritje.",
    "cases.eyebrow": "Case Studies",
    "cases.heading": "Narrativa premium projektesh per AI, software dhe operacione digjitale te sigurta.",
    "cases.one.title": "Nga workflow manuale ne operacione inteligjente",
    "cases.one.text": "Nje concept case study qe tregon si AI assistants, routing logic dhe dashboards ulin punen perseritese.",
    "cases.two.title": "Portal full-stack per dukshmeri biznesi ne kohe reale",
    "cases.two.text": "Nje histori produkti me fokus analytics, role, strukture databaze dhe UI enterprise te paster.",
    "cases.three.title": "Arkitekture security-first per ekipe ne rritje",
    "cases.three.text": "Qasje sistemore per autentikim me te sigurt, qasje te kontrolluar dhe user journeys audit-ready.",
    "portfolio.eyebrow": "Portfolio",
    "portfolio.heading": "Koncepte te zgjedhura te ndertuara rreth rezultateve reale te biznesit.",
    "portfolio.filterAll": "Te gjitha",
    "portfolio.filterSecurity": "Siguria",
    "portfolio.ai.title": "AI Automation Command Center",
    "portfolio.ai.text": "Koncept dashboard per workflow te automatizuara, routing inteligjent dhe dukshmeri operative.",
    "portfolio.web.title": "Full-Stack Analytics Platform",
    "portfolio.web.text": "Platforme web e sigurt me pamje te dhenash, raportim, admin workflows dhe UI profesionale.",
    "portfolio.ecommerce.title": "E-commerce Growth System",
    "portfolio.ecommerce.text": "Storefront me fokus konvertimi, product flows, checkout logic dhe strukture SEO.",
    "portfolio.security.title": "Security-First Client Portal",
    "portfolio.security.text": "Portal privat me autentikim, qasje te kontrolluar, UX audit-friendly dhe trajtim te sigurt te te dhenave.",
    "portfolio.cta": "Kerko Pune te Ngjashme",
    "tech.eyebrow": "Teknologjite",
    "tech.heading": "Stack praktik per produkte digjitale te shpejta, te sigurta dhe te shkallezueshme.",
    "industries.eyebrow": "Industrite",
    "industries.heading": "Ndertuar per ekipe qe kane nevoje per qartesi, shpejtesi dhe sisteme inteligjente.",
    "industries.saas": "SaaS & Produkte Digjitale",
    "industries.retail": "Retail & E-commerce",
    "industries.finance": "Finance & Operations",
    "industries.education": "Education & Training",
    "industries.health": "Healthcare & Services",
    "industries.startups": "Startups & Agjenci",
    "testimonials.eyebrow": "Vleresime",
    "testimonials.heading": "Dizajnuar te ndihet i qete, preciz dhe i besueshem qe nga klikimi i pare.",
    "testimonials.one": "\"Partner teknik i paster per ekipe qe duan strategji software dhe zbatim ne nje vend.\"",
    "testimonials.two": "\"Brand-i ndihet premium, modern dhe gati per kliente serioze B2B.\"",
    "testimonials.three": "\"Pozicionim i forte per AI automation, platforma web dhe sisteme digjitale te sigurta.\"",
    "blog.eyebrow": "Insights",
    "blog.heading": "Artikujt e fundit dhe shenime teknike.",
    "blog.one.title": "Si mund te perdorin bizneset AI pa shtuar kompleksitet",
    "blog.one.text": "Nje kornize e thjeshte per te gjetur automatizime qe vertet kursejne kohe.",
    "blog.two.title": "Pse arkitektura e sigurt fillon para kodit",
    "blog.two.text": "Sistemet e mira planifikohen rreth qasjes, te dhenave, riskut dhe realitetit operacional.",
    "blog.three.title": "Bazat teknike SEO per website moderne",
    "blog.three.text": "Performance, metadata, schema dhe struktura jane pjese e eksperiences se produktit.",
    "careers.eyebrow": "Karriera",
    "careers.heading": "Po ndertojme nje rrjet te fokusuar krijuesish, inxhinieresh dhe mendimtaresh AI.",
    "careers.cta": "Dergo Profilin",
    "faq.heading": "Pyetje para fillimit?",
    "faq.one.q": "Cfare nderton Echonix IT?",
    "faq.one.a": "Software te personalizuar, website, AI tools, automatizime, eksperienca mobile, permiresime cybersecurity, baza SEO dhe consulting roadmaps.",
    "faq.two.q": "Me ke punoni?",
    "faq.two.a": "Me biznese, startups, agjenci dhe ekipe ne Europe dhe Shtetet e Bashkuara qe kane nevoje per sisteme digjitale te besueshme.",
    "faq.three.q": "A komunikoni ne disa gjuhe?",
    "faq.three.a": "Po. Echonix IT mbeshtet komunikim ne Anglisht, Gjermanisht dhe Shqip.",
    "contact.eyebrow": "Kontakti",
    "contact.heading": "Le ta dizajnojme sistemin qe i duhet biznesit tuaj.",
    "contact.name": "Emri",
    "contact.namePlaceholder": "Emri juaj",
    "contact.email": "Email",
    "contact.emailPlaceholder": "ju@kompania.com",
    "contact.message": "Detajet e projektit",
    "contact.messagePlaceholder": "Na tregoni cfare doni te ndertoni",
    "contact.submit": "Dergo Kerkesen",
    "contact.phone": "Telefoni",
    "contact.market": "Tregjet",
    "contact.map": "Google Maps placeholder",
    "final.heading": "Gati te ndertojme infrastrukture digjitale inteligjente?",
    "final.cta": "Kontakto Echonix IT",
    "footer.tagline": "Zgjidhje Inteligjente. Ndikim Pa Kufij.",
    "footer.copy": "\u00A9 2026 Echonix IT. Te gjitha te drejtat e rezervuara."
  }
};

function setLanguage(language) {
  const selected = translations[language] ? language : "en";
  const dictionary = translations[selected];

  document.documentElement.lang = selected;
  document.title = dictionary.pageTitle;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (dictionary[key]) element.textContent = dictionary[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    if (dictionary[key]) element.setAttribute("placeholder", dictionary[key]);
  });

  languageButtons.forEach((button) => {
    const active = button.dataset.lang === selected;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  localStorage.setItem("echonixLanguage", selected);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

setLanguage(localStorage.getItem("echonixLanguage") || "en");

function closeMenu() {
  navMenu.classList.remove("active");
  menuToggles.forEach((toggle) => {
    toggle.classList.remove("active");
    toggle.setAttribute("aria-expanded", "false");
  });
  document.body.classList.remove("menu-open");
}

menuToggles.forEach((menuToggle) => {
  menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("active");
    menuToggles.forEach((toggle) => {
      toggle.classList.toggle("active", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  document.body.classList.toggle("menu-open", isOpen);
  });
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach((element) => revealObserver.observe(element));

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const target = entry.target;
      const end = Number(target.dataset.counter);
      const duration = 1200;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        target.textContent = Math.floor(progress * end);
        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
      counterObserver.unobserve(target);
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll("[data-counter]").forEach((counter) => counterObserver.observe(counter));

document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    document.querySelectorAll(".filter-btn").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    document.querySelectorAll(".project-card").forEach((card) => {
      card.classList.toggle("is-hidden", filter !== "all" && card.dataset.category !== filter);
    });
  });
});

window.addEventListener("load", () => {
  setTimeout(hideLoader, 250);
});

const canvas = document.getElementById("signalCanvas");
const ctx = canvas.getContext("2d");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let width = 0;
let height = 0;
let points = [];
let rafId;

function resizeCanvas() {
  const ratio = window.devicePixelRatio || 1;
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width * ratio;
  canvas.height = height * ratio;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

  const count = Math.min(96, Math.max(42, Math.floor((width * height) / 18000)));
  points = Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.38,
    vy: (Math.random() - 0.5) * 0.38,
    r: Math.random() * 1.7 + 0.8
  }));
}

function drawSignals() {
  ctx.clearRect(0, 0, width, height);

  points.forEach((point) => {
    point.x += point.vx;
    point.y += point.vy;
    if (point.x < 0 || point.x > width) point.vx *= -1;
    if (point.y < 0 || point.y > height) point.vy *= -1;
  });

  for (let i = 0; i < points.length; i += 1) {
    for (let j = i + 1; j < points.length; j += 1) {
      const a = points[i];
      const b = points[j];
      const distance = Math.hypot(a.x - b.x, a.y - b.y);
      if (distance < 150) {
        const opacity = (1 - distance / 150) * 0.24;
        ctx.strokeStyle = `rgba(34, 211, 238, ${opacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }

  points.forEach((point) => {
    const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, point.r * 5);
    gradient.addColorStop(0, "rgba(34, 211, 238, 0.9)");
    gradient.addColorStop(1, "rgba(37, 99, 235, 0)");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(point.x, point.y, point.r * 5, 0, Math.PI * 2);
    ctx.fill();
  });

  if (!reduceMotion) rafId = requestAnimationFrame(drawSignals);
}

resizeCanvas();
drawSignals();

window.addEventListener("resize", () => {
  cancelAnimationFrame(rafId);
  resizeCanvas();
  drawSignals();
});
