import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Youssef Alaa | AI Engineer | Data Scientist | Data Analyst',
  description:
    'Professional portfolio of Youssef Alaa Mohamed Abdella, showcasing projects and experience across Machine Learning, Deep Learning, Computer Vision, NLP, Data Science, Generative AI, RAG, and Agentic AI.',
  keywords: [
    'Youssef Alaa',
    'AI Engineer',
    'Data Scientist',
    'Data Analyst',
    'Machine Learning',
    'Deep Learning',
    'Computer Vision',
    'NLP',
    'Generative AI',
    'RAG',
    'Agentic AI',
    'Kaggle Master',
    'Portfolio'
  ],
  authors: [{ name: 'Youssef Alaa Mohamed Abdella' }],
  creator: 'Youssef Alaa Mohamed Abdella',
  openGraph: {
    title: 'Youssef Alaa | AI Engineer | Data Scientist | Data Analyst',
    description:
      'Professional portfolio of Youssef Alaa Mohamed Abdella, showcasing projects and experience across Machine Learning, Deep Learning, Computer Vision, NLP, Data Science, Generative AI, RAG, and Agentic AI.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Youssef Alaa Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Youssef Alaa | AI Engineer | Data Scientist | Data Analyst',
    description:
      'Professional portfolio of Youssef Alaa Mohamed Abdella, showcasing projects and experience across Machine Learning, Deep Learning, Computer Vision, NLP, Data Science, Generative AI, RAG, and Agentic AI.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased transition-colors duration-200 selection:bg-blue-500/20 selection:text-blue-500">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
