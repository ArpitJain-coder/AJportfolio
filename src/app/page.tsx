import { Hero } from "@/components/Hero";
import { WhatIDo } from "@/components/WhatIDo";
import { Projects } from "@/components/Projects";
import { Resume } from "@/components/Resume";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Hero />
        <WhatIDo />
        <Projects />
        <Resume />
      </main>
    </div>
  );
}
