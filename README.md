# Wander-Wise 🌍✈️

A comprehensive travel planning and management API built with Node.js, Express, and MongoDB. Wander-Wise helps travelers create, manage, and track their trips with features like budget management, expense tracking, and packing lists.

## 🚀 Features

### ✅ Currently Implemented

- **User Authentication & Authorization**
  - JWT-based authentication
  - User registration and login
  - Protected routes with middleware
- **Trip Management**
  - Create, read, update, delete trips
  - Budget planning and tracking
  - Expense management
  - Multiple destinations support
- **Packing Lists**
  - Create and manage packing items
  - Mark items as completed
  - User-specific lists
- **Data Validation**
  - Input validation using express-validator
  - Custom validation middleware
- **Database Integration**
  - MongoDB with Mongoose ODM
  - Proper data modeling and relationships

### 🚧 In Progress / Missing Features

- Error handler middleware
- Itinerary APIs
- Trip collaboration among users
- Destination extraction and reference in trips model
- Trip reviews and ratings

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Validation**: express-validator
- **Password Hashing**: bcrypt
- **Development**: nodemon

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

## 🚀 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd wander-wise
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:

   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/wander-wise
   JWT_SECRET=your-super-secret-jwt-key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

The server will start on `http://localhost:5000`

## 📚 API Documentation

### Authentication Endpoints

#### Register User

```http
POST /auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Login User

```http
POST /auth/login
Content-Type: application/json

{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Trip Endpoints

#### Create Trip

```http
POST /trips
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Europe Adventure",
  "description": "Exploring Europe for 2 weeks",
  "startDate": "2024-06-01",
  "endDate": "2024-06-15",
  "destinations": ["Paris", "Rome", "Barcelona"],
  "budget": {
    "total": 5000,
    "spent": 0
  }
}
```

#### Get All Trips

```http
GET /trips
Authorization: Bearer <token>
```

#### Get Trip by ID

```http
GET /trips/:id
Authorization: Bearer <token>
```

#### Update Trip

```http
PUT /trips/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Updated Trip Title",
  "budget": {
    "total": 6000,
    "spent": 1200
  }
}
```

#### Delete Trip

```http
DELETE /trips/:id
Authorization: Bearer <token>
```

#### Add Expense to Trip

```http
POST /trips/:id/expenses
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Hotel Booking",
  "amount": 200,
  "date": "2024-06-01"
}
```

### Packing List Endpoints

#### Create Packing Item

```http
POST /package-lists
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Passport"
}
```

#### Get All Packing Items

```http
GET /package-lists
Authorization: Bearer <token>
```

#### Update Packing Item

```http
PATCH /package-lists/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "completed": true
}
```

#### Delete Packing Item

```http
DELETE /package-lists/:id
Authorization: Bearer <token>
```

## 📖 5-Week Learning Syllabus

### Week 1: Foundation & Setup 🏗️

**Learning Objectives:**

- Understand Node.js and Express.js fundamentals
- Set up development environment
- Learn about RESTful API design principles
- Implement basic server setup

**Topics Covered:**

- Node.js basics and event-driven programming
- Express.js framework introduction
- Project structure and organization
- Environment variables and configuration
- Basic routing and middleware concepts
- HTTP methods and status codes

**Hands-on Activities:**

- Set up the Wander-Wise project structure
- Create basic Express server
- Implement simple routes
- Configure environment variables
- Test API endpoints using tools like Postman or Thunder Client

**Deliverables:**

- Working Express server
- Basic routing structure
- Environment configuration
- API testing documentation

---

### Week 2: Database & Data Modeling 🗄️

**Learning Objectives:**

- Understand MongoDB and NoSQL databases
- Learn Mongoose ODM for data modeling
- Implement proper data relationships
- Create and manage database schemas

**Topics Covered:**

- MongoDB fundamentals and NoSQL concepts
- Mongoose schema design and validation
- Data relationships (references vs embedding)
- CRUD operations with Mongoose
- Database indexing and performance
- Data validation at schema level

**Hands-on Activities:**

- Design and implement User model
- Create Trip model with embedded schemas
- Implement PackageList model
- Set up database connections
- Test CRUD operations
- Implement data validation

**Deliverables:**

- Complete database models (User, Trip, PackageList)
- Database connection setup
- Basic CRUD operations
- Data validation implementation

---

### Week 3: Authentication & Security 🔐

**Learning Objectives:**

- Implement secure user authentication
- Learn JWT token-based authentication
- Understand password security
- Implement authorization middleware

**Topics Covered:**

- Authentication vs Authorization
- JWT (JSON Web Tokens) implementation
- Password hashing with bcrypt
- Middleware concepts and implementation
- Route protection and access control
- Session management

**Hands-on Activities:**

- Implement user registration with password hashing
- Create JWT-based login system
- Build authentication middleware
- Implement route protection
- Test authentication flow
- Handle authentication errors

**Deliverables:**

- User registration and login APIs
- JWT token generation and verification
- Protected routes implementation
- Authentication error handling

---

### Week 4: API Development & Validation 📝

**Learning Objectives:**

- Build comprehensive REST APIs
- Implement input validation
- Handle errors gracefully
- Create proper API responses

**Topics Covered:**

- RESTful API design principles
- Input validation using express-validator
- Error handling patterns
- API response formatting
- HTTP status codes and headers
- Request/response middleware

**Hands-on Activities:**

- Implement Trip CRUD operations
- Create PackageList management APIs
- Add comprehensive input validation
- Implement proper error responses
- Test all API endpoints
- Document API responses

**Deliverables:**

- Complete Trip management APIs
- PackageList CRUD operations
- Input validation for all endpoints
- Error handling implementation
- API documentation

---

### Week 5: Advanced Features & Optimization 🚀

**Learning Objectives:**

- Implement advanced features
- Optimize application performance
- Add missing features
- Prepare for production deployment

**Topics Covered:**

- Error handling middleware
- Advanced MongoDB queries
- Performance optimization
- Code organization and best practices
- Testing strategies
- Deployment considerations

**Hands-on Activities:**

- Implement global error handler middleware
- Add Itinerary management features
- Implement trip collaboration features
- Extract and manage destinations
- Add review and rating system
- Optimize database queries
- Prepare for production deployment

**Deliverables:**

- Global error handling middleware
- Itinerary management system
- Trip collaboration features
- Destination management
- Review and rating system
- Performance optimizations
- Production-ready application

---

## 🎯 Missing Features Implementation Guide

### 1. Error Handler Middleware

- Create centralized error handling
- Implement custom error classes
- Add proper error logging
- Return consistent error responses

### 2. Itinerary APIs

- Design Itinerary model with activities
- Implement day-wise planning
- Add activity management
- Create itinerary-trip relationships

### 3. Trip Collaboration

- Implement user roles (owner, collaborator, viewer)
- Add trip sharing functionality
- Create collaboration invitations
- Manage collaborative editing

### 4. Destination Management

- Extract destinations from trips
- Create separate Destination model
- Add destination details and metadata
- Implement destination search and filtering

### 5. Reviews and Ratings

- Design Review model
- Implement rating system
- Add review moderation
- Create review analytics

## 🧪 Testing

The project includes API testing examples in `api.http`. You can use:

- **VS Code**: Install "REST Client" extension
- **Postman**: Import the API collection
- **Thunder Client**: VS Code extension for API testing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

Created as a learning project for Node.js and Express.js development.

---

**Happy Coding! 🎉**
