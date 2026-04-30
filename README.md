<div align="center">

<img src="https://img.shields.io/badge/MedRoam-Tourist%20Medical%20Assistance-00D4AA?style=for-the-badge&labelColor=0A1628" alt="MedRoam Banner"/>

# 🏥 MedRoam — Tourist Medical Assistance Platform

**Find verified, English-speaking healthcare providers anywhere you travel.**  
Transparent pricing · Real-time availability · 24/7 Emergency Helpline

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2-764ABC?style=flat-square&logo=redux)](https://redux-toolkit.js.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![MUI](https://img.shields.io/badge/Material_UI-5-007FFF?style=flat-square&logo=mui)](https://mui.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

</div>

---

## 📌 Problem Statement

> **Traveling abroad while sick is one of the most stressful experiences a person can face.**

Every year, millions of international tourists find themselves in urgent need of medical care in an unfamiliar country — unable to locate English-speaking doctors, unaware of local pricing structures, and confused by foreign healthcare systems. Existing solutions are fragmented: Google searches return outdated listings, embassy pages lack real-time availability, and hospital walk-ins are expensive and time-consuming.

**MedRoam solves this** by providing a single, trusted platform where travelers can:

- 🔍 **Instantly search** for verified, English-speaking healthcare providers by city or specialty
- 💰 **Compare transparent pricing** before booking — no surprise bills
- 🟢 **Check real-time availability** and book slots directly
- 🚨 **Access emergency helplines** with city-specific numbers in one tap
- 📋 **Manage appointments and saved providers** from a personalized dashboard

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔍 Smart City Search | Hero-driven search with debounced input and location autocomplete |
| 🏥 Provider Discovery | Filterable cards with specialty, language, rating, and distance filters |
| 💵 Transparent Pricing | Structured pricing tables per provider — no hidden fees |
| 📅 Availability Slots | Real-time booking slots with live "Available Now" status indicators |
| 🆘 Emergency Helpline | City-specific emergency numbers, quick-connect form, and live agent status |
| 🔐 Auth System | JWT-based login + 3-step registration with travel & medical preferences |
| 📊 Tourist Dashboard | Saved providers, upcoming appointments, and drag-and-drop photo upload |
| 🛡️ Admin Panel | Role-based provider management, verification queue, and platform analytics |
| 📱 Fully Responsive | Mobile-first design that works seamlessly on all screen sizes |
| ♿ Accessible | WCAG-compliant components with keyboard navigation and ARIA labels |

---

## 🛠️ Tech Stack

### Frontend Core
| Technology | Version | Purpose |
|---|---|---|
| [React](https://reactjs.org/) | 18 | UI Component Library |
| [Vite](https://vitejs.dev/) | 5 | Build Tool & Dev Server |
| [React Router v6](https://reactrouter.com/) | 6 | Client-Side Routing |

### State & Data
| Technology | Version | Purpose |
|---|---|---|
| [Redux Toolkit](https://redux-toolkit.js.org/) | 2 | Global State Management |
| [Axios](https://axios-http.com/) | 1.x | HTTP Client with Interceptors |
| [Formik](https://formik.org/) + [Yup](https://github.com/jquense/yup) | Latest | Form Handling & Validation |

### Styling & UI
| Technology | Version | Purpose |
|---|---|---|
| [Tailwind CSS](https://tailwindcss.com/) | 3 | Utility-First Styling |
| [Material UI (MUI)](https://mui.com/) | 5 | Component Library |
| Plus Jakarta Sans | — | Heading Typography |
| Inter | — | Body Typography |

### Developer Experience
| Technology | Purpose |
|---|---|
| [React Toastify](https://fkhadra.github.io/react-toastify/) | Toast Notifications |
| [React Helmet Async](https://github.com/staylor/react-helmet-async) | Dynamic SEO Meta Tags |
| Custom Hooks (`useAuth`, `useDebounce`) | Reusable Logic Abstraction |
| Mock API Service | Axios Interceptors + Simulated Delays |
| Route | Page | Description |
|---|---|---|
| `/` | Landing Page | Hero search, stats, how-it-works, featured cities, emergency CTA |
| `/search` | Search Results | Sidebar filters + provider cards with skeleton loaders |
| `/provider/:id` | Provider Detail | Full profile, pricing table, availability slots, reviews |
| `/helpline` | Emergency Helpline | City-specific numbers, quick-connect form, live agent status |
| `/login` | Login | Formik-based authentication form |
| `/register` | Register | 3-step multi-page form with travel & medical preferences |
| `/dashboard` | Tourist Dashboard | Saved providers, appointments, drag-and-drop photo upload |
| `/admin` | Admin Panel | Role-based provider management and platform stats |

---

## 🎨 Design System

```
Primary Background  →  Dark Navy     #0A1628
Primary Accent      →  Electric Teal #00D4AA
Emergency / Urgent  →  Red           #EF4444
Available Now       →  Green         #22C55E
Unavailable         →  Gray          #6B7280

Headings  →  Plus Jakarta Sans  (700, 600)
Body      →  Inter              (400, 500)

Border Radius  →  xl (12px)
Shadow Style   →  Subtle, layered box shadows
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>= 18.x`
- npm `>= 9.x` or yarn

### Installation

```bash
git clone https://github.com/your-username/medroam.git
cd medroam

npm install

cp .env.example .env.local

npm run dev
```

The app will be running at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🔑 Environment Variables

```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_MOCK_DELAY_MS=600
VITE_APP_NAME=MedRoam
```

> See `.env.example` for all available environment variables.

---

## 🧩 Custom Hooks

```js
const { user, isAuthenticated, login, logout } = useAuth();

const debouncedSearch = useDebounce(searchQuery, 400);
```

---

## 🔌 Mock API

The platform ships with a fully mocked API service using **Axios interceptors** and **simulated network delays**, making it immediately runnable without a backend.

- Auth endpoints: login, register, refresh token
- Provider endpoints: search, filters, detail, reviews
- Appointment endpoints: create, list, cancel
- Helpline endpoints: city numbers, agent status

WebSocket connections are stubbed with placeholders, ready to be replaced with a live WebSocket server for real-time availability updates.

---

## 📦 Key Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run format
```

---

## 🗺️ Roadmap

- [ ] Backend API integration (Node.js / Django)
- [ ] Real-time availability via WebSockets
- [ ] Multi-language support (i18n)
- [ ] Native mobile app (React Native)
- [ ] Insurance verification integration
- [ ] Provider video consultations
- [ ] Offline mode with service workers

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'feat: add your feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

Please follow the [Conventional Commits](https://www.conventionalcommits.org/) standard for commit messages.

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ for travelers worldwide

**[⭐ Star this repo](https://github.com/your-username/medroam)** if you find it useful!

</div>
