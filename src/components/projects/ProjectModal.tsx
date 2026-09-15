'use client';

import React, { useEffect } from 'react';
import { Project } from '@/types';
import { ProjectVisual } from './ProjectVisual';
import { X, ExternalLink, CheckCircle2, Target, Cpu, Layers, Award, Terminal } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-3xl my-8 overflow-hidden rounded-3xl bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-slate-800 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/60 hover:bg-slate-900 text-slate-300 hover:text-white backdrop-blur-md border border-slate-700/60 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Visual Banner */}
        <div className="relative aspect-[21/9] sm:aspect-[2.4/1] w-full overflow-hidden border-b border-slate-200 dark:border-slate-800">
          <ProjectVisual imageKey={project.imageKey} title={project.title} />
          
          <div className="absolute bottom-4 left-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/90 text-white backdrop-blur-md shadow-md">
              {project.category}
            </span>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-7">
          {/* Header Title & Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
                {project.title}
              </h2>
              {project.keyMetric && (
                <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
                  {project.keyMetric}
                </p>
              )}
            </div>

            {/* Quick Action Buttons */}
            <div className="flex items-center gap-3 shrink-0">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-colors shadow-sm cursor-pointer"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>

          {/* Overview */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-500" />
              <span>Overview</span>
            </h3>
            <p className="mt-2 text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Objective */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <Target className="w-4 h-4 text-purple-500" />
              <span>Objective</span>
            </h3>
            <p className="mt-2 text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.objective}
            </p>
          </div>

          {/* Technical Approach */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-emerald-500" />
              <span>Technical Approach</span>
            </h3>
            <p className="mt-2 text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.approach}
            </p>
          </div>

          {/* Key Results & Metrics */}
          {((project.metrics && project.metrics.length > 0) || project.results) && (
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Results & Performance Metrics</span>
              </h3>
              {project.results && (
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.results}
                </p>
              )}
              {project.metrics && project.metrics.length > 0 && (
                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.metrics.map((metric, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm font-medium text-slate-800 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Architecture Details (if available) */}
          {project.architectureDetails && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-500" />
                <span>System Architecture Breakdown</span>
              </h3>
              <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                {project.architectureDetails.bronzeLayer && (
                  <div className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/20">
                    <span className="font-bold text-amber-500 uppercase tracking-wide">Bronze Layer</span>
                    <ul className="mt-1.5 space-y-1 text-slate-600 dark:text-slate-300">
                      {project.architectureDetails.bronzeLayer.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.architectureDetails.silverLayer && (
                  <div className="p-3 rounded-xl bg-slate-500/5 border border-slate-500/20">
                    <span className="font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Silver Layer</span>
                    <ul className="mt-1.5 space-y-1 text-slate-600 dark:text-slate-300">
                      {project.architectureDetails.silverLayer.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.architectureDetails.goldLayer && (
                  <div className="p-3 rounded-xl bg-yellow-500/5 border border-yellow-500/20">
                    <span className="font-bold text-yellow-600 dark:text-yellow-400 uppercase tracking-wide">Gold Layer</span>
                    <ul className="mt-1.5 space-y-1 text-slate-600 dark:text-slate-300">
                      {project.architectureDetails.goldLayer.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.architectureDetails.agents && (
                  <div className="p-3 rounded-xl bg-blue-500/5 border border-blue-500/20 md:col-span-2">
                    <span className="font-bold text-blue-500 uppercase tracking-wide">Autonomous Agents</span>
                    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.architectureDetails.agents.map((agent, i) => (
                        <div key={i} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/60">
                          <span className="font-semibold text-slate-900 dark:text-slate-100">{agent.name}:</span>
                          <span className="ml-1 text-slate-600 dark:text-slate-400">{agent.role}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {project.architectureDetails.pipelineSteps && (
                  <div className="p-3 rounded-xl bg-purple-500/5 border border-purple-500/20 md:col-span-2">
                    <span className="font-bold text-purple-500 uppercase tracking-wide">Pipeline Execution Flow</span>
                    <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[11px]">
                      {project.architectureDetails.pipelineSteps.map((step, i) => (
                        <React.Fragment key={i}>
                          <span className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium">
                            {step}
                          </span>
                          {i < (project.architectureDetails?.pipelineSteps?.length ?? 0) - 1 && (
                            <span className="text-slate-400 font-bold">→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Main Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Key Features & Capabilities
              </h3>
              <ul className="mt-3 space-y-2">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Deployment */}
          {project.deployment && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-500" />
                <span>Deployment & Runtime</span>
              </h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.deployment}
              </p>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Technologies & Frameworks
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
          >
            Close
          </button>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm cursor-pointer"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View on GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
