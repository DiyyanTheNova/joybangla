"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function JoinPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    accountType: "individual", // individual, business
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Add actual registration logic here
    console.log("Registration data:", formData);
    
    // For now, just redirect to dashboard
    alert("Welcome to Business Hub! (Demo mode)");
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-bh-black text-bh-ivory pt-32 pb-20 px-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl text-bh-white mb-4">
            Join Business Hub
          </h1>
          <p className="font-body text-bh-ivory/70">
            Create your free account in minutes. No credit card required.
          </p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Account Type */}
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, accountType: "individual" })}
              className={`py-3 px-4 border rounded-sm font-heading text-sm uppercase tracking-wider transition-all ${
                formData.accountType === "individual"
                  ? "border-bh-red bg-bh-red text-bh-white"
                  : "border-bh-white/20 text-bh-ivory/60 hover:border-bh-white/40"
              }`}
            >
              Individual
            </button>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, accountType: "business" })}
              className={`py-3 px-4 border rounded-sm font-heading text-sm uppercase tracking-wider transition-all ${
                formData.accountType === "business"
                  ? "border-bh-red bg-bh-red text-bh-white"
                  : "border-bh-white/20 text-bh-ivory/60 hover:border-bh-white/40"
              }`}
            >
              Business
            </button>
          </div>

          {/* Name */}
          <div>
            <label className="block font-heading text-xs uppercase tracking-wider text-bh-ivory/70 mb-2">
              Full Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-bh-black border border-bh-white/10 text-bh-ivory focus:border-bh-red focus:outline-none transition-colors"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-heading text-xs uppercase tracking-wider text-bh-ivory/70 mb-2">
              Email Address
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-bh-black border border-bh-white/10 text-bh-ivory focus:border-bh-red focus:outline-none transition-colors"
              placeholder="john@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block font-heading text-xs uppercase tracking-wider text-bh-ivory/70 mb-2">
              Password
            </label>
            <input
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-4 py-3 bg-bh-black border border-bh-white/10 text-bh-ivory focus:border-bh-red focus:outline-none transition-colors"
              placeholder="••••••••"
            />
          </div>

          {/* Submit */}
          <Button variant="primary" size="lg" type="submit" className="w-full">
            Create Free Account
          </Button>

          {/* Terms */}
          <p className="text-xs text-bh-ivory/40 text-center">
            By creating an account, you agree to our{" "}
            <Link href="/terms" className="text-bh-red hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-bh-red hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </form>

        {/* Sign In Link */}
        <p className="text-center mt-8 text-bh-ivory/60">
          Already have an account?{" "}
          <Link href="/login" className="text-bh-red hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}