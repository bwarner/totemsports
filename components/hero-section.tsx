import { SignalFeed } from "@/components/signal-feed"
import { Activity, Zap, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2230%22%20height%3D%2230%22%20viewBox%3D%220%200%2030%2030%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%2015h30M15%200v30%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.03)%22%20stroke-width%3D%221%22%2F%3E%3C%2Fsvg%3E')] opacity-50" />
      
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="flex w-full items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Activity className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground">
              Totem Sports
            </span>
          </div>
          <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="ml-1.5">Systems Online</span>
          </div>
        </header>

        {/* Main content */}
        <div className="flex flex-1 flex-col items-center justify-center gap-12 py-12 lg:flex-row lg:gap-16">
          {/* Left: Content */}
          <div className="flex max-w-xl flex-col items-center text-center lg:items-start lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
              <Zap className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-medium text-primary">
                Coming Soon
              </span>
            </div>
            
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Algorithmic Betting Signals in{" "}
              <span className="text-primary">Real-Time</span>
            </h1>
            
            <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
              High-fidelity sports betting intelligence delivering automated triggers 
              and high-confidence signals directly to your device. No noise. No guesswork. Just data.
            </p>

            {/* Features */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-primary" />
                <span>Bank-grade security</span>
              </div>
              <div className="hidden h-4 w-px bg-border sm:block" />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Activity className="h-4 w-4 text-primary" />
                <span>67%+ historical accuracy</span>
              </div>
              <div className="hidden h-4 w-px bg-border sm:block" />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="h-4 w-4 text-primary" />
                <span>Sub-second delivery</span>
              </div>
            </div>

            {/* Coming soon message */}
            <div className="mt-10">
              <p className="text-sm font-medium text-muted-foreground">
                Something big is on the way. Stay tuned.
              </p>
            </div>
          </div>

          {/* Right: Signal Feed */}
          <div className="w-full max-w-md lg:w-auto">
            <SignalFeed />
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full border-t border-white/5 py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
            <p>&copy; 2026 Totem Sports. All rights reserved.</p>
            <p className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Coming Soon
            </p>
          </div>
        </footer>
      </div>
    </section>
  )
}
