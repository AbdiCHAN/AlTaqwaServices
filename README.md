# AlTaqwaUmrahHajj

**Al Taqwa Umrah & Hajj Services** is a full-stack web platform designed to help users **browse, view, and book Umrah and Hajj packages**. The project uses **React + Vite** for the frontend and **Node.js + Express** for the backend, with a modular folder structure to support features like browsing packages, viewing package details, checkout, and booking confirmation.

---

## 🚀 Features

- **Home Page:** Overview, hero section, highlights of services.
- **Services Page:** Detailed description of all services provided.
- **Packages Page:** Browse all Umrah and Hajj packages.
- **Package Details Page:** View full details of a selected package.
- **Checkout Page:** Confirm and finalize bookings.
- **Booking Confirmed Page:** Shows confirmation details after booking.
- **About Page:** Information about the company and mission.
- **Contact Page:** Send inquiries or contact support.
- **Reusable Components:** Navbar, Footer, HeroSection, PackageCard.
- **Hooks for API Calls:** `useFetchPackages` and `useFetchPackageById`.
- **Styling:** Each page and component has its own CSS file.
- **Tests:** Each page and component has a corresponding test file.
- **Backend APIs:** Node.js + Express backend with routes, controllers, and models.

---

## 🛠️ Tech Stack

- **Frontend:** React + Vite, React Router DOM, Axios
- **Backend:** Node.js + Express, JSON Server (dev) or MongoDB/MySQL (production)
- **Styling:** CSS modules for each page/component
- **Testing:** Jest and React Testing Library (frontend), Jest + Supertest (backend)
- **Version Control:** Git & GitHub

---

## 📁 Folder Structure

AlTaqwaServices/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── db.json
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   │   ├── images/
│   │   │   ├── logos/
│   │   │   └── icons/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Navbar.css
│   │   │   ├── Footer.jsx
│   │   │   ├── Footer.css
│   │   │   ├── HeroSection.jsx
│   │   │   ├── HeroSection.css
│   │   │   ├── PackageCard.jsx
│   │   │   └── PackageCard.css
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Home.css
│   │   │   ├── Services.jsx
│   │   │   ├── Services.css
│   │   │   ├── About.jsx
│   │   │   ├── About.css
│   │   │   ├── Contact.jsx
│   │   │   ├── Contact.css
│   │   │   ├── Packages.jsx
│   │   │   ├── Packages.css
│   │   │   ├── PackageDetails.jsx
│   │   │   ├── PackageDetails.css
│   │   │   ├── Checkout.jsx
│   │   │   ├── Checkout.css
│   │   │   ├── BookingConfirmed.jsx
│   │   │   ├── BookingConfirmed.css
│   │   │   ├── AdminDashboard.jsx
│   │   │   └── Login.jsx
│   │   ├── hooks/
│   │   │   ├── useFetchPackages.js
│   │   │   ├── useFetchPackageById.js
│   │   │   ├── useApi.js
│   │   │   ├── useAuth.js
│   │   │   ├── useCreateBooking.js
│   │   │   ├── useFetchCountries.js
│   │   │   └── usePrayerTimes.js
│   │   ├── tests/
│   │   │   ├── Home.test.js
│   │   │   ├── Services.test.js
│   │   │   ├── About.test.js
│   │   │   ├── Contact.test.js
│   │   │   ├── Packages.test.js
│   │   │   ├── PackageDetails.test.js
│   │   │   ├── Checkout.test.js
│   │   │   ├── BookingConfirmed.test.js
│   │   │   ├── Navbar.test.js
│   │   │   ├── Footer.test.js
│   │   │   ├── HeroSection.test.js
│   │   │   └── PackageCard.test.js
│   │   ├── App.jsx
│   │   └── index.jsx
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
├── LICENSE
└── README.md


---

## ⚡ Installation & Setup

### 1️⃣ Clone the repo

```bash
git clone https://github.com/your-username/AlTaqwaUmrahHajj.git
cd AlTaqwaUmrahHajj

 2️⃣ Frontend Setup

cd frontend
npm install
npm run dev

Opens React + Vite frontend at http://localhost:5173

3️⃣ Backend Setup

cd ../backend
npm install
npx nodemon server.js

Backend server runs on http://localhost:5000 (default port)

🌱 Usage

Browse packages on Packages Page.

Click a package to see Package Details.

Complete a booking on Checkout Page.

See confirmation on Booking Confirmed Page.

Contact support via Contact Page.

📌 GitHub Best Practices

.gitignore: Already included for node_modules/, build/, .env

LICENSE: MIT license recommended for open source

Branching: Use feature branches and pull requests

Commits: Clear, descriptive commit messages

🌱 Future Plans

Add payment integration (M-Pesa, card, PayPal)

Add user authentication for bookings

Add filter/search functionality for packages

Create admin dashboard for package management

Mobile app version using React Native

Record tutorial videos for learners

📞 Contact

Email: speedextra008@gmail.com
 (placeholder)

YouTube: Code With Abdi

Website: (future live link)

⚖️ License

This project is licensed under the MIT License — see LICENSE file for details.

