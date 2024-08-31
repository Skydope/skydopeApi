import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function CreateAcc() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    birthdate: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    // Aquí iría la lógica para crear la cuenta
    console.log('Account creation attempt', formData);
  };

  return (
    <div className="container mx-auto p-4 flex justify-center items-center min-h-[60vh]">
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle>Create Account</CardTitle>
          <CardDescription>Fill in the details to create a new account.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="birthdate">Birthdate</Label>
                <Input
                  id="birthdate"
                  placeholder="Enter your birthdate"
                  type="date"
                  value={formData.birthdate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="submit" onClick={handleSubmit}>Create Account</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
