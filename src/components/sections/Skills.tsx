// 'use client';

// import React, { useState } from 'react';
// import { skillsData } from '@/data/skills';
// import {
//   BarChart3,
//   Cpu,
//   BrainCircuit,
//   ScanFace,
//   MessageSquareCode,
//   Sparkles,
//   Rocket,
//   Terminal,
//   Layers,
//   Database,
//   Eye,
//   Flame,
//   LineChart,
//   PieChart,
//   Table,
//   Calculator,
//   Sliders,
//   Play,
//   GitBranch,
//   Code2,
//   Globe,
//   Binary,
//   Share2,
//   Zap,
//   BookOpen,
//   FileSpreadsheet,
//   Focus,
//   Footprints,
//   UserCheck,
//   Star,
//   Users,
//   Search,
//   Activity,
//   Network
// } from 'lucide-react';
// import { GithubIcon } from '@/components/ui/Icons';

// export function Skills() {
//   const [activeCategoryId, setActiveCategoryId] = useState<string>('all');

//   // Vibrant accent palette for the curved left border exactly matching the screenshot
//   const borderColors = [
//     { border: 'border-l-cyan-500', text: 'text-cyan-500', bg: 'bg-cyan-500/10' },
//     { border: 'border-l-rose-500', text: 'text-rose-500', bg: 'bg-rose-500/10' },
//     { border: 'border-l-orange-500', text: 'text-orange-500', bg: 'bg-orange-500/10' },
//     { border: 'border-l-pink-500', text: 'text-pink-500', bg: 'bg-pink-500/10' },
//     { border: 'border-l-amber-500', text: 'text-amber-500', bg: 'bg-amber-500/10' },
//     { border: 'border-l-yellow-500', text: 'text-yellow-500', bg: 'bg-yellow-500/10' },
//     { border: 'border-l-emerald-500', text: 'text-emerald-500', bg: 'bg-emerald-500/10' },
//     { border: 'border-l-blue-500', text: 'text-blue-500', bg: 'bg-blue-500/10' },
//     { border: 'border-l-purple-500', text: 'text-purple-500', bg: 'bg-purple-500/10' },
//     { border: 'border-l-indigo-500', text: 'text-indigo-500', bg: 'bg-indigo-500/10' },
//     { border: 'border-l-teal-500', text: 'text-teal-500', bg: 'bg-teal-500/10' },
//     { border: 'border-l-sky-500', text: 'text-sky-500', bg: 'bg-sky-500/10' },
//   ];

//   const getSkillIcon = (skill: string) => {
//     const s = skill.toLowerCase();
//     if (s.includes('python')) return <Terminal className="w-6 h-6 text-blue-500" />;
//     if (s.includes('pytorch')) return <Flame className="w-6 h-6 text-rose-500" />;
//     if (s.includes('tensorflow')) return <Network className="w-6 h-6 text-orange-500" />;
//     if (s.includes('keras')) return <Layers className="w-6 h-6 text-red-500" />;
//     if (s.includes('scikit')) return <Sliders className="w-6 h-6 text-amber-500" />;
//     if (s.includes('pandas')) return <Table className="w-6 h-6 text-purple-500" />;
//     if (s.includes('numpy')) return <Calculator className="w-6 h-6 text-blue-500" />;
//     if (s.includes('matplotlib') || s.includes('seaborn')) return <LineChart className="w-6 h-6 text-teal-500" />;
//     if (s.includes('plotly')) return <PieChart className="w-6 h-6 text-cyan-500" />;
//     if (s.includes('power bi')) return <BarChart3 className="w-6 h-6 text-yellow-500" />;
//     if (s.includes('excel')) return <FileSpreadsheet className="w-6 h-6 text-emerald-500" />;
//     if (s.includes('opencv')) return <Eye className="w-6 h-6 text-cyan-500" />;
//     if (s.includes('yolo')) return <Focus className="w-6 h-6 text-green-500" />;
//     if (s.includes('mediapipe')) return <UserCheck className="w-6 h-6 text-blue-400" />;
//     if (s.includes('bytetrack')) return <Footprints className="w-6 h-6 text-indigo-500" />;
//     if (s.includes('transformers') || s.includes('distilbert')) return <Zap className="w-6 h-6 text-amber-500" />;
//     if (s.includes('hugging face')) return <Sparkles className="w-6 h-6 text-yellow-500" />;
//     if (s.includes('gemini')) return <Star className="w-6 h-6 text-blue-500" />;
//     if (s.includes('langchain')) return <Network className="w-6 h-6 text-teal-500" />;
//     if (s.includes('crewai')) return <Users className="w-6 h-6 text-purple-500" />;
//     if (s.includes('rag') || s.includes('vector') || s.includes('chromadb') || s.includes('faiss')) return <Database className="w-6 h-6 text-violet-500" />;
//     if (s.includes('nltk')) return <BookOpen className="w-6 h-6 text-sky-500" />;
//     if (s.includes('glove')) return <Binary className="w-6 h-6 text-indigo-400" />;
//     if (s.includes('sql')) return <Database className="w-6 h-6 text-blue-600" />;
//     if (s.includes('git') && !s.includes('github')) return <GitBranch className="w-6 h-6 text-orange-600" />;
//     if (s.includes('github')) return <GithubIcon className="w-6 h-6 text-slate-700 dark:text-slate-300" />;
//     if (s.includes('vs code')) return <Code2 className="w-6 h-6 text-blue-500" />;
//     if (s.includes('c++')) return <Terminal className="w-6 h-6 text-indigo-600" />;
//     if (s.includes('streamlit')) return <Play className="w-6 h-6 text-rose-500" />;
//     if (s.includes('gradio')) return <Sliders className="w-6 h-6 text-orange-500" />;
//     if (s.includes('scraping')) return <Globe className="w-6 h-6 text-amber-600" />;
//     if (s.includes('cnn') || s.includes('rnn') || s.includes('lstm') || s.includes('gru') || s.includes('bilstm')) return <BrainCircuit className="w-6 h-6 text-purple-500" />;
//     if (s.includes('xgboost')) return <Cpu className="w-6 h-6 text-emerald-500" />;
//     return <Cpu className="w-6 h-6 text-blue-500" />;
//   };

//   const getCategoryIcon = (id: string) => {
//     switch (id) {
//       case 'data-analysis': return <BarChart3 className="w-4 h-4" />;
//       case 'machine-learning': return <Cpu className="w-4 h-4" />;
//       case 'deep-learning': return <BrainCircuit className="w-4 h-4" />;
//       case 'computer-vision': return <ScanFace className="w-4 h-4" />;
//       case 'nlp': return <MessageSquareCode className="w-4 h-4" />;
//       case 'generative-ai': return <Sparkles className="w-4 h-4" />;
//       case 'deployment': return <Rocket className="w-4 h-4" />;
//       case 'tools-development': return <Terminal className="w-4 h-4" />;
//       default: return <Layers className="w-4 h-4" />;
//     }
//   };

//   const displayedSkills = activeCategoryId === 'all'
//     ? skillsData.flatMap((cat) => cat.skills.map((skill) => ({ skill, category: cat.name })))
//     : (skillsData.find((cat) => cat.id === activeCategoryId)?.skills.map((skill) => ({
//         skill,
//         category: skillsData.find((cat) => cat.id === activeCategoryId)?.name || ''
//       })) || []);

//   // Deduplicate if all is selected
//   const uniqueSkills = activeCategoryId === 'all'
//     ? Array.from(new Set(displayedSkills.map(s => s.skill))).map(name => ({
//         skill: name,
//         category: displayedSkills.find(s => s.skill === name)?.category || ''
//       }))
//     : displayedSkills;

//   return (
//     <section id="skills" className="relative py-24 sm:py-32 scroll-mt-16 bg-slate-50/50 dark:bg-slate-950/40">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Heading */}
//         <div className="text-center max-w-3xl mx-auto">
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 mb-3">
//             <Layers className="w-3.5 h-3.5" />
//             <span>Technical Capabilities</span>
//           </div>
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
//             Skills & Technology Stack
//           </h2>
//           <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
//             Specialized toolkits, machine learning frameworks, and analytical ecosystems.
//           </p>
//         </div>

//         {/* Top Category Tabs (matching reference style) */}
//         <div className="mt-10 flex justify-center">
//           <div className="inline-flex flex-wrap items-center justify-center gap-2 p-2 rounded-2xl bg-white dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-sm max-w-full">
//             <button
//               onClick={() => setActiveCategoryId('all')}
//               className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
//                 activeCategoryId === 'all'
//                   ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
//                   : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
//               }`}
//             >
//               <BrainCircuit className="w-4 h-4" />
//               <span>All Skills</span>
//             </button>

//             {skillsData.map((cat) => {
//               const isActive = activeCategoryId === cat.id;
//               return (
//                 <button
//                   key={cat.id}
//                   onClick={() => setActiveCategoryId(cat.id)}
//                   className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
//                     isActive
//                       ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 font-semibold'
//                       : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
//                   }`}
//                 >
//                   {getCategoryIcon(cat.id)}
//                   <span>{cat.name}</span>
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* Skills Cards Grid: rounded cards with colored curved left border, icon on top, skill name below */}
//         <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5">
//           {uniqueSkills.map((item, index) => {
//             const colorScheme = borderColors[index % borderColors.length];
//             return (
//               <div
//                 key={item.skill}
//                 className={`relative flex flex-col items-center justify-center p-5 rounded-2xl bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-lg dark:hover:border-slate-700 transition-all duration-200 hover:-translate-y-1 group border-l-[3.5px] ${colorScheme.border}`}
//               >
//                 {/* Centered Icon */}
//                 <div className="mb-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 group-hover:scale-110 transition-transform duration-200">
//                   {getSkillIcon(item.skill)}
//                 </div>

//                 {/* Skill Name */}
//                 <span className="text-xs sm:text-sm font-bold text-center text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
//                   {item.skill}
//                 </span>

//                 {/* Subtitle Category Pill */}
//                 <span className="mt-1.5 text-[10px] font-medium text-slate-400 dark:text-slate-500 text-center truncate max-w-full">
//                   {item.category}
//                 </span>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import React, { useEffect, useState } from 'react';
import { skillsData } from '@/data/skills';
import {
  BarChart3,
  Cpu,
  BrainCircuit,
  ScanFace,
  MessageSquareCode,
  Sparkles,
  Rocket,
  Terminal,
  Layers,
  Database,
  Eye,
  Flame,
  LineChart,
  PieChart,
  Table,
  Calculator,
  Sliders,
  Play,
  GitBranch,
  Code2,
  Globe,
  Binary,
  Zap,
  BookOpen,
  FileSpreadsheet,
  Focus,
  Footprints,
  UserCheck,
  Star,
  Users,
  ChevronLeft,
  ChevronRight,
  Network
} from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';

export function Skills() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');
  const [currentColumn, setCurrentColumn] = useState(0);

  // Vibrant accent palette for the curved left border exactly matching the screenshot
  const borderColors = [
    { border: 'border-l-cyan-500', text: 'text-cyan-500', bg: 'bg-cyan-500/10' },
    { border: 'border-l-rose-500', text: 'text-rose-500', bg: 'bg-rose-500/10' },
    { border: 'border-l-orange-500', text: 'text-orange-500', bg: 'bg-orange-500/10' },
    { border: 'border-l-pink-500', text: 'text-pink-500', bg: 'bg-pink-500/10' },
    { border: 'border-l-amber-500', text: 'text-amber-500', bg: 'bg-amber-500/10' },
    { border: 'border-l-yellow-500', text: 'text-yellow-500', bg: 'bg-yellow-500/10' },
    { border: 'border-l-emerald-500', text: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { border: 'border-l-blue-500', text: 'text-blue-500', bg: 'bg-blue-500/10' },
    { border: 'border-l-purple-500', text: 'text-purple-500', bg: 'bg-purple-500/10' },
    { border: 'border-l-indigo-500', text: 'text-indigo-500', bg: 'bg-indigo-500/10' },
    { border: 'border-l-teal-500', text: 'text-teal-500', bg: 'bg-teal-500/10' },
    { border: 'border-l-sky-500', text: 'text-sky-500', bg: 'bg-sky-500/10' },
  ];

  const getSkillIcon = (skill: string) => {
    const s = skill.toLowerCase();

    if (s.includes('python')) return <Terminal className="w-6 h-6 text-blue-500" />;
    if (s.includes('pytorch')) return <Flame className="w-6 h-6 text-rose-500" />;
    if (s.includes('tensorflow')) return <Network className="w-6 h-6 text-orange-500" />;
    if (s.includes('keras')) return <Layers className="w-6 h-6 text-red-500" />;
    if (s.includes('scikit')) return <Sliders className="w-6 h-6 text-amber-500" />;
    if (s.includes('pandas')) return <Table className="w-6 h-6 text-purple-500" />;
    if (s.includes('numpy')) return <Calculator className="w-6 h-6 text-blue-500" />;
    if (s.includes('matplotlib') || s.includes('seaborn')) return <LineChart className="w-6 h-6 text-teal-500" />;
    if (s.includes('plotly')) return <PieChart className="w-6 h-6 text-cyan-500" />;
    if (s.includes('power bi')) return <BarChart3 className="w-6 h-6 text-yellow-500" />;
    if (s.includes('excel')) return <FileSpreadsheet className="w-6 h-6 text-emerald-500" />;
    if (s.includes('opencv')) return <Eye className="w-6 h-6 text-cyan-500" />;
    if (s.includes('yolo')) return <Focus className="w-6 h-6 text-green-500" />;
    if (s.includes('mediapipe')) return <UserCheck className="w-6 h-6 text-blue-400" />;
    if (s.includes('bytetrack')) return <Footprints className="w-6 h-6 text-indigo-500" />;
    if (s.includes('transformers') || s.includes('distilbert')) return <Zap className="w-6 h-6 text-amber-500" />;
    if (s.includes('hugging face')) return <Sparkles className="w-6 h-6 text-yellow-500" />;
    if (s.includes('gemini')) return <Star className="w-6 h-6 text-blue-500" />;
    if (s.includes('langchain')) return <Network className="w-6 h-6 text-teal-500" />;
    if (s.includes('crewai')) return <Users className="w-6 h-6 text-purple-500" />;
    if (s.includes('rag') || s.includes('vector') || s.includes('chromadb') || s.includes('faiss')) {
      return <Database className="w-6 h-6 text-violet-500" />;
    }
    if (s.includes('nltk')) return <BookOpen className="w-6 h-6 text-sky-500" />;
    if (s.includes('glove')) return <Binary className="w-6 h-6 text-indigo-400" />;
    if (s.includes('sql')) return <Database className="w-6 h-6 text-blue-600" />;
    if (s.includes('git') && !s.includes('github')) return <GitBranch className="w-6 h-6 text-orange-600" />;
    if (s.includes('github')) return <GithubIcon className="w-6 h-6 text-slate-700 dark:text-slate-300" />;
    if (s.includes('vs code')) return <Code2 className="w-6 h-6 text-blue-500" />;
    if (s.includes('c++')) return <Terminal className="w-6 h-6 text-indigo-600" />;
    if (s.includes('streamlit')) return <Play className="w-6 h-6 text-rose-500" />;
    if (s.includes('gradio')) return <Sliders className="w-6 h-6 text-orange-500" />;
    if (s.includes('scraping')) return <Globe className="w-6 h-6 text-amber-600" />;
    if (s.includes('cnn') || s.includes('rnn') || s.includes('lstm') || s.includes('gru') || s.includes('bilstm')) {
      return <BrainCircuit className="w-6 h-6 text-purple-500" />;
    }
    if (s.includes('xgboost')) return <Cpu className="w-6 h-6 text-emerald-500" />;

    return <Cpu className="w-6 h-6 text-blue-500" />;
  };

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'data-analysis': return <BarChart3 className="w-4 h-4" />;
      case 'machine-learning': return <Cpu className="w-4 h-4" />;
      case 'deep-learning': return <BrainCircuit className="w-4 h-4" />;
      case 'computer-vision': return <ScanFace className="w-4 h-4" />;
      case 'nlp': return <MessageSquareCode className="w-4 h-4" />;
      case 'generative-ai': return <Sparkles className="w-4 h-4" />;
      case 'deployment': return <Rocket className="w-4 h-4" />;
      case 'tools-development': return <Terminal className="w-4 h-4" />;
      default: return <Layers className="w-4 h-4" />;
    }
  };

  const displayedSkills = activeCategoryId === 'all'
    ? skillsData.flatMap((cat) =>
        cat.skills.map((skill) => ({
          skill,
          category: cat.name
        }))
      )
    : (skillsData.find((cat) => cat.id === activeCategoryId)?.skills.map((skill) => ({
        skill,
        category: skillsData.find((cat) => cat.id === activeCategoryId)?.name || ''
      })) || []);

  // Deduplicate if all is selected
  const uniqueSkills = activeCategoryId === 'all'
    ? Array.from(new Set(displayedSkills.map(s => s.skill))).map(name => ({
        skill: name,
        category: displayedSkills.find(s => s.skill === name)?.category || ''
      }))
    : displayedSkills;

  // Reset carousel position when changing category
  useEffect(() => {
    setCurrentColumn(0);
  }, [activeCategoryId]);

  /*
   * Create columns of 3 skills.
   *
   * The original order remains row-based:
   *
   * 1  2  3  4
   * 5  6  7  8
   * 9 10 11 12
   *
   * So the columns become:
   *
   * Column 1 -> 1,5,9
   * Column 2 -> 2,6,10
   * Column 3 -> 3,7,11
   * Column 4 -> 4,8,12
   *
   * This allows the carousel to move one complete column
   * (3 skills) at a time.
   */
  const columns: typeof uniqueSkills[] = [];

  for (let col = 0; col < Math.ceil(uniqueSkills.length / 3); col++) {
    const column = [];

    for (let row = 0; row < 4; row++) {
      const index = row * Math.ceil(uniqueSkills.length / 3) + col;

      if (uniqueSkills[index]) {
        column.push(uniqueSkills[index]);
      }
    }

    columns.push(column);
  }

  const visibleColumns = 4;
  const maxColumn = Math.max(0, columns.length - visibleColumns);

  const nextColumn = () => {
    setCurrentColumn(prev =>
      prev >= maxColumn ? 0 : prev + 1
    );
  };

  const previousColumn = () => {
    setCurrentColumn(prev =>
      prev <= 0 ? maxColumn : prev - 1
    );
  };

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 scroll-mt-16 bg-slate-50/50 dark:bg-slate-950/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Skills & Technology Stack
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Specialized toolkits, machine learning frameworks, and analytical ecosystems.
          </p>
        </div>

        {/* Top Category Tabs */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 p-2 rounded-2xl bg-white dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-sm max-w-full">

            <button
              onClick={() => setActiveCategoryId('all')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategoryId === 'all'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <BrainCircuit className="w-4 h-4" />
              <span>All Skills</span>
            </button>

            {skillsData.map((cat) => {
              const isActive = activeCategoryId === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryId(cat.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {getCategoryIcon(cat.id)}
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Carousel */}
        <div className="mt-12 relative">

          {/* Left Arrow */}
          <button
            onClick={previousColumn}
            disabled={columns.length <= visibleColumns}
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-lg flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous skills"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextColumn}
            disabled={columns.length <= visibleColumns}
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-lg flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next skills"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Viewport */}
          <div className="overflow-hidden px-1">

            {/* Track */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentColumn * 25}%)`
              }}
            >

              {columns.map((column, columnIndex) => (
                <div
                  key={columnIndex}
                  className="w-1/4 min-w-[25%] px-1.5"
                >
                  <div className="flex flex-col gap-2.5">

                    {column.map((item, rowIndex) => {
                      const colorScheme =
                        borderColors[
                          (columnIndex * 3 + rowIndex) % borderColors.length
                        ];

                      return (
                        <div
                          key={`${item.skill}-${columnIndex}-${rowIndex}`}
                          className={`relative flex flex-col items-center justify-center p-2.5 rounded-xl bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-lg dark:hover:border-slate-700 transition-all duration-200 hover:-translate-y-1 group border-l-[3.5px] ${colorScheme.border}`}
                        >
                          {/* Centered Icon */}
                          <div className="mb-1.5 p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 group-hover:scale-110 transition-transform duration-200">
                           {getSkillIcon(item.skill)}
                          </div>

                          {/* Skill Name */}
                          <span className="text-xs sm:text-sm font-bold text-center text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                            {item.skill}
                          </span>

                          {/* Subtitle Category Pill */}
                          <span className="mt-1.5 text-[10px] font-medium text-slate-400 dark:text-slate-500 text-center truncate max-w-full">
                            {item.category}
                          </span>
                        </div>
                      );
                    })}

                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}










