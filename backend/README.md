# Backend API - Site para Escola de Inglês

## Overview

Backend REST API for the English School website, built with Node.js, Express, and TypeScript.

## Technology Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Validation**: Zod
- **Testing**: Jest

## Project Structure

```
src/
├── api/                    # API controllers
│   └── v1/                 # API Version 1
│       ├── external/       # Public endpoints
│       └── internal/       # Authenticated endpoints
├── routes/                 # Route definitions
│   └── v1/                 # Version 1 routes
├── middleware/             # Express middleware
├── services/               # Business logic
├── utils/                  # Utility functions
├── constants/              # Application constants
├── instances/              # Service instances
├── config/                 # Configuration
└── server.ts               # Application entry point
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create environment file:
```bash
cp .env.example .env
```

3. Configure environment variables in `.env`

### Development

Start development server with hot reload:
```bash
npm run dev
```

The API will be available at `http://localhost:3000`

### Building

Build for production:
```bash
npm run build
```

### Production

Start production server:
```bash
npm start
```

## API Versioning

The API uses URL path versioning:

- **V1 External**: `/api/v1/external/*` - Public endpoints
- **V1 Internal**: `/api/v1/internal/*` - Authenticated endpoints

## Testing

Run tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

## Code Quality

Run linter:
```bash
npm run lint
```

Fix linting issues:
```bash
npm run lint:fix
```

## Environment Variables

See `.env.example` for all available configuration options.

Key variables:
- `NODE_ENV` - Environment (development/production)
- `PORT` - Server port (default: 3000)
- `API_VERSION` - API version (default: v1)
- `CORS_ORIGINS` - Allowed CORS origins

## Health Check

Health check endpoint available at:
```
GET /health
```

Response:
```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "version": "v1"
}
```

## Contributing

Follow the established code patterns and conventions documented in the architecture guidelines.

## License

ISC