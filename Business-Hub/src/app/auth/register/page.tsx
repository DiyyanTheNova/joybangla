"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual registration logic
    console.log("Registration data:", formData);
    // Redirect to dashboard or login after successful registration
    router.push("/auth/login");
  };

  return (
    <main className="min-h-screen bg-bh-black flex items-center justify-center px-6 py-24">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-block">
            <div className="w-32 h-10 bg-bh-red flex items-center justify-center mx-auto">
              <span className="font-heading text-bh-white font-bold text-xl">BH</span>
            </div>
          </Link>
          <h1 className="font-heading text-3xl text-bh-white mt-8">Create your account</h1>
          <p className="font-body text-bh-ivory/60 mt-2">Join Bangladesh's premier business ecosystem</p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block font-heading text-xs uppercase tracking-wider text-bh-ivory/70 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-bh-white/5 border border-bh-white/10 text-bh-ivory placeholder-bh-ivory/30 focus:outline-none focus:border-bh-red transition-colors"
              placeholder="Your full name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-heading text-xs uppercase tracking-wider text-bh-ivory/70 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-bh-white/5 border border-bh-white/10 text-bh-ivory placeholder-bh-ivory/30 focus:outline-none focus:border-bh-red transition-colors"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-heading text-xs uppercase tracking-wider text-bh-ivory/70 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-4 py-3 bg-bh-white/5 border border-bh-white/10 text-bh-ivory placeholder-bh-ivory/30 focus:outline-none focus:border-bh-red transition-colors"
              placeholder="Create a password"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block font-heading text-xs uppercase tracking-wider text-bh-ivory/70 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              className="w-full px-4 py-3 bg-bh-white/5 border border-bh-white/10 text-bh-ivory placeholder-bh-ivory/30 focus:outline-none focus:border-bh-red transition-colors"
              placeholder="Confirm your password"
              required
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="terms"
              checked={formData.agreeToTerms}
              onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
              className="mt-1 w-4 h-4 border border-bh-white/20 bg-bh-white/5 text-bh-red focus:ring-bh-red"
              required
            />
            <label htmlFor="terms" className="font-body text-sm text-bh-ivory/60">
              I agree to the{" "}
              <Link href="/terms" className="text-bh-red hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-bh-red hover:underline">
                Privacy Policy
              </Link>
            </label>
          </div>

          <Button type="submit" variant="primary" size="lg" className="w-full cursor-pointer">
            Create Free Account
          </Button>
        </form>

        <p className="font-body text-sm text-bh-ivory/60 text-center mt-8">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-bh-red hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}