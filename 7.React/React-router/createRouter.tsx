//we generally cretate an router inside the App.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './components/HomePage'

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <div> 404 Page Not Foud </div>
    },
    {
        path: "/about",
        element: <Header />,
        errorElement: <div> 404 Page Not Foud </div>
    }
])


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
