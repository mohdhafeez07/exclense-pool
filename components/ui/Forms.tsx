"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface FormFieldProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  as?: "input" | "textarea" | "select";
  options?: string[];
  rows?: number;
}

function FormField({
  label,
  id,
  type = "text",
  required,
  as = "input",
  options,
  rows = 4,
}: FormFieldProps) {
  const baseClass =
    "w-full rounded-xl border border-navy/10 bg-white/80 px-4 py-3.5 text-sm text-navy transition-all duration-300 placeholder:text-silver/50 focus:border-accent focus:bg-white focus:shadow-[0_0_0_3px_rgba(26,107,168,0.1)]";

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-navy/60"
      >
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          name={id}
          required={required}
          rows={rows}
          className={cn(baseClass, "resize-none")}
        />
      ) : as === "select" ? (
        <select id={id} name={id} required={required} className={baseClass}>
          <option value="">Select an option</option>
          {options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          className={baseClass}
        />
      )}
    </div>
  );
}

function SuccessState({ title, message }: { title: string; message: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-accent/15 bg-accent/5 p-8 text-center sm:p-12"
    >
      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
        <svg className="h-7 w-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="font-serif text-2xl font-light text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-silver">{message}</p>
    </motion.div>
  );
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <SuccessState
        title="Message Received"
        message="Our concierge team will respond within one business day."
      />
    );
  }

  return (
    <motion.form
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      onSubmit={handleSubmit}
      className="space-y-5 sm:space-y-6"
    >
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        <FormField label="First Name" id="firstName" required />
        <FormField label="Last Name" id="lastName" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        <FormField label="Email" id="email" type="email" required />
        <FormField label="Phone" id="phone" type="tel" />
      </div>
      <FormField label="Subject" id="subject" required />
      <FormField label="Message" id="message" as="textarea" required rows={5} />
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="btn-shine w-full rounded-full bg-navy px-8 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-white shadow-[0_4px_20px_-4px_rgba(10,22,40,0.4)] transition-colors hover:bg-navy-light sm:w-auto"
      >
        Send Message
      </motion.button>
    </motion.form>
  );
}

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <SuccessState
        title="Consultation Requested"
        message="A senior design consultant will contact you within 24 hours to discuss your vision."
      />
    );
  }

  return (
    <motion.form
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      onSubmit={handleSubmit}
      className="space-y-5 sm:space-y-6"
    >
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        <FormField label="Full Name" id="fullName" required />
        <FormField label="Email" id="email" type="email" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        <FormField label="Phone" id="phone" type="tel" required />
        <FormField label="Location" id="location" required />
      </div>
      <FormField
        label="Project Type"
        id="projectType"
        as="select"
        required
        options={[
          "New Pool Construction",
          "Pool Design & 3D Planning",
          "Infinity / Vanishing Edge Pool",
          "Pool Equipment & Automation",
          "Tiling, Coping & Decking",
          "Water Features & Lighting",
          "Pool Renovation & Resurfacing",
          "Maintenance & Water Care",
          "Commercial / Resort Pool",
        ]}
      />
      <FormField
        label="Estimated Budget"
        id="budget"
        as="select"
        options={[
          "$250,000 – $500,000",
          "$500,000 – $1,000,000",
          "$1,000,000 – $2,500,000",
          "$2,500,000+",
          "Prefer to discuss",
        ]}
      />
      <FormField
        label="Project Timeline"
        id="timeline"
        as="select"
        options={[
          "Within 3 months",
          "3 – 6 months",
          "6 – 12 months",
          "12+ months",
          "Flexible",
        ]}
      />
      <FormField
        label="Tell Us About Your Vision"
        id="vision"
        as="textarea"
        required
        rows={6}
      />
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="btn-shine w-full rounded-full bg-accent px-8 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-white shadow-[0_4px_20px_-4px_rgba(26,107,168,0.45)] transition-colors hover:bg-accent-light sm:w-auto"
      >
        Submit Request
      </motion.button>
    </motion.form>
  );
}
