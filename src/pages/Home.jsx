import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Code, Database, Zap } from 'lucide-react'

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = 'Home | Skydope API';
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Skydope API</h1>
        <p className="text-xl text-gray-600 mb-8">Create, manage, and use mock APIs with ease</p>
        <Button size="lg" onClick={() => navigate('/documentation')}>
          Get Started
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Code className="mr-2" />
              Easy to Use
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Create and manage your mock APIs with our intuitive interface. No complex setup required.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Database className="mr-2" />
              Flexible Storage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Store your API responses and access them anytime. Update and version your mocks as needed.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Zap className="mr-2" />
              Fast and Reliable
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Get lightning-fast responses for your mock APIs. Perfect for testing and development.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}