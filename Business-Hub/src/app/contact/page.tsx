"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";
import FormInput from "@/components/ui/FormInput";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    subject: "", 
    message: "" 
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-bh-black pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <Link href="/" className="font-body text-sm text-bh-ivory/50 hover:text-bh-red transition-colors mb-8 inline-flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Info */}
          <div>
            <h1 className="font-heading text-4xl md:text-6xl text-bh-ivory mb-6">
              Get in <span className="text-bh-red">Touch</span>
            </h1>
            <p className="font-body text-lg text-bh-ivory/60 mb-12 leading-relaxed">
              Have a question, partnership proposal, or feedback? 
              We value clear communication. Reach out using the form or the details below.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Mail className="text-bh-red mt-1" size={20} strokeWidth={1.5} />
                <div>
                  <h3 className="font-heading text-sm uppercase tracking-wider text-bh-ivory mb-1">Email</h3>
                  <p className="font-body text-bh-ivory/70">contact@businesshub.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-bh-red mt-1" size={20} strokeWidth={1.5} />
                <div>
                  <h3 className="font-heading text-sm uppercase tracking-wider text-bh-ivory mb-1">Headquarters</h3>
                  <p className="font-body text-bh-ivory/70">Digital Ecosystem, Global</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-bh-red mt-1" size={20} strokeWidth={1.5} />
                <div>
                  <h3 className="font-heading text-sm uppercase tracking-wider text-bh-ivory mb-1">Support Hours</h3>
                  <p className="font-body text-bh-ivory/70">Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-bh-white/5 border border-bh-white/10 p-8 md:p-10 rounded-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <FormInput 
                id="name" 
                label="Full Name" 
                placeholder="John Doe" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <FormInput 
                id="email" 
                label="Email Address" 
                type="email" 
                placeholder="john@company.com" 
                required 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <FormInput 
                id="subject" 
                label="Subject" 
                placeholder="Partnership Inquiry" 
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
              />
              
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="message" className="font-heading text-xs uppercase tracking-wider text-bh-ivory/70">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-bh-black border border-bh-white/10 text-bh-ivory px-4 py-3 rounded-sm focus:outline-none focus:border-bh-red transition-colors placeholder:text-bh-ivory/30 resize-none"
                  placeholder="How can we help you?"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <Button 
                variant="primary" 
                size="lg" 
                className="w-full mt-4"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </Button>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-900/20 border border-green-500/30 rounded-sm text-green-400 text-sm">
                  ✅ Message sent successfully! We'll get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-sm text-red-400 text-sm">
                  ❌ Failed to send message. Please try again or email us directly.
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}