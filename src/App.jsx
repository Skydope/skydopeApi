import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { House, ScrollText,LayoutDashboard, User, Braces } from 'lucide-react';
import { Button } from './components/ui/button'
import ThemeToggle from './components/ui/theme';
import  Footer  from './components/footer'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Documentation from './pages/Documentation'
import Login from './pages/Login'
import CreateAcc from './pages/CreateAcc'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <header className="container mx-auto p-4">
          <nav className="flex justify-between items-center">
            <div className='flex items-center'>
            <Braces className='mr-1'/>
            <Link to="/" className="text-2xl font-bold">
            Skydope API
            </Link>
            </div>
            <div className="space-x-4">
              <Button variant="ghost">
                <House className="h-5 w-5" />
                <Link to="/">Home</Link>
              </Button>
              <Button variant="ghost">
              <ScrollText className="h-5 w-5" />
                <Link to="/documentation">Documentation</Link>
              </Button>
              <Button variant="ghost">
              <LayoutDashboard className="h-5 w-5" />
                <Link to="/dashboard">Dashboard</Link>
              </Button>
              <Button variant="outline">
              <User className="h-5 w-5" />
                <Link to="/login">Login</Link>
              </Button>
              <ThemeToggle />
            </div>
          </nav>
         
        </header>
        <main className='min-h-[82vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-account" element={<CreateAcc />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App