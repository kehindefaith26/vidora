import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-10">
                    <Link href="/" className="text-xl font-bold tracking-tight">
                        Vidora
                    </Link>
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                        <Link href="#" className="hover:text-foreground transition-colors">
                            Platform
                        </Link>
                        <Link href="#" className="hover:text-foreground transition-colors">
                            Use Cases
                        </Link>
                        <Link href="#" className="hover:text-foreground transition-colors">
                            Learn
                        </Link>
                        <Link href="#" className="hover:text-foreground transition-colors">
                            Pricing
                        </Link>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="outline" className="hidden sm:inline-flex border-gray-200">
                        Request Demo
                    </Button>
                    <Button className="font-medium">Start Free Trial</Button>
                </div>
            </div>
        </nav>
    )
}
