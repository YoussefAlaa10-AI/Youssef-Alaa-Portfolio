'use client';

import React from 'react';
import { profileData } from '@/data/profile';
import { Mail, Sparkles, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon, KaggleIcon } from '@/components/ui/Icons';

export function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-36 scroll-mt-16 overflow-hidden">
      {/* Background Accent Mesh */}
      <div className="ai-glow-bg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-gradient-to-tr from-blue-600/30 to-purple-600/30" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Subtle Indicator */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Get In Touch</span>
        </div>

        {/* Main Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Let's Build Something Intelligent.
        </h2>

        {/* Supporting Text */}
        <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Available for innovative opportunities, full-time engineering positions, and collaborative research initiatives across AI, Machine Learning, Data Science, and Generative AI.
        </p>

        {/* Primary CTA: Email Me */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`mailto:${profileData.links.email}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 cursor-pointer"
          >
            <Mail className="w-5 h-5" />
            <span>Email Me</span>
          </a>
        </div>

        {/* Secondary Network Links */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-center gap-6">
          <a
            href={profileData.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href={profileData.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>

          <a
            href={profileData.links.kaggle}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <KaggleIcon className="w-4 h-4" />
            <span>Kaggle</span>
          </a>
        </div>
      </div>
    </section>
  );
}
