# Rumani Dhaage

This is the official web application for Rumani Dhaage, a modern e-commerce platform built with a focus on performance and user experience. The project utilizes a powerful stack including React, Vite, TypeScript, and Supabase to deliver a seamless shopping experience and a secure, easy-to-use admin portal.

## ✨ Features

-   **Modern Frontend**: Built with React and Vite for a fast, responsive user interface.
-   **Type-Safe Code**: Fully written in TypeScript for improved developer experience and code quality.
-   **Styled with Tailwind CSS**: Utilizes the utility-first Tailwind CSS framework for a clean and consistent design.
-   **UI by shadcn/ui**: Implements a collection of beautifully designed, accessible components.
-   **Supabase Backend**: Leverages Supabase for database, authentication, and other backend services.
-   **Secure Admin Portal**: A protected admin area with Google OAuth and a whitelisting system for authorized users.
-   **Database Migrations**: Schema changes are managed through version-controlled migration files.

## 🛠️ Tech Stack

-   **Framework**: [React](https://reactjs.org/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Component Library**: [shadcn/ui](https://ui.shadcn.com/)
-   **Backend**: [Supabase](https://supabase.io/)
-   **Routing**: [React Router](https://reactrouter.com/)

## 🚀 Getting Started

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

-   Node.js (v18 or higher)
-   npm or a compatible package manager
-   [Supabase CLI](https://supabase.com/docs/guides/cli)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/rumani-dhaage.git
    cd rumani-dhaage
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Set up environment variables:**
    Copy the example environment file and fill in your Supabase and other credentials.
    ```sh
    cp .env.example .env
    ```
    You will need to populate the following variables in your `.env` file:
    -   `VITE_SUPABASE_URL`: Your Supabase project URL.
    -   `VITE_SUPABASE_ANON_KEY`: Your Supabase project anon key.
    -   `VITE_ADMIN_EMAILS`: A comma-separated list of Google emails that are allowed to access the admin portal.

### Running the Application

-   **Start the development server:**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

##  supabase

This project uses the Supabase CLI to manage local development and database migrations.

1.  **Link your Supabase project:**
    Replace `<project-ref>` with your actual Supabase project reference.
    ```sh
    npx supabase link --project-ref <project-ref>
    ```

2.  **Push database migrations:**
    To apply the latest schema changes to your remote Supabase database, run:
    ```sh
    npx supabase db push
    ```

## 📜 Available Scripts

-   `npm run dev`: Starts the development server.
-   `npm run build`: Builds the application for production.
-   `npm run lint`: Lints the codebase using ESLint.
-   `npm run preview`: Serves the production build locally for preview.

## 🤝 Contribution Guidelines

-   **Markdown Linting**: All Markdown files (`.md`) must adhere to the project's linting rules. Please ensure your contributions pass the linter checks.
