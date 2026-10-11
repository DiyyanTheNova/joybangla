"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { useState } from "react";
import Button from "@/components/ui/Button";
import FormInput from "@/components/ui/FormInput";
import { UploadDropzone } from "@/lib/uploadthing";
import Image from "next/image";

export default function CreatePage() {
  const [type, setType] = useState("job");
  const [uploadedImage, setUploadedImages] = useState<string[]>([]);

  return (
    <ProtectedRoute>
      <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-bh-black">
        <div className="max-w-3xl mx-auto">
          
          <h1 className="font-heading text-4xl text-bh-ivory mb-2">Create New Listing</h1>
          <p className="font-body text-bh-ivory/60 mb-12">Publish to the Business Hub ecosystem.</p>

          {/* Type Selector */}
          <div className="flex gap-4 mb-8 border-b border-bh-white/10 pb-4">
            {["job", "opportunity", "marketplace"].map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`px-5 py-2 rounded-sm font-heading text-sm uppercase tracking-wider transition-all border ${
                  type === t 
                    ? "text-bh-red border-bh-red/50 bg-bh-red/10" 
                    : "text-bh-ivory/60 border-transparent hover:text-bh-ivory"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Form */}
          <form className="space-y-6 p-8 border border-bh-white/10 rounded-sm bg-bh-white/5">
            <FormInput id="title" label="Title" placeholder={`e.g. Senior ${type === 'job' ? 'Developer' : 'Partner'}`} required />
            
            {type === "job" && (
              <FormInput id="company" label="Company" placeholder="Company Name" required />
            )}
            
            {type === "marketplace" && (
              <>
                <FormInput id="price" label="Price" placeholder="$0.00" required />
                
                {/* Image Upload for Marketplace */}
                <div className="flex flex-col gap-2">
                  <label className="font-heading text-xs uppercase tracking-wider text-bh-ivory/70">
                    Listing Image
                  </label>
                  <UploadDropzone
                    endpoint="marketplaceImage"
                    onClientUploadComplete={(res) => {
                      console.log("Files uploaded:", res);
                      setUploadedImages(res.map((r) => r.url));
                      alert("Upload Completed");
                    }}
                    onUploadError={(error: Error) => {
                      alert(`ERROR! ${error.message}`);
                    }}
                    className="ut-button:bg-bh-red ut-button:hover:bg-bh-red/90 ut-button:text-white ut-label:text-bh-ivory/70 ut-allowed-content:text-bh-ivory/50 border-bh-white/10 rounded-sm"
                  />
                  
                  {/* Preview uploaded images */}
                  {uploadedImage.length > 0 && (
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      {uploadedImage.map((url, index) => (
                        <div key={index} className="relative w-full h-40 border border-bh-white/10 rounded-sm overflow-hidden">
                          <Image
                            src={url}
                            alt={`Upload ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}

            <div className="flex flex-col gap-2">
              <label className="font-heading text-xs uppercase tracking-wider text-bh-ivory/70">Description</label>
              <textarea 
                rows={6} 
                className="w-full bg-bh-black border border-bh-white/10 text-bh-ivory px-4 py-3 rounded-sm focus:outline-none focus:border-bh-red transition-colors placeholder:text-bh-ivory/30 resize-none"
                placeholder="Describe your listing..."
              />
            </div>

            <div className="flex gap-4 pt-4">
              <Button variant="primary" size="lg">Publish Listing</Button>
              <Button variant="secondary" size="lg">Save as Draft</Button>
            </div>
          </form>

        </div>
      </main>
    </ProtectedRoute>
  );
}