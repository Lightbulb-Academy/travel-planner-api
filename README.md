# Wander-Wise 🌍✈️

A comprehensive travel planning and management API built with Node.js, Express, and MongoDB. Wander-Wise helps travelers create, manage, and track their trips with features like budget management, expense tracking, and packing lists.

## 🚀 Features

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

## 📖 React Frontend Syllabus (5 Weeks)

### Week 1: React Fundamentals & Setup ⚛️

**Learning Objectives:**

- Understand React fundamentals and JSX
- Set up React development environment
- Learn component-based architecture
- Implement basic state management

**Topics Covered:**

- React basics and JSX syntax
- Functional components and props
- React hooks (useState, useEffect)
- Component lifecycle
- Event handling in React
- React Developer Tools

**Hands-on Activities:**

- Set up React project with Create React App or Vite
- Create basic components (Header, Footer, Navigation)
- Implement user authentication forms (Login/Register)
- Build responsive navigation with React Router
- Create protected route components
- Implement basic form validation

**Deliverables:**

- Working React application setup
- Authentication UI components
- Navigation and routing structure
- Basic form handling and validation

---

### Week 2: State Management & API Integration 🔄

**Learning Objectives:**

- Implement state management with Context API
- Learn API integration with React
- Handle loading and error states
- Implement proper data flow

**Topics Covered:**

- React Context API for global state
- Custom hooks for API calls
- Async/await with React
- Error boundaries and error handling
- Loading states and user feedback
- HTTP client setup (axios/fetch)

**Hands-on Activities:**

- Set up Context API for authentication state
- Create custom hooks for API calls
- Implement user authentication flow
- Build loading and error components
- Create reusable API service layer
- Implement token management and storage

**Deliverables:**

- Global state management with Context API
- API integration layer
- Authentication flow implementation
- Error handling and loading states

---

### Week 3: Trip Management UI 🗺️

**Learning Objectives:**

- Build comprehensive trip management interface
- Implement CRUD operations for trips
- Create responsive and user-friendly forms
- Add data visualization for trip information

**Topics Covered:**

- Form handling with React Hook Form
- Date picker components
- Multi-step forms
- Data visualization with charts
- Responsive design principles
- Form validation and error handling

**Hands-on Activities:**

- Create trip creation/editing forms
- Build trip listing and detail views
- Implement trip search and filtering
- Add date range pickers for trip planning
- Create budget visualization components
- Build responsive trip cards and layouts

**Deliverables:**

- Complete trip management interface
- Trip creation and editing forms
- Trip listing and detail views
- Budget tracking visualization

---

### Week 4: Advanced UI Components & User Experience 🎨

**Learning Objectives:**

- Implement advanced UI components
- Enhance user experience with animations
- Add interactive features
- Implement responsive design patterns

**Topics Covered:**

- Advanced React patterns (HOCs, render props)
- Animation libraries (Framer Motion)
- Drag and drop functionality
- Modal and overlay components
- Toast notifications
- Progressive Web App features

**Hands-on Activities:**

- Build packing list with drag-and-drop
- Create modal components for trip details
- Implement toast notifications
- Add smooth animations and transitions
- Create interactive maps integration
- Build responsive dashboard layouts

**Deliverables:**

- Interactive packing list component
- Modal and overlay system
- Animation and transition effects
- Responsive dashboard interface

---

### Week 5: Advanced Features & Optimization 🚀

**Learning Objectives:**

- Implement advanced React features
- Optimize application performance
- Prepare for production deployment

**Topics Covered:**

- React performance optimization
- Code splitting and lazy loading
- Progressive Web App implementation
- Testing with React Testing Library
- Deployment

**Hands-on Activities:**

- Optimize bundle size and loading
- Implement search and filtering
- Add image upload and management
- Set up testing and deployment pipeline

**Deliverables:**

- Performance optimizations
- Testing suite implementation
- Production-ready frontend

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
