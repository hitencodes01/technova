"use client";

import React from "react";
import { WINNERS } from "@/lib/eventData";
import { Trophy, Medal, Sparkles } from "lucide-react";

export default function Results() {
    return (
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950 px-5 py-12 sm:px-8 sm:py-16">

            {/* Background glow */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-600/20 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-purple-600/20 blur-[100px]" />

            {/* Heading */}
            <div className="relative mb-12 text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-300">
                    <Sparkles size={16} />
                    The Results Are In
                </div>

                <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
                    Celebrating <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-400 bg-clip-text text-transparent">Excellence</span>
                </h2>

                <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
                    Recognizing the talent, creativity, and determination of our
                    outstanding participants.
                </p>
            </div>

            {/* Winner cards */}
            <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
                {WINNERS.map((item, index) => (
                    <article
                        key={item.event}
                        style={{ animationDelay: `${index * 120}ms` }}
                        className="group relative animate-[fadeInUp_0.6s_ease-out_both] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-amber-300/40 hover:bg-white/[0.07] hover:shadow-[0_20px_60px_-20px_rgba(251,191,36,0.15)] sm:p-8"
                    >
                        {/* Top accent */}
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-amber-400 opacity-70 transition-opacity group-hover:opacity-100" />

                        {/* Event title */}
                        <div className="mb-8 flex items-start justify-between gap-4">
                            <div>
                                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                                    Event {String(index + 1).padStart(2, "0")}
                                </p>
                                <h3 className="text-xl font-bold text-white transition-colors group-hover:text-amber-200 sm:text-2xl">
                                    {item.event}
                                </h3>
                            </div>

                            <div className="rounded-xl border border-amber-300/20 bg-amber-300/10 p-3 text-amber-300 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                                <Trophy size={25} />
                            </div>
                        </div>

                        {/* Winner */}
                        <div className="mb-4 rounded-xl border border-amber-300/20 bg-gradient-to-r from-amber-300/10 to-orange-400/5 p-4">
                            <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
                                <Trophy size={15} />
                                Winner
                            </div>
                            <p className="break-words text-lg font-semibold text-white sm:text-xl">
                                {item.winner.map((name, index) => <li className="list-none" key={index}>{name}</li>)}
                            </p>
                        </div>

                        {/* Runner-up */}
                        <div className="rounded-xl border border-slate-400/10 bg-slate-400/[0.05] p-4">
                            <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                                <Medal size={15} />
                                Runner Up
                            </div>
                            <p className="break-words text-base font-medium text-slate-200 sm:text-lg">
                                {item.runnerUp}
                            </p>
                        </div>

                        {/* Decorative background icon */}
                        <Trophy
                            aria-hidden="true"
                            className="pointer-events-none absolute -bottom-7 -right-5 h-28 w-28 rotate-12 text-white/[0.025] transition-all duration-500 group-hover:rotate-0 group-hover:text-amber-300/[0.06]"
                        />
                    </article>
                ))}
            </div>

            <p className="relative mt-10 text-center text-xs tracking-wide text-slate-500 sm:text-sm">
                Every effort counts. Every achievement matters.
            </p>

            <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          article {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
        </section>
    );
}