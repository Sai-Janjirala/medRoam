<div align="center">

<h1>🏥 MedRoam</h1>

<p><strong>Find & Book Verified Doctors Abroad — Instantly</strong></p>

<p>
  <a href="https://med-roam.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-Visit%20Site-2D6A4F?style=for-the-badge&logo=vercel" alt="Live Demo" />
  </a>
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js" alt="Node.js" />
  <img src="https://img.shields.io/badge/Deployed-Vercel%20%2B%20Render-black?style=for-the-badge" alt="Deployed" />
</p>

<p>MedRoam is a full stack medical travel platform that helps patients find and book verified doctors abroad for affordable, transparent medical care across 48 cities.</p>

</div>

---

## 📸 Screenshots

| Landing Page | Doctor Search |
|---|---|
| ![Landing Page](./screenshots/landing.png) | ![Doctor Search](./screenshots/search.png) |

| Doctor Profile | Dashboard |
|---|---|
| ![Doctor Profile](./screenshots/provider.png) | ![Dashboard](./screenshots/dashboard.png) |

---

## ✨ Features

- 🔍 **Smart Search** — Filter doctors by city, specialty, and availability
- 👨‍⚕️ **Doctor Profiles** — View ratings, pricing, available slots, and reviews
- 📅 **Appointment Booking** — Book consultation slots directly
- 🔐 **User Auth** — Login & Signup flow with session management
- 📊 **Patient Dashboard** — View upcoming appointments and saved providers
- 💰 **Transparent Pricing** — See consultation rates before booking
- 📱 **Fully Responsive** — Works seamlessly on all devices
- 🌍 **48 Cities** — Wide network coverage across India and abroad

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18 + Vite |
| **Routing** | React Router DOM |
| **HTTP Client** | Axios |
| **Backend** | Node.js + Express |
| **Frontend Deploy** | Vercel |
| **Backend Deploy** | Render |
| **Styling** | CSS Modules |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+
- Git

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/medRoam.git
cd medRoam
```

**2. Install frontend dependencies**
```bash
cd client
npm install
```

**3. Install backend dependencies**
```bash
cd ../server
npm install
```

**4. Set up environment variables**
```bash
cd server
cp .env.example .env
```

Edit `server/.env`:
```
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

Edit `client/.env.local`:
```
VITE_API_URL=http://localhost:5000
```

**5. Run both servers together**
```bash
cd ..
npm run dev
```

- Frontend → `http://localhost:5173`
- Backend → `http://localhost:5000`

---

## 📁 Project Structure

```
medRoam/
├── client/                  # React frontend (Vite)
│   ├── public/
│   │   ├── robots.txt
│   │   └── sitemap.xml
│   └── src/
│       ├── components/      # Reusable UI components
│       │   ├── SEO.jsx
│       │   └── ProtectedRoute.jsx
│       ├── context/
│       │   └── AuthContext.jsx
│       ├── pages/
│       │   ├── Auth/        # Login & Signup
│       │   ├── Booking/     # Booking flow
│       │   ├── Dashboard/   # User dashboard
│       │   ├── Landing/     # Homepage
│       │   ├── ProviderDetail/
│       │   └── Search/      # Doctor search
│       ├── hooks/
│       └── utils/
│           ├── api.js
│           └── doctors.js
│
└── server/                  # Express backend
    └── src/
        ├── controllers/
        ├── middleware/
        │   └── auth.js
        ├── routes/
        │   ├── auth.js
        │   ├── bookings.js
        │   ├── doctors.js
        │   └── hello.js
        └── index.js
```

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | API health & welcome |
| `GET` | `/health` | Health check |
| `GET` | `/api/doctors` | Get all doctors |
| `GET` | `/api/doctors/:id` | Get doctor by ID |
| `POST` | `/api/auth/register` | User registration |
| `POST` | `/api/auth/login` | User login |
| `GET` | `/api/bookings` | Get all bookings |
| `POST` | `/api/bookings` | Create a booking |

📖 **[View Full API Documentation on Postman](YOUR_POSTMAN_LINK)**

---

## 🌐 Deployment

| Service | Platform | URL |
|---|---|---|
| Frontend | Vercel | https://med-roam.vercel.app |
| Backend | Render | https://medroam.onrender.com |

---

## 🗺️ Roadmap

- [ ] Real doctor database integration
- [ ] Payment gateway (Stripe/Razorpay)
- [ ] Email notifications for bookings
- [ ] Multi-language support
- [ ] Mobile app (React Native)

---

## 🤝 Contributing

Contributions are welcome! Please open an issue first to discuss what you'd like to change.

1. Fork the repo
2. Create your branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👨‍💻 Author

**Sai Janjirala**

[![GitHub](https://img.shields.io/badge/GitHub-@YOUR_USERNAME-181717?style=flat&logo=github)](https://github.com/YOUR_USERNAME)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat&logo=linkedin)](https://linkedin.com/in/YOUR_PROFILE)

---

<div align="center">
  <p>⭐ Star this repo if you found it helpful!</p>
  <p>Built with ❤️ by Sai Janjirala</p>
</div>
