# Project Context for Gemini

This document provides a summary of the Rumani Dhaage project to ensure a consistent and efficient development process.

### Core Technologies

- **Framework**: React
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn

### Backend & Database

- **Service**: Supabase is used for the database, authentication, and other backend services.
- **Schema Management**: Database schema changes are managed through migration files located in the `supabase/migrations` directory.
- **Applying Migrations**: To apply local migrations to the remote Supabase project, run the command `npx supabase db push`.

### Authentication

- **Admin Portal**: The application includes a secure admin portal at the `/admin` route.
- **Authentication Method**: Access is granted via Google OAuth.
- **Authorization**: Only users whose email addresses are included in the `VITE_ADMIN_EMAILS` environment variable (a comma-separated list) are authorized to access the admin portal.

### Design Philosophy

- **User Routes (Mobile-First)**: All public-facing routes (e.g., `/`, `/products`, `/about`) are designed with a mobile-first approach.
- **Admin Route (Desktop-First)**: The `/admin` route is designed with a desktop-first approach.

### Key Commands

- `npm run dev`: Starts the local development server.
- `npx supabase db push`: Pushes local database migrations to the remote Supabase project.
