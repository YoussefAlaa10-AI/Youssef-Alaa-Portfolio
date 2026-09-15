'use client';

import React from 'react';
import { profileData } from '@/data/profile';
import { Award, Trophy, ArrowUpRight, TrendingUp, Users } from 'lucide-react';

export function Achievements() {
  const { kaggleAchievement } = profileData;

  return (
    <section id="achievements" className="relative py-20 sm:py-28 scroll-mt-16 bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Competitive Standing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Key Achievement
          </h2>
        </div>

        {/* Compact, Premium Kaggle Master Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent dark:from-amber-500/10 dark:via-slate-900 dark:to-[#0c1322] border border-amber-500/30 p-8 sm:p-10 shadow-lg hover:shadow-xl transition-all duration-300">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            {/* Left: Badge & Tier */}
            <div className="flex items-center gap-5 text-center sm:text-left">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-500 shrink-0 shadow-inner">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                  Global Data Science Benchmark
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {kaggleAchievement.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Demonstrated excellence in competitive machine learning & model validation
                </p>
              </div>
            </div>

            {/* Middle: Key Ranks */}
            <div className="flex items-center gap-6 divide-x divide-slate-200 dark:divide-slate-800">
              <div className="text-center pr-2">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1">
                  <Users className="w-3.5 h-3.5" />
                  <span>Current Global Rank</span>
                </span>
                <p className="mt-1 text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-slate-100">
                  {kaggleAchievement.currentRank}
                  <span className="text-xs font-normal text-slate-500 dark:text-slate-400 ml-1">
                    of {kaggleAchievement.totalParticipants}
                  </span>
                </p>
              </div>

              <div className="text-center pl-6">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5 text-amber-500" />
                  <span>Highest Ever</span>
                </span>
                <p className="mt-1 text-xl sm:text-2xl font-extrabold text-amber-600 dark:text-amber-400">
                  {kaggleAchievement.highestRank}
                </p>
              </div>
            </div>

            {/* Right: Kaggle Profile CTA Button */}
            <div className="shrink-0">
              <a
                href={kaggleAchievement.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View Kaggle Profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
