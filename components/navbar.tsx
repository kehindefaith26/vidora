"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function Navbar() {
    const navLinks = [
        { name: "Platform", href: "#" },
        { name: "Use Cases", href: "#" },
        { name: "Learn", href: "#" },
        { name: "Pricing", href: "#" },
    ]

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/60 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-xl font-bold tracking-tight text-foreground">
                            Vidora
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* CTAs */}
                <div className="flex items-center gap-4">
                    <Link href="#" className="hidden md:block text-sm font-medium text-muted-foreground hover:text-foreground">
                        Request Demo
                    </Link>
                    <Button size="sm" className="hidden md:flex rounded-full px-6">
                        Start Free Trial
                    </Button>

                    {/* Mobile Menu Toggle */}
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </nav>
    )
}