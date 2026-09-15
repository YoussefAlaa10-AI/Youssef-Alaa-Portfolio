'use client';

import React from 'react';
import { profileData } from '@/data/profile';
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from 'lucide-react';

export function Education() {
  const { education } = profileData;

  return (
    <section id="education" className="relative py-24 sm:py-32 scroll-mt-16 bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Formal Engineering Education
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Rigorous foundation in computer systems, mathematics, and intelligent algorithms.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-slate-800 p-8 sm:p-10 shadow-sm hover:shadow-xl dark:hover:border-purple-500/40 transition-all duration-300">
            {/* Subtle Gradient Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                  {education.institution}
                </span>
                <h3 className="mt-1 text-2xl font-bold text-slate-900 dark:text-slate-100">
                  {education.degree}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">
                  {education.faculty}
                </p>
              </div>

              {/* GPA Badge */}
              <div className="flex flex-col sm:items-end">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 font-bold text-sm shadow-xs">
                  <Award className="w-4 h-4 text-purple-500" />
                  <span>GPA: {education.gpa}</span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{education.period}</span>
                </div>
              </div>
            </div>

            {/* Location & Focus Description */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>{education.location}</span>
              </div>
            </div>

            <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {education.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
