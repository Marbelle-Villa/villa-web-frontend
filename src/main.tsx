import { useLayoutEffect, useState } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import SplashScreen from './components/SplashScreen'
import './styles.css'

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

function AppRoutes() {
  const { pathname } = useLocation()
  const [showSplash, setShowSplash] = useState(true)

  useLayoutEffect(() => {
    setShowSplash(true)
    const timer = window.setTimeout(() => setShowSplash(false), 2700)
    return () => window.clearTimeout(timer)
  }, [pathname])

  return (
    <>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<ContactPage />} path="/contact" />
        <Route element={<Navigate replace to="/" />} path="*" />
      </Routes>
      {showSplash && <SplashScreen />}
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
