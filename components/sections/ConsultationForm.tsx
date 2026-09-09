"use client";

import { FormEvent, useState } from "react";
import styles from "./ConsultationForm.module.css";

const HELP_AREAS = [
  "Digital Assets & Crypto Advisory",
  "Wealth & Fund Safeguarding",
  "General Consulting",
  "Risk & Due Diligence",
  "Other",
];

type Status = "idle" | "success";

export default function ConsultationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors: Record<string, string> = {};

    const firstName = String(data.get("firstName") ?? "").trim();
    const lastName = String(data.get("lastName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const helpArea = String(data.get("helpArea") ?? "");
    const situation = String(data.get("situation") ?? "").trim();
    const consent = data.get("consent");

    if (!firstName) nextErrors.firstName = "First name is required.";
    if (!lastName) nextErrors.lastName = "Last name is required.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!helpArea) nextErrors.helpArea = "Please select an area.";
    if (!situation) nextErrors.situation = "Please tell us about your situation.";
    if (!consent) nextErrors.consent = "Please confirm you agree to be contacted.";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setStatus("success");
      form.reset();
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.blueBg} aria-hidden="true" />

        <div className={styles.textCol}>
          <h2 className={styles.heading}>
            Tell us what <em className="emphasis">you&apos;re navigating.</em>
          </h2>
          <p className={styles.body}>
            The more context you can provide, the better we can understand your situation and determine how we may
            be able to help.
          </p>
          <p className={styles.note}>All enquiries are reviewed individually.</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          {status === "success" && (
            <div className={styles.successBanner} role="status">
              Thank you. Your enquiry has been received and our team will be in touch shortly.
            </div>
          )}

          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="firstName">First Name</label>
              <input id="firstName" name="firstName" type="text" placeholder="Your first name" />
              {errors.firstName && <span className={styles.error}>{errors.firstName}</span>}
            </div>
            <div className={styles.field}>
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" name="lastName" type="text" placeholder="Your last name" />
              {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Email Address</label>
            <input id="email" name="email" type="email" placeholder="you@company.com" />
            {errors.email && <span className={styles.error}>{errors.email}</span>}
          </div>

          <div className={styles.field}>
            <label htmlFor="company">Company / Organisation</label>
            <input id="company" name="company" type="text" placeholder="Company or organisation" />
          </div>

          <div className={styles.field}>
            <label htmlFor="helpArea">What can we help with?</label>
            <select id="helpArea" name="helpArea" defaultValue="">
              <option value="" disabled>
                Select an area
              </option>
              {HELP_AREAS.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
            {errors.helpArea && <span className={styles.error}>{errors.helpArea}</span>}
          </div>

          <div className={styles.field}>
            <label htmlFor="situation">Tell us about your situation</label>
            <textarea
              id="situation"
              name="situation"
              rows={4}
              placeholder="Briefly describe the situation, question, or challenge you would like to discuss."
            />
            {errors.situation && <span className={styles.error}>{errors.situation}</span>}
          </div>

          {errors.consent && <span className={styles.error}>{errors.consent}</span>}

          <button type="submit" className={styles.submit}>
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}
