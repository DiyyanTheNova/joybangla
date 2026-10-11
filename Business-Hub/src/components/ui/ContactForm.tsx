"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Check, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", 
  "11:00 AM", "11:30 AM", "2:00 PM", "2:30 PM", 
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"
];

const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function ContactForm() {
  const [step, setStep] = useState<"calendar" | "details" | "confirmed">("calendar");
  const [selectedDate, setSelectedDate] = useState<number | null>(15);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep("details");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add actual API call here (e.g., Resend, SendGrid, or Sanity)
    setStep("confirmed");
  };

  // --- STEP 3: CONFIRMATION ---
  if (step === "confirmed") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl mx-auto bg-bh-black border border-bh-white/10 rounded-sm p-12 text-center"
      >
        <div className="w-20 h-20 rounded-sm bg-bh-red/20 flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-bh-red" strokeWidth={2} />
        </div>
        <h3 className="font-heading text-3xl text-bh-white mb-4">Booking Confirmed!</h3>
        <p className="font-body text-bh-ivory/70 mb-2">
          Your strategy call has been scheduled for:
        </p>
        <p className="font-heading text-xl text-bh-red mb-6">
          {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} at {selectedTime}
        </p>
        <p className="font-body text-bh-ivory/60 text-sm">
          A confirmation email will be sent to <span className="text-bh-ivory">{formData.email}</span>
        </p>
        <button 
          onClick={() => { setStep("calendar"); setSelectedTime(null); setFormData({ name: "", email: "", company: "", message: "" }); }}
          className="mt-8 text-sm font-heading uppercase tracking-wider text-bh-ivory/60 hover:text-bh-red transition-colors"
        >
          Book another time
        </button>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-bh-black border border-bh-white/10 rounded-sm overflow-hidden shadow-2xl">
      
      {/* Header */}
      <div className="bg-bh-black border-b border-bh-white/10 p-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-sm bg-bh-red flex items-center justify-center">
            <Calendar className="w-6 h-6 text-bh-white" />
          </div>
          <div>
            <h3 className="font-heading text-2xl text-bh-white">Strategy Call</h3>
            <p className="font-body text-sm text-bh-ivory/60">30 minutes • BH Team</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2">
        {/* --- STEP 1: CALENDAR SECTION --- */}
        <div className="p-6 border-r border-bh-white/10">
          <div className="flex items-center justify-between mb-6">
            <h4 className="font-heading text-lg text-bh-white">
              {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </h4>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-bh-white/5 rounded-sm transition-colors">
                <ChevronLeft className="w-5 h-5 text-bh-ivory/60" />
              </button>
              <button className="p-2 hover:bg-bh-white/5 rounded-sm transition-colors">
                <ChevronRight className="w-5 h-5 text-bh-ivory/60" />
              </button>
            </div>
          </div>

          {/* Week Days */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {weekDays.map(day => (
              <div key={day} className="text-center text-xs font-heading text-bh-ivory/40 py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={`empty-${i}`} className="aspect-square" />
            ))}
            {daysInMonth.map(day => {
              const isSelected = selectedDate === day;
              const isToday = day === new Date().getDate();
              
              return (
                <button
                  key={day}
                  onClick={() => setSelectedDate(day)}
                  className={`
                    aspect-square flex items-center justify-center text-sm font-body rounded-sm transition-all
                    ${isSelected 
                      ? "bg-bh-red text-bh-white font-heading" 
                      : isToday 
                        ? "border border-bh-red text-bh-red"
                        : "text-bh-ivory/70 hover:bg-bh-white/5"
                    }
                  `}
                >
                  {day}
                </button>
              );
            })}
          </div>

          {selectedDate && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-bh-white/5 border border-bh-white/10 rounded-sm"
            >
              <p className="font-heading text-bh-white">
                {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
              </p>
              <p className="font-body text-sm text-bh-ivory/60 mt-1">
                Select a time slot to continue
              </p>
            </motion.div>
          )}
        </div>

        {/* --- TIME SLOTS SECTION --- */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <Clock className="w-5 h-5 text-bh-red" />
            <h4 className="font-heading text-lg text-bh-white">Available Times</h4>
          </div>

          <AnimatePresence mode="wait">
            {selectedDate ? (
              <motion.div
                key="slots"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-3 max-h-100 overflow-y-auto pr-2 custom-scrollbar"
              >
                {timeSlots.map(time => (
                  <button
                    key={time}
                    onClick={() => handleTimeSelect(time)}
                    className="w-full py-3 px-4 text-left font-body text-sm text-bh-ivory border border-bh-white/10 rounded-sm hover:border-bh-red hover:text-bh-white transition-all duration-300 group flex justify-between items-center"
                  >
                    <span>{time}</span>
                    <span className="text-bh-ivory/40 group-hover:text-bh-red/60 text-xs font-heading uppercase tracking-wider">30 min</span>
                  </button>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-center h-64 text-bh-ivory/40 font-body text-sm"
              >
                Select a date to see available times
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* --- STEP 2: DETAILS FORM --- */}
      <AnimatePresence>
        {step === "details" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-bh-white/10 bg-bh-black/50"
          >
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <button 
                  onClick={() => setStep("calendar")}
                  className="w-8 h-8 rounded-sm border border-bh-white/10 flex items-center justify-center text-bh-ivory/60 hover:text-bh-white hover:border-bh-white/30 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <h4 className="font-heading text-lg text-bh-white">Your Details</h4>
              </div>

              <div className="mb-6 p-4 bg-bh-white/5 border border-bh-white/10 rounded-sm flex items-center justify-between">
                <div>
                  <p className="font-heading text-bh-white text-sm">
                    {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                  </p>
                  <p className="font-body text-sm text-bh-ivory/60">{selectedTime} • 30 min Strategy Call</p>
                </div>
                <button onClick={() => setStep("calendar")} className="text-xs font-heading uppercase tracking-wider text-bh-red hover:text-bh-red/80 transition-colors">
                  Change
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-heading text-xs uppercase tracking-wider text-bh-ivory/70 mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-bh-black border border-bh-white/10 text-bh-ivory focus:border-bh-red focus:outline-none transition-colors rounded-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block font-heading text-xs uppercase tracking-wider text-bh-ivory/70 mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-bh-black border border-bh-white/10 text-bh-ivory focus:border-bh-red focus:outline-none transition-colors rounded-sm"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-heading text-xs uppercase tracking-wider text-bh-ivory/70 mb-2">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-bh-black border border-bh-white/10 text-bh-ivory focus:border-bh-red focus:outline-none transition-colors rounded-sm"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block font-heading text-xs uppercase tracking-wider text-bh-ivory/70 mb-2">Message *</label>
                  <textarea
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-bh-black border border-bh-white/10 text-bh-ivory focus:border-bh-red focus:outline-none transition-colors resize-none rounded-sm"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <div className="pt-2">
                  <Button variant="primary" size="lg" type="submit" className="w-full">
                    Confirm Booking
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}