# 🛠️ Equipment Tracker

A full-stack web application to manage and monitor manufacturing equipment. Built as part of an intern take-home assignment, with a focus on clean architecture, scalability, and usability.

## 🚀 Features

### Core Functionality
- ✅ View all equipment in a tabular format
- ✅ Add new equipment
- ✅ Edit existing equipment
- ✅ Delete equipment

### Equipment Attributes
Each equipment includes:
- **Name** - Unique identifier for the equipment
- **Type** - Machine, Vessel, Tank, or Mixer
- **Status** - Active, Inactive, or Under Maintenance
- **Last Cleaned Date** - Timestamp of last maintenance

### Bonus Enhancements
- 🔍 **Server-side search** by equipment name
- 🎯 **Server-side filtering** by type and status
- 🔁 **Server-side sorting** by column (Name, Type, Status, Last Cleaned)
- 📊 Clean, enterprise-style dashboard UI
- 📱 Responsive table layout

## 🧰 Tech Stack

### Frontend
- React
- JavaScript (ES6+)
- Plain CSS (card-based enterprise UI)

### Backend
- Node.js
- Express.js

### Database
- SQLite (file-based relational database)

## 📁 Project Structure
```
equipment-tracker/
├── backend/
│   ├── db/
│   │   └── database.js          # Database initialization and schema
│   ├── routes/
│   │   └── equipment.js         # API routes for equipment CRUD
│   ├── server.js                # Express server configuration
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── EquipmentForm.js    # Form for add/edit operations
│   │   │   └── EquipmentTable.js   # Table with search, filter, sort
│   │   ├── App.js                  # Main application component
│   │   ├── App.css                 # Application styles
│   │   └── api.js                  # API client functions
│   └── package.json
│
└── README.md
```

## ▶️ How to Run Locally

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### 1️⃣ Backend Setup
```bash
cd backend
npm install
node server.js
```

Backend will run on:
```
http://localhost:5000
```

### 2️⃣ Frontend Setup

Open a new terminal:
```bash
cd frontend
npm install
npm start
```

Frontend will run on:
```
http://localhost:3000
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/equipment` | Get all equipment (with optional search, filter, sort) |
| POST | `/api/equipment` | Create new equipment |
| PUT | `/api/equipment/:id` | Update existing equipment |
| DELETE | `/api/equipment/:id` | Delete equipment |

### Query Parameters
- `search` - Search by equipment name
- `type` - Filter by equipment type
- `status` - Filter by equipment status
- `sortBy` - Sort by column (name, type, status, lastCleaned)
- `order` - Sort order (asc, desc)

## 🧠 Design Decisions & Assumptions

- **SQLite** was chosen for simplicity and ease of setup while still demonstrating relational database concepts
- **Server-side operations** - Search, filtering, and sorting are handled on the backend to ensure scalability and cleaner frontend logic
- **Minimal UI** - Enterprise-style interface focusing on clarity and usability rather than heavy visuals
- **No authentication** - Not implemented as it was not part of the requirements
- **RESTful API** - Following REST principles for predictable and maintainable endpoints

## 🔮 What I Would Improve With More Time

- 📄 **Pagination** for large datasets
- ⚡ **Database indexing** for faster queries
- 🔐 **Role-based access control** for multi-user scenarios
- 📝 **Audit logs** with `createdAt` / `updatedAt` timestamps
- ♿ **Improved accessibility** with ARIA labels and keyboard navigation
- 🌙 **Dark mode support**
- 🧪 **Unit and integration tests**
- 📦 **Containerization** with Docker
- 🚀 **Deployment configuration** for production

## 🧪 Technical Highlights

- **SQL Injection Prevention** - All queries use parameterized statements
- **Declarative Frontend** - React components remain lightweight with backend handling data logic
- **Separation of Concerns** - Clear distinction between database, routing, and business logic layers
- **Error Handling** - Comprehensive error responses for better debugging

## 📌 Summary

This project demonstrates:
- ✨ Full-stack development skills
- 🏗️ Clean React architecture
- 🌐 RESTful API design
- 💾 Database-driven data operations
- 🎨 Product-oriented UI thinking
- 🔒 Security-conscious coding practices

---

**Built with ❤️ for Leucine**