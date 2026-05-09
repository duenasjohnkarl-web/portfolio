// ===== Year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Navbar scroll =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ===== Mobile menu =====
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => mobileMenu.classList.remove('open'))
);

// ===== Data =====
const skills = [
  { icon:'🗄️', name:'MySQL Database Design', level:85, desc:'Schemas, normalization, queries' },
  { icon:'🖥️', name:'Website Design', level:80, desc:'Responsive, modern interfaces' },
  { icon:'🎨', name:'UI/UX Design', level:70, desc:'Continuously learning & improving' },
  { icon:'📦', name:'SketchUp Modeling', level:78, desc:'3D conceptual modeling' },
  { icon:'✏️', name:'CAD Design', level:75, desc:'Technical drawings & plans' },
  { icon:'⚙️', name:'System & Automation', level:72, desc:'Process automation concepts' },
];

const services = [
  { icon:'🌐', title:'Website Design', desc:'Modern, responsive sites with clean architecture and crisp aesthetics.' },
  { icon:'🧩', title:'UI/UX Concepts', desc:'Wireframes and interface concepts that prioritize clarity and flow.' },
  { icon:'🗄️', title:'Database Systems', desc:'Well-structured MySQL schemas and efficient query design.' },
  { icon:'📐', title:'CAD & 3D Modeling', desc:'SketchUp and CAD models for visualization and planning.' },
  { icon:'💻', title:'Software Prototyping', desc:'Rapid prototypes for systems, automation, and proof-of-concept builds.' },
];

const projects = [
  { img:'assets/project-qquick.jpg', title:'MarSU QQuick', subtitle:'Cashiering Unit Online Queue Management System',
    desc:'Modernizes the MarSU Cashiering Unit by eliminating long lines, reducing overcrowding, and improving transaction efficiency for students and staff.',
    tags:['MySQL','Web','Queue System'], status:'Completed Proposal' },
  { img:'assets/project-splitshare.jpg', title:'SplitShare', subtitle:'Debt & Subscription Management',
    desc:'A sleek app to track shared plans, personal debts, recurring expenses, and payments through automated billing and smart payment distribution.',
    tags:['UI/UX','Mobile','Fintech'], status:'Live' },
  { img:'assets/project-rrc.jpg', title:'Ricson Record Center', subtitle:'RRC Booking & Management System',
    desc:'Digital management solution for RRC Professional Lights & Sound — automating booking requests, billing, and client inquiries in one workflow.',
    tags:['Web','Booking','MySQL'], status:'Under Development' },
  { img:'assets/project-poultrix.jpg', title:'Poultrix', subtitle:'Automated Broiler Management with CV',
    desc:'Classifies broiler chicken growth stages using computer vision, then applies appropriate feeding, lighting, and temperature control automatically.',
    tags:['Computer Vision','IoT','Automation'], status:'Concept System' },
];

const goals = [
  { icon:'🎯', year:'2025', title:'Master full-stack fundamentals', desc:'Deepen React, TypeScript, Node, and database engineering.' },
  { icon:'🧠', year:'2026', title:'Real-world capstone & internships', desc:'Ship production-grade systems with focus on UI/UX and automation.' },
  { icon:'💻', year:'2027', title:'Graduate as a Computer Engineer', desc:'Earn BS in Computer Engineering at Marinduque State University.' },
  { icon:'🚀', year:'Beyond', title:'Become a Software Engineer', desc:'Build intelligent products that solve real problems at scale.' },
];

// ===== Renderers =====
const skillsGrid = document.getElementById('skillsGrid');
skills.forEach(s => {
  skillsGrid.insertAdjacentHTML('beforeend', `
    <div class="glass skill-card reveal">
      <div class="skill-top">
        <div class="skill-icon">${s.icon}</div>
        <span class="skill-pct text-gradient">${s.level}%</span>
      </div>
      <h3>${s.name}</h3>
      <p class="muted">${s.desc}</p>
      <div class="bar"><div class="bar-fill" data-level="${s.level}"></div></div>
    </div>`);
});

const servicesGrid = document.getElementById('servicesGrid');
services.forEach(s => {
  servicesGrid.insertAdjacentHTML('beforeend', `
    <div class="glass service reveal">
      <div class="service-glow"></div>
      <div class="service-icon">${s.icon}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </div>`);
});

const projectsGrid = document.getElementById('projectsGrid');
projects.forEach(p => {
  const sCls = 'status-' + p.status.replace(/\s+/g, '-');
  projectsGrid.insertAdjacentHTML('beforeend', `
    <article class="glass project reveal">
      <div class="project-img">
        <span class="status-tag ${sCls}">${p.status}</span>
        <img src="${p.img}" alt="${p.title}" loading="lazy" />
      </div>
      <div class="project-body">
        <div class="project-head">
          <div>
            <h3>${p.title}</h3>
            <p class="project-sub">${p.subtitle}</p>
          </div>
        </div>
        <p>${p.desc}</p>
        <div class="tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
      </div>
    </article>`);
});

const visionGrid = document.getElementById('visionGrid');
goals.forEach(g => {
  visionGrid.insertAdjacentHTML('beforeend', `
    <div class="goal reveal">
      <div class="goal-dot"></div>
      <div class="glass goal-card">
        <div class="goal-top">
          <div class="goal-icon">${g.icon}</div>
          <span class="goal-year">${g.year}</span>
        </div>
        <h3>${g.title}</h3>
        <p>${g.desc}</p>
      </div>
    </div>`);
});

// ===== Reveal on scroll =====
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      // Animate skill bars
      e.target.querySelectorAll('.bar-fill').forEach(b => {
        b.style.width = b.dataset.level + '%';
      });
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ===== Contact form =====
const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  submitBtn.innerHTML = 'Message Sent ✓';
  setTimeout(() => {
    submitBtn.innerHTML = 'Send Message <span class="arrow">→</span>';
    form.reset();
  }, 3500);
});

// ===== Smooth anchor offset =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      const t = document.querySelector(id);
      if (t) {
        e.preventDefault();
        const y = t.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  });
});
