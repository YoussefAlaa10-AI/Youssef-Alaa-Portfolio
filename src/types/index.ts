export type ProjectCategory =
  | 'Data Analysis'
  | 'Machine Learning'
  | 'Deep Learning'
  | 'Computer Vision'
  | 'NLP'
  | 'Generative AI'
  | 'RAG & AI Agents';

export interface ProjectArchitecture {
  bronzeLayer?: string[];
  silverLayer?: string[];
  goldLayer?: string[];
  factTable?: string;
  metrics?: string[];
  dimensions?: string[];
  powerBiPages?: string[];
  classes?: string[];
  models?: string[];
  bestModel?: string;
  performance?: Record<string, string>;
  agents?: { name: string; role: string }[];
  pipelineSteps?: string[];
  generatorLayers?: string[];
  discriminatorLayers?: string[];
  datasetInfo?: string;
  modelDetails?: Record<string, { accuracy?: string; f1?: string; recall?: string }>;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  imageKey: string;
  technologies: string[];
  keyMetric?: string;
  metrics?: string[];
  githubUrl?: string; // STRICT: only if provided
  demoUrl?: string;
  overview: string;
  objective: string;
  approach: string;
  results?: string;
  deployment?: string;
  features: string[];
  architectureDetails?: ProjectArchitecture;
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  points: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  faculty: string;
  gpa: string;
  location: string;
  period: string;
  description: string;
}

export type CertIssuer = 'All' | 'NVIDIA' | 'IBM' | 'ITI' | 'Instant' | 'Kaggle' | 'DataCamp';

export interface CertificationItem {
  title: string;
  issuer: string;
  issuerTab: CertIssuer;
  image: string;
  date?: string;
}

export interface KaggleAchievement {
  title: string;
  tier: string;
  currentRank: string;
  totalParticipants: string;
  highestRank: string;
  url: string;
}
