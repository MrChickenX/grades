const THEME_KEY = 'theme_vars_v1';
const DEFAULT_VARS = {
  '--bg': '#ececec',
  '--accent': '#0ea5a4',
  '--muted': '#94a3b8',
  '--card': '#e0e0e0',
  '--fontcolor': '#1f1f1f'
};

function loadTheme() {
  try {
    const raw = localStorage.getItem(THEME_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return DEFAULT_VARS;
}

function saveTheme(vars) {
  try { localStorage.setItem(THEME_KEY, JSON.stringify(vars)); } catch (e) {}
}

function applyTheme(vars) {
  const root = document.documentElement;
  Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
}

function setThemeVar(name, value) {
  const current = loadTheme();
  current[name] = value;
  saveTheme(current);
  applyTheme(current);
}

function resetTheme() {
  saveTheme(DEFAULT_VARS);
  applyTheme(DEFAULT_VARS);
  // update inputs if present
  document.querySelectorAll('[data-theme-key]').forEach(inp => {
    const key = inp.dataset.themeKey;
    if (DEFAULT_VARS[key]) inp.value = DEFAULT_VARS[key];
  });
}

// Apply saved theme immediately
applyTheme(loadTheme());

// If the settings UI is present, wire up inputs
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-theme-key]').forEach(inp => {
    const key = inp.dataset.themeKey;
    const vars = loadTheme();
    // prefer saved value, fallback to computed style or default
    const val = vars[key] || getComputedStyle(document.documentElement).getPropertyValue(key).trim() || DEFAULT_VARS[key] || '#000000';
    inp.value = val;
    // reflect value text if there's a sibling .hex-value
    const hexEl = inp.parentElement && inp.parentElement.querySelector('.hex-value');
    if (hexEl) hexEl.textContent = inp.value;

    inp.addEventListener('input', (e) => {
      const v = e.target.value;
      setThemeVar(key, v);
      if (hexEl) hexEl.textContent = v;
    });
  });

  const resetBtn = document.getElementById('theme-reset');
  if (resetBtn) resetBtn.addEventListener('click', (e) => { e.preventDefault(); resetTheme(); });
});

// expose small API for debugging / other scripts
window.theme = { loadTheme, saveTheme, applyTheme, setThemeVar, resetTheme, DEFAULT_VARS };
