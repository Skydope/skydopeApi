import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, KeyRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Login | Skydope API';
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
    console.log('Login attempt');
  };

  return (
    <div className="container mx-auto p-4 flex justify-center items-center min-h-[60vh]">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className='flex'>
            <User className='mr-2 w-5 h-5'/>
            Login
            </CardTitle>
          <CardDescription>Enter your credentials to access your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email" className='flex'>
                <Mail className='mr-2 w-5 h-5'/>
                  Email
                  </Label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password" className='flex'>
                  <KeyRound className='mr-2 w-5 h-5'/>
                  Password
                  </Label>
                <Input id="password" placeholder="Enter your password" type="password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => navigate('/create-account')}>
            Create Account
          </Button>
          <Button type="submit">Login</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
