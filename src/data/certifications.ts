export type CertIssuer =
  | 'All'
  | 'NVIDIA'
  | 'IBM'
  | 'ITI'
  | 'Instant'
  | 'Kaggle'
  | 'DataCamp';

export interface CertificationItem {
  title: string;
  issuer: string;
  issuerTab: CertIssuer;
  image: string;
  date?: string;
}

export const certificationsData: CertificationItem[] = [
  // NVIDIA
  {
    title: 'Getting Started with Deep Learning',
    issuer: 'NVIDIA',
    issuerTab: 'NVIDIA',
    image: '/certificates/nvidia_dl.png',
    // date: 'September 8, 2025',
  },

  // IBM SkillsBuild
  {
    title: 'Artificial Intelligence Fundamentals',
    issuer: 'IBM SkillsBuild',
    issuerTab: 'IBM',
    image: '/certificates/ibm_ai_fundamentals.png',
    // date: 'Jan 28, 2026',
  },

  // ITI
  {
    title: 'AI & Machine Learning',
    issuer: 'Information Technology Institute (ITI)',
    issuerTab: 'ITI',
    image: '/certificates/iti.jpg',
    // date: 'Aug – Sep 2025',
  },

  // Instant Software Solutions
  {
    title: 'Artificial Intelligence Diploma',
    issuer: 'Instant Software Solutions',
    issuerTab: 'Instant',
    image: '/certificates/AI Instant.jpeg',
    // date: 'Aug – Sep 2025',
  },
  {
    title: 'Data Analysis Diploma',
    issuer: 'Instant Software Solutions',
    issuerTab: 'Instant',
    image: '/certificates/Data Analysis Instant.png',
    // date: 'Feb 20, 2026',
  },
  {
    title: 'AI Internship (1 Month)',
    issuer: 'Instant Software Solutions',
    issuerTab: 'Instant',
    image: '/certificates/AI Training (1 Month).png',
  },

  // Kaggle
  {
    title: 'Computer Vision',
    issuer: 'Kaggle',
    issuerTab: 'Kaggle',
    image: '/certificates/kaggle_cv.png',
    // date: 'Sep 1, 2025',
  },
  {
    title: 'Intro to Deep Learning',
    issuer: 'Kaggle',
    issuerTab: 'Kaggle',
    image: '/certificates/kaggle_dl.png',
    // date: 'Aug 31, 2025',
  },

  // DataCamp
  // Keep the filenames exactly as they exist in public/certificates.
  // Replace the temporary titles/dates below with the exact certificate
  // names/dates if needed.
  {
    title: 'DataCamp Certificate',
    issuer: 'DataCamp',
    issuerTab: 'DataCamp',
    image: '/certificates/Data Camp.png',
  },
  {
    title: 'DataCamp Certificate',
    issuer: 'DataCamp',
    issuerTab: 'DataCamp',
    image: '/certificates/Data Camp (2).png',
  },
  {
    title: 'DataCamp Certificate',
    issuer: 'DataCamp',
    issuerTab: 'DataCamp',
    image: '/certificates/Data Camp (3).png',
  },
  {
    title: 'DataCamp Certificate',
    issuer: 'DataCamp',
    issuerTab: 'DataCamp',
    image: '/certificates/Data Camp (4).png',
  },
  {
    title: 'DataCamp Certificate',
    issuer: 'DataCamp',
    issuerTab: 'DataCamp',
    image: '/certificates/Data Camp (5).png',
  },
  {
    title: 'DataCamp Certificate',
    issuer: 'DataCamp',
    issuerTab: 'DataCamp',
    image: '/certificates/Data Camp (6).png',
  },
  {
    title: 'DataCamp Certificate',
    issuer: 'DataCamp',
    issuerTab: 'DataCamp',
    image: '/certificates/Data Camp (7).png',
  },
  {
    title: 'DataCamp Certificate',
    issuer: 'DataCamp',
    issuerTab: 'DataCamp',
    image: '/certificates/Data Camp (8).png',
  },
];
