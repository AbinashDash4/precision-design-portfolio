
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, User } from "lucide-react";

interface AdminLoginProps {
  onLogin: (success: boolean) => void;
}

const AdminLogin = ({ onLogin }: AdminLoginProps) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple hardcoded authentication for demo
    // In production, this would connect to your backend
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      onLogin(true);
    } else {
      alert('Invalid credentials. Use admin/admin123');
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-pink/5"></div>
      
      <Card className="w-full max-w-md bg-black/90 backdrop-blur-xl border border-neon-blue/30">
        <CardHeader className="text-center">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-neon-blue via-neon-pink to-neon-green p-1 animate-glow">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
              <Lock className="w-8 h-8 text-neon-blue" />
            </div>
          </div>
          <CardTitle className="text-2xl gradient-text">Admin Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label className="text-gray-300">Username</Label>
              <div className="relative mt-2">
                <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  value={credentials.username}
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                  className="pl-10 bg-gray-900/80 border-gray-700 text-white"
                  placeholder="Enter username"
                  required
                />
              </div>
            </div>
            
            <div>
              <Label className="text-gray-300">Password</Label>
              <div className="relative mt-2">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <Input
                  type="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  className="pl-10 bg-gray-900/80 border-gray-700 text-white"
                  placeholder="Enter password"
                  required
                />
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-neon-blue to-neon-pink hover:from-neon-pink hover:to-neon-blue text-black font-semibold"
            >
              Login to Admin
            </Button>
          </form>
          
          <p className="text-center text-gray-400 text-sm mt-4">
            Demo credentials: admin / admin123
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
