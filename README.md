# Minimal Dashboard

A modern, high-performance monorepo workspace for the Minimal Dashboard ecosystem. Built with [Turborepo](https://turborepo.dev/), [React](https://react.dev/), [Next.js](https://nextjs.org/), and [Vite](https://vitejs.dev/).

## Workspace Structure

This monorepo is structured into applications and shared packages to ensure code reusability and maintainability:

### Apps

- **`admin`**: A Vite-powered React administrative dashboard.
- **`web`**: The main public-facing Next.js application.
- **`docs`**: A Next.js application for documentation.

### Packages

- **`@repo/ui`**: A shared React component library used across all applications.
- **`@repo/eslint-config`**: Shared ESLint configurations to enforce consistent code styling.
- **`@repo/typescript-config`**: Shared `tsconfig.json` bases used throughout the monorepo.

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:
- Node.js (>= 24)
- npm (>= 11)

### Installation

Clone the repository and install the dependencies from the root directory:

```bash
npm install
```

### Development

To start the development servers for all applications simultaneously, run:

```bash
npm run dev
```

To run the development server for a specific application (e.g., the `admin` app), use:

```bash
npm run dev --workspace=admin
```

## Available Scripts

From the root directory, you can run the following commands to manage the entire workspace:

- **`npm run build`**: Builds all apps and packages for production.
- **`npm run lint`**: Runs ESLint across all packages and apps to check for code quality.
- **`npm run check-types`**: Runs TypeScript compiler checks across the workspace.
- **`npm run format`**: Formats all supported files using Prettier.

## Architecture & Tooling

- **Turborepo**: Enables high-performance build systems and remote caching.
- **TypeScript**: The entire codebase is written in TypeScript for static type checking and enhanced developer experience.
- **ESLint & Prettier**: Configured globally for robust code linting and formatting.
