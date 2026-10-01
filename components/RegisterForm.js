"use client";
import { useState } from "react";
import { EVENT, EVENTS } from "@/lib/eventData";
import { SCRIPT_URL } from "@/lib/config";
import { compressImage } from "@/lib/compressImage";
import { calcFee, PRICE_PER_EVENT, ALL_FOUR_PER_EVENT } from "@/lib/pricing";

const TEAM_ONLY = ["quiz", "build","code","pitch"];
const input =
  "w-full rounded-lg border border-white/15 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-cyan-400";
const emptyMember = { name: "", email: "", phone: "", aadhaar: "", course: "" };
const emailRe = /^\S+@\S+\.\S+$/;

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm text-slate-300">{label}</span>
      {children}
      {error && <span data-error className="mt-1 block text-xs text-red-400">{error}</span>}
    </label>
  );
}

function Member({ title, data, onChange, errors, prefix, needEmail }) {
  const set = (k) => (e) => onChange({ ...data, [k]: e.target.value });
  return (
    <fieldset className="rounded-xl border border-white/10 bg-white/5 p-5">
      <legend className="px-2 text-sm font-semibold text-cyan-300">{title}</legend>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name *" error={errors[prefix + "name"]}>
          <input className={input} value={data.name} onChange={set("name")} />
        </Field>
        <Field label={needEmail ? "Email *" : "Email (optional)"} error={errors[prefix + "email"]}>
          <input type="email" className={input} value={data.email} onChange={set("email")} />
        </Field>
        <Field label="Phone (10 digits) *" error={errors[prefix + "phone"]}>
          <input type="tel" inputMode="numeric" maxLength={10} className={input}
            value={data.phone} onChange={set("phone")} />
        </Field>
        <Field label="Aadhaar no. *" error={errors[prefix + "aadgaar"]}>
          <input className={input} value={data.aadhaar} onChange={set("aadhaar")} />
        </Field>
        <Field label="Course & year *" error={errors[prefix + "course"]}>
          <input className={input} placeholder="e.g. BCA 2nd year" value={data.course}
            onChange={set("course")} />
        </Field>
      </div>
    </fieldset>
  );
}

function checkMember(m, p, needEmail, errs) {
  if (!m.name.trim()) errs[p + "name"] = "Required";
  if (needEmail && !emailRe.test(m.email)) errs[p + "email"] = "Enter a valid email";
  if (!needEmail && m.email && !emailRe.test(m.email)) errs[p + "email"] = "Enter a valid email";
  if (!/^\d{10}$/.test(m.phone)) errs[p + "phone"] = "Enter a 10-digit number";
  if (!m.aadhaar.trim()) errs[p + "aadhaar"] = "Required";
  if (!m.course.trim()) errs[p + "course"] = "Required";
}

export default function RegisterForm() {
  const [isopen, setIsOpen] = useState(true)
  const [teamName, setTeamName] = useState("");
  const [college, setCollege] = useState("CMS");
  const [teamSize, setTeamSize] = useState(2);
  const [m1, setM1] = useState(emptyMember);
  const [m2, setM2] = useState(emptyMember);
  const [events, setEvents] = useState([]);
  const [txnId, setTxnId] = useState("");
  const [file, setFile] = useState(null);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | done
  const [serverError, setServerError] = useState("");
  const [result, setResult] = useState(null);


  const amount = calcFee(events.length);

 function changeTeamSize(n) {
  setTeamSize(n);
}

  function toggleEvent(id) {
    setEvents((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function validate() {
    const errs = {};
    if (!teamName.trim()) errs.teamName = "Required";
    checkMember(m1, "m1_", true, errs);
    if (teamSize === 2) checkMember(m2, "m2_", false, errs);
    if (events.length === 0) errs.events = "Select at least one event";
    if (txnId.trim().length < 6) errs.txnId = "Enter the UPI transaction / UTR ID";
    if (!file) errs.file = "Upload your payment screenshot";
    else if (!file.type.startsWith("image/")) errs.file = "File must be an image";
    else if (file.size > 8 * 1024 * 1024) errs.file = "Image must be under 8 MB";
    return errs;
  }

  async function onSubmit(ev) {
    ev.preventDefault();
    if (status === "submitting") return;
    setServerError("");

    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) {
      setTimeout(() => {
        document.querySelector("[data-error]")?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 0);
      return;
    }

    try {
      setStatus("submitting");
      if (!SCRIPT_URL) throw new Error("Registration backend is not connected yet.");

      const screenshot = await compressImage(file);
      const payload = {
        website: honeypot, // spam trap, must stay empty
        teamName: teamName.trim(),
        college,
        teamSize,
        events: EVENTS.filter((e) => events.includes(e.id)).map((e) => e.title),
        member1: m1,
        member2: teamSize === 2 ? m2 : null,
        txnId: txnId.trim(),
        amount, // display only; server recalculates
        screenshot, // base64 data URL
      };

      // text/plain avoids a CORS preflight, which Apps Script can't answer
      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || "Submission failed. Please try again.");

      setResult({ id: data.id, email: m1.email, amount });
      setStatus("done");
    } catch (err) {
      setServerError(err.message || "Something went wrong. Please try again.");
      setStatus("idle");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-cyan-400/30 bg-white/5 p-8 text-center">
        <div className="text-5xl">✅</div>
        <h2 className="mt-4 text-2xl font-bold">Registration received!</h2>
        <p className="mt-2 text-slate-300">Your registration ID</p>
        <p className="mt-1 font-mono text-3xl text-cyan-300">{result.id}</p>
        <p className="mt-4 text-sm text-slate-400">
          We have sent an acknowledgement to <b>{result.email}</b>. Your payment of ₹{result.amount} will be
          verified by the organizers, and you will get a confirmation email once it is approved. Keep this ID
          for check-in on {EVENT.date}.
        </p>
      </div>
    );
  }

  const err = (k) => errors[k];

  return (
    <form onSubmit={onSubmit} noValidate className="relative space-y-6">
      {/* honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        className="absolute -left-[9999px] h-0 w-0 opacity-0" aria-hidden="true" />

      {/* Team */}
      <fieldset className="rounded-xl border border-white/10 bg-white/5 p-5">
        <legend className="px-2 text-sm font-semibold text-cyan-300">Team</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Team name *" error={err("teamName")}>
            <input className={input} value={teamName} onChange={(e) => setTeamName(e.target.value)} />
          </Field>
          <Field label="College *">
            <select className={input} value={college} onChange={(e) => setCollege(e.target.value)}>
              <option value="CMS">CMS</option>
              <option value="VSGOI">VSGOI</option>
            </select>
          </Field>
        </div>
        <div className="mt-4 flex gap-3 text-sm">
          {[2, 1].map((n) => (
            <button type="button" key={n} onClick={() => changeTeamSize(n)}
              className={`rounded-lg border px-4 py-2 ${teamSize === n ? "border-cyan-400 bg-cyan-400/10 text-cyan-300" : "border-white/15"
                }`}>
              {n === 2 ? "Team of 2" : "Individual"}
            </button>
          ))}
        </div>
      </fieldset>

      <Member title="Member 1 (Team Leader)" data={m1} onChange={setM1} errors={errors}
        prefix="m1_" needEmail />
      {teamSize === 2 && (
        <Member title="Member 2" data={m2} onChange={setM2} errors={errors} prefix="m2_" />
      )}

      {/* Events */}
      <fieldset className="rounded-xl border border-white/10 bg-white/5 p-5">
        <legend className="px-2 text-sm font-semibold text-cyan-300">Events *</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {EVENTS.map((e) => {
            return (
              <label key={e.id}
                className={`flex items-start gap-3 rounded-lg border border-white/10 p-3 text-sm cursor-pointer hover:border-cyan-400/50"
                  }`}>
                <input type="checkbox"  checked={events.includes(e.id)}
                  onChange={() => toggleEvent(e.id)} className="mt-1" />
                <span>
                  <span className="block font-medium">{e.title}</span>
                  <span className="text-slate-400">
                    {e.participants}
                  </span>
                </span>
              </label>
            );
          })}
        </div>
        {err("events") && <p data-error className="mt-2 text-xs text-red-400">{err("events")}</p>}
      </fieldset>

      {/* Payment */}
      <fieldset className="rounded-xl border border-white/10 bg-white/5 p-5">
        <legend className="px-2 text-sm font-semibold text-cyan-300">Payment</legend>

        <p className="text-xs text-slate-400">
          ₹{PRICE_PER_EVENT} per event. Select all 4 events and pay only
          (₹{calcFee(4)} total).
        </p>

        {events.length === 0 ? (
          <p className="mt-4 text-sm text-slate-400">
            Firstly select the events in which you want to participate then pay through UPI.

          </p>
        ) : (
          <div className="mt-4 flex flex-col items-start gap-6 sm:flex-row">
            <img src={`/img/upi-${amount}.jpeg`} alt={`Pay ₹${amount}`}
              className="h-56 w-56 rounded-lg bg-white object-contain p-2" />
            <div className="space-y-2 text-sm">
              <p className="text-slate-300">
                {events.length} event{events.length > 1 ? "s" : ""} selected. Amount to pay:{" "}
                <b className="text-2xl text-cyan-300">₹{amount}</b>
              </p>
              <p className="text-slate-400">
                Pay ₹{amount} exactly amount, then enter <b>Transaction ID </b>and upload <b>Screenshot</b> of payment.
              </p>
            </div>
          </div>
        )}

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <Field label="UPI transaction / UTR ID *" error={err("txnId")}>
            <input className={input} value={txnId} onChange={(e) => setTxnId(e.target.value)} />
          </Field>
          <Field label="Payment screenshot *" error={err("file")}>
            <input type="file" accept="image/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="block w-full text-sm text-slate-300 file:mr-3 file:rounded-lg file:border-0 file:bg-cyan-400 file:px-3 file:py-2 file:font-semibold file:text-slate-950" />
          </Field>
        </div>
        {file && (
          <p className="mt-2 text-xs text-slate-400">
            {file.name} ({(file.size / 1024).toFixed(0)} KB)
          </p>
        )}
      </fieldset>

      {serverError && (
        <p className="rounded-lg border border-red-400/40 bg-red-400/10 p-3 text-sm text-red-300">
          {serverError}
        </p>
      )}

      <button type="submit" disabled={status === "submitting"}
        className="w-full rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 disabled:opacity-50">
        {status === "submitting"
          ? "Submitting… please don't close this page"
          : amount > 0
            ? `Submit registration (₹${amount})`
            : "Submit registration"}
      </button>
    </form>
  );
}