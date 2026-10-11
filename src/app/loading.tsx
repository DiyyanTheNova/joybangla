export default function Loading() {
  return (
    <div className="min-h-screen bg-bh-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Simple, purposeful spinner matching BH Red */}
        <div className="w-8 h-8 border-2 border-bh-white/10 border-t-bh-red rounded-full animate-spin" />
        <p className="font-heading text-xs uppercase tracking-[0.2em] text-bh-ivory/50">
          Loading Ecosystem...
        </p>
      </div>
    </div>
  );
}