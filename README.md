# Global University Website

A modern, production-ready website for Global University built with Next.js 14, Firebase, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first, fully responsive across all devices
- **SEO Optimized**: Comprehensive SEO with metadata, sitemap, and structured data
- **Admin Portal**: Full content management system with user roles and permissions
- **Blog Management**: Create and manage news, events, and blog posts
- **Firebase Integration**: Firestore database, Authentication, and Storage
- **Modern UI**: Built with Tailwind CSS and accessible components

## Technology Stack

- **Next.js 14** (App Router) with TypeScript
- **Firebase** (Firestore, Authentication, Storage)
- **Tailwind CSS** with custom color palette
- **Poppins** font from Google Fonts
- **Shadcn/ui** components

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Firebase project with Firestore, Authentication, and Storage enabled

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd global-university
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.local.example` to `.env.local`
   - Fill in your Firebase configuration values

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Firebase Setup

### 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Authentication (Email/Password)
4. Create Firestore database
5. Enable Storage

### 2. Firestore Security Rules

Set up the following security rules in Firestore:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users collection
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    
    // Posts collection
    match /posts/{postId} {
      allow read: if resource.data.published == true || 
        (request.auth != null && 
         get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role in ['admin', 'editor']);
      allow create: if request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role in ['admin', 'editor'];
      allow update, delete: if request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role in ['admin', 'editor'];
    }
  }
}
```

### 3. Storage Security Rules

Set up the following storage rules:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /media/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null && 
        firestore.get(/databases/(default)/documents/users/$(request.auth.uid)).data.role in ['admin', 'editor'];
    }
  }
}
```

### 4. Create Initial Admin User

1. Go to Firebase Authentication
2. Add a user manually with email/password
3. In Firestore, create a document in the `users` collection with:
   - Document ID: the user's UID
   - Fields:
     - `email`: user's email
     - `role`: "admin"
     - `createdAt`: timestamp
     - `updatedAt`: timestamp

## Deployment to Hostinger

### 1. Build the Application

```bash
npm run build
```

### 2. Deploy Options

#### Option A: Static Export (Recommended for Hostinger)

1. Update `next.config.js` to include:
```javascript
output: 'export',
```

2. Build:
```bash
npm run build
```

3. Upload the `out` folder to your Hostinger hosting

#### Option B: Node.js Hosting

1. Ensure your Hostinger plan supports Node.js
2. Upload the entire project
3. Set environment variables in Hostinger control panel
4. Run `npm install` and `npm run build`
5. Start with `npm start`

### 3. Environment Variables

Set the following environment variables in Hostinger:
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `NEXT_PUBLIC_SITE_URL`

## Project Structure

```
global-university/
├── app/                    # Next.js app directory
│   ├── admin/             # Admin portal pages
│   ├── about/              # Public pages
│   └── ...
├── components/             # React components
│   ├── layout/             # Header, Footer
│   ├── home/               # Home page components
│   └── ui/                 # Reusable UI components
├── lib/                    # Utility functions
│   └── firebase/           # Firebase configuration and helpers
└── public/                 # Static assets
```

## Admin Portal

Access the admin portal at `/admin/login`. You'll need an admin or editor account.

### Features:
- **Dashboard**: Overview of posts and users
- **User Management**: Add, edit, and manage user roles (admin only)
- **Post Management**: Create, edit, and delete posts (news/events/blog)
- **Media Library**: Upload and manage images

## Color Palette

- White: `#FFFFFF`
- Light Gray: `#D3D3D3`
- Dark Gray: `#4C4C4D`
- Orange/Yellow: `#FCB64D`
- Orange: `#F47920`

## SEO Features

- Dynamic metadata for all pages
- XML sitemap generation
- robots.txt configuration
- Open Graph and Twitter Card tags
- Structured data (JSON-LD)
- Semantic HTML5

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

Copyright © Global University. All rights reserved.

