import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import{ClerkProvider} from '@clerk/clerk-react'
import {
  Routes,
  Route,
  BrowserRouter,
  useLocation,
  useNavigationType,
  createRoutesFromChildren,
  matchRoutes,
} from "react-router";

import {
  //useQuery,
  //useMutation,
  //useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import {Toaster} from 'react-hot-toast';
import AuthProvider from './providers/AuthProvider.jsx'

import * as Sentry from "@sentry/react";

const queryClient=new QueryClient();


// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}


Sentry.init({
  dsn: "https://5f15d463c524197e4ddb0c34dbc5a971@o4510009836240898.ingest.us.sentry.io/4510244145332224",
  integrations: [
    Sentry.reactRouterV7BrowserTracingIntegration({
      useEffect: React.useEffect,
      useLocation,
      useNavigationType,
      createRoutesFromChildren,
      matchRoutes,
    }),
  ],
  tracesSampleRate: 1.0,
});





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BrowserRouter>

      <QueryClientProvider client={queryClient}>

        <AuthProvider>
      <App />
      </AuthProvider>
      <Toaster position="top-right"/>
      </QueryClientProvider>
      </BrowserRouter>  
    </ClerkProvider>       
  </StrictMode>,
)
