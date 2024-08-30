import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { Button } from './components/ui/button'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Documentation from './pages/Documentation'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <header className="container mx-auto p-4">
          <nav className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">Skydope API</Link>
            <div className="space-x-4">
              <Button variant="ghost" asChild>
                <Link to="/">Home</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/documentation">Documentation</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/dashboard">Dashboard</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/login">Login</Link>
              </Button>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App