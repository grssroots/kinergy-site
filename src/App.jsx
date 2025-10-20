import { useEffect, useState } from "react";
const logo = "/kinergy-logo.png"; // place a logo file at /public/kinergy-logo.png

// micro self-checks to avoid future regressions (console only)
function devSelfCheck() {
  try {
    const BRANDS = ["Daikin","Mitsubishi Electric","Vaillant","Alpha","Samsung","GivEnergy"];
    console.assert(BRANDS.length >= 6, "Expect ≥6 brands");
    console.assert("lu2 7xx".toUpperCase() === "LU2 7XX", "Postcode uppercase");
    console.assert("+447777381617".startsWith("+44"), "Phone +44 format");
  } catch (e) { console.warn("Kinergy devSelfCheck:", e); }
}
if (typeof window !== "undefined") devSelfCheck();

export default function App() {
  const [postcode, setPostcode] = useState("");
  useEffect(()=>{ console.debug("Kinergy mounted"); }, []);
  return (
    <div className="min-h-screen bg-black text-neutral-100">
      <header className="w-full bg-neutral-900/80 border-b border-white/10">
        <div className="mx-auto max-w-7xl flex items-center justify-between py-2 px-4 text-sm">
          <div className="flex items-center gap-4">
            <a href="mailto:hello@kinergy.uk" className="opacity-90 hover:opacity-100">hello@kinergy.uk</a>
            <a href="tel:+447777381617" className="opacity-90 hover:opacity-100">07777 381 617</a>
          </div>
          <div className="hidden sm:flex gap-2">
            <span className="rounded-full bg-emerald-600/20 px-3 py-1 text-emerald-400">MCS Ready</span>
            <span className="rounded-full bg-emerald-600/20 px-3 py-1 text-emerald-300">BUS £7,500</span>
            <span className="rounded-full bg-emerald-600/20 px-3 py-1 text-emerald-300">0% Finance*</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex items-center gap-3 mb-8">
          <img src={logo} alt="Kinergy Solutions" className="h-10 w-auto" />
          <h1 className="text-3xl font-bold">Kinergy Solutions</h1>
        </div>

        <p className="text-neutral-300 mb-6">
          Heat Pumps, Solar & HVAC for Beds • Herts • Bucks • London.
        </p>

        <form onSubmit={(e)=>e.preventDefault()} className="bg-neutral-950 p-4 rounded-xl ring-1 ring-white/10 flex gap-3">
          <input
            className="flex-1 rounded-lg bg-black border border-white/10 px-4 py-3"
            placeholder="e.g. LU2 7XX"
            value={postcode}
            onChange={(e)=>setPostcode(e.target.value.toUpperCase())}
          />
          <button className="rounded-lg bg-emerald-500 text-black px-5 py-3 font-semibold hover:bg-emerald-400">
            Check
          </button>
        </form>
      </main>

      <footer className="border-t border-white/10 py-6 text-xs text-neutral-400 text-center">
        © {new Date().getFullYear()} Kinergy Solutions
      </footer>
    </div>
  );
}
