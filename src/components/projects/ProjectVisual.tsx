'use client';

import React from 'react';

interface ProjectVisualProps {
  imageKey: string;
  title: string;
  className?: string;
}

export function ProjectVisual({ imageKey, title, className = '' }: ProjectVisualProps) {
  // SVG Graphic Renderers tailored for each project
  switch (imageKey) {
    case 'airbnb-warehouse':
      return (
        <div className={`relative w-full h-full bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 overflow-hidden flex items-center justify-center p-6 ${className}`}>
          {/* Subtle Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:24px_24px]" />
          <svg viewBox="0 0 400 220" className="w-full h-full max-h-52 drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bronze" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d97706" />
                <stop offset="100%" stopColor="#78350f" />
              </linearGradient>
              <linearGradient id="silver" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>
              <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
              <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#818cf8" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Ingestion Stream */}
            <path d="M 40 110 L 80 110" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 4" />
            <circle cx="40" cy="110" r="14" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="40" y="114" fill="#94a3b8" fontSize="9" textAnchor="middle" fontWeight="600">CSV</text>

            {/* Bronze Layer */}
            <rect x="80" y="70" width="75" height="80" rx="8" fill="#181e2e" stroke="url(#bronze)" strokeWidth="1.5" />
            <rect x="90" y="80" width="55" height="12" rx="3" fill="#d97706" fillOpacity="0.25" />
            <text x="117" y="89" fill="#fcd34d" fontSize="8.5" textAnchor="middle" fontWeight="bold">BRONZE</text>
            <line x1="90" y1="102" x2="145" y2="102" stroke="#334155" strokeWidth="1" />
            <line x1="90" y1="112" x2="135" y2="112" stroke="#334155" strokeWidth="1" />
            <line x1="90" y1="122" x2="140" y2="122" stroke="#334155" strokeWidth="1" />
            <line x1="90" y1="132" x2="125" y2="132" stroke="#334155" strokeWidth="1" />

            {/* Connecting Arrow */}
            <path d="M 155 110 L 180 110" stroke="url(#cyanGlow)" strokeWidth="2" markerEnd="url(#arrow)" />

            {/* Silver Layer */}
            <rect x="180" y="65" width="80" height="90" rx="8" fill="#181e2e" stroke="url(#silver)" strokeWidth="1.5" />
            <rect x="190" y="75" width="60" height="12" rx="3" fill="#94a3b8" fillOpacity="0.25" />
            <text x="220" y="84" fill="#e2e8f0" fontSize="8.5" textAnchor="middle" fontWeight="bold">SILVER</text>
            <rect x="192" y="94" width="24" height="6" rx="2" fill="#3b82f6" fillOpacity="0.4" />
            <rect x="220" y="94" width="30" height="6" rx="2" fill="#3b82f6" fillOpacity="0.4" />
            <rect x="192" y="106" width="56" height="6" rx="2" fill="#334155" />
            <rect x="192" y="118" width="46" height="6" rx="2" fill="#334155" />
            <rect x="192" y="130" width="52" height="6" rx="2" fill="#334155" />

            {/* Connecting Arrow */}
            <path d="M 260 110 L 285 110" stroke="url(#cyanGlow)" strokeWidth="2" />

            {/* Gold Layer (Star Schema / Power BI) */}
            <rect x="285" y="55" width="90" height="110" rx="8" fill="#181e2e" stroke="url(#gold)" strokeWidth="1.5" />
            <rect x="295" y="65" width="70" height="13" rx="3" fill="#fbbf24" fillOpacity="0.25" />
            <text x="330" y="75" fill="#fde68a" fontSize="8.5" textAnchor="middle" fontWeight="bold">GOLD STAR</text>

            {/* Fact & Dim Mini Nodes */}
            <circle cx="330" cy="105" r="10" fill="#3b82f6" fillOpacity="0.3" stroke="#60a5fa" strokeWidth="1.5" />
            <text x="330" y="108" fill="#93c5fd" fontSize="7" textAnchor="middle" fontWeight="bold">FACT</text>

            <circle cx="308" cy="135" r="7" fill="#1e293b" stroke="#cbd5e1" strokeWidth="1" />
            <circle cx="330" cy="145" r="7" fill="#1e293b" stroke="#cbd5e1" strokeWidth="1" />
            <circle cx="352" cy="135" r="7" fill="#1e293b" stroke="#cbd5e1" strokeWidth="1" />

            <line x1="324" y1="113" x2="312" y2="129" stroke="#64748b" strokeWidth="1" />
            <line x1="330" y1="115" x2="330" y2="138" stroke="#64748b" strokeWidth="1" />
            <line x1="336" y1="113" x2="348" y2="129" stroke="#64748b" strokeWidth="1" />
          </svg>
        </div>
      );

    case 'oral-disease':
      return (
        <div className={`relative w-full h-full bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 overflow-hidden flex items-center justify-center p-6 ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />
          <svg viewBox="0 0 400 220" className="w-full h-full max-h-52 drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Medical Cross & Neural Scan Grid */}
            <circle cx="200" cy="110" r="70" stroke="#0891b2" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
            <circle cx="200" cy="110" r="50" stroke="#06b6d4" strokeWidth="1.5" opacity="0.8" />
            <circle cx="200" cy="110" r="30" fill="#0e7490" fillOpacity="0.2" stroke="#22d3ee" strokeWidth="1.5" />

            {/* Neural Net Layer Nodes */}
            <line x1="80" y1="60" x2="160" y2="90" stroke="#0284c7" strokeWidth="1.2" opacity="0.5" />
            <line x1="80" y1="110" x2="160" y2="90" stroke="#0284c7" strokeWidth="1.2" opacity="0.5" />
            <line x1="80" y1="160" x2="160" y2="130" stroke="#0284c7" strokeWidth="1.2" opacity="0.5" />
            <line x1="160" y1="90" x2="200" y2="110" stroke="#38bdf8" strokeWidth="1.5" />
            <line x1="160" y1="130" x2="200" y2="110" stroke="#38bdf8" strokeWidth="1.5" />

            {/* Input Nodes */}
            <circle cx="80" cy="60" r="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
            <circle cx="80" cy="110" r="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
            <circle cx="80" cy="160" r="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />

            {/* Scan Reticle */}
            <path d="M 185 85 L 185 80 L 190 80" stroke="#22d3ee" strokeWidth="2" />
            <path d="M 215 85 L 215 80 L 210 80" stroke="#22d3ee" strokeWidth="2" />
            <path d="M 185 135 L 185 140 L 190 140" stroke="#22d3ee" strokeWidth="2" />
            <path d="M 215 135 L 215 140 L 210 140" stroke="#22d3ee" strokeWidth="2" />

            {/* Accuracy Badge */}
            <rect x="270" y="75" width="105" height="34" rx="6" fill="#0f172a" stroke="#06b6d4" strokeWidth="1" />
            <text x="280" y="90" fill="#94a3b8" fontSize="8" fontWeight="500">EfficientNetB0</text>
            <text x="280" y="103" fill="#22d3ee" fontSize="11" fontWeight="bold">Acc: 93.71%</text>

            <rect x="270" y="118" width="105" height="28" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="1" />
            <text x="280" y="131" fill="#94a3b8" fontSize="8">Macro F1</text>
            <text x="280" y="141" fill="#38bdf8" fontSize="9.5" fontWeight="bold">92.53%</text>
          </svg>
        </div>
      );

    case 'road-damage':
      return (
        <div className={`relative w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-zinc-950 overflow-hidden flex items-center justify-center p-6 ${className}`}>
          <svg viewBox="0 0 400 220" className="w-full h-full max-h-52 drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Road Perspective Lines */}
            <polygon points="120,220 280,220 215,70 185,70" fill="#18181b" stroke="#27272a" strokeWidth="1.5" />
            <line x1="200" y1="220" x2="200" y2="80" stroke="#eab308" strokeWidth="2" strokeDasharray="14 12" />

            {/* Bounding Box 1 - Road Crack */}
            <rect x="145" y="130" width="55" height="42" fill="#ef4444" fillOpacity="0.15" stroke="#ef4444" strokeWidth="1.8" />
            <rect x="145" y="118" width="46" height="12" fill="#ef4444" rx="2" />
            <text x="148" y="127" fill="#ffffff" fontSize="7.5" fontWeight="bold">D20: 0.94</text>
            <path d="M 155 145 Q 170 155 185 150" stroke="#fca5a5" strokeWidth="1.5" strokeLinecap="round" />

            {/* Bounding Box 2 - Pothole */}
            <rect x="215" y="145" width="48" height="36" fill="#f59e0b" fillOpacity="0.15" stroke="#f59e0b" strokeWidth="1.8" />
            <rect x="215" y="133" width="46" height="12" fill="#f59e0b" rx="2" />
            <text x="218" y="142" fill="#ffffff" fontSize="7.5" fontWeight="bold">D40: 0.89</text>
            <ellipse cx="238" cy="163" rx="16" ry="9" fill="#27272a" stroke="#f59e0b" strokeWidth="1" />

            {/* YOLOv8 Badge */}
            <rect x="30" y="40" width="85" height="32" rx="6" fill="#090d16" stroke="#3b82f6" strokeWidth="1.2" />
            <text x="72" y="55" fill="#60a5fa" fontSize="9.5" textAnchor="middle" fontWeight="bold">YOLOv8</text>
            <text x="72" y="66" fill="#94a3b8" fontSize="7.5" textAnchor="middle">Real-time SOTA</text>
          </svg>
        </div>
      );

    case 'exam-cheating':
      return (
        <div className={`relative w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 overflow-hidden flex items-center justify-center p-6 ${className}`}>
          <svg viewBox="0 0 400 220" className="w-full h-full max-h-52 drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Monitor Frame */}
            <rect x="50" y="30" width="300" height="160" rx="8" fill="#090d16" stroke="#1e293b" strokeWidth="2" />
            <circle cx="68" cy="45" r="4" fill="#ef4444" />
            <text x="78" y="48" fill="#ef4444" fontSize="8" fontWeight="bold">REC • LIVE 30 FPS</text>

            {/* Person Silhouette & Bounding Box */}
            <rect x="140" y="60" width="120" height="115" rx="4" fill="#3b82f6" fillOpacity="0.1" stroke="#3b82f6" strokeWidth="1.5" />
            <rect x="140" y="48" width="80" height="12" fill="#3b82f6" rx="2" />
            <text x="144" y="57" fill="#ffffff" fontSize="7.5" fontWeight="bold">ID: 04 [ByteTrack]</text>

            {/* Head Mesh & Pose Vector */}
            <circle cx="200" cy="95" r="22" fill="#1e293b" stroke="#60a5fa" strokeWidth="1.5" />
            <line x1="200" y1="95" x2="225" y2="80" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" />
            <polygon points="228,78 221,79 224,85" fill="#f43f5e" />
            <text x="212" y="73" fill="#f43f5e" fontSize="7" fontWeight="bold">YAW +42°</text>

            {/* Suspicious Alert Badge */}
            <rect x="275" y="80" width="65" height="38" rx="6" fill="#7f1d1d" fillOpacity="0.5" stroke="#ef4444" strokeWidth="1.2" />
            <text x="307" y="96" fill="#fca5a5" fontSize="8" textAnchor="middle" fontWeight="bold">ALERT</text>
            <text x="307" y="108" fill="#ffffff" fontSize="7" textAnchor="middle">Head Pose Tilt</text>
          </svg>
        </div>
      );

    case 'hard-hat':
      return (
        <div className={`relative w-full h-full bg-gradient-to-br from-slate-950 via-amber-950/40 to-slate-900 overflow-hidden flex items-center justify-center p-6 ${className}`}>
          <svg viewBox="0 0 400 220" className="w-full h-full max-h-52 drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Worker 1: Helmet Compliant */}
            <rect x="80" y="55" width="95" height="130" rx="6" fill="#10b981" fillOpacity="0.1" stroke="#10b981" strokeWidth="1.5" />
            <rect x="80" y="42" width="70" height="13" rx="2" fill="#10b981" />
            <text x="84" y="52" fill="#ffffff" fontSize="7.5" fontWeight="bold">Helmet: 0.98</text>
            {/* Safety Helmet Icon Shape */}
            <path d="M 115 80 Q 128 65 140 80 L 144 85 L 111 85 Z" fill="#eab308" stroke="#facc15" strokeWidth="1.5" />
            <circle cx="127" cy="98" r="12" fill="#1e293b" stroke="#cbd5e1" strokeWidth="1" />
            <rect x="108" y="115" width="40" height="55" rx="4" fill="#334155" />

            {/* Worker 2: No Helmet / Head Detected */}
            <rect x="225" y="55" width="95" height="130" rx="6" fill="#ef4444" fillOpacity="0.1" stroke="#ef4444" strokeWidth="1.5" />
            <rect x="225" y="42" width="65" height="13" rx="2" fill="#ef4444" />
            <text x="229" y="52" fill="#ffffff" fontSize="7.5" fontWeight="bold">Head: 0.93</text>
            {/* Exposed Head Silhouette */}
            <circle cx="272" cy="85" r="14" fill="#1e293b" stroke="#f87171" strokeWidth="1.5" />
            <rect x="252" y="105" width="40" height="65" rx="4" fill="#334155" />

            {/* Safety Tag */}
            <circle cx="340" cy="50" r="16" fill="#090d16" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="340" y="54" fill="#f59e0b" fontSize="9" textAnchor="middle" fontWeight="bold">PPE</text>
          </svg>
        </div>
      );

    case 'emotion-nlp':
      return (
        <div className={`relative w-full h-full bg-gradient-to-br from-slate-950 via-purple-950/50 to-slate-900 overflow-hidden flex items-center justify-center p-6 ${className}`}>
          <svg viewBox="0 0 400 220" className="w-full h-full max-h-52 drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Tokens */}
            <g transform="translate(40, 60)">
              <rect x="0" y="0" width="70" height="24" rx="4" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1" />
              <text x="35" y="15" fill="#c7d2fe" fontSize="8.5" textAnchor="middle">[CLS] Token</text>

              <rect x="0" y="34" width="70" height="24" rx="4" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1" />
              <text x="35" y="49" fill="#c7d2fe" fontSize="8.5" textAnchor="middle">Embeddings</text>

              <rect x="0" y="68" width="70" height="24" rx="4" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1" />
              <text x="35" y="83" fill="#c7d2fe" fontSize="8.5" textAnchor="middle">BiLSTM/Attn</text>
            </g>

            {/* Attention Connectors */}
            <path d="M 120 72 L 190 100" stroke="#a855f7" strokeWidth="1.5" opacity="0.6" />
            <path d="M 120 106 L 190 100" stroke="#a855f7" strokeWidth="1.5" opacity="0.9" />
            <path d="M 120 140 L 190 100" stroke="#a855f7" strokeWidth="1.5" opacity="0.6" />

            {/* DistilBERT Transformer Core */}
            <rect x="190" y="55" width="80" height="90" rx="8" fill="#0f172a" stroke="#c084fc" strokeWidth="1.8" />
            <text x="230" y="80" fill="#f3e8ff" fontSize="9" textAnchor="middle" fontWeight="bold">DistilBERT</text>
            <text x="230" y="93" fill="#a855f7" fontSize="7.5" textAnchor="middle">Transformer</text>
            <rect x="202" y="105" width="56" height="6" rx="2" fill="#7e22ce" />
            <rect x="202" y="116" width="40" height="6" rx="2" fill="#7e22ce" fillOpacity="0.5" />

            {/* 6 Emotions Probabilities */}
            <g transform="translate(290, 48)">
              <rect x="0" y="0" width="85" height="16" rx="3" fill="#1e293b" />
              <rect x="0" y="0" width="74" height="16" rx="3" fill="#8b5cf6" fillOpacity="0.6" />
              <text x="8" y="11" fill="#ffffff" fontSize="7.5" fontWeight="600">Joy: 88%</text>

              <rect x="0" y="20" width="85" height="16" rx="3" fill="#1e293b" />
              <rect x="0" y="20" width="22" height="16" rx="3" fill="#64748b" />
              <text x="8" y="31" fill="#cbd5e1" fontSize="7.5">Surprise: 12%</text>

              <rect x="0" y="40" width="85" height="16" rx="3" fill="#1e293b" />
              <rect x="0" y="40" width="10" height="16" rx="3" fill="#64748b" />
              <text x="8" y="51" fill="#cbd5e1" fontSize="7.5">Sadness: 5%</text>

              <text x="4" y="74" fill="#94a3b8" fontSize="7.5">+ 3 More Categories</text>
            </g>
          </svg>
        </div>
      );

    case 'complaint-nlp':
      return (
        <div className={`relative w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 overflow-hidden flex items-center justify-center p-6 ${className}`}>
          <svg viewBox="0 0 400 220" className="w-full h-full max-h-52 drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Big Corpus Metric Badge */}
            <rect x="40" y="45" width="105" height="42" rx="6" fill="#090d16" stroke="#3b82f6" strokeWidth="1.2" />
            <text x="50" y="62" fill="#94a3b8" fontSize="8">Dataset Scale</text>
            <text x="50" y="77" fill="#60a5fa" fontSize="11" fontWeight="bold">124,676 Texts</text>

            {/* Models Benchmarked */}
            <rect x="40" y="98" width="105" height="70" rx="6" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />
            <text x="50" y="113" fill="#cbd5e1" fontSize="7.5" fontWeight="600">• Simple RNN</text>
            <text x="50" y="127" fill="#cbd5e1" fontSize="7.5" fontWeight="600">• LSTM</text>
            <text x="50" y="141" fill="#cbd5e1" fontSize="7.5" fontWeight="600">• GRU</text>
            <text x="50" y="155" fill="#38bdf8" fontSize="8" fontWeight="bold">• DistilBERT (Best)</text>

            {/* Neural Dispatch Funnel */}
            <path d="M 155 110 L 220 110" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3 3" />

            {/* 5 Financial Category Buckets */}
            <g transform="translate(230, 45)">
              <rect x="0" y="0" width="130" height="20" rx="4" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1" />
              <text x="10" y="13" fill="#e0e7ff" fontSize="7.5">Credit card & reports</text>

              <rect x="0" y="26" width="130" height="20" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="1" />
              <text x="10" y="39" fill="#94a3b8" fontSize="7.5">Mortgages & loans</text>

              <rect x="0" y="52" width="130" height="20" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="1" />
              <text x="10" y="65" fill="#94a3b8" fontSize="7.5">Bank account service</text>

              <rect x="0" y="78" width="130" height="20" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="1" />
              <text x="10" y="91" fill="#94a3b8" fontSize="7.5">Debt collection</text>

              <rect x="0" y="104" width="130" height="20" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="1" />
              <text x="10" y="117" fill="#94a3b8" fontSize="7.5">Money transfers</text>
            </g>
          </svg>
        </div>
      );

    case 'ner-nlp':
      return (
        <div className={`relative w-full h-full bg-gradient-to-br from-slate-950 via-emerald-950/40 to-slate-900 overflow-hidden flex items-center justify-center p-6 ${className}`}>
          <svg viewBox="0 0 400 220" className="w-full h-full max-h-52 drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Entity Chips */}
            <g transform="translate(45, 50)">
              <rect x="0" y="0" width="85" height="28" rx="6" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.2" />
              <circle cx="14" cy="14" r="5" fill="#3b82f6" />
              <text x="26" y="17" fill="#93c5fd" fontSize="8.5" fontWeight="bold">PER (Person)</text>

              <rect x="100" y="0" width="100" height="28" rx="6" fill="#1e293b" stroke="#10b981" strokeWidth="1.2" />
              <circle cx="114" cy="14" r="5" fill="#10b981" />
              <text x="126" y="17" fill="#6ee7b7" fontSize="8.5" fontWeight="bold">ORG (Organization)</text>

              <rect x="215" y="0" width="95" height="28" rx="6" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.2" />
              <circle cx="229" cy="14" r="5" fill="#f59e0b" />
              <text x="241" y="17" fill="#fcd34d" fontSize="8.5" fontWeight="bold">LOC (Location)</text>
            </g>

            {/* Sequence Representation */}
            <rect x="45" y="95" width="310" height="42" rx="6" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
            <text x="60" y="119" fill="#94a3b8" fontSize="9">John [PER] visited Apple HQ [ORG] in California [LOC]</text>

            {/* DistilBERT Score */}
            <rect x="120" y="150" width="160" height="34" rx="6" fill="#064e3b" fillOpacity="0.4" stroke="#10b981" strokeWidth="1.2" />
            <text x="200" y="165" fill="#a7f3d0" fontSize="8.5" textAnchor="middle" fontWeight="600">DistilBERT Test Benchmark</text>
            <text x="200" y="177" fill="#ffffff" fontSize="9.5" textAnchor="middle" fontWeight="bold">Acc: 97.95% | F1: 89.92%</text>
          </svg>
        </div>
      );

    case 'dcgan-face':
      return (
        <div className={`relative w-full h-full bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 overflow-hidden flex items-center justify-center p-6 ${className}`}>
          <svg viewBox="0 0 400 220" className="w-full h-full max-h-52 drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Latent Vector Z */}
            <rect x="30" y="80" width="55" height="60" rx="6" fill="#1e293b" stroke="#8b5cf6" strokeWidth="1.5" />
            <text x="57" y="105" fill="#c4b5fd" fontSize="9" textAnchor="middle" fontWeight="bold">Noise [z]</text>
            <text x="57" y="120" fill="#94a3b8" fontSize="7.5" textAnchor="middle">100-dim</text>

            {/* Arrow to Generator */}
            <path d="M 85 110 L 115 110" stroke="#8b5cf6" strokeWidth="2" />

            {/* Generator */}
            <polygon points="115,70 185,50 185,170 115,150" fill="#312e81" fillOpacity="0.7" stroke="#a78bfa" strokeWidth="1.5" />
            <text x="150" y="105" fill="#ffffff" fontSize="8.5" textAnchor="middle" fontWeight="bold">GENERATOR</text>
            <text x="150" y="118" fill="#c4b5fd" fontSize="7" textAnchor="middle">Conv2DTranspose</text>

            {/* Synthetic Face Output */}
            <rect x="205" y="70" width="70" height="75" rx="6" fill="#090d16" stroke="#ec4899" strokeWidth="1.5" />
            <circle cx="240" cy="100" r="18" fill="#1e293b" stroke="#f472b6" strokeWidth="1.2" />
            <text x="240" y="133" fill="#fbcfe8" fontSize="7.5" textAnchor="middle">128×128×3</text>

            {/* Arrow to Discriminator */}
            <path d="M 275 110 L 295 110" stroke="#ec4899" strokeWidth="2" />

            {/* Discriminator */}
            <polygon points="295,50 365,70 365,150 295,170" fill="#4c0519" fillOpacity="0.7" stroke="#fb7185" strokeWidth="1.5" />
            <text x="330" y="105" fill="#ffffff" fontSize="8.5" textAnchor="middle" fontWeight="bold">DISCRIMINATOR</text>
            <text x="330" y="118" fill="#fda4af" fontSize="7" textAnchor="middle">Real vs Fake</text>
          </svg>
        </div>
      );

    case 'standard-rag':
      return (
        <div className={`relative w-full h-full bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden flex items-center justify-center p-6 ${className}`}>
          <svg viewBox="0 0 400 220" className="w-full h-full max-h-52 drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Documents */}
            <rect x="35" y="75" width="60" height="70" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.2" />
            <text x="65" y="105" fill="#7dd3fc" fontSize="8.5" textAnchor="middle" fontWeight="bold">Course Docs</text>
            <text x="65" y="120" fill="#94a3b8" fontSize="7.5" textAnchor="middle">DOCX/TXT/CSV</text>

            {/* FAISS Vector Store */}
            <path d="M 95 110 L 135 110" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
            <rect x="135" y="65" width="80" height="90" rx="8" fill="#090d16" stroke="#2563eb" strokeWidth="1.5" />
            <circle cx="175" cy="95" r="16" fill="#1d4ed8" fillOpacity="0.3" stroke="#60a5fa" strokeWidth="1.5" />
            <text x="175" y="99" fill="#93c5fd" fontSize="8" textAnchor="middle" fontWeight="bold">FAISS</text>
            <text x="175" y="132" fill="#94a3b8" fontSize="7.5" textAnchor="middle">Vector Index</text>

            {/* Retrieval to Gemini */}
            <path d="M 215 110 L 255 110" stroke="#60a5fa" strokeWidth="2" />
            <rect x="255" y="60" width="105" height="100" rx="8" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1.5" />
            <text x="307" y="88" fill="#e0e7ff" fontSize="9" textAnchor="middle" fontWeight="bold">Google Gemini</text>
            <rect x="270" y="102" width="75" height="18" rx="4" fill="#312e81" stroke="#a5b4fc" strokeWidth="1" />
            <text x="307" y="114" fill="#c7d2fe" fontSize="7.5" textAnchor="middle">Grounded Answer</text>
            <text x="307" y="140" fill="#38bdf8" fontSize="7" textAnchor="middle">+ Source Citations</text>
          </svg>
        </div>
      );

    case 'corrective-rag':
      return (
        <div className={`relative w-full h-full bg-gradient-to-br from-slate-950 via-teal-950 to-slate-900 overflow-hidden flex items-center justify-center p-6 ${className}`}>
          <svg viewBox="0 0 400 220" className="w-full h-full max-h-52 drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Retrieval Block */}
            <rect x="35" y="70" width="75" height="80" rx="6" fill="#1e293b" stroke="#14b8a6" strokeWidth="1.5" />
            <text x="72" y="105" fill="#5eead4" fontSize="8" textAnchor="middle" fontWeight="bold">Retrieved</text>
            <text x="72" y="120" fill="#94a3b8" fontSize="7" textAnchor="middle">Context</text>

            {/* Evaluator Diamond */}
            <path d="M 110 110 L 145 110" stroke="#14b8a6" strokeWidth="2" />
            <polygon points="180,75 215,110 180,145 145,110" fill="#0f766e" fillOpacity="0.4" stroke="#2dd4bf" strokeWidth="1.5" />
            <text x="180" y="108" fill="#ccfbf1" fontSize="7.5" textAnchor="middle" fontWeight="bold">Context</text>
            <text x="180" y="118" fill="#5eead4" fontSize="7" textAnchor="middle">Evaluator</text>

            {/* Loopback Query Rewriter */}
            <path d="M 180 75 L 180 45 L 72 45 L 72 70" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
            <rect x="95" y="35" width="70" height="18" rx="3" fill="#78350f" stroke="#fbbf24" strokeWidth="1" />
            <text x="130" y="47" fill="#fef3c7" fontSize="7" textAnchor="middle" fontWeight="bold">Query Rewrite</text>

            {/* Output to Gemini */}
            <path d="M 215 110 L 260 110" stroke="#2dd4bf" strokeWidth="2" />
            <rect x="260" y="65" width="105" height="90" rx="8" fill="#090d16" stroke="#2dd4bf" strokeWidth="1.5" />
            <text x="312" y="98" fill="#f0fdfa" fontSize="8.5" textAnchor="middle" fontWeight="bold">Google Gemini</text>
            <text x="312" y="115" fill="#5eead4" fontSize="7" textAnchor="middle">Refined Generation</text>
            <text x="312" y="132" fill="#94a3b8" fontSize="7" textAnchor="middle">Accurate Citations</text>
          </svg>
        </div>
      );

    case 'agentic-rag':
      return (
        <div className={`relative w-full h-full bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 overflow-hidden flex items-center justify-center p-6 ${className}`}>
          <svg viewBox="0 0 400 220" className="w-full h-full max-h-52 drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Agent Core */}
            <circle cx="120" cy="110" r="38" fill="#1e1b4b" stroke="#818cf8" strokeWidth="2" />
            <text x="120" y="105" fill="#ffffff" fontSize="9" textAnchor="middle" fontWeight="bold">Agentic Core</text>
            <text x="120" y="119" fill="#a5b4fc" fontSize="7.5" textAnchor="middle">LangChain+Gemini</text>

            {/* Dynamic Tools Connectors */}
            <line x1="155" y1="90" x2="220" y2="55" stroke="#6366f1" strokeWidth="1.5" />
            <line x1="158" y1="102" x2="220" y2="90" stroke="#6366f1" strokeWidth="1.5" />
            <line x1="158" y1="118" x2="220" y2="128" stroke="#6366f1" strokeWidth="1.5" />
            <line x1="155" y1="130" x2="220" y2="165" stroke="#6366f1" strokeWidth="1.5" />

            {/* Dynamic Tools List */}
            <g transform="translate(220, 42)">
              <rect x="0" y="0" width="135" height="24" rx="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
              <text x="12" y="15" fill="#7dd3fc" fontSize="7.5" fontWeight="600">Tool: Semantic Search (Chroma)</text>

              <rect x="0" y="34" width="135" height="24" rx="4" fill="#0f172a" stroke="#a855f7" strokeWidth="1" />
              <text x="12" y="49" fill="#d8b4fe" fontSize="7.5" fontWeight="600">Tool: Summarization</text>

              <rect x="0" y="68" width="135" height="24" rx="4" fill="#0f172a" stroke="#34d399" strokeWidth="1" />
              <text x="12" y="83" fill="#6ee7b7" fontSize="7.5" fontWeight="600">Tool: Document Compare</text>

              <rect x="0" y="102" width="135" height="24" rx="4" fill="#0f172a" stroke="#fbbf24" strokeWidth="1" />
              <text x="12" y="117" fill="#fde68a" fontSize="7.5" fontWeight="600">Tool: Calculation & Fallbacks</text>
            </g>
          </svg>
        </div>
      );

    case 'multi-agent':
      return (
        <div className={`relative w-full h-full bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden flex items-center justify-center p-6 ${className}`}>
          <svg viewBox="0 0 400 220" className="w-full h-full max-h-52 drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* CrewAI Orchestrator Hub */}
            <circle cx="200" cy="110" r="26" fill="#1e1b4b" stroke="#60a5fa" strokeWidth="1.8" />
            <text x="200" y="108" fill="#93c5fd" fontSize="7.5" textAnchor="middle" fontWeight="bold">CrewAI</text>
            <text x="200" y="118" fill="#e0e7ff" fontSize="6.5" textAnchor="middle">Gemini</text>

            {/* Connecting Lines */}
            <line x1="200" y1="84" x2="105" y2="58" stroke="#3b82f6" strokeWidth="1.5" />
            <line x1="200" y1="84" x2="295" y2="58" stroke="#3b82f6" strokeWidth="1.5" />
            <line x1="200" y1="136" x2="105" y2="162" stroke="#3b82f6" strokeWidth="1.5" />
            <line x1="200" y1="136" x2="295" y2="162" stroke="#3b82f6" strokeWidth="1.5" />

            {/* 4 Specialized Agents */}
            <g transform="translate(45, 40)">
              <rect x="0" y="0" width="110" height="34" rx="6" fill="#090d16" stroke="#38bdf8" strokeWidth="1.2" />
              <text x="55" y="16" fill="#bae6fd" fontSize="8" textAnchor="middle" fontWeight="bold">Search Agent</text>
              <text x="55" y="27" fill="#64748b" fontSize="6.5" textAnchor="middle">Tavily Search API</text>
            </g>

            <g transform="translate(245, 40)">
              <rect x="0" y="0" width="110" height="34" rx="6" fill="#090d16" stroke="#a855f7" strokeWidth="1.2" />
              <text x="55" y="16" fill="#e9d5ff" fontSize="8" textAnchor="middle" fontWeight="bold">Scraping Agent</text>
              <text x="55" y="27" fill="#64748b" fontSize="6.5" textAnchor="middle">ScrapeGraphAI</text>
            </g>

            <g transform="translate(45, 145)">
              <rect x="0" y="0" width="110" height="34" rx="6" fill="#090d16" stroke="#34d399" strokeWidth="1.2" />
              <text x="55" y="16" fill="#a7f3d0" fontSize="8" textAnchor="middle" fontWeight="bold">Comparison Agent</text>
              <text x="55" y="27" fill="#64748b" fontSize="6.5" textAnchor="middle">Specs & Compliance</text>
            </g>

            <g transform="translate(245, 145)">
              <rect x="0" y="0" width="110" height="34" rx="6" fill="#090d16" stroke="#fbbf24" strokeWidth="1.2" />
              <text x="55" y="16" fill="#fef08a" fontSize="8" textAnchor="middle" fontWeight="bold">Report Agent</text>
              <text x="55" y="27" fill="#64748b" fontSize="6.5" textAnchor="middle">HTML Procurement Dossier</text>
            </g>
          </svg>
        </div>
      );

    default:
      return (
        <div className={`relative w-full h-full bg-gradient-to-br from-slate-900 to-indigo-950 flex items-center justify-center p-6 ${className}`}>
          <div className="text-center">
            <span className="text-sm font-semibold text-blue-400">{title}</span>
          </div>
        </div>
      );
  }
}
