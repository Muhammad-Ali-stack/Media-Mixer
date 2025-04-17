"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Card } from "@heroui/card";
import { Switch } from "@heroui/switch";
import { SunIcon, MoonIcon } from "lucide-react";
import GoogleIcon from "@/components/icons"; // Ensure this exists

export default function LoginPage() {
  
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6 ">Media Mixer - Login Portal</h1>

      <div className="absolute top-4 right-4">
        <Switch
          checked={darkMode}
          onCheckedChange={() => setDarkMode(!darkMode)}
          icon={darkMode ? <SunIcon /> : <MoonIcon />}
        />
      </div>
      
      <Card className="w-full max-w-md p-6 shadow-lg rounded-lg">
        <div className="flex flex-col items-center">
          <Image src="/logo.png" alt="Koderz Club Logo" width={100} height={50} />
          <h2 className="text-2xl font-bold mt-4 text-yellow-500">Welcome to Media Mixer</h2>
          <p className="text-sm text-center mt-2">Sign in to continue</p>
          <form className="w-full mt-4 space-y-4">
            <Input placeholder="Username" type="text" className="w-full" />
            <Input placeholder="Password" type="password" className="w-full" />
            <Input placeholder="Retype Password" type="password" className="w-full" />
            <Button className="w-full">Sign In</Button>
            <Button className="w-full">Sign Up</Button>
          </form>
         
        </div>
      </Card>
      
    </div>
  );
}
