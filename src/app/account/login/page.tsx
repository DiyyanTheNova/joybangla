"use client";

import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";
import FormInput from "@/components/ui/FormInput";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Check if user just registered
  useEffect(() => {
    if (searchParams.get("registered") === "true") {
      setSuccess("Account created successfully! Please sign in.");
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password");
    } else {
      router.push("/account/dashboard");
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-bh-black flex items-center justify-center">
      <div className="max-w-md w-full">
        <h1 className="font-heading text-4xl text-bh-ivory mb-2">Sign In</h1>
        <p className="font-body text-bh-ivory/60 mb-8">
          Access your Business Hub account
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 p-8 border border-bh-white/10 rounded-sm bg-bh-white/5">
          <FormInput
            id="email"
            label="Email"
            type="email"
            placeholder="demo@businesshub.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <FormInput
            id="password"
            label="Password"
            type="password"
            placeholder="demo123"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && (
            <div className="p-3 bg-red-900/20 border border-red-500/30 rounded-sm text-red-400 text-sm">
              {error}
            </div>
          )}

          {success && (
            <div className="p-3 bg-green-900/20 border border-green-500/30 rounded-sm text-green-400 text-sm">
              {success}
            </div>
          )}

          <Button variant="primary" size="lg" className="w-full">
            Sign In
          </Button>

          <div className="text-center text-sm text-bh-ivory/50">
            
          </div>
        </form>

        <p className="text-center mt-6 text-bh-ivory/60">
          Don't have an account?{" "}
          <Link href="/account/register" className="text-bh-red hover:underline">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}