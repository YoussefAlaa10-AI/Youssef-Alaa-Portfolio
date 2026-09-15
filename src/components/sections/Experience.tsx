'use client';

import React from 'react';
import { experienceData } from '@/data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Industry Internships & Applied AI
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Demonstrated track record of delivering end-to-end intelligent systems, deep neural architectures, and data engineering pipelines.
          </p>
        </div>

        {/* Elegant Cards Grid (NOT a timeline) */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="flex flex-col rounded-3xl bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-slate-800/90 p-7 shadow-sm hover:shadow-xl dark:hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Organization & Location Header */}
              <div className="pb-5 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    {exp.organization}
                  </span>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug">
                  {exp.role}
                </h3>

                <div className="mt-2 flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="mt-6 flex-1">
                <ul className="space-y-3.5">
                  {exp.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
