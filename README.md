# Noah Automotive - Car Selling Website (Frontend)

A modern car selling platform frontend built with Next.js, featuring user management, admin panel, and online payments. This is the frontend application that communicates with a separate backend API.

## Features

- Car product listings and filtering
- User authentication and profile management
- Admin panel for product, user, and order management
- Shopping cart and checkout flow
- Online payment integration with Stripe
- Real-time features with Socket.io
- Modern UI with Antd and Tailwind CSS
- Redux state management

## Tech Stack

- **Framework**: Next.js 16, React 19, TypeScript
- **UI**: Antd, Tailwind CSS, React Icons
- **State Management**: Redux Toolkit
- **Real-time**: Socket.io Client
- **HTTP Client**: Axios
- **Payments**: Stripe.js

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm
- A running backend API server

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Create `.env.local` file (use `.env.example` as reference):
   ```bash
   cp .env.example .env.local
   ```

4. Update environment variables with your backend API URL and Stripe keys

5. Run the development server:
   ```bash
   pnpm dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                    # Next.js App Router pages and layouts
│   ├── (admin)/           # Admin panel routes
│   ├── (auth)/            # Authentication routes (login, register)
│   ├── (user)/            # User routes (profile, orders)
│   ├── cars/              # Car listing and detail pages
│   └── api/               # API route handlers (if needed for local proxy)
├── components/            # Reusable React components
│   ├── ui/               # UI components
│   ├── forms/            # Form components
│   └── layouts/          # Layout components
├── lib/
│   ├── store/            # Redux store configuration
│   ├── services/         # API service layer
│   ├── socket/           # Socket.io client setup
│   └── utils/            # Utility functions
├── hooks/                # Custom React hooks
├── types/                # TypeScript type definitions
└── constants/            # Application constants
```

## Environment Variables

Create a `.env.local` file with the following variables (see `.env.example`):

```env
NEXT_PUBLIC_SOCKET_URL=http://localhost:5000
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_stripe_public_key_here
```

## Backend Integration

This frontend expects a backend API running separately. The backend should provide endpoints for:

- **Authentication**: `/auth/login`, `/auth/register`, `/auth/logout`
- **Products**: `/products`, `/products/:id`
- **Users**: `/users`, `/users/:id`, `/users/profile`
- **Payments**: `/payments/process`, `/payments/history`, `/payments/checkout`
- **Orders**: `/orders`, `/orders/:id`

The frontend communicates with the backend using:
- **HTTP Client**: Native Fetch API
- **Real-time**: Socket.io for live updates

## API Integration

API calls should be implemented in your backend project. The frontend is ready to integrate with REST API endpoints and Socket.io for real-time features.
```

## Building for Production

```bash
pnpm build
pnpm start
```

## Deployment

Deploy to Vercel or any Node.js hosting:

```bash
# Vercel (automatic from git)
vercel

# Docker
docker build -t car-website-frontend .
docker run -p 3000:3000 car-website-frontend
```

## Related Projects

- Backend API: [Noah Automotive Backend](https://github.com/noahatomotive/backend)

## License

MIT
