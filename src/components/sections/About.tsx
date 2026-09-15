'use client';

import React from 'react';
import { profileData } from '@/data/profile';
import {
  User,
  BrainCircuit,
  Award,
  GraduationCap,
  Sparkles,
  Layers,
  CheckCircle2
} from 'lucide-react';

export function About() {
  const getHighlightIcon = (highlight: string) => {
    switch (highlight) {
      case 'AI Engineer': return <BrainCircuit className="w-4 h-4 text-blue-500" />;
      case 'Data Scientist': return <Layers className="w-4 h-4 text-indigo-500" />;
      case 'Data Analyst': return <CheckCircle2 className="w-4 h-4 text-cyan-500" />;
      case 'Kaggle Master': return <Award className="w-4 h-4 text-amber-500" />;
      case 'Computer Science Engineering Student': return <GraduationCap className="w-4 h-4 text-purple-500" />;
      default: return <Sparkles className="w-4 h-4 text-blue-500" />;
    }
  };

  return (
    <section id="about" className="relative py-24 sm:py-32 scroll-mt-16 bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bio & Core Philosophy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3">
              <User className="w-3.5 h-3.5" />
              <span>About Me</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Engineering Practical, Impactful AI Solutions
            </h2>

            <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {profileData.aboutParagraph}
            </p>

            {/* Focus Areas Tags */}
            <div className="mt-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                Primary Focus Areas
              </h3>
              <div className="flex flex-wrap gap-2">
                {profileData.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/80 shadow-xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Highlights Cards */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
              Professional Highlights
            </h3>
            {profileData.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-blue-500/40 transition-all duration-200"
              >
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/90 shrink-0">
                  {getHighlightIcon(highlight)}
                </div>
                <div>
                  <span className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    {highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
