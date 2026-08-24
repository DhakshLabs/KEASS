"use client";

import { useState, type FormEvent } from "react";

type ContactState = {
  ok: boolean;
  error: string;
  pending: boolean;
};

const initial: ContactState = { ok: false, error: "", pending: false };

export function ContactForm() {
  const [state, setState] = useState<ContactState>(initial);

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

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const expertise = String(data.get("expertise") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !company || !expertise || !message) {
      setState({ ok: false, error: "Please complete the required fields.", pending: false });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setState({ ok: false, error: "Please enter a valid work email.", pending: false });
      return;
    }

    setState({ ok: false, error: "", pending: true });
    window.setTimeout(() => {
      setState({ ok: true, error: "", pending: false });
    }, 400);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-2" noValidate>
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
        <span className="eyebrow text-white/80">What expertise do you need?</span>
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
        <span className="eyebrow text-white/80">Message</span>
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
        disabled={state.pending}
        className="mt-8 inline-flex items-center border border-white bg-white px-6 py-3 text-[0.7rem] font-medium tracking-[0.18em] text-keaas uppercase transition-colors hover:bg-transparent hover:text-white disabled:opacity-60"
      >
        {state.pending ? "Sending…" : "Submit request"}
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
      <span className="eyebrow text-white/80">{label}</span>
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
