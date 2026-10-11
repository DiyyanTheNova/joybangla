"use client";

import { useState } from "react";
import { UploadDropzone } from "@/lib/uploadthing";
import Image from "next/image";
import Button from "@/components/ui/Button";
import FormInput from "@/components/ui/FormInput";

export default function BusinessProfilePage() {
  const [logoUrl, setLogoUrl] = useState<string>("");

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-bh-black">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-heading text-4xl text-bh-ivory mb-2">Business Profile</h1>
        <p className="font-body text-bh-ivory/60 mb-12">Manage your business presence on Business Hub.</p>

        <div className="space-y-6 p-8 border border-bh-white/10 rounded-sm bg-bh-white/5">
          {/* Logo Upload */}
          <div className="flex flex-col gap-4">
            <label className="font-heading text-xs uppercase tracking-wider text-bh-ivory/70">
              Business Logo
            </label>
            
            {logoUrl ? (
              <div className="relative w-32 h-32 border border-bh-white/10 rounded-sm overflow-hidden">
                <Image
                  src={logoUrl}
                  alt="Business Logo"
                  fill
                  className="object-contain bg-white p-2"
                />
              </div>
            ) : (
              <UploadDropzone
                endpoint="businessLogo"
                onClientUploadComplete={(res) => {
                  setLogoUrl(res[0].url);
                  alert("Logo uploaded successfully");
                }}
                onUploadError={(error: Error) => {
                  alert(`ERROR! ${error.message}`);
                }}
                className="ut-button:bg-bh-red ut-button:hover:bg-bh-red/90 ut-button:text-white ut-label:text-bh-ivory/70 ut-allowed-content:text-bh-ivory/50 border-bh-white/10 rounded-sm"
              />
            )}
          </div>

          <FormInput id="businessName" label="Business Name" placeholder="Your Business Name" required />
          <FormInput id="website" label="Website" placeholder="https://yourbusiness.com" />
          
          <div className="flex flex-col gap-2">
            <label className="font-heading text-xs uppercase tracking-wider text-bh-ivory/70">
              Description
            </label>
            <textarea 
              rows={4} 
              className="w-full bg-bh-black border border-bh-white/10 text-bh-ivory px-4 py-3 rounded-sm focus:outline-none focus:border-bh-red transition-colors placeholder:text-bh-ivory/30 resize-none"
              placeholder="Tell us about your business..."
            />
          </div>

          <Button variant="primary" size="lg">Save Profile</Button>
        </div>
      </div>
    </main>
  );
}