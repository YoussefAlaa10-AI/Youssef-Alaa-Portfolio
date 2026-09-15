'use client';

import React from 'react';
import { Project } from '@/types';
import { ProjectVisual } from './ProjectVisual';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col rounded-2xl bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-slate-800/80 shadow-sm hover:shadow-xl dark:hover:border-blue-500/40 transition-all duration-300 overflow-hidden hover:-translate-y-1">
      {/* Visual Header / Rounded Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-slate-100 dark:border-slate-800/60">
        <ProjectVisual imageKey={project.imageKey} title={project.title} className="transition-transform duration-500 group-hover:scale-105" />
        
        {/* Category Pill Tag */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-900/80 text-blue-300 backdrop-blur-md border border-blue-500/20 shadow-sm">
            {project.category}
          </span>
        </div>

        {/* GitHub link indicator if available */}
        {project.githubUrl && (
          <div className="absolute top-3 right-3 opacity-80 hover:opacity-100 transition-opacity">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-1.5 rounded-full bg-slate-900/80 text-slate-200 hover:text-white backdrop-blur-md border border-slate-700/60 inline-flex items-center justify-center transition-colors"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-1 p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="mt-2.5 text-sm text-slate-600 dark:text-slate-400 line-clamp-3 flex-1 leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Technology Badges */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Optional Key Metric / Result Highlight */}
        {project.keyMetric && (
          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 truncate">
              {project.keyMetric}
            </span>
          </div>
        )}

        {/* Action Button: View Project */}
        <div className="mt-5">
          <button
            onClick={() => onOpenDetails(project)}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-slate-100 hover:bg-blue-600 hover:text-white dark:bg-slate-800/90 dark:text-slate-200 dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-200 border border-slate-200 dark:border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 cursor-pointer"
          >
            <span>View Project</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
