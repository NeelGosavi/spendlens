import Navbar from "@/components/layout/navbar";
import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import AuditForm from "@/components/audit/audit-form";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <AuditForm />
    </main>
  );
}