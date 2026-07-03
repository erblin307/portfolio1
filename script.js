:root {
  --black: #07111f;
  --navy: #0f172a;
  --panel: rgba(9, 24, 45, 0.72);
  --panel-strong: rgba(12, 28, 52, 0.92);
  --line: rgba(68, 151, 255, 0.18);
  --line-strong: rgba(34, 211, 238, 0.48);
  --blue: #2563eb;
  --cyan: #22d3ee;
  --violet: #8b5cf6;
  --white: #ffffff;
  --muted: #9fb0c8;
  --soft: #d8e7ff;
  --shadow: 0 28px 90px rgba(0, 0, 0, 0.42);
  --glow: 0 0 42px rgba(34, 211, 238, 0.22);
  --radius: 18px;
  --max: 1180px;
  --header: 78px;
  --font: "Space Grotesk", "Sora", "Manrope", "Inter", "Segoe UI", system-ui, sans-serif;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: var(--header);
}

body {
  margin: 0;
  min-height: 100vh;
  color: var(--white);
  background:
    radial-gradient(circle at 18% 8%, rgba(37, 99, 235, 0.24), transparent 32%),
    radial-gradient(circle at 82% 18%, rgba(34, 211, 238, 0.14), transparent 30%),
    linear-gradient(180deg, #050b16 0%, var(--black) 42%, #050912 100%);
  font-family: var(--font);
  overflow-x: hidden;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: -4;
  pointer-events: none;
  background:
    linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  background-size: 92px 92px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.78), transparent 88%);
}

body.menu-open {
  overflow: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
textarea {
  font: inherit;
}

.loader {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: grid;
  place-items: center;
  background: #050b16;
  transition: opacity 0.5s ease, visibility 0.5s ease;
}

.loader.hidden {
  opacity: 0;
  visibility: hidden;
  display: none;
}

.loader-mark,
.logo-mark {
  position: relative;
  display: inline-block;
  width: 54px;
  height: 38px;
}

.loader-mark span,
.logo-mark span {
  position: absolute;
  left: 0;
  height: 6px;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--blue), var(--cyan));
  box-shadow: 0 0 20px rgba(34, 211, 238, 0.45);
}

.loader-mark span:nth-child(1),
.logo-mark span:nth-child(1) {
  top: 0;
  left: 14px;
  width: 40px;
}

.loader-mark span:nth-child(2),
.logo-mark span:nth-child(2) {
  top: 11px;
  width: 28px;
}

.loader-mark span:nth-child(3),
.logo-mark span:nth-child(3) {
  top: 22px;
  left: 8px;
  width: 34px;
}

.loader-mark span:nth-child(4),
.logo-mark span:nth-child(4) {
  top: 33px;
  left: 14px;
  width: 40px;
}

.logo-mark::before {
  content: "";
  position: absolute;
  left: -8px;
  top: 10px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--blue);
  box-shadow: 8px 11px 0 var(--cyan), 0 22px 0 var(--blue);
}

.logo-mark.mini {
  transform: scale(1.25);
}

.signal-canvas {
  position: fixed;
  inset: 0;
  z-index: -3;
  width: 100%;
  height: 100%;
  opacity: 0.55;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  height: var(--header);
  border-bottom: 1px solid var(--line);
  background: rgba(5, 11, 22, 0.78);
  backdrop-filter: blur(22px);
}

.navbar {
  width: min(100% - 40px, var(--max));
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  min-width: fit-content;
}

.brand-text {
  display: grid;
  gap: 3px;
}

.brand-text strong {
  font-size: 1.15rem;
  letter-spacing: 0.01em;
}

.brand-text small {
  color: var(--muted);
  font-size: 0.72rem;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-menu a {
  display: inline-flex;
  min-height: 42px;
  align-items: center;
  border-radius: 999px;
  padding: 0 12px;
  color: var(--muted);
  font-size: 0.9rem;
  transition: color 0.2s ease, background 0.2s ease;
}

.nav-menu a:hover,
.nav-menu a:focus-visible {
  color: var(--white);
  background: rgba(37, 99, 235, 0.14);
  outline: none;
}

.nav-actions,
.language-switcher {
  display: flex;
  align-items: center;
}

.nav-actions {
  gap: 10px;
}

.language-switcher {
  gap: 3px;
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 4px;
  background: rgba(255, 255, 255, 0.045);
}

.language-btn {
  display: inline-grid;
  min-width: 34px;
  min-height: 30px;
  place-items: center;
  border: 0;
  border-radius: 999px;
  color: var(--muted);
  background: transparent;
  font-size: 0.72rem;
  font-weight: 800;
  cursor: pointer;
}

.language-btn.active,
.language-btn:hover,
.language-btn:focus-visible {
  color: #03101a;
  background: linear-gradient(135deg, var(--cyan), #ffffff);
  outline: none;
}

.menu-toggle {
  display: none;
  width: 42px;
  height: 42px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.045);
  cursor: pointer;
}

.floating-menu-toggle {
  position: fixed;
  top: 17px;
  right: 14px;
  z-index: 140;
}

.menu-toggle span {
  display: block;
  width: 18px;
  height: 2px;
  margin: 4px auto;
  background: var(--white);
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.menu-toggle.active span:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

.menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

.hero,
.section,
.final-cta,
.site-footer {
  width: min(100% - 40px, var(--max));
  margin: 0 auto;
}

.hero {
  position: relative;
  min-height: calc(100vh - var(--header));
  display: grid;
  align-items: center;
  padding: 88px 0 72px;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: -2;
  overflow: hidden;
}

.wave-grid {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 6%;
  height: 220px;
  background:
    radial-gradient(ellipse at 50% 90%, rgba(34, 211, 238, 0.38), transparent 55%),
    repeating-linear-gradient(8deg, transparent 0 30px, rgba(34, 211, 238, 0.18) 31px, transparent 32px),
    repeating-linear-gradient(172deg, transparent 0 44px, rgba(37, 99, 235, 0.16) 45px, transparent 46px);
  transform: perspective(720px) rotateX(58deg);
  transform-origin: bottom;
  animation: wavePulse 7s ease-in-out infinite;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(28px);
  opacity: 0.5;
}

.orb-a {
  width: 220px;
  height: 220px;
  left: 2%;
  top: 16%;
  background: rgba(37, 99, 235, 0.35);
}

.orb-b {
  width: 180px;
  height: 180px;
  right: 8%;
  bottom: 16%;
  background: rgba(34, 211, 238, 0.28);
}

.hero-inner {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 56px;
  align-items: center;
}

.hero-inner > *,
.hero-copy {
  min-width: 0;
}

.eyebrow {
  margin: 0 0 16px;
  color: var(--cyan);
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

h1,
h2,
h3,
p {
  overflow-wrap: anywhere;
}

h1,
h2,
h3 {
  margin: 0;
  letter-spacing: 0;
}

h1 {
  max-width: 760px;
  font-size: clamp(3rem, 7vw, 6.6rem);
  line-height: 0.92;
}

h2 {
  max-width: 860px;
  font-size: clamp(2rem, 4.5vw, 4rem);
  line-height: 1.02;
}

h3 {
  font-size: 1.16rem;
  line-height: 1.25;
}

.hero-text {
  max-width: 690px;
  margin: 26px 0 0;
  color: var(--soft);
  font-size: clamp(1.04rem, 1.6vw, 1.24rem);
  line-height: 1.75;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 34px;
}

.btn {
  display: inline-flex;
  min-height: 50px;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 999px;
  padding: 0 22px;
  font-weight: 850;
  transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
}

.btn:hover,
.btn:focus-visible {
  transform: translateY(-2px);
  outline: none;
}

.btn-primary {
  color: #03101a;
  background: linear-gradient(135deg, var(--cyan), #ffffff);
  box-shadow: 0 18px 45px rgba(34, 211, 238, 0.26);
}

.btn-secondary {
  color: var(--white);
  border-color: var(--line-strong);
  background: rgba(255, 255, 255, 0.045);
}

.trust-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 26px;
}

.trust-row span,
.tech-cloud span {
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 9px 12px;
  color: var(--soft);
  background: rgba(255, 255, 255, 0.045);
  font-size: 0.86rem;
}

.hero-visual {
  position: relative;
  min-height: 520px;
}

.system-card,
.glass-panel,
.service-card,
.project-card,
.industry-card,
.quote-card,
.blog-card,
.info-card,
.map-placeholder,
.stats-grid article {
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.025)),
    var(--panel);
  box-shadow: var(--shadow);
  backdrop-filter: blur(20px);
}

.system-card-main {
  position: absolute;
  inset: 34px 0 auto auto;
  width: min(100%, 470px);
  min-height: 430px;
  overflow: hidden;
}

.card-top {
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid var(--line);
  padding: 16px;
}

.card-top span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--cyan);
}

.card-top span:nth-child(2) {
  background: var(--blue);
}

.card-top span:nth-child(3) {
  background: var(--violet);
}

.card-top small {
  margin-left: auto;
  color: var(--muted);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.14em;
}

.orbit-system {
  position: relative;
  height: 360px;
  display: grid;
  place-items: center;
}

.orbit-system::before,
.orbit-system::after {
  content: "";
  position: absolute;
  border: 1px solid rgba(34, 211, 238, 0.2);
  border-radius: 50%;
  animation: rotateRing 18s linear infinite;
}

.orbit-system::before {
  width: 250px;
  height: 250px;
}

.orbit-system::after {
  width: 330px;
  height: 180px;
  transform: rotate(-18deg);
}

.core-node {
  display: grid;
  width: 132px;
  height: 132px;
  place-items: center;
  border: 1px solid var(--line-strong);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(34, 211, 238, 0.2), rgba(37, 99, 235, 0.08));
  box-shadow: var(--glow);
}

.orbit-node {
  position: absolute;
  display: grid;
  width: 56px;
  height: 56px;
  place-items: center;
  border: 1px solid var(--line-strong);
  border-radius: 50%;
  color: var(--cyan);
  background: rgba(7, 17, 31, 0.86);
  font-size: 0.76rem;
  font-weight: 850;
}

.node-1 { top: 54px; left: 86px; }
.node-2 { top: 72px; right: 86px; }
.node-3 { bottom: 62px; left: 108px; }
.node-4 { bottom: 84px; right: 92px; }

.metric-tile {
  position: absolute;
  display: grid;
  gap: 4px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 18px;
  background: rgba(5, 16, 31, 0.82);
  box-shadow: var(--glow);
}

.metric-tile strong {
  color: var(--cyan);
  font-size: 2rem;
}

.metric-tile span {
  color: var(--muted);
  font-size: 0.82rem;
}

.tile-a { left: 0; top: 72px; }
.tile-b { right: 20px; bottom: 20px; }

.section {
  padding: 96px 0;
}

.section-heading,
.section-label {
  margin-bottom: 40px;
}

.split-section {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 28px;
  align-items: start;
}

.about-panel,
.careers-panel {
  padding: 30px;
}

.about-panel p,
.service-card p,
.project-card p,
.process-timeline p,
.quote-card p,
.blog-card p,
.faq-list p,
.contact-info strong,
.site-footer span,
.site-footer p {
  color: var(--muted);
  line-height: 1.7;
}

.about-list {
  display: grid;
  gap: 12px;
  margin-top: 28px;
}

.about-list span {
  border-left: 2px solid var(--cyan);
  padding-left: 14px;
  color: var(--soft);
}

.stats-grid,
.service-grid,
.case-grid,
.portfolio-grid,
.industry-grid,
.testimonial-grid,
.blog-grid,
.contact-grid {
  display: grid;
  gap: 18px;
}

.stats-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.stats-grid article {
  padding: 24px;
}

.stats-grid strong {
  display: block;
  color: var(--cyan);
  font-size: 2.4rem;
}

.stats-grid span {
  color: var(--muted);
}

.service-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.service-card {
  min-height: 470px;
  padding: 24px;
  transition: transform 0.22s ease, border-color 0.22s ease, background 0.22s ease;
}

.service-card:hover,
.project-card:hover,
.industry-card:hover,
.blog-card:hover {
  transform: translateY(-6px);
  border-color: var(--line-strong);
  background: var(--panel-strong);
}

.icon-line {
  display: inline-grid;
  width: 44px;
  height: 44px;
  margin-bottom: 22px;
  place-items: center;
  border: 1px solid var(--line-strong);
  border-radius: 50%;
  color: var(--cyan);
  font-size: 0.82rem;
  font-weight: 900;
}

.service-card p {
  min-height: 78px;
}

.service-points {
  display: grid;
  gap: 8px;
  margin: 22px 0 0;
  padding: 0;
  list-style: none;
}

.service-points li {
  display: grid;
  grid-template-columns: 92px 1fr;
  gap: 10px;
  align-items: start;
  border-top: 1px solid rgba(68, 151, 255, 0.12);
  padding-top: 10px;
  color: var(--soft);
  font-size: 0.86rem;
}

.service-points span {
  color: var(--cyan);
  font-size: 0.7rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.service-points strong {
  color: var(--soft);
  font-size: 0.86rem;
  font-weight: 650;
  line-height: 1.45;
}

.service-cta {
  display: inline-flex;
  width: fit-content;
  margin-top: 22px;
  border-bottom: 1px solid rgba(34, 211, 238, 0.55);
  color: var(--cyan);
  font-weight: 850;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.service-cta:hover,
.service-cta:focus-visible {
  color: var(--white);
  border-color: var(--white);
  outline: none;
}

.process-timeline {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
  background: rgba(255, 255, 255, 0.035);
}

.process-timeline article {
  min-height: 230px;
  padding: 28px;
  border-right: 1px solid var(--line);
}

.process-timeline article:last-child {
  border-right: 0;
}

.process-timeline span {
  display: inline-block;
  margin-bottom: 28px;
  color: var(--cyan);
  font-weight: 900;
}

.case-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.case-card {
  min-height: 270px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 28px;
  background:
    radial-gradient(circle at 90% 10%, rgba(34, 211, 238, 0.16), transparent 34%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.025)),
    var(--panel);
  box-shadow: var(--shadow);
  backdrop-filter: blur(20px);
  transition: transform 0.22s ease, border-color 0.22s ease;
}

.case-card:hover {
  transform: translateY(-6px);
  border-color: var(--line-strong);
}

.case-card span {
  color: var(--cyan);
  font-size: 0.76rem;
  font-weight: 900;
  letter-spacing: 0.14em;
}

.case-card h3 {
  margin-top: 46px;
}

.case-card p {
  color: var(--muted);
  line-height: 1.7;
}

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 24px;
}

.filter-btn {
  min-height: 40px;
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 0 16px;
  color: var(--muted);
  background: rgba(255, 255, 255, 0.045);
  cursor: pointer;
}

.filter-btn.active,
.filter-btn:hover,
.filter-btn:focus-visible {
  color: #03101a;
  background: var(--cyan);
  outline: none;
}

.portfolio-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.project-card,
.blog-card,
.quote-card {
  padding: 22px;
  transition: transform 0.22s ease, border-color 0.22s ease;
}

.project-card.is-hidden {
  display: none;
}

.mockup {
  display: grid;
  min-height: 160px;
  margin-bottom: 22px;
  place-items: center;
  border: 1px solid var(--line);
  border-radius: 14px;
  background:
    radial-gradient(circle at 70% 20%, rgba(34, 211, 238, 0.36), transparent 28%),
    repeating-linear-gradient(155deg, transparent 0 34px, rgba(34, 211, 238, 0.12) 35px, transparent 36px),
    rgba(5, 14, 29, 0.72);
}

.mockup span {
  color: var(--white);
  font-size: 1.35rem;
  font-weight: 900;
}

.project-card a {
  display: inline-flex;
  margin-top: 16px;
  color: var(--cyan);
  font-weight: 850;
}

.tech-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.tech-cloud span {
  padding: 13px 16px;
}

.industry-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.industry-card {
  min-height: 156px;
  padding: 24px;
  transition: transform 0.22s ease, border-color 0.22s ease;
}

.industry-card span,
.blog-card span {
  color: var(--cyan);
  font-size: 0.76rem;
  font-weight: 900;
  letter-spacing: 0.14em;
}

.industry-card h3 {
  margin-top: 30px;
}

.testimonial-grid,
.blog-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.quote-card p {
  margin-top: 0;
  font-size: 1.08rem;
}

.quote-card span {
  color: var(--cyan);
  font-weight: 850;
}

.blog-card h3 {
  margin-top: 18px;
}

.careers-panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.faq-list {
  display: grid;
  gap: 12px;
}

.faq-list details {
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 20px 22px;
  background: rgba(255, 255, 255, 0.045);
}

.faq-list summary {
  color: var(--white);
  font-weight: 850;
  cursor: pointer;
}

.contact-grid {
  grid-template-columns: 1.08fr 0.92fr;
}

.contact-form {
  display: grid;
  gap: 12px;
  padding: 28px;
}

.contact-form label {
  color: var(--white);
  font-weight: 850;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 15px 16px;
  color: var(--white);
  background: rgba(255, 255, 255, 0.045);
  outline: none;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: var(--cyan);
  box-shadow: 0 0 0 4px rgba(34, 211, 238, 0.12);
}

.contact-form textarea {
  resize: vertical;
}

.contact-form .btn {
  width: fit-content;
  margin-top: 8px;
  cursor: pointer;
}

.contact-info {
  display: grid;
  gap: 14px;
}

.info-card {
  display: grid;
  gap: 6px;
  padding: 20px;
}

.info-card span {
  color: var(--cyan);
  font-size: 0.76rem;
  font-weight: 900;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.map-placeholder {
  min-height: 190px;
  display: grid;
  place-items: center;
  padding: 20px;
  text-align: center;
  background:
    radial-gradient(circle at 55% 40%, rgba(34, 211, 238, 0.16), transparent 40%),
    linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    var(--panel);
  background-size: auto, 32px 32px, 32px 32px, auto;
}

.map-placeholder span {
  color: var(--muted);
}

.map-placeholder strong {
  color: var(--white);
}

.final-cta {
  padding: 90px 0 110px;
}

.final-cta-inner {
  display: grid;
  place-items: center;
  border: 1px solid var(--line-strong);
  border-radius: 30px;
  padding: 70px 30px;
  text-align: center;
  background:
    radial-gradient(circle at 50% 0%, rgba(34, 211, 238, 0.26), transparent 42%),
    rgba(255, 255, 255, 0.045);
  box-shadow: var(--shadow);
}

.final-cta h2 {
  margin: 28px 0;
}

.site-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  border-top: 1px solid var(--line);
  padding: 30px 0 44px;
}

.site-footer div {
  display: grid;
  gap: 4px;
}

.reveal {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes wavePulse {
  0%, 100% { opacity: 0.56; transform: perspective(720px) rotateX(58deg) translateY(0); }
  50% { opacity: 0.9; transform: perspective(720px) rotateX(58deg) translateY(-12px); }
}

@keyframes rotateRing {
  to { transform: rotate(360deg); }
}

@media (max-width: 1120px) {
  .nav-menu {
    gap: 0;
  }

  .nav-menu a {
    padding: 0 9px;
  }

  .service-grid,
  .case-grid,
  .portfolio-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .menu-toggle {
    display: block;
  }

  .nav-menu {
    position: fixed;
    top: var(--header);
    left: 20px;
    right: 20px;
    display: grid;
    gap: 6px;
    border: 1px solid var(--line);
    border-radius: var(--radius);
    padding: 14px;
    background: rgba(5, 11, 22, 0.96);
    box-shadow: var(--shadow);
    transform: translateY(-18px);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
  }

  .nav-menu.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-menu a {
    width: 100%;
  }

  .hero-inner,
  .split-section,
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .hero-visual {
    min-height: 440px;
  }

  .system-card-main {
    position: relative;
    inset: auto;
    width: 100%;
  }

  .stats-grid,
  .process-timeline,
  .case-grid,
  .industry-grid,
  .testimonial-grid,
  .blog-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .process-timeline article {
    border-bottom: 1px solid var(--line);
  }
}

@media (max-width: 640px) {
  :root {
    --header: 72px;
  }

  .hero,
  .section,
  .final-cta,
  .site-footer,
  .navbar {
    width: min(100% - 28px, var(--max));
  }

  .navbar {
    position: relative;
  }

  .nav-menu {
    position: fixed;
    top: var(--header);
    left: 0;
    right: 0;
    display: flex;
    gap: 6px;
    overflow-x: auto;
    border: 0;
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    border-radius: 0;
    padding: 8px 14px;
    background: rgba(5, 11, 22, 0.92);
    box-shadow: none;
    transform: none;
    opacity: 1;
    visibility: visible;
    backdrop-filter: blur(18px);
  }

  .nav-menu a {
    width: auto;
    white-space: nowrap;
  }

  .brand-text {
    display: none;
  }

  .language-btn {
    min-width: 25px;
    min-height: 28px;
    font-size: 0.68rem;
  }

  .language-switcher {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding: 3px;
  }

  .nav-actions {
    gap: 0;
  }

  .menu-toggle {
    position: fixed;
    top: 17px;
    right: 14px;
    z-index: 130;
    display: block !important;
    width: 38px;
    height: 38px;
  }

  .nav-actions > .menu-toggle {
    display: none !important;
  }

  .logo-mark {
    width: 48px;
    transform: scale(0.92);
    transform-origin: left center;
  }

  .hero {
    padding-top: 112px;
  }

  h1 {
    max-width: 100%;
    font-size: 2.25rem;
    line-height: 1.05;
  }

  .hero-text {
    font-size: 1rem;
  }

  .hero-actions,
  .careers-panel,
  .site-footer {
    align-items: stretch;
    flex-direction: column;
  }

  .btn,
  .contact-form .btn {
    width: 100%;
  }

  .stats-grid,
  .service-grid,
  .portfolio-grid,
  .process-timeline,
  .case-grid,
  .industry-grid,
  .testimonial-grid,
  .blog-grid {
    grid-template-columns: 1fr;
  }

  .service-points li {
    grid-template-columns: 1fr;
    gap: 4px;
  }

  .process-timeline article {
    border-right: 0;
  }

  .tile-a,
  .tile-b {
    position: static;
    margin-top: 14px;
  }

  .hero-visual {
    display: grid;
    min-height: auto;
  }

  .system-card-main {
    min-height: 390px;
  }

  .final-cta-inner {
    padding: 52px 20px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

.floating-menu-toggle {
  display: none;
}

@media (max-width: 900px) {
  .floating-menu-toggle {
    display: block !important;
    position: fixed !important;
    top: 17px !important;
    right: 14px !important;
    z-index: 9999 !important;
    border-color: rgba(34, 211, 238, 0.65);
    background: rgba(5, 16, 31, 0.92);
  }
}
