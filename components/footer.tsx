import { Heart } from "lucide-react"
import { personalData } from "@/lib/data"

export function Footer() {
  return (
    <footer className="py-8 px-4 border-t-3 border-border bg-muted/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-muted-foreground">
          © {new Date().getFullYear()} {personalData.name}. All rights reserved.
        </p>

        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          Built with
          <Heart size={16} className="text-primary fill-primary" />
          passion, bugs, and coffee
        </p>
      </div>
    </footer>
  )
}
