// ─── Auth ───────────────────────────────────────────────────
export const getToken = () => {
  try { return localStorage.getItem('mr_token'); } catch { return null; }
};
export const setToken = (token) => {
  try { localStorage.setItem('mr_token', token); } catch { /* noop */ }
};

export const getUser = () => {
  try {
    const raw = localStorage.getItem('mr_user');
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
};
export const setUser = (user) => {
  try { localStorage.setItem('mr_user', JSON.stringify(user)); } catch { /* noop */ }
};

// ─── Theme ──────────────────────────────────────────────────
export const getTheme = () => {
  try { return localStorage.getItem('mr_theme') || 'light'; } catch { return 'light'; }
};
export const setTheme = (theme) => {
  try { localStorage.setItem('mr_theme', theme); } catch { /* noop */ }
};

// ─── Session (multi-step form progress) ─────────────────────
export const getFormProgress = () => {
  try {
    const raw = sessionStorage.getItem('mr_form_progress');
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
};
export const setFormProgress = (data) => {
  try { sessionStorage.setItem('mr_form_progress', JSON.stringify(data)); } catch { /* noop */ }
};

// ─── Logout: clear all stored data ──────────────────────────
export const clearAll = () => {
  try {
    localStorage.removeItem('mr_token');
    localStorage.removeItem('mr_user');
    sessionStorage.removeItem('mr_form_progress');
  } catch { /* noop */ }
};
