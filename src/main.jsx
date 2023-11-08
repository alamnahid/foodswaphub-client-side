import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import('preline')
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';
import AuthProvider from './Components/Provider/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient()
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from "framer-motion";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnimatePresence>
    <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>

    </QueryClientProvider>
    </HelmetProvider>
    </AnimatePresence>
  </React.StrictMode>,
)
