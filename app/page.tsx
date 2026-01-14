import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { SocialProof } from "@/components/social-proof";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-brand-purple-start selection:text-brand-purple-end">
      <SiteHeader />
      <Hero />
      <SocialProof />
    </main>
  );
}
