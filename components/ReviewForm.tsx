"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

export default function ReviewForm() {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const stars = "★".repeat(rating) + "☆".repeat(5 - rating);
  const trimmedName = name.trim();
  const trimmedMessage = message.trim();
  const canSend = trimmedName.length > 0 && trimmedMessage.length > 0;

  const text = `Hi Jblendzzz! I'd like to leave a review.\n\nRating: ${stars} (${rating}/5)\nName: ${trimmedName}\nReview: ${trimmedMessage}`;
  const waUrl = `${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-3 flex w-full items-center justify-center gap-2 border border-ivory/20 px-5 py-3 text-[11px] font-medium uppercase tracking-[0.3em] text-ivory/80 transition hover:border-champagne hover:text-champagne"
      >
        Leave a review
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6L12 2z" />
        </svg>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="review-title"
          className="fixed inset-0 z-50 grid place-items-center bg-ink/85 backdrop-blur-md p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="relative w-full max-w-lg">
            <span className="absolute -top-1 -left-1 h-4 w-4 border-t border-l border-champagne" aria-hidden />
            <span className="absolute -top-1 -right-1 h-4 w-4 border-t border-r border-champagne" aria-hidden />
            <span className="absolute -bottom-1 -left-1 h-4 w-4 border-b border-l border-champagne" aria-hidden />
            <span className="absolute -bottom-1 -right-1 h-4 w-4 border-b border-r border-champagne" aria-hidden />

            <div className="relative border border-ivory/15 bg-ink-soft p-8 sm:p-10">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center text-ivory/50 transition hover:text-champagne"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
                </svg>
              </button>

              <p className="flex items-center text-[11px] font-medium uppercase tracking-[0.4em] text-champagne">
                <span className="gilt-rule" />
                Share your experience
              </p>
              <h3 id="review-title" className="mt-4 font-display text-3xl font-light leading-[1.05] tracking-tight text-ivory sm:text-4xl">
                Leave a <em className="not-italic text-champagne-light">review</em>
              </h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-ivory/65">
                Your review opens in WhatsApp ready to send. I&apos;ll add it to
                the site personally.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!canSend) return;
                  window.open(waUrl, "_blank", "noopener,noreferrer");
                  setOpen(false);
                  setName("");
                  setMessage("");
                  setRating(5);
                }}
                className="mt-8 space-y-6"
              >
                <div>
                  <label className="block text-[10px] font-medium uppercase tracking-[0.32em] text-ivory/55">
                    Rating
                  </label>
                  <div
                    className="mt-3 flex gap-2"
                    onMouseLeave={() => setHover(0)}
                  >
                    {[1, 2, 3, 4, 5].map((i) => {
                      const active = i <= (hover || rating);
                      return (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setRating(i)}
                          onMouseEnter={() => setHover(i)}
                          aria-label={`${i} star${i === 1 ? "" : "s"}`}
                          className="p-1 transition"
                        >
                          <svg
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className={active ? "text-champagne" : "text-ivory/20"}
                          >
                            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6L12 2z" />
                          </svg>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label htmlFor="rev-name" className="block text-[10px] font-medium uppercase tracking-[0.32em] text-ivory/55">
                    Your name
                  </label>
                  <input
                    id="rev-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Juan dela Cruz"
                    className="mt-3 w-full border-b border-ivory/20 bg-transparent py-2 font-light text-ivory placeholder:text-ivory/30 focus:border-champagne focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="rev-msg" className="block text-[10px] font-medium uppercase tracking-[0.32em] text-ivory/55">
                    Your review
                  </label>
                  <textarea
                    id="rev-msg"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    placeholder="Sharp fade, clean lines, came right on time…"
                    className="mt-3 w-full resize-none border border-ivory/20 bg-transparent p-3 font-light text-ivory placeholder:text-ivory/30 focus:border-champagne focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="border border-ivory/20 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.3em] text-ivory/70 transition hover:border-ivory hover:text-ivory"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={!canSend}
                    className="bg-champagne px-7 py-3 text-[11px] font-medium uppercase tracking-[0.3em] text-ink transition hover:bg-champagne-light disabled:cursor-not-allowed disabled:bg-ivory/15 disabled:text-ivory/40"
                  >
                    Send via WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
