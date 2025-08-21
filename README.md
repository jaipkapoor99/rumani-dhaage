# Rumani Dhaage

Rumani Dhaage is a modern e-commerce web application built with React and TypeScript. It features a user-friendly interface for customers and a secure admin portal for managing the store.

## Core Technologies

- **Framework**: React
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn

## Backend & Database

- **Service**: Supabase is used for the database, authentication, and other backend services.
- **Schema Management**: Database schema changes are managed through migration files located in the `supabase/migrations` directory.

## Key Features

- **Product Showcase**: Browse and view product details.
- **Secure Admin Portal**: A protected route `/admin` for administrators.
- **Authentication**: Google OAuth for admin access.
- **Role-Based Access**: Admin access is restricted to a whitelist of email addresses.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm
- Supabase account and project

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/rumani-dhaage.git
    cd rumani-dhaage
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env.local` file in the root of the project and add the following environment variables:

    ```env
    VITE_SUPABASE_URL="your-supabase-project-url"
    VITE_SUPABASE_ANON_KEY="your-supabase-anon-key"
    VITE_ADMIN_EMAILS="admin1@example.com,admin2@example.com"
    ```

### Running the Application

- **Development Server:**

  ```bash
  npm run dev
  ```

- **Build for Production:**

  ```bash
  npm run build
  ```

## Database Migrations

To apply local database migrations to the remote Supabase project, run the following command:

```bash
npx supabase db push
```

## Authentication

- **Admin Portal**: The application includes a secure admin portal at the `/admin` route.
- **Authentication Method**: Access is granted via Google OAuth.
- **Authorization**: Only users whose email addresses are included in the `VITE_ADMIN_EMAILS` environment variable (a comma-separated list) are authorized to access the admin portal.

## Design Philosophy

- **User Routes (Mobile-First)**: All public-facing routes (e.g., `/`, `/products`, `/about`) are designed with a mobile-first approach.
- **Admin Route (Desktop-First)**: The `/admin` route is designed with a desktop-first approach.

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com).

1. **Import Project**: Import your GitHub repository into Vercel.
2. **Configure Settings**: Vercel will automatically detect the Vite framework and configure the build settings.
    - **Build Command**: `npm run build`
    - **Output Directory**: `dist`
3. **Environment Variables**: Add your Supabase environment variables (`VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`) in the Vercel project settings.
4. **Deploy**: Click "Deploy". Vercel will handle the rest.

For Google OAuth to work correctly, remember to add your Vercel deployment URL to the list of approved redirect URLs in your Supabase project settings.
