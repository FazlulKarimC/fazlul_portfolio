"use client"

export function BackgroundPattern() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-linear-to-br from-secondary/20 via-background to-accent/10 dark:from-primary/20 dark:via-background dark:to-accent/15" />

      {/* Additional dark mode gradient overlay for depth */}
      <div className="absolute inset-0 hidden dark:block bg-linear-to-tr from-accent/10 via-transparent to-primary/10" />

      {/* Animated blobs */}
      <div className="absolute top-0 -left-40 w-80 h-80 bg-primary/15 dark:bg-primary/25 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-60 -right-40 w-96 h-96 bg-accent/15 dark:bg-accent/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute -bottom-40 left-1/3 w-80 h-80 bg-secondary/20 dark:bg-secondary/15 rounded-full blur-3xl animate-blob animation-delay-4000" />

      {/* Additional accent blob for dark mode richness */}
      <div className="absolute top-1/2 right-1/4 w-72 h-72 hidden dark:block bg-primary/15 rounded-full blur-3xl animate-blob animation-delay-2000" />

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(var(--foreground) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
    </div>
  )
}
