# E-Commerce React Application

A modern, responsive e-commerce application built with React.js and Tailwind CSS, featuring user authentication, product catalog, and user profile management.

## 🚀 Features

- **User Authentication**: Secure login with form validation
- **User Profile**: Display authenticated user's personal information
- **Product Catalog**: Browse products with pagination (10 products per page)
- **Product Details**: View detailed information for individual products
- **Protected Routes**: Access control for authenticated users only
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Modern UI**: Clean, professional interface with intuitive navigation

## 🛠️ Technologies Used

- **Frontend**: React.js (v19.1.1)
- **Styling**: Tailwind CSS (v3.4.0)
- **Icons**: Lucide React
- **API**: DummyJSON REST API
- **Authentication**: Token-based authentication with localStorage
- **State Management**: React Context API

## 📁 Project Structure

```
ecommerce-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── AuthContext.js      # Authentication context & logic
│   │   │   └── LoginScreen.js      # Login form component
│   │   ├── Products/
│   │   │   ├── ProductsList.js     # Products catalog with pagination
│   │   │   └── ProductDetail.js    # Individual product details
│   │   ├── Profile/
│   │   │   └── UserProfile.js      # User profile display
│   │   └── Layout/
│   │       ├── Navigation.js       # Header navigation
│   │       └── TabNavigation.js    # Tab navigation component
│   ├── App.js                      # Main application component
│   ├── App.css                     # Tailwind CSS imports
│   └── index.js                    # Application entry point
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ecommerce-app.git
   cd ecommerce-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🔐 Test Credentials

Use these credentials to login and test the application:

| Username | Password |
|----------|----------|
| `emilys` | `emilyspass` |
| `michaelw` | `michaelwpass` |
| `sophiab` | `sophiabpass` |
| `jamesd` | `jamesdpass` |

## 📱 Application Flow

1. **Login Screen**: Enter credentials to authenticate
2. **User Profile**: View personal information and details
3. **Products Catalog**: Browse paginated product listings
4. **Product Details**: Click any product to view detailed information
5. **Navigation**: Switch between Profile and Products tabs
6. **Logout**: Secure logout with session cleanup

## 🔗 API Endpoints Used

- `POST https://dummyjson.com/auth/login` - User authentication
- `GET https://dummyjson.com/products` - Products listing
- `GET https://dummyjson.com/products/{id}` - Individual product details

## ✨ Key Features Implementation

### Authentication System
- Form validation with error handling
- Token-based authentication
- Persistent login state with localStorage
- Automatic logout functionality

### Product Management
- Paginated product listings (10 items per page)
- Product search and filtering
- Detailed product view with images and specifications
- Responsive product cards

### User Experience
- Clean, modern interface
- Mobile-responsive design
- Loading states and error handling
- Intuitive navigation between sections

### Security Features
- Protected routes
- Token validation
- Automatic redirects for unauthorized access
- Secure session management

## 🎨 Design Philosophy

- **Mobile-First**: Responsive design that works on all devices
- **User-Centric**: Intuitive navigation and clear information hierarchy
- **Performance**: Optimized loading and smooth interactions
- **Accessibility**: Semantic HTML and keyboard navigation support

## 🚀 Production Deployment

### Build for Production
```bash
npm run build
```


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


**Note**: This application uses DummyJSON API for demonstration purposes. In a production environment, replace with your actual backend API endpoints.