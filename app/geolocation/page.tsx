"use client";

// custom components
import BrowserLocation from "@/components/Location";
import CapLocation from "@/components/CapLocation";

export default function Home() {
  return (
    <>
      <main className="px-2 container max-w-5xl mx-auto">
        <h2>Testing GeoLocation</h2>
        <BrowserLocation />
        <CapLocation />
      </main>
    </>
  );
}
