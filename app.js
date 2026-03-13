// ===== STATE =====
let currentPage = 'home';
let selectedAgeGroup = null;
let eligibleSchemes = [];
let currentResultFilter = 'all';

// ===== NAVIGATION =====
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  document.querySelectorAll('.nav__link').forEach(l => l.classList.remove('active'));
  const link = document.querySelector(`.nav__link[data-page="${page}"]`);
  if (link) link.classList.add('active');
  currentPage = page;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById('main-nav').classList.remove('open');
  if (page === 'all-schemes') renderAllSchemes();
  if (page === 'eligibility') resetEligibility();
}

// Mobile nav toggle
document.getElementById('nav-toggle').addEventListener('click', () => {
  document.getElementById('main-nav').classList.toggle('open');
});

// Header scroll effect
window.addEventListener('scroll', () => {
  document.getElementById('header').classList.toggle('scrolled', window.scrollY > 20);
});

// ===== CATEGORIES =====
const CATEGORIES = [
  { icon: '🎓', name: 'Education', filter: 'Education' },
  { icon: '🌾', name: 'Agriculture', filter: 'Agriculture' },
  { icon: '👩', name: 'Women Welfare', filter: 'Women Welfare' },
  { icon: '🏥', name: 'Health', filter: 'Health' },
  { icon: '🏠', name: 'Housing', filter: 'Housing' },
  { icon: '💼', name: 'Employment', filter: 'Employment' },
  { icon: '👶', name: 'Child Welfare', filter: 'Child Welfare' },
  { icon: '♿', name: 'Disability', filter: 'Disability' },
  { icon: '🏦', name: 'Insurance', filter: 'Insurance' },
  { icon: '🧓', name: 'Pension', filter: 'Pension' },
  { icon: '👧', name: 'Girl Child', filter: 'Girl Child' },
  { icon: '🛠️', name: 'Self Employment', filter: 'Self Employment' },
];

function initCategories() {
  const grid = document.getElementById('cat-grid');
  grid.innerHTML = CATEGORIES.map(c => {
    const count = SCHEMES_DB.filter(s => s.category === c.filter).length;
    return `<div class="cat-card" onclick="filterByCategory('${c.filter}')">
      <div class="cat-card__icon">${c.icon}</div>
      <div class="cat-card__name">${c.name}</div>
      <div class="cat-card__count">${count} Scheme${count !== 1 ? 's' : ''}</div>
    </div>`;
  }).join('');
}

function filterByCategory(cat) {
  showPage('all-schemes');
  document.getElementById('cat-filter').value = cat;
  searchSchemes();
}

// ===== FEATURED SCHEMES =====
function initFeatured() {
  const featured = SCHEMES_DB.filter(s => [1, 3, 5, 26, 30, 32].includes(s.id));
  document.getElementById('featured-grid').innerHTML = featured.map(s => schemeCardHTML(s)).join('');
}

// ===== SCHEME CARD HTML =====
function schemeCardHTML(s) {
  const badgeClass = s.government === 'Central' ? 'central' : 'state';
  const tags = s.tags.slice(0, 3).map(t => `<span class="scheme-card__tag">${t}</span>`).join('');
  return `<div class="scheme-card" onclick="openScheme(${s.id})">
    <div class="scheme-card__header">
      <span class="scheme-card__badge scheme-card__badge--${badgeClass}">${s.government}</span>
      <span class="scheme-card__category">${s.category}</span>
    </div>
    <div class="scheme-card__title">${s.name}</div>
    <div class="scheme-card__desc">${s.description}</div>
    <div class="scheme-card__footer">
      <div class="scheme-card__tags">${tags}</div>
      <span class="btn btn--sm btn--primary">View →</span>
    </div>
  </div>`;
}

// ===== MODAL =====
function openScheme(id) {
  const s = SCHEMES_DB.find(x => x.id === id);
  if (!s) return;
  const badgeClass = s.government === 'Central' ? 'scheme-card__badge--central' : 'scheme-card__badge--state';
  document.getElementById('modal-badge').className = 'modal__badge ' + badgeClass;
  document.getElementById('modal-badge').textContent = s.government + ' Government';
  document.getElementById('modal-title').textContent = s.name;
  document.getElementById('modal-desc').textContent = s.description;
  document.getElementById('modal-benefits').textContent = s.benefits;
  document.getElementById('modal-eligibility').textContent = s.eligibility;
  document.getElementById('modal-docs').innerHTML = s.documents.map(d => `<li>${d}</li>`).join('');
  document.getElementById('modal-link').href = s.link;
  document.getElementById('scheme-modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('scheme-modal').classList.remove('active');
  document.body.style.overflow = '';
}
document.getElementById('scheme-modal').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeModal();
});

// ===== ALL SCHEMES =====
function renderAllSchemes() {
  const cats = [...new Set(SCHEMES_DB.map(s => s.category))].sort();
  const catFilter = document.getElementById('cat-filter');
  if (catFilter.options.length <= 1) {
    cats.forEach(c => { const o = document.createElement('option'); o.value = c; o.textContent = c; catFilter.appendChild(o); });
  }
  searchSchemes();
}

function searchSchemes() {
  const query = document.getElementById('search-input').value.toLowerCase();
  const gov = document.getElementById('gov-filter').value;
  const cat = document.getElementById('cat-filter').value;
  let filtered = SCHEMES_DB.filter(s => {
    if (query && !s.name.toLowerCase().includes(query) && !s.description.toLowerCase().includes(query) && !s.tags.some(t => t.includes(query))) return false;
    if (gov !== 'all' && s.government !== gov) return false;
    if (cat !== 'all' && s.category !== cat) return false;
    return true;
  });
  document.getElementById('all-schemes-grid').innerHTML = filtered.length
    ? filtered.map(s => schemeCardHTML(s)).join('')
    : `<div class="no-results"><div class="no-results__icon">🔍</div><div class="no-results__title">No schemes found</div><div class="no-results__desc">Try adjusting your search or filters</div></div>`;
}

// ===== ELIGIBILITY CHECKER =====
function resetEligibility() {
  selectedAgeGroup = null;
  eligibleSchemes = [];
  goToStep(1);
  document.querySelectorAll('.age-card').forEach(c => c.classList.remove('selected'));
}

function selectAgeGroup(group) {
  selectedAgeGroup = group;
  document.querySelectorAll('.age-card').forEach(c => c.classList.remove('selected'));
  document.getElementById('age-' + group).classList.add('selected');
  setTimeout(() => {
    buildForm(group);
    goToStep(2);
  }, 300);
}

function goToStep(step) {
  document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
  document.getElementById('step-' + step).classList.add('active');
  document.querySelectorAll('.progress-bar__step').forEach(s => {
    const sNum = parseInt(s.dataset.step);
    s.classList.remove('active', 'done');
    if (sNum === step) s.classList.add('active');
    else if (sNum < step) s.classList.add('done');
  });
}

function buildForm(group) {
  const f = document.getElementById('form-fields');
  let html = '';

  if (group === 'under3') {
    document.getElementById('form-title').textContent = 'Child Details (Under 3 Years)';
    html = `
      <div class="form-section-title">👶 Child Details</div>
      <div class="form-row">
        <div class="form-group"><label>Child Name</label><input type="text" name="name" required placeholder="Enter child's name"></div>
        <div class="form-group"><label>Parent Name</label><input type="text" name="parent" required placeholder="Enter parent's name"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Date of Birth</label><input type="date" name="dob" required></div>
        <div class="form-group"><label>Gender</label><select name="gender" required><option value="">Select Gender</option><option value="male">Male</option><option value="female">Female</option><option value="other">Other</option></select></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Caste Category</label><select name="caste" required><option value="">Select Category</option><option value="general">General</option><option value="obc">OBC</option><option value="sc">SC</option><option value="st">ST</option></select></div>
        <div class="form-group"><label>State</label><select name="state" required><option value="">Select State</option><option value="Tamil Nadu">Tamil Nadu</option><option value="Other">Other State</option></select></div>
      </div>
      <div class="form-group"><label>District</label><input type="text" name="district" placeholder="Enter district name"></div>`;
  } else if (group === 'under18') {
    document.getElementById('form-title').textContent = 'Student Details (Under 18 Years)';
    html = `
      <div class="form-section-title">🧑‍🎓 Student Details</div>
      <div class="form-row">
        <div class="form-group"><label>Name</label><input type="text" name="name" required placeholder="Enter your name"></div>
        <div class="form-group"><label>Age</label><input type="number" name="age" min="3" max="17" required placeholder="Enter age"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Gender</label><select name="gender" required><option value="">Select Gender</option><option value="male">Male</option><option value="female">Female</option><option value="other">Other</option></select></div>
        <div class="form-group"><label>Education Level</label><select name="education" required><option value="">Select Level</option><option value="primary">Primary (1-5)</option><option value="middle">Middle (6-8)</option><option value="secondary">Secondary (9-10)</option><option value="higher_secondary">Higher Secondary (11-12)</option></select></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>School Type</label><select name="school_type"><option value="">Select Type</option><option value="government">Government School</option><option value="aided">Government Aided</option><option value="private">Private School</option></select></div>
        <div class="form-group"><label>Caste Category</label><select name="caste" required><option value="">Select Category</option><option value="general">General</option><option value="obc">OBC</option><option value="sc">SC</option><option value="st">ST</option></select></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>State</label><select name="state" required><option value="">Select State</option><option value="Tamil Nadu">Tamil Nadu</option><option value="Other">Other State</option></select></div>
        <div class="form-group"><label>District</label><input type="text" name="district" placeholder="Enter district name"></div>
      </div>`;
  } else {
    document.getElementById('form-title').textContent = 'Your Details (Above 18 Years)';
    html = `
      <div class="form-section-title">👤 Basic Information</div>
      <div class="form-row">
        <div class="form-group"><label>Name</label><input type="text" name="name" required placeholder="Enter your name"></div>
        <div class="form-group"><label>Age</label><input type="number" name="age" min="18" max="120" required placeholder="Enter your age"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Gender</label><select name="gender" required><option value="">Select Gender</option><option value="male">Male</option><option value="female">Female</option><option value="other">Other</option></select></div>
        <div class="form-group"><label>Education</label><select name="education"><option value="">Select Education</option><option value="no_education">No Formal Education</option><option value="primary">Primary</option><option value="secondary">Secondary</option><option value="higher_secondary">Higher Secondary</option><option value="graduate">Graduate</option><option value="post_graduate">Post Graduate</option></select></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Caste Category</label><select name="caste" required><option value="">Select Category</option><option value="general">General</option><option value="obc">OBC</option><option value="sc">SC</option><option value="st">ST</option></select></div>
        <div class="form-group"><label>State</label><select name="state" required><option value="">Select State</option><option value="Tamil Nadu">Tamil Nadu</option><option value="Other">Other State</option></select></div>
      </div>
      <div class="form-group"><label>District</label><input type="text" name="district" placeholder="Enter district name"></div>

      <div class="form-section-title">💼 Employment Information</div>
      <div class="form-row">
        <div class="form-group"><label>Employment Status</label><select name="employment" required><option value="">Select Status</option><option value="employed">Employed</option><option value="unemployed">Unemployed</option><option value="self_employed">Self Employed</option><option value="retired">Retired</option></select></div>
        <div class="form-group"><label>Occupation</label><select name="occupation"><option value="">Select Occupation</option><option value="farmer">Farmer</option><option value="government">Government Employee</option><option value="private">Private Sector</option><option value="self_employed">Self Employed / Business</option><option value="daily_wage">Daily Wage Worker</option><option value="other">Other</option></select></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Monthly Salary (₹)</label><input type="number" name="salary" min="0" placeholder="Enter monthly salary"></div>
        <div class="form-group"><label>Annual Family Income (₹)</label><input type="number" name="income" min="0" placeholder="Enter annual family income"></div>
      </div>

      <div class="form-section-title">📌 Additional Information</div>
      <div class="checkbox-group"><input type="checkbox" id="is_farmer" name="is_farmer"><label for="is_farmer">I am a Farmer</label></div>
      <div class="checkbox-group"><input type="checkbox" id="is_student" name="is_student"><label for="is_student">I am a Student</label></div>
      <div class="checkbox-group"><input type="checkbox" id="is_self_employed" name="is_self_employed"><label for="is_self_employed">I am Self Employed</label></div>
      <div class="checkbox-group"><input type="checkbox" id="has_disability" name="has_disability"><label for="has_disability">I have a Disability</label></div>
      <div class="checkbox-group"><input type="checkbox" id="is_woman_special" name="is_woman_special"><label for="is_woman_special">I am a Widow / Single Mother / Destitute Woman</label></div>`;
  }
  f.innerHTML = html;
}

// ===== FORM SUBMISSION & MATCHING =====
function submitForm(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const data = Object.fromEntries(fd.entries());

  // Parse age
  let age = 0;
  if (selectedAgeGroup === 'under3') {
    const dob = new Date(data.dob);
    const today = new Date();
    age = (today - dob) / (365.25 * 24 * 60 * 60 * 1000);
    if (age < 0) age = 0;
  } else {
    age = parseInt(data.age) || 0;
  }

  const gender = data.gender || 'all';
  const caste = data.caste || 'all';
  const state = data.state || 'Other';
  const income = parseInt(data.income) || (parseInt(data.salary) || 0) * 12;
  const occupation = data.occupation || '';
  const isFarmer = data.is_farmer === 'on' || occupation === 'farmer';
  const isStudent = data.is_student === 'on' || selectedAgeGroup === 'under18';
  const isSelfEmployed = data.is_self_employed === 'on' || occupation === 'self_employed';
  const hasDisability = data.has_disability === 'on';
  const isWomanSpecial = data.is_woman_special === 'on';

  eligibleSchemes = SCHEMES_DB.filter(scheme => {
    // Age check
    if (age < scheme.min_age || age > scheme.max_age) return false;

    // Gender check
    if (scheme.gender !== 'all' && scheme.gender !== gender) return false;

    // State check
    if (scheme.state !== 'all') {
      if (state === 'Other' && scheme.state !== 'all') return false;
      if (state !== 'Other' && scheme.state !== state) return false;
    }

    // Caste check
    if (scheme.caste_category !== 'all' && scheme.caste_category !== caste) return false;

    // Income check (only for adults with income data)
    if (selectedAgeGroup === 'above18' && scheme.income_limit < 99999999) {
      if (income > 0 && income > scheme.income_limit) return false;
    }

    // Occupation check
    if (scheme.occupation !== 'all') {
      if (scheme.occupation === 'farmer' && !isFarmer) return false;
      if (scheme.occupation === 'self_employed' && !isSelfEmployed) return false;
    }

    // Student-only schemes
    if (scheme.student_status && !isStudent && selectedAgeGroup !== 'under18') return false;

    // Disability schemes
    if (scheme.disability_status && !hasDisability) return false;

    // Women-specific schemes
    if (scheme.is_women && gender !== 'female') return false;

    // For children under 3, only show child-relevant schemes
    if (selectedAgeGroup === 'under3') {
      const childTags = ['child welfare', 'nutrition', 'health', 'vaccination', 'girl child'];
      if (!scheme.tags.some(t => childTags.includes(t))) return false;
    }

    // For under 18, focus on education/student schemes
    if (selectedAgeGroup === 'under18') {
      const youthTags = ['education', 'student', 'scholarship', 'child welfare', 'girl child', 'bicycle', 'laptop', 'nutrition', 'health', 'vaccination', 'food', 'insurance'];
      if (!scheme.tags.some(t => youthTags.includes(t))) return false;
    }

    return true;
  });

  renderResults();
  goToStep(3);
}

function renderResults() {
  let filtered = eligibleSchemes;
  if (currentResultFilter !== 'all') {
    if (currentResultFilter === 'Central' || currentResultFilter === 'Tamil Nadu') {
      filtered = filtered.filter(s => s.government === currentResultFilter);
    } else if (currentResultFilter === 'student') {
      filtered = filtered.filter(s => s.tags.some(t => ['education', 'student', 'scholarship'].includes(t)));
    } else if (currentResultFilter === 'farmer') {
      filtered = filtered.filter(s => s.tags.includes('farmer'));
    } else if (currentResultFilter === 'women') {
      filtered = filtered.filter(s => s.tags.includes('women') || s.is_women);
    } else if (currentResultFilter === 'disability') {
      filtered = filtered.filter(s => s.tags.includes('disability'));
    }
  }

  document.getElementById('results-count').innerHTML = `<strong>${filtered.length}</strong> scheme${filtered.length !== 1 ? 's' : ''} found for you`;
  document.getElementById('results-grid').innerHTML = filtered.length
    ? filtered.map(s => schemeCardHTML(s)).join('')
    : `<div class="no-results"><div class="no-results__icon">😔</div><div class="no-results__title">No schemes match this filter</div><div class="no-results__desc">Try selecting a different filter category</div></div>`;
}

function filterResults(filter) {
  currentResultFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`.filter-btn[data-filter="${filter}"]`).classList.add('active');
  renderResults();
}

// ===== CHATBOT =====
function toggleChat() {
  document.getElementById('chatbot').classList.toggle('open');
}

function sendChat() {
  const input = document.getElementById('chat-input');
  const msg = input.value.trim();
  if (!msg) return;
  input.value = '';
  addChatMessage(msg, 'user');
  setTimeout(() => processChat(msg), 600);
}

function addChatMessage(text, type) {
  const container = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = 'chat-msg ' + type;
  div.textContent = text;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function processChat(msg) {
  const lower = msg.toLowerCase();

  // Extract age
  const ageMatch = lower.match(/(\d+)\s*(?:year|yr|age)/);
  const age = ageMatch ? parseInt(ageMatch[1]) : null;

  // Extract gender
  let gender = 'all';
  if (/\b(female|woman|girl|she|her)\b/.test(lower)) gender = 'female';
  else if (/\b(male|man|boy|he|his)\b/.test(lower)) gender = 'male';

  // Extract state
  let state = 'all';
  if (/tamil\s*nadu|tn\b|chennai|madurai|coimbatore/.test(lower)) state = 'Tamil Nadu';

  // Extract keywords
  const isStudent = /student|study|college|school|education|scholar/.test(lower);
  const isFarmer = /farmer|farm|agriculture|crop|land/.test(lower);
  const isDisabled = /disab|handicap|differently\s*abled/.test(lower);
  const isWoman = gender === 'female' || /woman|women|girl|female/.test(lower);
  const isSelfEmployed = /self\s*employ|business|entrepreneur|startup|vendor/.test(lower);

  // Match schemes
  let matches = SCHEMES_DB.filter(s => {
    if (age !== null && (age < s.min_age || age > s.max_age)) return false;
    if (s.gender !== 'all' && gender !== 'all' && s.gender !== gender) return false;
    if (s.state !== 'all' && state !== 'all' && s.state !== state) return false;
    if (s.disability_status && !isDisabled) return false;
    if (s.is_women && !isWoman) return false;
    if (s.occupation === 'farmer' && !isFarmer) return false;
    if (s.occupation === 'self_employed' && !isSelfEmployed) return false;

    // Relevance boost
    if (isStudent && s.tags.some(t => ['education', 'student', 'scholarship'].includes(t))) return true;
    if (isFarmer && s.tags.includes('farmer')) return true;
    if (isDisabled && s.tags.includes('disability')) return true;
    if (isSelfEmployed && s.tags.some(t => ['self employed', 'business'].includes(t))) return true;

    return true;
  });

  // Limit results
  matches = matches.slice(0, 8);

  if (matches.length > 0) {
    let reply = `Based on your profile, here are ${matches.length} recommended schemes:\n\n`;
    matches.forEach((s, i) => {
      reply += `${i + 1}. ${s.name} (${s.government}) — ${s.benefits.substring(0, 80)}...\n`;
    });
    reply += `\nUse the Eligibility Checker for detailed matching!`;
    addChatMessage(reply, 'bot');
  } else if (age || isStudent || isFarmer) {
    addChatMessage("I couldn't find matching schemes based on your description. Try providing more details like your age, gender, state, occupation, or if you're a student/farmer.", 'bot');
  } else {
    addChatMessage("Please tell me about yourself. For example: \"I am a 25 year old farmer from Tamil Nadu\" or \"I am a female student aged 20 from Tamil Nadu\".", 'bot');
  }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  initCategories();
  initFeatured();
});
