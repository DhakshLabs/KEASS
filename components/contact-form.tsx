"use client";

import { useActionState } from "react";
import { submitRequest, type ContactState } from "@/app/actions";

const initial: ContactState = { ok: false, error: "" };

export function ContactForm() {
  const [state, action, pending] = useActionState(submitRequest, initial);

  if (state.ok) {
    return (
      <div className="border border-white/20 px-8 py-12">
        <p className="eyebrow text-white/70">Request received</p>
        <p className="mt-4 text-2xl tracking-tight">
          Thank you. A KEAAS partner will respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-2" noValidate>
      <Field label="Full Name" name="name" autoComplete="name" required />
      <Field
        label="Work Email"
        name="email"
        type="email"
        autoComplete="email"
        required
      />
      <Field
        label="Company"
        name="company"
        autoComplete="organization"
        required
      />
      <Field
        label="Phone (optional)"
        name="phone"
        type="tel"
        autoComplete="tel"
      />
      <label className="block pt-4">
        <span className="eyebrow text-white/60">What expertise do you need?</span>
        <select name="expertise" required defaultValue="" className="form-field">
          <option value="" disabled>
            Select a discipline
          </option>
          <option>Functional — ERP / Finance / Supply Chain</option>
          <option>Technical — Architecture / Integration / Cloud</option>
          <option>Data &amp; Analytics</option>
          <option>Programme &amp; Delivery Leadership</option>
          <option>Managed expert cell</option>
          <option>Not sure yet</option>
        </select>
      </label>
      <label className="block pt-4">
        <span className="eyebrow text-white/60">Message</span>
        <textarea
          name="message"
          rows={4}
          required
          className="form-field resize-none"
          placeholder="Programme context, timeline, locations"
        />
      </label>

      {state.error ? (
        <p className="pt-3 text-sm text-white" role="alert">
          {state.error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="mt-8 inline-flex items-center border border-white bg-white px-6 py-3 text-[0.7rem] font-medium tracking-[0.18em] text-keaas uppercase transition-colors hover:bg-transparent hover:text-white disabled:opacity-60"
      >
        {pending ? "Sending…" : "Submit request"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="block pt-4">
      <span className="eyebrow text-white/60">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="form-field"
      />
    </label>
  );
}
