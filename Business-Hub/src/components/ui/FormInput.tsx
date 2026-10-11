import React from "react";
import { cn } from "@/lib/utils";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function FormInput({ label, error, className, id, ...props }: FormInputProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={id} className="font-heading text-xs uppercase tracking-wider text-bh-ivory/70">
        {label}
      </label>
      <input
        id={id}
        className={cn(
          "w-full bg-bh-black border border-bh-white/10 text-bh-ivory px-4 py-3 rounded-sm focus:outline-none focus:border-bh-red transition-colors placeholder:text-bh-ivory/30",
          error && "border-bh-red",
          className
        )}
        {...props}
      />
      {error && <span className="text-xs text-bh-red font-body">{error}</span>}
    </div>
  );
}