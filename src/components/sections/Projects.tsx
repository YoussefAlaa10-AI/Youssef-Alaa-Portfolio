'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Project, ProjectCategory } from '@/types';
import { projectsData } from '@/data/projects';
import { ProjectCard } from '../projects/ProjectCard';
import { ProjectModal } from '../projects/ProjectModal';
import {
  Sparkles,
  BarChart3,
  BrainCircuit,
  ScanFace,
  MessageSquareCode,
  Bot,
  TrendingUp,
  ArrowRight,
  ChevronDown,
  FolderGit2,
  X
} from 'lucide-react';

interface TopicCategoryInfo {
  id: string;
  category: ProjectCategory;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  accentColor: string;
  viewLabel: string;
}

const TOPICS_LIST: TopicCategoryInfo[] = [
  {
    id: 'data-analysis',
    category: 'Data Analysis',
    title: 'Data Analysis',
    description: 'Star Schema Data Warehouse, Medallion Architecture, and interactive Power BI Executive Dashboards.',
    image: '/topics/da_topic.jpg',
    icon: <BarChart3 className="w-6 h-6" />,
    accentColor: 'from-blue-600 to-cyan-500',
    viewLabel: 'Projects'
  },
  {
    id: 'computer-vision',
    category: 'Computer Vision',
    title: 'Computer Vision',
    description: 'YOLOv8 real-time detection, ByteTrack tracking, MediaPipe head pose, and disease classification.',
    image: '/topics/cv_topic.jpg',
    icon: <ScanFace className="w-6 h-6" />,
    accentColor: 'from-cyan-600 to-teal-500',
    viewLabel: 'Projects'
  },
  {
    id: 'nlp',
    category: 'NLP',
    title: 'NLP & Language Models',
    description: 'DistilBERT emotion classification, consumer complaint triage, and sequence labeling NER.',
    image: '/topics/nlp_topic.jpg',
    icon: <MessageSquareCode className="w-6 h-6" />,
    accentColor: 'from-amber-500 to-orange-500',
    viewLabel: 'Projects'
  },
  {
    id: 'generative-ai',
    category: 'Generative AI',
    title: 'Generative AI',
    description: 'Adversarial face synthesis using DCGAN trained on 30,000 CelebA-HQ images with custom GradientTape.',
    image: '/topics/genai_topic.jpg',
    icon: <Sparkles className="w-6 h-6" />,
    accentColor: 'from-purple-600 to-fuchsia-500',
    viewLabel: 'Projects'
  },
  {
    id: 'rag-ai-agents',
    category: 'RAG & AI Agents',
    title: 'RAG & AI Agents',
    description: 'Corrective RAG with query rewriting, dynamic multi-tool knowledge agents, and CrewAI assistants.',
    image: '/topics/rag_topic.jpg',
    icon: <Bot className="w-6 h-6" />,
    accentColor: 'from-indigo-600 to-violet-500',
    viewLabel: 'Projects'
  },
  {
    id: 'machine-learning',
    category: 'Machine Learning',
    title: 'Machine Learning',
    description: 'Predictive modeling, regression, classification, and optimization for structured tabular datasets.',
    image: '/topics/ml_topic.jpg',
    icon: <TrendingUp className="w-6 h-6" />,
    accentColor: 'from-emerald-600 to-green-500',
    viewLabel: 'Projects'
  },
  {
    id: 'deep-learning',
    category: 'Deep Learning',
    title: 'Deep Learning',
    description: 'CNNs, RNNs, LSTMs, Attention mechanisms, and transfer learning architectures.',
    image: '/topics/dl_topic.jpg',
    icon: <BrainCircuit className="w-6 h-6" />,
    accentColor: 'from-rose-600 to-pink-500',
    viewLabel: 'Projects'
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [openTopicId, setOpenTopicId] = useState<string | null>(null);

  const toggleTopic = (id: string) => {
    setOpenTopicId((prev) => (prev === id ? null : id));
  };

  const openTopic = TOPICS_LIST.find((t) => t.id === openTopicId) ?? null;
  const openProjects = openTopic
    ? projectsData.filter((p) => p.category === openTopic.category)
    : [];

  return (
    <section id="projects" className="relative py-24 sm:py-32 scroll-mt-16">
      {/* Background Ambient Glow */}
      <div className="ai-glow-bg top-1/4 left-1/2 -translate-x-1/2 w-[34rem] h-[34rem] bg-blue-600/15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Systems & Project Portfolios</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Specialized Project Domains
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Click any domain to explore its projects. Click a project to view full details.
          </p>
        </div>

        {/* Topic Cards Grid — large card style from screenshot */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOPICS_LIST.map((topic) => {
            const count = projectsData.filter((p) => p.category === topic.category).length;
            const isOpen = openTopicId === topic.id;
            return (
              <button
                key={topic.id}
                onClick={() => toggleTopic(topic.id)}
                className={`group text-left flex flex-col rounded-3xl overflow-hidden border transition-all duration-300 cursor-pointer hover:-translate-y-1 ${
                  isOpen
                    ? 'border-blue-500/60 dark:border-blue-400/40 shadow-lg shadow-blue-500/10 ring-2 ring-blue-500/20'
                    : 'border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700'
                } bg-white dark:bg-[#0c1322]`}
              >
                {/* Large image on top */}
                <div className="relative w-full overflow-hidden bg-slate-100 dark:bg-slate-800" style={{ aspectRatio: '16/10' }}>
                  <Image
                    src={topic.image}
                    alt={topic.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent pointer-events-none" />
                  {/* Active indicator */}
                  {isOpen && (
                    <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center shadow-md">
                      <ChevronDown className="w-3.5 h-3.5 text-white rotate-180" />
                    </div>
                  )}
                </div>

                {/* Content below image */}
                <div className="p-5 flex flex-col flex-1">
                  {/* Icon */}
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${topic.accentColor} flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform duration-200 shadow-sm`}>
                    {topic.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                    {topic.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed flex-1 line-clamp-3">
                    {topic.description}
                  </p>

                  {/* "View N+ Projects →" */}
                  <div className="mt-4 flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400">
                    <span>
                      {count > 0
                        ? `View ${count}+ ${topic.viewLabel}`
                        : 'Coming soon'}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Expanded Projects Panel — slides in below the grid */}
        {openTopic && (
          <div className="mt-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1322] shadow-xl overflow-hidden">
            {/* Panel header */}
            <div className={`flex items-center justify-between px-6 py-4 bg-gradient-to-r ${openTopic.accentColor}`}>
              <div className="flex items-center gap-3 text-white">
                {openTopic.icon}
                <div>
                  <h3 className="font-extrabold text-lg leading-tight">{openTopic.title}</h3>
                  <p className="text-xs text-white/80">{openProjects.length} {openProjects.length === 1 ? 'project' : 'projects'} in this domain</p>
                </div>
              </div>
              <button
                onClick={() => setOpenTopicId(null)}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Projects inside */}
            <div className="p-6">
              {openProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {openProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onOpenDetails={(p) => setSelectedProject(p)}
                    />
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl p-10 text-center bg-slate-50 dark:bg-slate-900/50 border border-dashed border-slate-300 dark:border-slate-700">
                  <div className="mx-auto w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3">
                    <FolderGit2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">Projects coming soon</h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    Implementations in {openTopic.category} are currently being organized for release.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Interactive Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
