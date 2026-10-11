"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";
import FormInput from "@/components/ui/FormInput";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setIsLoading(true);

    // TODO: Connect to your backend/database later
    // For now, simulate successful registration
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Redirect to login after successful registration
      router.push("/account/login?registered=true");
    } catch (error) {
      setError("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-bh-black flex items-center justify-center">
      <div className="max-w-md w-full">
        <h1 className="font-heading text-4xl text-bh-ivory mb-2">Create Account</h1>
        <p className="font-body text-bh-ivory/60 mb-8">
          Join the Business Hub ecosystem
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 p-8 border border-bh-white/10 rounded-sm bg-bh-white/5">
          <FormInput
            id="name"
            label="Full Name"
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />

          <FormInput
            id="email"
            label="Email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />

          <FormInput
            id="password"
            label="Password"
            type="password"
            placeholder="Minimum 6 characters"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            required
          />

          <FormInput
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            placeholder="Re-enter password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
            required
          />

          {error && (
            <div className="p-3 bg-red-900/20 border border-red-500/30 rounded-sm text-red-400 text-sm">
              {error}
            </div>
          )}

          <Button variant="primary" size="lg" className="w-full" disabled={isLoading}>
            {isLoading ? "Creating Account..." : "Create Account"}
          </Button>
        </form>

        <p className="text-center mt-6 text-bh-ivory/60">
          Already have an account?{" "}
          <Link href="/account/login" className="text-bh-red hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </main>
  );
}