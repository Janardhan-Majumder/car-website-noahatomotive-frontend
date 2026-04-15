# Noah Automotive Frontend - Setup Guide

## Project Overview

This is a **frontend-only** Next.js application for a car selling platform. The backend API runs separately and this application communicates with it via REST API and WebSocket connections.

## Initial Setup

### 1. Prerequisites
- Node.js 18+ 
- pnpm package manager
- A running backend API server

### 2. Installation

```bash
# Install dependencies
pnpm install

# Copy environment file
cp .env.example .env.local

# Update .env.local with your backend URLs and API keys
# NEXT_PUBLIC_SOCKET_URL=http://your-backend:5000
# NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_xxx
```

### 3. Start Development Server

```bash
pnpm dev
```

Visit `http://localhost:3000`

## Project Architecture

### Directory Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (admin)/           # Admin routes (layout grouping)
│   ├── (auth)/            # Auth routes (login, register)
│   ├── (user)/            # User routes (profile, orders)
│   ├── cars/              # Car listings
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with Redux Provider
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── forms/            # Form components (Login, Register)
│   ├── layouts/          # Layout wrappers
│   └── ui/               # Basic UI components
├── hooks/                # Custom React hooks
│   └── useAppDispatch.ts # Redux dispatch hook
├── lib/
│   ├── socket/           # Socket.io client
│   ├── store/            # Redux store
│   │   ├── slices/       # Redux slices
│   │   │   ├── authSlice.ts
│   │   │   ├── cartSlice.ts
│   │   │   └── productsSlice.ts
│   │   └── store.ts      # Store configuration
│   └── utils/            # Utility functions
├── types/                # TypeScript interfaces
└── constants/            # App constants
```

## Key Features & How to Use

### 1. Redux State Management

The application uses Redux Toolkit with three main slices:

**Auth Slice** - User authentication state
```typescript
import { useAppSelector, useAppDispatch } from '@/hooks/useAppDispatch';
import { setUser, setToken } from '@/lib/store/slices/authSlice';

// In a component
const user = useAppSelector(state => state.auth.user);
const dispatch = useAppDispatch();
dispatch(setUser(userData));
```

**Products Slice** - Product listing state
```typescript
const products = useAppSelector(state => state.products.items);
```

**Cart Slice** - Shopping cart state
```typescript
import { addToCart, removeFromCart } from '@/lib/store/slices/cartSlice';

dispatch(addToCart(carProduct));
```

### 2. API Integration

API calls should be implemented in your separate backend project. The frontend is designed to work with REST API endpoints that provide:

- Authentication endpoints (`/auth/login`, `/auth/register`, `/auth/logout`)
- Product management (`/products`, `/products/:id`)
- User management (`/users`, `/users/:id`, `/users/profile`)
- Payment processing (`/payments/process`, `/payments/checkout`)

Use the native Fetch API or your preferred HTTP client in the backend project to handle these endpoints.

### 3. Socket.io Connections

Real-time features are managed via Socket.io:
```typescript
import socket from '@/lib/socket';

// Listen for events
socket.on('orderUpdate', (data) => {
  console.log('Order updated:', data);
});

// Emit events
socket.emit('joinAdminRoom', { adminId: 'admin123' });
```

Real-time features are managed via Socket.io:
```typescript
import socket from '@/lib/socket';

// Listen for events
socket.on('orderUpdate', (data) => {
  console.log('Order updated:', data);
});

// Emit events
socket.emit('joinAdminRoom', { adminId: 'admin123' });
```

### 4. Form Handling with Ant Design

Use Ant Design's Form component for form validation and submission:
```typescript
import { Form, Input, Button } from 'antd';

const MyForm = () => (
  <Form onFinish={onSubmit} layout="vertical">
    <Form.Item
      label="Email"
      name="email"
      rules={[{ required: true, type: 'email' }]}
    >
      <Input />
    </Form.Item>
  </Form>
);
```

## Environment Variables

Create `.env.local` with:

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_SOCKET_URL` | Socket.io server URL | `http://localhost:5000` |
| `NEXT_PUBLIC_STRIPE_PUBLIC_KEY` | Stripe public key | `pk_test_xxx` |

## Common Development Tasks

### Adding a New Page

1. Create folder in `src/app/` (e.g., `src/app/checkout`)
2. Create `page.tsx` in that folder
3. Use Next.js App Router conventions

### Implementing API Calls

API calls should be implemented in your separate backend project. The frontend components can be updated to call backend endpoints once they're available.

### Adding a New Redux Slice

1. Create file in `src/lib/store/slices/` (e.g., `notificationSlice.ts`)
2. Define state, actions, and reducers
3. Import and add to store configuration in `store.ts`

### Using Environment Variables in Components

```typescript
// Client-side only (NEXT_PUBLIC_ prefix required)
const socketUrl = process.env.NEXT_PUBLIC_SOCKET_URL;

// Or use from constants
import { SOCKET_URL } from '@/constants';
```

## Running with Docker

### Development

```bash
docker-compose up
```

### Production Build

```bash
docker build -t car-website-frontend .
docker run -p 3000:3000 car-website-frontend
```

## Backend Integration Checklist

- [ ] Backend API is running
- [ ] Update API base URL in `.env.local`
- [ ] Update Socket.io URL in `.env.local`
- [ ] Verify CORS is configured on backend
- [ ] Test authentication flow
- [ ] Configure Stripe webhook URLs

## Debugging

### Check Redux State in Console

```javascript
// In browser console
window.__REDUX_DEVTOOLS_EXTENSION__?.()
```

### Enable Socket.io Debugging

```typescript
socket.on('connect', () => console.log('Connected:', socket.id));
socket.onAny((event, ...args) => console.log(event, args));
```

## Performance Optimization Tips

1. Use `React.memo()` for components that don't need frequent re-renders
2. Implement code splitting with dynamic imports
3. Use Ant Design's tree-shaking features
4. Optimize images with Next.js `Image` component
5. Implement pagination for large product lists

## Troubleshooting

**"Cannot find module '@/...'**
- Check `tsconfig.json` path aliases
- Ensure files exist in correct directories

**Redux state not updating**
- Verify action is dispatched with `useAppDispatch()`
- Check Redux DevTools in browser
- Ensure reducers are properly configured

**API calls failing**
- Check CORS headers on backend
- Verify API base URL in `.env.local`
- Check browser Network tab for actual request/response
- Verify token is being sent in Authorization header

**Socket.io not connecting**
- Verify Socket.io server is running
- Check `NEXT_PUBLIC_SOCKET_URL` in `.env.local`
- Check browser console for connection errors
- Ensure CORS allows Socket.io on backend

## Next Steps

1. Review the backend API documentation
2. Implement authentication flow
3. Build product listing pages
4. Implement shopping cart functionality
5. Integrate Stripe payment processing
6. Set up admin panel features

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Redux Toolkit Docs](https://redux-toolkit.js.org/)
- [Ant Design Components](https://ant.design/components)
- [Axios Documentation](https://axios-http.com/)
- [Socket.io Client Docs](https://socket.io/docs/v4/client-api/)
