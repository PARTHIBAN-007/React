// StylishLoginPage.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, EyeOff, LogIn, Mail, Lock } from "lucide-react";
import { motion } from "framer-motion";

export default function StylishLoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="backdrop-blur-md bg-white/10 border-white/20 border text-white w-full max-w-md shadow-2xl rounded-2xl">
          <CardContent className="p-8 space-y-6">
            <h2 className="text-3xl font-bold text-center">Welcome Back</h2>

            <div className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-white/50" size={20} />
                <Input
                  placeholder="Email"
                  type="email"
                  className="pl-10 bg-white/20 text-white placeholder-white/60"
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-3 text-white/50" size={20} />
                <Input
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  className="pl-10 pr-10 bg-white/20 text-white placeholder-white/60"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-white/50"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <Button className="w-full bg-white/20 hover:bg-white/30 text-white">
                <LogIn className="mr-2" size={18} /> Login
              </Button>

              <div className="text-center text-sm text-white/70">or</div>

              <Button
                variant="outline"
                className="w-full border-white/30 text-white hover:bg-white/10"
              >
                <img src="/google.svg" alt="Google" className="h-5 mr-2" />
                Continue with Google
              </Button>
            </div>

            <p className="text-xs text-white/50 text-center">
              Don’t have an account? <a href="#" className="underline">Sign up</a>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
