const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");
const languageButtons = document.querySelectorAll(".language-btn");

const translations = {
  en: {
    pageTitle: "Erblin Limani | Full-Stack Developer & AI/ML Programmer",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "hero.eyebrow": "Full-stack systems, intelligent tools, production-ready code",
    "hero.title": "Full-Stack Developer | AI & Machine Learning Programmer",
    "hero.intro": "I build high-performance web applications, reliable backend systems, AI-powered tools, and machine learning solutions that turn complex ideas into polished digital products.",
    "hero.projectsButton": "View Projects",
    "hero.contactButton": "Contact Me",
    "terminal.frontend": "Frontend: HTML, CSS, JavaScript",
    "terminal.backend": "Backend: PHP, SQL, MySQL",
    "terminal.ai": "AI/ML: Python, automation, models",
    "terminal.status": "building the future",
    "about.eyebrow": "About",
    "about.heading": "Developer With A Product Mindset",
    "about.paragraphOne": "I am a full-stack developer and AI/ML Python programmer based in Prishtina, Kosovo. I focus on building scalable, practical, and elegant software across responsive interfaces, backend logic, database architecture, automation tools, and intelligent systems powered by data.",
    "about.paragraphTwo": "I am currently studying AI and Programming at Kolegji AAB, after completing three years at the professional school IAAP \"Jonuz Zejnullahu\" in Viti. With five years of programming experience and skills across HTML, CSS, JavaScript, PHP, SQL, MySQL, C++, Java, Python, AI, and Machine Learning, I bring both engineering depth and creative problem-solving to every project.",
    "stats.programming": "Years Programming",
    "stats.aab": "AI & Programming",
    "stats.school": "Years Professional School",
    "stats.location": "Prishtina, Kosovo",
    "skills.eyebrow": "Skills",
    "skills.heading": "Modern Stack For Web, Backend, And AI",
    "skills.programming": "Programming",
    "skills.machineLearning": "Machine Learning",
    "skills.aiAutomation": "AI Automation",
    "skills.dataProcessing": "Data Processing",
    "projects.eyebrow": "Projects",
    "projects.heading": "Featured Builds",
    "projects.chatbot.title": "AI Chatbot",
    "projects.chatbot.description": "Conversational assistant with intent handling, context-aware responses, and automation-ready integrations.",
    "projects.dashboard.title": "Full-Stack Dashboard",
    "projects.dashboard.description": "Responsive analytics dashboard with secure backend logic, dynamic data views, and database reporting.",
    "projects.ecommerce.title": "E-commerce Website",
    "projects.ecommerce.description": "Online storefront with product browsing, cart flow, user management, and clean purchase experience.",
    "projects.prediction.title": "Machine Learning Prediction App",
    "projects.prediction.description": "Prediction interface using trained models, data processing pipelines, and clear result presentation.",
    "projects.viewButton": "View Project",
    "services.eyebrow": "Services",
    "services.heading": "Technical Services",
    "services.web.title": "Web Development",
    "services.web.description": "Responsive, polished websites and web applications built for performance and usability.",
    "services.backend.title": "Backend Development",
    "services.backend.description": "Server-side systems, authentication flows, APIs, and business logic that scale cleanly.",
    "services.automation.title": "AI Automation",
    "services.automation.description": "Smart workflows that reduce repetitive work and connect AI tools to real operations.",
    "services.ml.title": "Machine Learning Models",
    "services.ml.description": "Data preparation, model development, evaluation, and prediction-focused applications.",
    "services.database.title": "Database Design",
    "services.database.description": "Structured SQL and MySQL database design for reliable storage, querying, and reporting.",
    "contact.eyebrow": "Contact",
    "contact.heading": "Let's Build Something Intelligent",
    "contact.nameLabel": "Name",
    "contact.namePlaceholder": "Your name",
    "contact.emailLabel": "Email",
    "contact.emailPlaceholder": "your@email.com",
    "contact.messageLabel": "Message",
    "contact.messagePlaceholder": "Tell me about your project",
    "contact.sendButton": "Send Message",
    "contact.panelText": "Available for web applications, backend systems, automation workflows, machine learning tools, and custom AI-powered products.",
    "contact.locationLabel": "Location",
    "contact.educationLabel": "Education",
    "contact.educationValue": "Kolegji AAB, AI & Programming",
    "contact.languagesLabel": "Languages",
    "contact.languagesValue": "Albanian, English, German",
    "footer.copy": "\u00A9 2026 Erblin Limani. Full-Stack Developer & AI/ML Programmer."
  },
  sq: {
    pageTitle: "Erblin Limani | Full-Stack Developer & Programues AI/ML",
    "nav.about": "Rreth meje",
    "nav.skills": "Aftesite",
    "nav.projects": "Projektet",
    "nav.services": "Sherbimet",
    "nav.contact": "Kontakti",
    "hero.eyebrow": "Sisteme full-stack, mjete inteligjente, kod gati per prodhim",
    "hero.title": "Full-Stack Developer | Programues i AI & Machine Learning",
    "hero.intro": "Ndertoj aplikacione web me performance te larte, sisteme backend te besueshme, mjete me AI dhe zgjidhje machine learning qe i kthejne idete komplekse ne produkte digjitale profesionale.",
    "hero.projectsButton": "Shiko Projektet",
    "hero.contactButton": "Me Kontakto",
    "terminal.frontend": "Frontend: HTML, CSS, JavaScript",
    "terminal.backend": "Backend: PHP, SQL, MySQL",
    "terminal.ai": "AI/ML: Python, automatizim, modele",
    "terminal.status": "duke ndertuar te ardhmen",
    "about.eyebrow": "Rreth meje",
    "about.heading": "Developer me mendesi produkti",
    "about.paragraphOne": "Jam full-stack developer dhe programues Python per AI/ML me baze ne Prishtine, Kosove. Fokusohem ne ndertimin e softuerit te shkallezueshem, praktik dhe elegant, nga interfacet responsive deri te backend-i, databazat, automatizimi dhe sistemet inteligjente te bazuara ne te dhena.",
    "about.paragraphTwo": "Aktualisht studioj AI dhe Programim ne Kolegjin AAB, pasi kam perfunduar tre vite ne shkollen profesionale IAAP \"Jonuz Zejnullahu\" ne Viti. Me pese vite eksperience ne programim dhe aftesi ne HTML, CSS, JavaScript, PHP, SQL, MySQL, C++, Java, Python, AI dhe Machine Learning, sjell thellesi inxhinierike dhe zgjidhje kreative ne cdo projekt.",
    "stats.programming": "Vite Programim",
    "stats.aab": "AI & Programim",
    "stats.school": "Vite Shkolle Profesionale",
    "stats.location": "Prishtine, Kosove",
    "skills.eyebrow": "Aftesite",
    "skills.heading": "Teknologji Moderne Per Web, Backend Dhe AI",
    "skills.programming": "Programim",
    "skills.machineLearning": "Machine Learning",
    "skills.aiAutomation": "Automatizim me AI",
    "skills.dataProcessing": "Perpunim i te dhenave",
    "projects.eyebrow": "Projektet",
    "projects.heading": "Projekte te Zgjedhura",
    "projects.chatbot.title": "AI Chatbot",
    "projects.chatbot.description": "Asistent bisedues me menaxhim te qellimeve, pergjigje me kontekst dhe integrime te gatshme per automatizim.",
    "projects.dashboard.title": "Dashboard Full-Stack",
    "projects.dashboard.description": "Dashboard analitik responsive me backend te sigurt, pamje dinamike te te dhenave dhe raporte nga databaza.",
    "projects.ecommerce.title": "Website E-commerce",
    "projects.ecommerce.description": "Dyqan online me produkte, shporte blerjeje, menaxhim perdoruesish dhe pervoje te paster blerjeje.",
    "projects.prediction.title": "Aplikacion Parashikimi me Machine Learning",
    "projects.prediction.description": "Interface parashikimi me modele te trajnuara, pipeline per perpunim te te dhenave dhe prezantim te qarte te rezultateve.",
    "projects.viewButton": "Shiko Projektin",
    "services.eyebrow": "Sherbimet",
    "services.heading": "Sherbime Teknike",
    "services.web.title": "Web Development",
    "services.web.description": "Website dhe aplikacione web responsive, profesionale dhe te ndertuara per performance e perdorim te lehte.",
    "services.backend.title": "Backend Development",
    "services.backend.description": "Sisteme server-side, autentikim, API dhe logjike biznesi qe shkallezohet paster.",
    "services.automation.title": "Automatizim me AI",
    "services.automation.description": "Workflow inteligjente qe ulin punen perseritese dhe lidhin mjetet AI me procese reale.",
    "services.ml.title": "Modele Machine Learning",
    "services.ml.description": "Pergatitje te dhenash, zhvillim modelesh, vleresim dhe aplikacione te fokusuara ne parashikim.",
    "services.database.title": "Dizajn Databaze",
    "services.database.description": "Dizajn i strukturuar me SQL dhe MySQL per ruajtje, kerkime dhe raportim te besueshem.",
    "contact.eyebrow": "Kontakti",
    "contact.heading": "Te Ndertojme Dicka Inteligjente",
    "contact.nameLabel": "Emri",
    "contact.namePlaceholder": "Emri juaj",
    "contact.emailLabel": "Email",
    "contact.emailPlaceholder": "emaili@juaj.com",
    "contact.messageLabel": "Mesazhi",
    "contact.messagePlaceholder": "Me trego per projektin tend",
    "contact.sendButton": "Dergo Mesazhin",
    "contact.panelText": "I disponueshem per aplikacione web, sisteme backend, automatizim, mjete machine learning dhe produkte te personalizuara me AI.",
    "contact.locationLabel": "Lokacioni",
    "contact.educationLabel": "Edukimi",
    "contact.educationValue": "Kolegji AAB, AI & Programim",
    "contact.languagesLabel": "Gjuhet",
    "contact.languagesValue": "Shqip, Anglisht, Gjermanisht",
    "footer.copy": "\u00A9 2026 Erblin Limani. Full-Stack Developer & Programues AI/ML."
  },
  de: {
    pageTitle: "Erblin Limani | Full-Stack Developer & AI/ML Programmierer",
    "nav.about": "Uber mich",
    "nav.skills": "Fahigkeiten",
    "nav.projects": "Projekte",
    "nav.services": "Services",
    "nav.contact": "Kontakt",
    "hero.eyebrow": "Full-Stack-Systeme, intelligente Tools, produktionsreifer Code",
    "hero.title": "Full-Stack Developer | AI & Machine Learning Programmierer",
    "hero.intro": "Ich entwickle leistungsstarke Webanwendungen, zuverlassige Backend-Systeme, KI-gestutzte Tools und Machine-Learning-Losungen, die komplexe Ideen in professionelle digitale Produkte verwandeln.",
    "hero.projectsButton": "Projekte ansehen",
    "hero.contactButton": "Kontakt aufnehmen",
    "terminal.frontend": "Frontend: HTML, CSS, JavaScript",
    "terminal.backend": "Backend: PHP, SQL, MySQL",
    "terminal.ai": "AI/ML: Python, Automatisierung, Modelle",
    "terminal.status": "die Zukunft bauen",
    "about.eyebrow": "Uber mich",
    "about.heading": "Developer mit Produkt-Mindset",
    "about.paragraphOne": "Ich bin Full-Stack Developer und Python-Programmierer fur AI/ML mit Sitz in Prishtina, Kosovo. Mein Fokus liegt auf skalierbarer, praktischer und eleganter Software, von responsiven Oberflachen uber Backend-Logik und Datenbanken bis zu Automatisierung und intelligenten datenbasierten Systemen.",
    "about.paragraphTwo": "Aktuell studiere ich AI und Programmierung am Kolegji AAB, nachdem ich drei Jahre an der Berufsschule IAAP \"Jonuz Zejnullahu\" in Viti abgeschlossen habe. Mit funf Jahren Programmiererfahrung und Kenntnissen in HTML, CSS, JavaScript, PHP, SQL, MySQL, C++, Java, Python, AI und Machine Learning bringe ich technisches Denken und kreative Problemlosung in jedes Projekt ein.",
    "stats.programming": "Jahre Programmierung",
    "stats.aab": "AI & Programmierung",
    "stats.school": "Jahre Berufsschule",
    "stats.location": "Prishtina, Kosovo",
    "skills.eyebrow": "Fahigkeiten",
    "skills.heading": "Moderner Stack Fur Web, Backend Und AI",
    "skills.programming": "Programmierung",
    "skills.machineLearning": "Machine Learning",
    "skills.aiAutomation": "AI-Automatisierung",
    "skills.dataProcessing": "Datenverarbeitung",
    "projects.eyebrow": "Projekte",
    "projects.heading": "Ausgewahlte Projekte",
    "projects.chatbot.title": "AI Chatbot",
    "projects.chatbot.description": "Konversationsassistent mit Intent-Erkennung, kontextbezogenen Antworten und integrationsbereiter Automatisierung.",
    "projects.dashboard.title": "Full-Stack Dashboard",
    "projects.dashboard.description": "Responsives Analyse-Dashboard mit sicherer Backend-Logik, dynamischen Datenansichten und Datenbank-Reporting.",
    "projects.ecommerce.title": "E-Commerce Website",
    "projects.ecommerce.description": "Online-Shop mit Produktansicht, Warenkorb, Benutzerverwaltung und sauberem Einkaufserlebnis.",
    "projects.prediction.title": "Machine-Learning Prediction App",
    "projects.prediction.description": "Vorhersage-Interface mit trainierten Modellen, Datenverarbeitungspipelines und klarer Ergebnisdarstellung.",
    "projects.viewButton": "Projekt ansehen",
    "services.eyebrow": "Services",
    "services.heading": "Technische Services",
    "services.web.title": "Web Development",
    "services.web.description": "Responsive, professionelle Websites und Webanwendungen, gebaut fur Performance und Benutzerfreundlichkeit.",
    "services.backend.title": "Backend Development",
    "services.backend.description": "Serverseitige Systeme, Authentifizierung, APIs und Business-Logik, die sauber skaliert.",
    "services.automation.title": "AI-Automatisierung",
    "services.automation.description": "Intelligente Workflows, die wiederkehrende Arbeit reduzieren und AI-Tools mit echten Prozessen verbinden.",
    "services.ml.title": "Machine-Learning-Modelle",
    "services.ml.description": "Datenaufbereitung, Modellentwicklung, Evaluation und vorhersageorientierte Anwendungen.",
    "services.database.title": "Datenbankdesign",
    "services.database.description": "Strukturiertes SQL- und MySQL-Design fur zuverlassige Speicherung, Abfragen und Reporting.",
    "contact.eyebrow": "Kontakt",
    "contact.heading": "Lass Uns Etwas Intelligentes Bauen",
    "contact.nameLabel": "Name",
    "contact.namePlaceholder": "Dein Name",
    "contact.emailLabel": "E-Mail",
    "contact.emailPlaceholder": "deine@email.com",
    "contact.messageLabel": "Nachricht",
    "contact.messagePlaceholder": "Erzahl mir von deinem Projekt",
    "contact.sendButton": "Nachricht senden",
    "contact.panelText": "Verfugbar fur Webanwendungen, Backend-Systeme, Automatisierung, Machine-Learning-Tools und individuelle AI-Produkte.",
    "contact.locationLabel": "Standort",
    "contact.educationLabel": "Ausbildung",
    "contact.educationValue": "Kolegji AAB, AI & Programmierung",
    "contact.languagesLabel": "Sprachen",
    "contact.languagesValue": "Albanisch, Englisch, Deutsch",
    "footer.copy": "\u00A9 2026 Erblin Limani. Full-Stack Developer & AI/ML Programmierer."
  }
};

function setLanguage(language) {
  const selectedLanguage = translations[language] ? language : "en";
  const dictionary = translations[selectedLanguage];

  document.documentElement.lang = selectedLanguage;
  document.title = dictionary.pageTitle;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    if (dictionary[key]) {
      element.setAttribute("placeholder", dictionary[key]);
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === selectedLanguage;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("portfolioLanguage", selectedLanguage);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

setLanguage(localStorage.getItem("portfolioLanguage") || "en");

menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("active");
  menuToggle.classList.toggle("active", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("menu-open", isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  });
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
  { threshold: 0.16 }
);

revealElements.forEach((element) => revealObserver.observe(element));

const canvas = document.getElementById("neuralCanvas");
const ctx = canvas.getContext("2d");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let width = 0;
let height = 0;
let particles = [];
let animationFrame;

function resizeCanvas() {
  const ratio = window.devicePixelRatio || 1;
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width * ratio;
  canvas.height = height * ratio;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

  const count = Math.min(90, Math.max(38, Math.floor((width * height) / 18000)));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.45,
    vy: (Math.random() - 0.5) * 0.45,
    radius: Math.random() * 1.8 + 0.8
  }));
}

function drawNetwork() {
  ctx.clearRect(0, 0, width, height);

  particles.forEach((particle) => {
    particle.x += particle.vx;
    particle.y += particle.vy;

    if (particle.x < 0 || particle.x > width) particle.vx *= -1;
    if (particle.y < 0 || particle.y > height) particle.vy *= -1;
  });

  for (let i = 0; i < particles.length; i += 1) {
    for (let j = i + 1; j < particles.length; j += 1) {
      const a = particles[i];
      const b = particles[j];
      const distance = Math.hypot(a.x - b.x, a.y - b.y);

      if (distance < 145) {
        const opacity = 1 - distance / 145;
        ctx.strokeStyle = `rgba(59, 215, 255, ${opacity * 0.24})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }

  particles.forEach((particle) => {
    const gradient = ctx.createRadialGradient(
      particle.x,
      particle.y,
      0,
      particle.x,
      particle.y,
      particle.radius * 4
    );
    gradient.addColorStop(0, "rgba(50, 245, 200, 0.92)");
    gradient.addColorStop(1, "rgba(143, 107, 255, 0)");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius * 4, 0, Math.PI * 2);
    ctx.fill();
  });

  if (!prefersReducedMotion) {
    animationFrame = requestAnimationFrame(drawNetwork);
  }
}

resizeCanvas();
drawNetwork();

window.addEventListener("resize", () => {
  cancelAnimationFrame(animationFrame);
  resizeCanvas();
  drawNetwork();
});
