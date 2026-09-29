import { EVENT } from "@/lib/eventData";
import { PRICE_PER_EVENT, calcFee } from "@/lib/pricing";

export default function Hero() {
    return (
        <section className="grid-bg relative flex min-h-screen items-center justify-center px-4 pt-16 text-center">
            <div className="max-w-3xl">
                <div className="mb-8 flex items-center justify-center gap-6 lg:gap-20">
                    <img src="/logos/vsgoi.jpeg" alt="VSGOI" className="h-10 w-20 lg:h-20 lg:w-40" />
                    <img src="/logos/technova.jpeg" alt="TechNova" className="h-20 lg:h-40 w-auto shadow-lg shadow-white rounded-xl" />
                    <img src="/logos/cms.png" alt="CMS" className="h-16 lg:h-24 w-auto" />
                </div>
                {/* <div className="flex justify-center items-center">
                    <img src="/logos/technova.jpeg" alt="TechNova" className="h-50 w-auto " />
                </div> */}
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-300">CMS &amp; VSGOI present</p>
                <h1 className="text-5xl font-extrabold sm:text-7xl text-glow">{EVENT.name}</h1>
                <p className="mt-4 text-xl text-slate-300">{EVENT.theme}</p>

                <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
                    <span className="rounded-full border border-blue-600 px-4 py-2 font-bold"> {EVENT.date}</span>
                    <span className="rounded-full border border-blue-600 px-4 py-2 font-bold">{EVENT.timing}</span>
                    {/* <span className="rounded-full border border-white/15 px-4 py-2">₹{EVENT.fee} {EVENT.feeNote}</span> */}
                    <span className="rounded-full border border-blue-600 px-4 py-2 font-bold">
                         ₹{PRICE_PER_EVENT}/event · All 4 for ₹{calcFee(4)}
                    </span>
                </div>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <a href="/register" className="rounded-lg bg-cyan-400 px-8 py-3 font-semibold text-slate-950 hover:bg-cyan-300">
                        Register Now
                    </a>
                    <a href="#events" className="rounded-lg border border-white/20 px-8 py-3 font-semibold hover:border-cyan-300">
                        Explore Events
                    </a>
                </div>
            </div>
        </section>
    );
}