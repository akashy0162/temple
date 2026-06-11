# 🛕 Shri Bhagwati Dham Seva Trust - Official Website

A fully interactive, animated, and modern temple management and e-seva platform built with React, Tailwind CSS, and Framer Motion. 

This platform serves dual purposes: 
1. **For Devotees:** A beautiful public-facing website to book online poojas, personalized darshans, view temple media, and access public trust documents.
2. **For Admins:** A powerful "Control Room" dashboard to manage bookings, track donations, upload media to a cloud gallery, and publish government compliance documents.

## ✨ Key Features

### 🌸 Public Experience (Devotees)
- **Stunning UI/UX:** Interactive animations powered by Framer Motion, featuring glassmorphism and modern design aesthetics.
- **E-Seva Services:** Devotees can register, log in, and book various services like Rudrabhishek, Maha Aarti, and Personalized Darshan.
- **Regulations & Documents:** Access official government acts, audit reports, and tax certificates published dynamically by the admin.
- **Mobile Responsive:** Fully optimized for all screen sizes.

### 🛡️ Admin Dashboard (Control Room)
- **Manage Bookings:** Real-time table to view, approve, or decline devotee booking requests.
- **Cloud Media Gallery:** Direct integration with **Cloudinary**. Upload photos/videos that automatically render in a masonry-style media library.
- **Donation Tracking:** View rich data tables tracking incoming donations, donor locations, and payment methods.
- **Document Publishing:** Upload official PDFs and DOCs that instantly sync to the public-facing "Regulations" page.
- **Secure Authentication:** Protected route guarding for administrative access.

## 🛠️ Technology Stack
- **Frontend Framework:** React 18
- **Routing:** React Router v7+
- **Styling:** Tailwind CSS (Vanilla CSS for core animations)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Cloud Storage:** Cloudinary API (for media and document uploads)
- **State Management:** React Hooks (`useState`, `useEffect`) & LocalStorage (Mock DB)

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd temple
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run start
   # or
   npm run dev
   ```

4. Open your local host URL (e.g., `http://localhost:3000` or `http://localhost:5173`) in your browser.

## ☁️ Cloudinary Configuration
To enable the media and document upload features in the Admin Dashboard, ensure your Cloudinary account is properly configured:
1. Ensure your Cloud Name is correctly set in the `AdminDashboard.jsx` fetch URL.
2. Use an **Unsigned Upload Preset** (e.g., `temple_uploads`).
3. **Important for Documents:** In your Cloudinary Security Settings, ensure **"Allow delivery of PDF and ZIP files"** is checked so that uploaded PDFs can be securely viewed by the public.

## 📂 Project Structure
- `src/components/HomePage.jsx` - The main landing page with interactive grids.
- `src/components/AdminDashboard.jsx` - The protected admin control room handling uploads, bookings, and donations.
- `src/components/UserAuth.jsx` - Login and registration flows for users/admins.
- `src/components/Regulations.jsx` - Public view for government documents.
- `src/App.js` - Route configuration and layout wrapping.

## 👨‍💻 Development Status
This project utilizes `localStorage` to simulate backend persistence for bookings, media, and documents. This allows for rapid, seamless frontend prototyping, testing, and deployment without requiring an active database connection.
