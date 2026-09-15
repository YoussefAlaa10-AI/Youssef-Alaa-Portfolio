// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import { CertIssuer } from '@/types';
// import { certificationsData } from '@/data/certifications';
// import { Award, X, ZoomIn } from 'lucide-react';

// const TABS: CertIssuer[] = ['All', 'NVIDIA', 'IBM', 'ITI', 'Instant', 'Kaggle', 'DataCamp'];

// const tabColors: Record<CertIssuer, string> = {
//   All:      'from-blue-600 to-indigo-600',
//   NVIDIA:   'from-green-600 to-emerald-500',
//   IBM:      'from-blue-700 to-sky-500',
//   ITI:      'from-rose-600 to-pink-500',
//   Instant:  'from-indigo-600 to-violet-500',
//   Kaggle:   'from-cyan-600 to-teal-500',
//   DataCamp: 'from-orange-600 to-amber-500',
// };

// export function Certifications() {
//   const [activeTab, setActiveTab] = useState<CertIssuer>('All');
//   const [zoomedImage, setZoomedImage] = useState<{ src: string; title: string } | null>(null);

//   const filtered = activeTab === 'All'
//     ? certificationsData
//     : certificationsData.filter((c) => c.issuerTab === activeTab);

//   return (
//     <section id="certifications" className="relative py-24 sm:py-32 scroll-mt-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Section Heading */}
//         <div className="text-center max-w-3xl mx-auto">
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 mb-3">
//             <Award className="w-3.5 h-3.5" />
//             <span>Credentials & Training</span>
//           </div>
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
//             Professional Certifications
//           </h2>
//           <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
//             Validated credentials from recognized institutions and industry leaders.
//           </p>
//         </div>

//         {/* Filter Tabs */}
//         <div className="mt-10 flex justify-center">
//           <div className="inline-flex flex-wrap items-center justify-center gap-2 p-2 rounded-2xl bg-white dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-sm">
//             {TABS.map((tab) => {
//               const isActive = activeTab === tab;
//               const count = tab === 'All'
//                 ? certificationsData.length
//                 : certificationsData.filter((c) => c.issuerTab === tab).length;
//               return (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`relative inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
//                     isActive
//                       ? `bg-gradient-to-r ${tabColors[tab]} text-white shadow-md`
//                       : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
//                   }`}
//                 >
//                   <span>{tab}</span>
//                   {count > 0 && (
//                     <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
//                       isActive
//                         ? 'bg-white/20 text-white'
//                         : 'bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
//                     }`}>
//                       {count}
//                     </span>
//                   )}
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* Certificates Grid */}
//         <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filtered.map((cert, index) => (
//             <div
//               key={`${cert.issuerTab}-${index}`}
//               className="group relative rounded-2xl overflow-hidden bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
//               onClick={() => setZoomedImage({ src: cert.image, title: cert.title })}
//             >
//               {/* Certificate image */}
//               <div className="relative aspect-[4/3] w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
//                 <Image
//                   src={cert.image}
//                   alt={cert.title}
//                   fill
//                   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                   className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
//                 />
//                 {/* Zoom overlay on hover */}
//                 <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/30 transition-colors duration-300 flex items-center justify-center">
//                   <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
//                     <ZoomIn className="w-5 h-5 text-slate-800" />
//                   </div>
//                 </div>
//               </div>

//               {/* Info below */}
//               <div className="p-4">
//                 <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
//                   {cert.issuer}
//                 </p>
//                 <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
//                   {cert.title}
//                 </h3>
//                 {cert.date && (
//                   <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
//                     {cert.date}
//                   </p>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Fullscreen lightbox */}
//       {zoomedImage && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
//           onClick={() => setZoomedImage(null)}
//         >
//           <div
//             className="relative max-w-4xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               onClick={() => setZoomedImage(null)}
//               className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-slate-900/80 backdrop-blur text-white flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer"
//             >
//               <X className="w-4 h-4" />
//             </button>
//             <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
//               <Image
//                 src={zoomedImage.src}
//                 alt={zoomedImage.title}
//                 fill
//                 sizes="100vw"
//                 className="object-contain bg-white"
//               />
//             </div>
//             <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4">
//               <p className="text-white text-sm font-semibold">{zoomedImage.title}</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }



'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { CertIssuer } from '@/types';
import { certificationsData } from '@/data/certifications';
import {
  Award,
  X,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const TABS: CertIssuer[] = [
  'All',
  'Instant',
  'ITI',
  'NVIDIA',
  'IBM',
  'DataCamp',
  'Kaggle',
];

const tabColors: Record<CertIssuer, string> = {
  All: 'from-blue-600 to-indigo-600',
  NVIDIA: 'from-green-600 to-emerald-500',
  IBM: 'from-blue-700 to-sky-500',
  ITI: 'from-rose-600 to-pink-500',
  Instant: 'from-indigo-600 to-violet-500',
  Kaggle: 'from-cyan-600 to-teal-500',
  DataCamp: 'from-orange-600 to-amber-500',
};

export function Certifications() {
  const [activeTab, setActiveTab] = useState<CertIssuer>('All');
  const [currentIndex, setCurrentIndex] = useState(0);

  const [zoomedImage, setZoomedImage] = useState<{
    src: string;
    title: string;
  } | null>(null);

  const filtered =
    activeTab === 'All'
      ? certificationsData
      : certificationsData.filter(
          (cert) => cert.issuerTab === activeTab
        );

  // Reset position when changing category
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);

  const nextSlide = () => {
    if (filtered.length <= 3) return;

    setCurrentIndex((prev) => {
      return prev + 1 > filtered.length - 3 ? 0 : prev + 1;
    });
  };

  const previousSlide = () => {
    if (filtered.length <= 3) return;

    setCurrentIndex((prev) => {
      return prev - 1 < 0 ? filtered.length - 3 : prev - 1;
    });
  };

  return (
    <section
      id="certifications"
      className="relative py-24 sm:py-32 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials & Training</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Professional Certifications
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Validated credentials from recognized institutions and industry
            leaders.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 p-2 rounded-2xl bg-white dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-sm">

            {TABS.map((tab) => {
              const isActive = activeTab === tab;

              const count =
                tab === 'All'
                  ? certificationsData.length
                  : certificationsData.filter(
                      (cert) => cert.issuerTab === tab
                    ).length;

              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? `bg-gradient-to-r ${tabColors[tab]} text-white shadow-md`
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <span>{tab}</span>

                  {count > 0 && (
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      {count}
                    </span>
                  )}
                </button>
              );
            })}

          </div>
        </div>

        {/* ================= CAROUSEL ================= */}
        <div className="relative mt-10">

          {/* Left Arrow */}
          <button
            type="button"
            onClick={previousSlide}
            disabled={filtered.length <= 3}
            aria-label="Previous certificates"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-11 h-11 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-lg flex items-center justify-center text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Viewport */}
          <div className="overflow-hidden">

            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
              }}
            >

              {filtered.map((cert, index) => (
                <div
                  key={`${cert.issuerTab}-${index}`}
                  className="w-1/3 min-w-[33.333333%] px-3"
                >

                  {/* Certificate Card */}
                  <div
                    className="group relative rounded-2xl overflow-hidden bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
                    onClick={() =>
                      setZoomedImage({
                        src: cert.image,
                        title: cert.title,
                      })
                    }
                  >

                    {/* Image */}
                    <div className="relative aspect-[4/3] w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">

                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        sizes="33vw"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Hover */}
                      <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/30 transition-colors duration-300 flex items-center justify-center">

                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg">

                          <ZoomIn className="w-5 h-5 text-slate-800" />

                        </div>

                      </div>

                    </div>

                    {/* Info */}
                    <div className="p-4">

                      <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
                        {cert.issuer}
                      </p>

                      <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {cert.title}
                      </h3>

                      {cert.date && (
                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                          {cert.date}
                        </p>
                      )}

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={nextSlide}
            disabled={filtered.length <= 3}
            aria-label="Next certificates"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-11 h-11 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-lg flex items-center justify-center text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

        {/* Position Indicator */}
        {filtered.length > 3 && (
          <div className="mt-6 flex justify-center gap-2">

            {Array.from({
              length: filtered.length - 2,
            }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-blue-600'
                    : 'w-2 bg-slate-300 dark:bg-slate-700'
                }`}
                aria-label={`Go to position ${index + 1}`}
              />
            ))}

          </div>
        )}

      </div>

      {/* ================= LIGHTBOX ================= */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setZoomedImage(null)}
        >

          <div
            className="relative max-w-4xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close */}
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-slate-900/80 backdrop-blur text-white flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div
              className="relative w-full"
              style={{ aspectRatio: '4/3' }}
            >

              <Image
                src={zoomedImage.src}
                alt={zoomedImage.title}
                fill
                sizes="100vw"
                className="object-contain bg-white"
              />

            </div>

            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-semibold">
                {zoomedImage.title}
              </p>
            </div>

          </div>

        </div>
      )}

    </section>
  );
}






