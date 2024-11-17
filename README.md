# Daily Blogs 📝

A simple yet powerful web application for creating, managing, and reading blog posts. Built with modern web technologies and focused on simplicity.

[Live Demo](https://daily-blogs-bdqw.vercel.app) | [Report Bug](https://github.com/kancherish/daily-blogs/issues)

### Demo Account
```
Email: user@guest.com
Password: user1234
```

## ✨ Features

- Create and manage personal blog posts
- Read articles from other contributors
- Rich text editing with TinyMCE
- User authentication and authorization
- Responsive design (desktop-optimized)

## 🚀 Quick Start

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js
- Appwrite account and project setup


### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/daily-blogs.git
cd daily-blogs
```

2. Install dependencies
```bash
# Using Bun (recommended)
bun install

# Using npm
npm install
```

3. Environment Setup
- Copy `.env.sample` to create `.env`
- Configure your Appwrite credentials in `.env`:
  ```
  APPWRITE_ENDPOINT=your_endpoint
  APPWRITE_PROJECT_ID=your_project_id
  # Add other required variables
  ```

4. Start Development Server
```bash
# Using Bun
bun run dev

# Using npm
npm run dev
```

5. Build for Production
```bash
# Using Bun
bun run build

# Using npm
npm run build
```

## 🛠️ Tech Stack

### Frontend
- **Framework:** React.js
- **Styling:** Tailwind CSS
- **State Management:** Redux Toolkit
- **Routing:** React Router
- **Form Handling:** React Hook Form
- **Editor:** TinyMCE

### Backend
- **Backend as a Service:** [Appwrite](https://www.appwrite.io)

### Build Tools
- **Bundler:** Rspack
- **Runtime:** Bun.js

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

- Report bugs and issues
- Suggest new features
- Submit pull requests
- Provide code reviews and feedback

## 📝 Notes

- The application is currently optimized for desktop viewing
- Mobile responsiveness improvements are in progress

## ⚠️ Known Issues

- Limited mobile device optimization
