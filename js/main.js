/* ===== Surjith R — Portfolio ===== */

/* ---- EDIT YOUR DETAILS HERE ---- */
const SITE = {
  name: 'Surjith R',
  email: 'surjithdeveloper31@gmail.com',
  whatsapp: '918667357448',                       // country code + number, no + or spaces
  github: 'https://github.com/surjithprojects31creator'
};

const STATUS = { done: 'Built', build: 'In progress', concept: 'Concept' };

/* ---- PROJECTS (add or edit freely) ----
   Add a photo for a project by saving it as images/project-01.jpg, project-02.jpg ... (number matches "n") */
const PROJECTS = [
  { n: '01', title: 'Flower-Giving Robot', cat: ['robotics'], status: 'done',
    summary: 'A friendly robot that hands a flower to people with a moving arm, talks to them, and drives forward, backward, left and right.',
    tags: ['Robotics', 'Voice', 'Motors'] },
  { n: '02', title: 'Automatic Water Dispenser', cat: ['iot'], status: 'done',
    summary: 'A hands-free dispenser that gives water automatically, so nobody has to touch a button or tap.',
    tags: ['Sensors', 'Automation'] },
  { n: '03', title: 'Driver Safety System', cat: ['safety', 'iot'], status: 'done',
    summary: 'A smartwatch on the driver monitors health and reports to a unit in the vehicle. If the driver looks unwell it advises a rest; in an emergency it can park safely and alert an ambulance or saved relatives.',
    tags: ['Smartwatch', 'Health Monitor', 'Emergency Alert'] },
  { n: '04', title: 'SENTRA', cat: ['ai', 'safety'], status: 'build',
    summary: 'Smart Student Transit Recognition & Alert System. Recognises students’ faces as they board and leave a school bus and alerts their parents.',
    tags: ['ESP32-CAM', 'Face Recognition', 'Python'] },
  { n: '05', title: 'ARC-Shield', cat: ['ai', 'safety'], status: 'concept',
    summary: 'AI-watched roadside cameras that spot accidents and alert the ambulance, hospital, traffic police and tow trucks so help arrives faster and roads clear sooner.',
    tags: ['AI Vision', 'Road Safety', 'Alerts'] },
  { n: '06', title: 'ESP32 Bluetooth Car', cat: ['iot', 'robotics'], status: 'done',
    summary: 'A phone-controlled car on an ESP32 with Bluetooth, PWM speed control and a servo on the hazard button.',
    tags: ['ESP32', 'Bluetooth', 'Motor Drivers'] },
  { n: '07', title: 'Smart Home Management', cat: ['iot'], status: 'done',
    summary: 'An automatic home management system that controls household devices without manual switching.',
    tags: ['Home Automation', 'IoT'] },
  { n: '08', title: 'Gesture-to-Speech Device', cat: ['ai'], status: 'build',
    summary: 'An assistive device: show a hand signal to an ESP32 camera and it speaks the matching words aloud through a Bluetooth speaker.',
    tags: ['ESP32-CAM', 'Text-to-Speech', 'Assistive Tech'] },
  { n: '09', title: 'Voice AI Laptop Agent', cat: ['ai'], status: 'build',
    summary: 'A personal AI agent that controls the laptop by voice, replies to email and operates connected devices.',
    tags: ['AI', 'Voice', 'Automation'] }
];

const FILTERS = [['all', 'All'], ['robotics', 'Robotics'], ['iot', 'IoT'], ['ai', 'AI & Vision'], ['safety', 'Safety']];

const ICON = {
  chip: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9.5" y="9.5" width="5" height="5"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/></svg>'
};

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* ---- Header & footer (shared on every page) ---- */
function buildChrome() {
  const page = document.body.dataset.page || 'home';
  const links = [['home', 'index.html', 'Home'], ['projects', 'projects.html', 'Projects'], ['about', 'about.html', 'About'], ['order', 'order.html', 'Order']];
  const header = $('#site-header');
  if (header) header.innerHTML =
    '<header class="site-header"><div class="wrap nav">' +
    '<a class="brand" href="index.html"><span class="mstripe"><i></i><i></i><i></i></span><span>' + esc(SITE.name) + '<small>Builder · Developer</small></span></a>' +
    '<ul id="navlinks">' + links.map(l => '<li><a href="' + l[1] + '"' + (l[0] === page ? ' class="on"' : '') + '>' + l[2] + '</a></li>').join('') + '</ul>' +
    '<a class="btn red sm" href="order.html">Order a project</a>' +
    '<button class="menu-btn" id="menuBtn" aria-label="Open menu" aria-expanded="false">☰</button>' +
    '</div></header>';
  const footer = $('#site-footer');
  if (footer) footer.innerHTML =
    '<footer class="site-footer"><div class="wrap"><div class="foot-grid">' +
    '<div><a class="brand" href="index.html"><span class="mstripe"><i></i><i></i><i></i></span><span>' + esc(SITE.name) + '</span></a>' +
    '<p style="color:var(--muted);margin-top:16px;max-width:36ch">Student developer from Karur, Tamil Nadu, building IoT, robotics and AI projects — and turning your ideas into working projects.</p></div>' +
    '<div><h4>Pages</h4><ul>' + links.map(l => '<li><a href="' + l[1] + '">' + l[2] + '</a></li>').join('') + '</ul></div>' +
    '<div><h4>Contact</h4><ul>' +
    '<li><a href="mailto:' + SITE.email + '">' + SITE.email + '</a></li>' +
    '<li><a href="https://wa.me/' + SITE.whatsapp + '" target="_blank" rel="noopener">WhatsApp</a></li>' +
    '<li><a href="' + SITE.github + '" target="_blank" rel="noopener">GitHub</a></li></ul></div>' +
    '</div><div class="copy"><span>© ' + new Date().getFullYear() + ' ' + esc(SITE.name) + '. All rights reserved.</span><span>Designed &amp; built by Surjith R</span></div></div></footer>';

  const btn = $('#menuBtn'), nav = $('#navlinks');
  if (btn && nav) {
    btn.onclick = () => { const o = nav.classList.toggle('open'); btn.setAttribute('aria-expanded', o); };
    $$('a', nav).forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }
}

/* ---- Projects ---- */
function projectCard(p) {
  return '<article class="card p-card reveal" data-cat="' + p.cat.join(' ') + '">' +
    '<div class="p-media"><span class="big">' + p.n + '</span>' +
    '<img src="images/project-' + p.n + '.jpg" alt="' + esc(p.title) + '" loading="lazy" onerror="this.remove()">' +
    '<span class="status ' + p.status + '">' + STATUS[p.status] + '</span></div>' +
    '<div class="p-body"><h3>' + esc(p.title) + '</h3><p>' + esc(p.summary) + '</p>' +
    '<div class="tags">' + p.tags.map(t => '<span class="tag">' + esc(t) + '</span>').join('') + '</div></div></article>';
}

function buildProjects() {
  const featured = $('#featured');
  if (featured) featured.innerHTML = ['01', '03', '04'].map(n => projectCard(PROJECTS.find(p => p.n === n))).join('');

  const grid = $('#projectGrid');
  if (grid) {
    grid.innerHTML = PROJECTS.map(projectCard).join('');
    const bar = $('#filters');
    bar.innerHTML = FILTERS.map((f, i) => '<button class="fchip' + (i === 0 ? ' on' : '') + '" data-f="' + f[0] + '">' + f[1] + '</button>').join('');
    bar.addEventListener('click', e => {
      const b = e.target.closest('.fchip'); if (!b) return;
      $$('.fchip', bar).forEach(x => x.classList.toggle('on', x === b));
      $$('.p-card', grid).forEach(c => {
        const show = b.dataset.f === 'all' || c.dataset.cat.split(' ').includes(b.dataset.f);
        c.style.display = show ? '' : 'none';
      });
    });
    const count = $('#projCount'); if (count) count.textContent = PROJECTS.length;
  }
}

/* ---- Scroll reveal + skill bars ---- */
function watch() {
  const io = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.classList.add('in');
      $$('.bar i[data-w]', en.target).forEach(i => { i.style.width = i.dataset.w + '%'; });
      io.unobserve(en.target);
    });
  }, { threshold: .12 }) : null;
  $$('.reveal').forEach(el => {
    if (io) io.observe(el); else { el.classList.add('in'); $$('.bar i[data-w]', el).forEach(i => { i.style.width = i.dataset.w + '%'; }); }
  });
}

/* ---- Order form ---- */
function orderForm() {
  const f = $('#orderForm'); if (!f) return;
  const err = $('#formErr');

  function read() {
    const d = Object.fromEntries(new FormData(f));
    Object.keys(d).forEach(k => d[k] = String(d[k]).trim());
    return d;
  }
  function check(d) {
    if (!d.name) return 'Please enter your name.';
    if (!d.contact) return 'Please add a phone number or email so I can reply.';
    if (d.idea.length < 15) return 'Please describe your idea in a few more words (at least 15 characters).';
    return '';
  }
  function message(d) {
    return 'Hello ' + SITE.name + ', I would like to order a project.\n\n' +
      'Name: ' + d.name + '\n' +
      'Contact: ' + d.contact + '\n' +
      'Project type: ' + d.type + '\n' +
      'Budget: ' + d.budget + '\n' +
      'Needed by: ' + (d.deadline || 'Flexible') + '\n\n' +
      'My idea:\n' + d.idea;
  }
  function go(kind) {
    const d = read(), e = check(d);
    err.textContent = e;
    if (e) return;
    const text = message(d);
    if (kind === 'wa') window.open('https://wa.me/' + SITE.whatsapp + '?text=' + encodeURIComponent(text), '_blank', 'noopener');
    else if (kind === 'mail') window.location.href = 'mailto:' + SITE.email + '?subject=' + encodeURIComponent('Project order: ' + d.type) + '&body=' + encodeURIComponent(text);
    else {
      const done = () => { err.style.color = '#8df0b6'; err.textContent = 'Copied! Paste it into any chat or email.'; setTimeout(() => { err.style.color = ''; err.textContent = ''; }, 2600); };
      try { navigator.clipboard.writeText(text).then(done, () => { err.textContent = 'Could not copy automatically.'; }); }
      catch (x) { err.textContent = 'Could not copy automatically.'; }
    }
  }
  $('#sendWA').onclick = () => go('wa');
  $('#sendMail').onclick = () => go('mail');
  $('#copyMsg').onclick = () => go('copy');
  f.addEventListener('submit', e => e.preventDefault());
}

$$('[data-icon]').forEach(el => { el.innerHTML = ICON[el.dataset.icon] || ''; });
buildChrome();
buildProjects();
orderForm();
watch();
