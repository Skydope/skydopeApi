import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Documentation() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Documentation</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Learn how to create your first mock API and integrate it into your project.
          </CardDescription>
          <ul className="list-disc pl-5 mt-4">
            <li>Create an account</li>
            <li>Generate a new mock API</li>
            <li>Customize your API response</li>
            <li>Use your mock API in your application</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Detailed information about our API endpoints and how to use them.
          </CardDescription>
          <ul className="list-disc pl-5 mt-4">
            <li>Authentication</li>
            <li>Creating and managing mocks</li>
            <li>Retrieving mock data</li>
            <li>Error handling</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Examples</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            See examples of how to use Skydope API in various scenarios.
          </CardDescription>
          <ul className="list-disc pl-5 mt-4">
            <li>Using mock APIs in frontend development</li>
            <li>Integration testing with mock APIs</li>
            <li>Creating dynamic mock responses</li>
            <li>Best practices for mock API usage</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}