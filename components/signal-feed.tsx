"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface Signal {
  id: number
  sport: string
  type: string
  description: string
  confidence: number
  timestamp: string
  status: "live" | "pending" | "executed"
}

const mockSignals: Signal[] = [
  {
    id: 1,
    sport: "NBA",
    type: "Prop Alert",
    description: "Luka Doncic Over 22.5 pts",
    confidence: 88,
    timestamp: "2s ago",
    status: "live",
  },
  {
    id: 2,
    sport: "NFL",
    type: "Line Movement",
    description: "Chiefs -3.5 → -4.5",
    confidence: 92,
    timestamp: "15s ago",
    status: "executed",
  },
  {
    id: 3,
    sport: "MLB",
    type: "Value Play",
    description: "Yankees ML +145",
    confidence: 76,
    timestamp: "32s ago",
    status: "pending",
  },
  {
    id: 4,
    sport: "NBA",
    type: "Total Alert",
    description: "LAL vs GSW Under 228.5",
    confidence: 84,
    timestamp: "1m ago",
    status: "live",
  },
  {
    id: 5,
    sport: "NHL",
    type: "Prop Alert",
    description: "Connor McDavid 1+ Goals",
    confidence: 71,
    timestamp: "2m ago",
    status: "executed",
  },
]

export function SignalFeed() {
  const [signals, setSignals] = useState(mockSignals)
  const [activeSignal, setActiveSignal] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSignal((prev) => (prev + 1) % signals.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [signals.length])

  return (
    <div className="relative w-full max-w-md">
      {/* Glassmorphism container */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur-xl">
        {/* Inner glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        
        {/* Header */}
        <div className="relative flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </div>
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Live Signal Feed
            </span>
          </div>
          <span className="text-xs text-muted-foreground">BAKER v2.4</span>
        </div>

        {/* Signals */}
        <div className="relative divide-y divide-white/5">
          {signals.map((signal, index) => (
            <div
              key={signal.id}
              className={cn(
                "relative px-4 py-3 transition-all duration-500",
                index === activeSignal && "bg-primary/5"
              )}
            >
              {/* Active indicator */}
              {index === activeSignal && (
                <div className="absolute left-0 top-0 h-full w-0.5 bg-primary" />
              )}
              
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-secondary px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-secondary-foreground">
                      {signal.sport}
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                      {signal.type}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-foreground">
                    {signal.description}
                  </p>
                </div>
                
                <div className="flex flex-col items-end gap-1">
                  <div className="flex items-center gap-1">
                    <span className={cn(
                      "text-sm font-bold",
                      signal.confidence >= 85 ? "text-primary" : 
                      signal.confidence >= 75 ? "text-emerald-400" : "text-amber-400"
                    )}>
                      {signal.confidence}%
                    </span>
                  </div>
                  <span className="text-[10px] text-muted-foreground">
                    {signal.timestamp}
                  </span>
                </div>
              </div>

              {/* Status indicator */}
              <div className="mt-2 flex items-center gap-1.5">
                <div className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  signal.status === "live" && "bg-primary animate-pulse",
                  signal.status === "pending" && "bg-amber-400",
                  signal.status === "executed" && "bg-emerald-400"
                )} />
                <span className="text-[10px] capitalize text-muted-foreground">
                  {signal.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="relative border-t border-white/10 px-4 py-2">
          <div className="flex items-center justify-between text-[10px] text-muted-foreground">
            <span>247 signals today</span>
            <span>67.3% hit rate</span>
          </div>
        </div>
      </div>

      {/* Outer glow */}
      <div className="absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent opacity-50 blur-xl" />
    </div>
  )
}
