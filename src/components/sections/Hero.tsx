'use client';

import React from 'react';
import Image from 'next/image';
import { profileData } from '@/data/profile';
import { FileDown, Mail, ArrowDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon, KaggleIcon } from '@/components/ui/Icons';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-20 overflow-hidden"
    >
      {/* Subtle AI Ambient Glows */}
      <div className="ai-glow-bg top-12 left-10 w-96 h-96 bg-blue-600/20" />
      <div className="ai-glow-bg bottom-16 right-10 w-96 h-96 bg-purple-600/20" />

      {/* Decorative Neural Pattern Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text, Bio, and CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Full Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              {profileData.name}
            </h1>

            {/* Target Roles */}
            <div className="mt-4 flex items-center justify-center lg:justify-start">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">
                {profileData.headline}
              </h2>
            </div>

            {/* Professional 3-line max bio */}
            <div className="mt-5 max-w-2xl mx-auto lg:mx-0">
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Building intelligent, data-driven solutions that turn complex data into actionable insights, predictive models, and AI-powered applications. Experienced in Data Analysis, Machine Learning, Deep Learning, Computer Vision, NLP, Generative AI, RAG, and Agentic AI.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-3.5">
              {/* GitHub — same style as Kaggle/Email */}
              <a
                href={profileData.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl text-sm font-semibold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700/80 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                <GithubIcon className="w-4 h-4 text-slate-800 dark:text-slate-200" />
                <span>GitHub</span>
              </a>

              {/* LinkedIn — same style as Kaggle/Email, LinkedIn blue icon */}
              <a
                href={profileData.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl text-sm font-semibold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700/80 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-600" />
                <span>LinkedIn</span>
              </a>

              {/* Download CV */}
              <a
                href={profileData.links.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl text-sm font-semibold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700/80 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-blue-500" />
                <span>Download CV</span>
              </a>

              {/* Kaggle */}
              <a
                href={profileData.links.kaggle}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl text-sm font-semibold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700/80 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                <KaggleIcon className="w-4 h-4 text-cyan-500" />
                <span>Kaggle</span>
              </a>

              {/* Email */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=youssefabdella20@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl text-sm font-semibold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700/80 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-rose-500" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Circular Profile Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Outer animated gradient ring */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 opacity-70 blur-md" />

              {/* Inner white border ring */}
              <div className="relative rounded-full p-1 bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 shadow-2xl">
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <Image
                    src="/profile.jpg"
                    alt={profileData.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 320px, 360px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Explore prompt */}
        <div className="mt-14 flex justify-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-blue-500 transition-colors"
          >
            <span>Explore Projects & Work</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
