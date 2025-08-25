# RadhaKrishna Restaurant - MERN Stack

A full-stack restaurant website built with MongoDB, Express.js, React, and Node.js.

## Features

- **Frontend (React + Vite + Tailwind CSS)**
  - Responsive design
  - Menu browsing with categories
  - Shopping cart functionality
  - Order placement
  - Toast notifications

- **Backend (Node.js + Express + MongoDB)**
  - RESTful API
  - Menu management
  - Order processing
  - User authentication
  - MongoDB integration

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)

### Installation

1. **Install Frontend Dependencies**
   ```bash
   npm install
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Setup Environment Variables**
   - Update `backend/.env` with your MongoDB URI and JWT secret

4. **Start MongoDB**
   ```bash
   # If using local MongoDB
   mongod
   ```

5. **Start Backend Server**
   ```bash
   cd backend
   npm run dev
   ```

6. **Start Frontend Development Server**
   ```bash
   # In root directory
   npm run dev
   ```

## API Endpoints

### Menu
- `GET /api/menu` - Get all menu items
- `GET /api/menu/category/:category` - Get items by category
- `POST /api/menu` - Add new menu item

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders` - Get all orders
- `PATCH /api/orders/:id/status` - Update order status

### Users
- `POST /api/users/register` - Register user
- `POST /api/users/login` - Login user

## Project Structure

```
RadhaKrishna/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
├── src/
│   ├── components/
│   └── App.jsx
└── package.json
```

## Technologies Used

- **Frontend**: React, Vite, Tailwind CSS, Axios, React Icons
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, JWT
- **Development**: Nodemon, ESLint

## License

MIT License