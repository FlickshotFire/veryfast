# Overview

This is a modern web application for **Raghukul Aryawart**, a decade-old NGO focused on environmental protection and social welfare in India. The application serves as their official website, featuring an immersive 3D experience combined with traditional web content to showcase their mission of eliminating single-use plastic through their "Jhola" (cloth bag) movement and various social initiatives.

The application presents the organization's work in women employment, free education for underprivileged children, hygiene awareness, and anti-plastic campaigns. It includes interactive features like a pledge system for users to commit to environmental protection, testimonials, blog content, and comprehensive information about their sustainable business model.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built as a **Single Page Application (SPA)** using React 18 with TypeScript. The architecture follows a component-based design with clear separation of concerns:

- **React + TypeScript**: Core framework providing type safety and modern React features
- **Vite**: Build tool and development server for fast compilation and hot module replacement
- **Tailwind CSS**: Utility-first CSS framework with custom theme configuration for consistent design
- **Radix UI**: Headless component library providing accessible UI primitives
- **React Three Fiber**: 3D rendering library for creating immersive WebGL experiences
- **shadcn/ui**: Pre-built component system built on top of Radix UI for consistent design language

The application features a **3D-first design approach** where Three.js scenes complement traditional web content, creating an engaging user experience that aligns with the organization's innovative approach to environmental activism.

## Backend Architecture
The backend follows a **simple Express.js REST API** pattern:

- **Express.js**: Web framework handling HTTP requests and API routes
- **TypeScript**: Type safety across the entire backend codebase
- **Memory-based storage**: Simple in-memory data storage for demonstration purposes
- **RESTful API design**: Clean API endpoints for pledge management and statistics

The server architecture supports both development and production environments with proper error handling and request logging middleware.

## Database Strategy
Currently implements **in-memory storage** for simplicity and demonstration purposes:

- **Drizzle ORM**: SQL query builder and ORM configured for PostgreSQL
- **Schema definition**: Structured data models using Drizzle's schema system
- **Migration support**: Database migration capabilities for schema evolution
- **Production-ready configuration**: Environment-based database URL configuration

The system is architected to easily transition from memory storage to PostgreSQL when needed, with all the database infrastructure already in place.

## State Management
The application uses **custom Zustand stores** for client-side state management:

- **useAudio**: Manages background music and sound effects for enhanced user experience
- **usePledge**: Handles pledge submission and local storage of user commitments
- **useGame**: Manages any interactive game-like features within the 3D experience

This approach provides lightweight, type-safe state management without the complexity of larger state management libraries.

## Styling and Design System
The design system is built on **Tailwind CSS** with extensive customization:

- **CSS Custom Properties**: Theme variables for consistent color schemes and spacing
- **Dark theme support**: Built-in dark mode with proper color token management
- **Component variants**: Class Variance Authority for consistent component styling
- **Responsive design**: Mobile-first approach with careful consideration for different screen sizes
- **3D integration**: Seamless blend of 2D UI components with 3D WebGL content

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: Neon database client for serverless PostgreSQL connections
- **drizzle-orm**: Modern TypeScript-first ORM with excellent developer experience
- **drizzle-kit**: CLI tools for database migrations and schema management

## Frontend Libraries
- **@react-three/fiber**: React renderer for Three.js enabling declarative 3D scenes
- **@react-three/drei**: Collection of useful helpers and abstractions for React Three Fiber
- **@react-three/postprocessing**: Post-processing effects for enhanced 3D visuals
- **@tanstack/react-query**: Server state management for efficient data fetching and caching

## UI Component System
- **@radix-ui/***: Comprehensive collection of headless, accessible UI components
- **class-variance-authority**: Utility for managing component variant classes
- **tailwindcss**: Utility-first CSS framework
- **clsx**: Utility for constructing className strings conditionally

## Development Tools
- **vite**: Fast build tool with excellent TypeScript support
- **tsx**: TypeScript execution environment for development
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-runtime-error-modal**: Development error handling for Replit environment

## Audio and Media
The application includes support for background music and sound effects to enhance the user experience, with proper audio management through custom hooks.

## 3D Assets and Shaders
- **vite-plugin-glsl**: GLSL shader support for custom 3D effects
- **Three.js ecosystem**: Full 3D rendering capabilities with support for models, animations, and effects

The architecture is designed to be scalable and maintainable, with clear separation between the presentation layer (React components), business logic (custom hooks and stores), and data layer (API routes and database schemas). The 3D elements are treated as first-class citizens in the application architecture, not just decorative additions.