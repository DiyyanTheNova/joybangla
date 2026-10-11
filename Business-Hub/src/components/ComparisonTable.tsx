import { CheckCircle2, XCircle } from 'lucide-react';

export default function ComparisonTable() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">The Choice is Simple</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Most Agencies */}
        <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 opacity-70">
          <h3 className="text-2xl font-semibold mb-6 text-zinc-400">Most Agencies</h3>
          <ul className="space-y-4">
            {['Slow turnaround times', 'Generic templates', 'Hidden fees', 'Junior designers handling your account'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-zinc-500">
                <XCircle className="text-red-500/70 shrink-0" size={20} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Your Agency */}
        <div className="p-8 rounded-2xl bg-linear-to-b from-zinc-800 to-black border border-white/20 shadow-2xl shadow-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-red-600 to-orange-500" />
          <h3 className="text-2xl font-bold mb-6 text-white">Our Agency</h3>
          <ul className="space-y-4">
            {['Async delivery in 48hrs', 'Custom WebGL & Framer Motion', 'Flat-rate transparent pricing', 'Direct access to founders'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-zinc-200 font-medium">
                <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}