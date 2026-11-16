"use client";

import { useState, type FormEvent } from "react";

export function NotifyForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "done">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setStatus("done");
  }

  if (status === "done") {
    return (
      <p
        className="animate-rise text-center text-sm font-medium text-accent"
        role="status"
      >
        You’re on the list. We’ll be in touch.
      </p>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-center"
    >
      <label className="sr-only" htmlFor="email">
        Email address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        required
        autoComplete="email"
        placeholder="you@email.com"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="h-12 w-full flex-1 border-b border-line bg-transparent px-1 text-sm text-ink outline-none transition-[border-color,box-shadow] placeholder:text-ink-muted/70 focus:border-accent"
      />
      <button
        type="submit"
        className="h-12 shrink-0 bg-accent px-6 text-sm font-medium tracking-wide text-white transition-[background-color,transform] hover:bg-accent-deep active:scale-[0.98]"
      >
        Notify me
      </button>
    </form>
  );
}
