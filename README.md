# PackMove Pro - Real-time Packers and Movers Platform

A full-stack web application for managing packing and moving services with real-time tracking capabilities.

## Features

- User Authentication (Register/Login)
- Real-time Order Tracking
- Interactive Booking System
- Dashboard for Managing Orders
- Socket.io Integration for Live Updates
- Responsive Design with Tailwind CSS

## Tech Stack

### Frontend
- HTML5
- Tailwind CSS
- JavaScript
- Socket.io Client
- Font Awesome Icons
- Google Fonts

### Backend
- Node.js
- Express.js
- MongoDB
- Socket.io
- JWT Authentication
- Bcrypt for Password Hashing

## Project Structure

```
packers-movers/
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── booking.html
│   ├── tracking.html
│   └── dashboard.html
│
└── backend/
    ├── models/
    │   ├── user.js
    │   └── order.js
    ├── controllers/
    │   ├── authController.js
    │   └── ordersController.js
    ├── routes/
    │   ├── auth.js
    │   └── orders.js
    ├── middleware/
    │   └── authMiddleware.js
    ├── server.js
    └── .env
```

## Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd packers-movers
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Create a `.env` file in the backend directory with the following content:
```
MONGODB_URI=mongodb://localhost:27017/packers_movers
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

4. Start MongoDB service on your machine

5. Start the backend server:
```bash
npm start
```

6. Open the frontend:
- Navigate to the frontend directory
- Open index.html in your web browser
- For local development, you can use Python's built-in HTTP server:
```bash
python3 -m http.server 8000
```

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register a new user
- POST `/api/auth/login` - Login user

### Orders
- POST `/api/orders` - Create a new order
- GET `/api/orders` - Get all orders for authenticated user
- GET `/api/orders/:orderId` - Get specific order details

## Real-time Features

The application uses Socket.io for real-time updates:
- Order status updates
- Live tracking information
- Instant notifications

## Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Protected API routes
- Input validation
- CORS configuration
- Secure HTTP headers with helmet

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
