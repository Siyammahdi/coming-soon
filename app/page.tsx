import Image from "next/image";
import { NotifyForm } from "./components/notify-form";

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="animate-pulse-soft absolute -left-[12%] top-[-8%] h-[42vmin] w-[42vmin] rounded-full bg-[radial-gradient(circle,var(--glow),transparent_68%)]" />
        <div className="animate-pulse-soft absolute -right-[8%] bottom-[-10%] h-[48vmin] w-[48vmin] rounded-full bg-[radial-gradient(circle,var(--glow),transparent_70%)] [animation-delay:2.2s]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,color-mix(in_srgb,var(--paper)_55%,transparent)_100%)]" />
      </div>

      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 py-10 sm:px-8 sm:py-14">
        <div className="animate-rise animate-float relative -mb-2 w-full max-w-[44rem] sm:-mb-4">
          <Image
            src="/under-construction.gif"
            alt="Designer building a website under construction"
            width={1024}
            height={768}
            preload
            unoptimized
            className="mx-auto h-auto w-full select-none object-contain"
            sizes="(max-width: 768px) 92vw, 704px"
          />
        </div>

        <div className="flex w-full max-w-xl flex-col items-center text-center">
          <h1 className="animate-rise delay-1 font-display text-[clamp(2.5rem,7vw,4.35rem)] font-bold leading-[0.95] tracking-tight text-ink">
            Coming soon
          </h1>

          <span
            aria-hidden
            className="animate-draw mt-4 h-px w-14 bg-accent"
          />

          <p className="animate-rise delay-2 mt-4 max-w-xs text-[0.95rem] leading-relaxed text-ink-muted sm:text-base">
            Something new is taking shape.
          </p>

          <div className="animate-rise delay-3 mt-7 flex w-full justify-center">
            <NotifyForm />
          </div>
        </div>
      </main>
    </div>
  );
}
