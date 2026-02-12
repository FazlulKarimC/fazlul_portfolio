"use client"

import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"

export function ScrollToTop() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Show button when page is scrolled down 400px
            setShow(window.scrollY > 400)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    if (!show) return null

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-xl shadow-lg border-3 border-border z-50 animate-in fade-in slide-in-from-bottom-5 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
            aria-label="Scroll to top"
        >
            <ArrowUp size={24} />
        </button>
    )
}
