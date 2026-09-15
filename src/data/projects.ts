import { Project, ProjectCategory } from '@/types';

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  'Data Analysis',
  'Machine Learning',
  'Deep Learning',
  'Computer Vision',
  'NLP',
  'Generative AI',
  'RAG & AI Agents',
];

export const projectsData: Project[] = [
  // 1. DATA ANALYSIS
  {
    id: 'airbnb-data-warehouse',
    title: 'Airbnb Data Warehouse & Analytics Project',
    category: 'Data Analysis',
    shortDescription: 'An end-to-end Data Warehouse solution built using the Medallion Architecture (Bronze → Silver → Gold) on an Airbnb dataset.',
    imageKey: 'airbnb-warehouse',
    technologies: ['Python', 'Pandas', 'NumPy', 'SQL Server', 'T-SQL', 'Power BI', 'Selenium'],
    keyMetric: 'Star Schema & Medallion Architecture',
    metrics: [
      '3-Tier Medallion Architecture (Bronze → Silver → Gold)',
      'Star Schema with Fact_Listings & 5 Dimensions',
      '5 Comprehensive Power BI Reporting Dashboards'
    ],
    githubUrl: 'https://github.com/YoussefAlaa10-AI/Airbnb-Data-Warehouse-Project',
    overview: 'An end-to-end Data Warehouse and business intelligence solution processing comprehensive Airbnb listings. The pipeline applies the Medallion Architecture to ingest, cleanse, model, and visualize data for strategic decision-making.',
    objective: 'Transform raw Airbnb data into a business-ready analytical model, build a Star Schema Data Warehouse, and create an interactive Power BI Dashboard for business insights and decision-making.',
    approach: 'Executed a multi-layer Medallion architecture: ingesting raw CSVs into Bronze, handling missing values, duplicates, and data type casting into Silver, and structuring a Star Schema with Fact_Listings and 5 Dimension tables in Gold. Automated data gathering using Selenium web scraping.',
    results: 'Delivered an interactive 5-page Power BI dashboard suite offering executive, pricing, location, guest satisfaction, and segmentation intelligence.',
    deployment: 'SQL Server Data Warehouse connected directly to an interactive Power BI reporting suite.',
    features: [
      'Bronze Layer raw data ingestion preserving original CSV records',
      'Silver Layer data cleaning, missing value handling, and feature engineering',
      'Gold Layer dimensional modeling using Star Schema (Fact_Listings)',
      'Dimension tables: Dim_City, Dim_RoomType, Dim_Property, Dim_Location, Dim_WeekType',
      'Fact metrics: RealSum, Price_Per_Person, Cleanliness_Rating, Guest_Satisfaction_Overall',
      'Power BI Dashboard: Executive Overview, Pricing Intelligence, Location Intelligence, Guest Experience & Quality, Market Segmentation'
    ],
    architectureDetails: {
      bronzeLayer: ['Raw data ingestion', 'Load Airbnb CSV files', 'Preserve original records'],
      silverLayer: ['Missing value handling', 'Duplicate removal', 'Data type correction', 'Feature engineering', 'Dataset merging', 'Master Dataset creation'],
      goldLayer: ['Star Schema implementation', 'Fact and Dimension tables', 'Business-ready analytical model'],
      factTable: 'Fact_Listings (RealSum, Price_Per_Person, Cleanliness_Rating, Guest_Satisfaction_Overall)',
      dimensions: ['Dim_City', 'Dim_RoomType', 'Dim_Property', 'Dim_Location', 'Dim_WeekType'],
      powerBiPages: ['Executive Overview', 'Pricing Intelligence', 'Location Intelligence', 'Guest Experience & Quality', 'Market Segmentation']
    }
  },

  // 2. COMPUTER VISION
  {
    id: 'oral-diseases-classification',
    title: 'Oral Diseases Classification',
    category: 'Computer Vision',
    shortDescription: 'A Deep Learning computer vision system for classifying oral disease images into six clinical categories.',
    imageKey: 'oral-disease',
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy', 'Pandas', 'Matplotlib', 'Streamlit'],
    keyMetric: '93.71% Accuracy | 92.53% Macro F1',
    metrics: [
      'Accuracy: 93.71%',
      'F1 Score (Macro): 92.53%',
      'Recall (Macro): 92.23%'
    ],
    githubUrl: 'https://github.com/YoussefAlaa10-AI/Oral-Diseases-Classification',
    overview: 'A high-accuracy clinical computer vision solution trained to differentiate 6 different oral disease conditions from medical images, evaluated against multiple deep neural network architectures.',
    objective: 'Develop an automated image classification pipeline to assist dental professionals by accurately identifying oral pathologies with confidence estimation.',
    approach: 'Trained and benchmarked multiple convolutional architectures including a Custom CNN, ResNet50, MobileNetV2, and EfficientNetB0 using transfer learning and fine-tuning.',
    results: 'EfficientNetB0 achieved superior performance across all evaluation criteria: 93.71% Accuracy, 92.53% Macro F1 score, and 92.23% Macro Recall.',
    deployment: 'Deployed as an interactive Streamlit web application supporting instant image upload, disease prediction, and class probability distribution.',
    features: [
      'Classification across 6 oral pathologies: Calculus, Caries, Gingivitis, Hypodontia, Tooth Discoloration, and Ulcers',
      'Comparative benchmarking of Custom CNN, ResNet50, MobileNetV2, and EfficientNetB0',
      'Pretrained transfer learning and tailored fine-tuning strategy',
      'Real-time image inference with confidence probability scores',
      'Clean Streamlit medical assistant interface'
    ],
    architectureDetails: {
      classes: ['Calculus', 'Caries', 'Gingivitis', 'Hypodontia', 'Tooth Discoloration', 'Ulcers'],
      models: ['Custom CNN', 'ResNet50', 'MobileNetV2', 'EfficientNetB0'],
      bestModel: 'EfficientNetB0',
      performance: {
        'Accuracy': '93.71%',
        'F1 Score (Macro)': '92.53%',
        'Recall (Macro)': '92.23%'
      }
    }
  },
  {
    id: 'road-damage-detection',
    title: 'Road Damage Object Detection using YOLOv8',
    category: 'Computer Vision',
    shortDescription: 'A YOLOv8-based object detection system for detecting and classifying infrastructure road damage with bounding boxes.',
    imageKey: 'road-damage',
    technologies: ['Python', 'YOLOv8', 'OpenCV', 'Streamlit', 'NumPy', 'Pandas'],
    keyMetric: 'YOLOv8 Real-Time Detection',
    metrics: [
      'Benchmarked YOLOv8n vs YOLOv8s',
      'Precise Bounding Box Localization',
      'Confidence Score Estimation'
    ],
    githubUrl: 'https://github.com/YoussefAlaa10-AI/Road-Damage-Object-Detection',
    overview: 'An automated computer vision solution to scan and detect structural road damage, facilitating infrastructure maintenance and safety auditing.',
    objective: 'Build a real-time object detection model capable of localizing and classifying road damage patterns with high confidence in inspection imagery.',
    approach: 'Conducted exploratory data analysis, trained and evaluated YOLOv8 variants (YOLOv8n vs YOLOv8s), and selected the optimal balance between inference latency and detection precision.',
    results: 'Successfully pinpointed multi-scale road defects with bounding box annotations and confidence scores.',
    deployment: 'Streamlit application enabling users to upload road inspection photos and view instantaneous detection overlays.',
    features: [
      'Rigorous exploratory data analysis on infrastructure imagery',
      'Empirical model comparison between YOLOv8 nano (YOLOv8n) and small (YOLOv8s)',
      'Automated bounding box regression and class probability output',
      'Fast, lightweight Streamlit interface for field inspector evaluation'
    ]
  },
  {
    id: 'exam-cheating-detection',
    title: 'AI-Powered Exam Cheating Detection & Monitoring System',
    category: 'Computer Vision',
    shortDescription: 'A real-time computer vision system for automated exam cheating detection, student tracking, and suspicious behavior monitoring.',
    imageKey: 'exam-cheating',
    technologies: ['Python', 'YOLO', 'ByteTrack', 'MediaPipe', 'OpenCV', 'SQLite', 'Tkinter'],
    keyMetric: 'ByteTrack & MediaPipe Head Pose',
    metrics: [
      'Multi-Person Tracking via ByteTrack',
      '3D Head Pose Estimation with MediaPipe',
      'Automated Incident Logging in SQLite'
    ],
    githubUrl: 'https://github.com/YoussefAlaa10-AI/Cheating-Tracking-and-Alert-System',
    overview: 'An intelligent real-time surveillance system for testing centers designed to uphold academic integrity by automatically detecting prohibited behaviors without human proctor fatigue.',
    objective: 'Detect student actions, mobile phone usage, and abnormal head orientations in real time while tracking individual examinees and maintaining audit records.',
    approach: 'Integrated YOLO object detection for student and mobile phone identification, ByteTrack for persistent ID tracking across video frames, and MediaPipe for accurate 3D head pose orientation estimation.',
    results: 'Constructed an automated monitoring pipeline that logs anomalies, takes automated proof screenshots, and compiles incident histories.',
    deployment: 'Desktop monitoring application built with Tkinter featuring live camera streams, real-time alerts, SQLite incident logs, and Excel report export.',
    features: [
      'YOLO-based student detection and unauthorized mobile phone detection',
      'ByteTrack multi-target tracking for maintaining examinee identifiers',
      'Head pose estimation utilizing MediaPipe facial mesh landmarks',
      'Algorithmic suspicious behavior and anomalous gaze detection',
      'Automated screenshot capture triggered upon policy violation',
      'SQLite incident history database with Tkinter proctor interface and Excel export'
    ]
  },
  {
    id: 'hard-hat-detection',
    title: 'Hard Hat Detection',
    category: 'Computer Vision',
    shortDescription: 'An AI-powered computer vision application for detecting workers with and without safety helmets in industrial video streams.',
    imageKey: 'hard-hat',
    technologies: ['Python', 'YOLO', 'OpenCV', 'Streamlit'],
    keyMetric: 'Frame-by-Frame Video Detection',
    metrics: [
      'Custom-trained YOLO (best.pt)',
      'Dual Class Detection: Helmet vs Head',
      'Full Processed Video Export'
    ],
    githubUrl: 'https://github.com/YoussefAlaa10-AI/Hard-hat-detection-Object-Detection-',
    overview: 'A workplace safety computer vision tool designed to enforce personal protective equipment (PPE) compliance on construction sites and industrial facilities.',
    objective: 'Automatically analyze video footage to identify workers wearing safety helmets versus exposed heads, generating processed verification videos.',
    approach: 'Custom-trained a YOLO object detection architecture (`best.pt`) focused on two distinct visual classes: helmet and head. Built a video processing pipeline that processes frames sequentially.',
    results: 'Achieved robust detection in dynamic industrial footage, providing side-by-side visual comparison and downloadable annotated videos.',
    deployment: 'Streamlit interface supporting full video upload, progress monitoring, dual-video comparison, and processed output download.',
    features: [
      'Video file upload and frame-by-frame inference processing',
      'Dual-class object detection targeting "helmet" and "head"',
      'Side-by-side video comparison between original and detection-rendered output',
      'Custom-trained YOLO weights (best.pt) optimized for safety compliance',
      'One-click download of generated safety analysis video'
    ]
  },

  // 3. NLP
  {
    id: 'emotion-classification',
    title: 'Emotion Classification using NLP, Attention & DistilBERT',
    category: 'NLP',
    shortDescription: 'An NLP classification system for classifying text into six emotion categories using the GoEmotions dataset.',
    imageKey: 'emotion-nlp',
    technologies: ['Python', 'DistilBERT', 'PyTorch', 'GloVe', 'Gradio', 'Scikit-learn'],
    keyMetric: '6 Emotions | DistilBERT SOTA',
    metrics: [
      '6 Emotion Categories from GoEmotions',
      'GloVe, LSTM, GRU, BiLSTM & Attention',
      'DistilBERT Fine-Tuning Superiority'
    ],
    githubUrl: 'https://github.com/YoussefAlaa10-AI/Emotion-Classification-project',
    overview: 'An advanced natural language processing research project benchmarking sequential deep learning models and modern transformer architectures on nuanced affective text classification.',
    objective: 'Accurately classify text inputs into six distinct emotional categories using the GoEmotions benchmark dataset.',
    approach: 'Engineered comprehensive text preprocessing and compared multiple neural paradigms: GloVe word embeddings with LSTM, GRU, BiLSTM, and self-attention mechanisms versus fine-tuned DistilBERT.',
    results: 'DistilBERT significantly outperformed all sequential architectures in semantic comprehension and emotion discrimination.',
    deployment: 'Interactive Gradio application where users input custom text to receive categorized emotional classifications.',
    features: [
      'Rigorous text cleaning, tokenization, and vocabulary alignment',
      'Exploration of static GloVe embeddings paired with recurrent cells (LSTM, GRU, BiLSTM)',
      'Integration of attention mechanisms to capture contextual dependencies',
      'Fine-tuned transformer architecture utilizing DistilBERT',
      'Comparative performance analysis across all evaluated architectures',
      'Gradio web interface for interactive emotion prediction'
    ]
  },
  {
    id: 'consumer-complaint-classification',
    title: 'Consumer Complaint Classification using Deep Learning & NLP',
    category: 'NLP',
    shortDescription: 'An NLP classification system for categorizing 124,676 consumer financial complaints into five business categories.',
    imageKey: 'complaint-nlp',
    technologies: ['Python', 'DistilBERT', 'LSTM', 'GRU', 'RNN', 'Gradio', 'Pandas'],
    keyMetric: '124,676 Complaints Classified',
    metrics: [
      '124,676 Real-World Consumer Complaints',
      '5 Financial Product Categories',
      'Inference Efficiency & Model Size Trade-off'
    ],
    githubUrl: 'https://github.com/YoussefAlaa10-AI/Consumer-Complaint-Classification',
    overview: 'An enterprise-scale text classification pipeline designed to automate financial complaint routing and triage across large institutional customer support channels.',
    objective: 'Categorize 124,676 raw financial complaints into five product categories while analyzing the trade-offs between model accuracy, inference latency, and memory footprint.',
    approach: 'Implemented an end-to-end NLP pipeline encompassing data preprocessing, tokenization, model training, and rigorous evaluation across Simple RNN, LSTM, GRU, and DistilBERT.',
    results: 'Systematically quantified performance gains from recurrent baselines to transformer models alongside their computational overhead.',
    deployment: 'Interactive Gradio web interface supporting real-time complaint classification and category assignment.',
    features: [
      'Processing and normalization of a massive dataset containing 124,676 complaints',
      'Multi-class categorization across 5 critical financial categories',
      'Architectural benchmarking: Simple RNN vs LSTM vs GRU vs DistilBERT',
      'Multi-dimensional comparison: classification performance, inference efficiency, and model size',
      'Gradio deployment for direct testing of financial complaint texts'
    ]
  },
  {
    id: 'named-entity-recognition',
    title: 'Named Entity Recognition System (NER)',
    category: 'NLP',
    shortDescription: 'A Deep Learning and Transformer-based NER system identifying entities across Person, Organization, Location, and Misc categories.',
    imageKey: 'ner-nlp',
    technologies: ['Python', 'PyTorch', 'Hugging Face Transformers', 'DistilBERT', 'GloVe', 'Gradio', 'NumPy', 'Pandas', 'Scikit-learn'],
    keyMetric: '97.95% Accuracy | 89.92% F1',
    metrics: [
      'DistilBERT Accuracy: 97.95%',
      'DistilBERT F1 Score: 89.92%',
      'LSTM (Acc: 93.53%, F1: 68.02%) vs BiLSTM (Acc: 94.88%, F1: 73.05%)'
    ],
    githubUrl: 'https://github.com/YoussefAlaa10-AI/Named-Entity-Recognition-System',
    overview: 'A sequence labeling system capable of extracting structured entity information from unstructured text documents using recurrent neural networks and fine-tuned transformers.',
    objective: 'Accurately identify and classify tokens into four standard named entity types: Person (PER), Organization (ORG), Location (LOC), and Miscellaneous (MISC).',
    approach: 'Developed text preprocessing and subword label alignment pipelines. Built and evaluated baseline LSTM + GloVe, BiLSTM + GloVe, and fine-tuned DistilBERT models with full precision, recall, and F1 metrics.',
    results: 'DistilBERT achieved state-of-the-art results: 97.95% token accuracy and 89.92% F1 score, outperforming BiLSTM (94.88% Acc, 73.05% F1) and LSTM (93.53% Acc, 68.02% F1).',
    deployment: 'Interactive Gradio application providing entity visual highlighting, entity classification types, confidence score tables, and structured summaries.',
    features: [
      'Recognition across 4 entity classes: Person (PER), Organization (ORG), Location (LOC), Miscellaneous (MISC)',
      'Subword tokenization with precise BIO label alignment',
      'Empirical comparison: LSTM + GloVe vs BiLSTM + GloVe vs DistilBERT',
      'Comprehensive evaluation metrics: Accuracy, Precision, Recall, and Macro F1',
      'Gradio interface with dynamic in-text entity highlighting and structured output tables'
    ],
    architectureDetails: {
      modelDetails: {
        'LSTM': { accuracy: '93.53%', f1: '68.02%' },
        'BiLSTM': { accuracy: '94.88%', f1: '73.05%' },
        'DistilBERT': { accuracy: '97.95%', f1: '89.92%' }
      }
    }
  },

  // 4. GENERATIVE AI
  {
    id: 'face-generator-dcgan',
    title: 'AI Human Face Generator using DCGAN',
    category: 'Generative AI',
    shortDescription: 'A Deep Convolutional Generative Adversarial Network that synthesizes photorealistic human face images from random latent noise vectors.',
    imageKey: 'dcgan-face',
    technologies: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'OpenCV', 'PIL', 'Matplotlib', 'Gradio'],
    keyMetric: '30k CelebA-HQ | 128x128x3',
    metrics: [
      'Trained on ~30,000 CelebA-HQ Resized Images',
      'High-Resolution 128 × 128 × 3 RGB Outputs',
      'Custom tf.GradientTape Adversarial Training'
    ],
    githubUrl: 'https://github.com/YoussefAlaa10-AI/Realistic-Human-Face-Generation-using-GAN',
    overview: 'A generative adversarial architecture engineered from scratch to master facial distribution representations and synthesize novel, photorealistic human faces from Gaussian noise.',
    objective: 'Construct and train a stable Deep Convolutional GAN on ~30,000 high-quality facial images to generate high-fidelity 128 × 128 × 3 synthetic portraits.',
    approach: 'Architected a Generator (Dense, BatchNorm, LeakyReLU, Reshape, Conv2DTranspose, Tanh) and Discriminator (Conv2D, LeakyReLU, Dropout, Flatten, Dense). Orchestrated a custom TensorFlow training loop using `tf.GradientTape` and Adam optimizer to balance generator-discriminator equilibria.',
    results: 'Demonstrated smooth latent space transitions and generated sharp synthetic face images without mode collapse.',
    deployment: 'Interactive Gradio application enabling users to dynamically select the number of synthetic portraits to generate on demand.',
    features: [
      'Dataset pipeline processing ~30,000 CelebA-HQ images scaled to 128 × 128 × 3',
      'Deep transpose convolutional generator with batch normalization and LeakyReLU activations',
      'Strided convolutional discriminator with dropout regularization',
      'Custom adversarial training loop using TensorFlow GradientTape and Adam optimizers',
      'Interactive Gradio UI allowing variable batch image synthesis'
    ],
    architectureDetails: {
      datasetInfo: 'CelebA-HQ Resized (~30,000 images, 128 × 128 × 3)',
      generatorLayers: ['Dense layer', 'Batch Normalization', 'LeakyReLU', 'Reshape', 'Conv2DTranspose layers', 'Tanh output'],
      discriminatorLayers: ['Conv2D layers', 'LeakyReLU', 'Dropout', 'Flatten', 'Dense output']
    }
  },

  // 5. RAG & AI AGENTS
  {
    id: 'standard-course-qa-rag',
    title: 'Standard Course Q&A RAG System',
    category: 'RAG & AI Agents',
    shortDescription: 'An end-to-end Retrieval-Augmented Generation system for answering complex academic questions about course materials using Google Gemini.',
    imageKey: 'standard-rag',
    technologies: ['Python', 'Google Gemini', 'FAISS', 'Streamlit', 'Vector Databases'],
    keyMetric: 'Grounded Retrieval & Source Tracking',
    metrics: [
      'Multi-Format Ingestion: DOCX, TXT, CSV',
      'Semantic FAISS Vector Indexing',
      'Strict Context-Grounded Responses'
    ],
    githubUrl: 'https://github.com/YoussefAlaa10-AI/Standard-Course-QA-RAG-System',
    overview: 'A knowledge retrieval assistant designed to assist students and educators by answering technical questions grounded in machine learning, deep learning, and NLP course syllabi.',
    objective: 'Provide hallucination-free, context-grounded answers to course queries with verifiable source chunk references.',
    approach: 'Built a pipeline that ingests course materials, performs text cleaning and recursive chunking, generates embeddings, stores them in FAISS vector indices, and feeds retrieved context chunks into Google Gemini for grounded generation.',
    results: 'Eliminated hallucinations by constraining Gemini to retrieved document chunks while maintaining transparent source citations.',
    deployment: 'Streamlit web interface featuring prompt input, real-time response generation, and clickable source reference tracking.',
    features: [
      'Coverage across Machine Learning, Deep Learning, and NLP curricula',
      'Multi-format document support: DOCX, TXT, and CSV',
      'Document loading, text cleaning, and recursive chunking pipeline',
      'High-dimensional embeddings indexed using FAISS for low-latency retrieval',
      'Context-grounded answer generation powered by Google Gemini',
      'Source chunk tracking for auditability and verification'
    ],
    architectureDetails: {
      pipelineSteps: [
        'Course Materials',
        'Document Loading',
        'Text Cleaning',
        'Text Chunking',
        'Embeddings',
        'FAISS',
        'Semantic Retrieval',
        'Relevant Chunks',
        'Google Gemini',
        'Grounded Answer + Sources'
      ]
    }
  },
  {
    id: 'corrective-course-qa-rag',
    title: 'Corrective Course Q&A RAG System',
    category: 'RAG & AI Agents',
    shortDescription: 'An end-to-end Corrective RAG system that evaluates retrieved context relevance and rewrites queries automatically before answer generation.',
    imageKey: 'corrective-rag',
    technologies: ['Python', 'Google Gemini', 'FAISS', 'Gradio', 'Vector Databases'],
    keyMetric: 'Self-Evaluating & Query Rewriting',
    metrics: [
      'Automated Context Relevance Grading',
      'Autonomous Query Rewriting Loop',
      'Multi-Format Support: PDF, DOCX, TXT, CSV'
    ],
    githubUrl: 'https://github.com/YoussefAlaa10-AI/Corrective-Course-QA-RAG-System',
    overview: 'An advanced Corrective RAG (CRAG) system designed to overcome traditional retrieval failures by self-assessing retrieved chunks and executing autonomous query transformation when context is insufficient.',
    objective: 'Mitigate retrieval mismatch and noisy context by evaluating retrieved documents and iteratively rewriting search queries prior to final LLM synthesis.',
    approach: 'Constructed an evaluation layer that scores retrieved FAISS chunks. If the relevance threshold is not met, the query is rewritten into an optimized semantic query and re-retrieved before generation via Google Gemini.',
    results: 'Demonstrated superior answer accuracy on ambiguous, complex, or colloquial student queries compared to standard vanilla RAG.',
    deployment: 'Interactive Gradio interface providing transparency into context evaluation scores, query rewrites, and grounded answers.',
    features: [
      'Extensive document ingestion: PDF, DOCX, TXT, and CSV formats',
      'Text cleaning, semantic chunking, and embedding generation',
      'FAISS semantic similarity retrieval',
      'Autonomous context evaluation filter checking chunk relevance',
      'Automated query rewriting pipeline triggered on weak context',
      'Google Gemini answer synthesis with exact source citations',
      'Clean Gradio deployment'
    ]
  },
  {
    id: 'agentic-rag-knowledge-assistant',
    title: 'Agentic RAG System | LLM-Powered Knowledge Assistant',
    category: 'RAG & AI Agents',
    shortDescription: 'An Agentic RAG system for querying multi-format knowledge bases using an LLM-powered agent with dynamic tool routing.',
    imageKey: 'agentic-rag',
    technologies: ['Google Gemini', 'LangChain', 'ChromaDB', 'FAISS', 'Gradio', 'Python'],
    keyMetric: 'Dynamic Tool Selection & Agent Fallbacks',
    metrics: [
      'Autonomous Multi-Tool Selection',
      'Persistent Vector Store via ChromaDB',
      'Explicit "I Don\'t Know" Fallback Strategy'
    ],
    githubUrl: 'https://github.com/YoussefAlaa10-AI/Agentic-RAG-System',
    overview: 'An intelligent enterprise knowledge assistant that replaces rigid retrieval pipelines with an autonomous LLM agent capable of reasoning, selecting specialized tools, and handling ambiguous user queries.',
    objective: 'Enable flexible question answering across diverse document collections through dynamic tool routing (search, summarization, document comparison, calculation) and strict hallucination prevention.',
    approach: 'Built using LangChain and Google Gemini, paired with persistent ChromaDB vector storage. The agent assesses user intent, dynamically calls tools for calculations, multi-doc comparisons, or semantic search, and enforces an "I don\'t know" fallback when data is absent.',
    results: 'Delivered an enterprise-grade agent capable of solving complex multi-step user requests with full auditability.',
    deployment: 'Gradio web interface demonstrating dynamic tool executions, source citations, and verified answers.',
    features: [
      'Multi-format knowledge base support: PDF, DOCX, TXT, and CSV',
      'Context-grounded reasoning with an explicit "I don\'t know" fallback',
      'Dynamic tool selection: Search, Summarization, Document Comparison, and Calculation',
      'Persistent vector storage and semantic retrieval using ChromaDB',
      'Source attribution and step-by-step reasoning transparency',
      'Interactive Gradio application'
    ]
  },
  {
    id: 'multi-agent-procurement-assistant',
    title: 'Multi-Agent Procurement Assistant',
    category: 'RAG & AI Agents',
    shortDescription: 'A multi-agent AI system built with CrewAI for automated product research, specification comparison, and procurement reporting.',
    imageKey: 'multi-agent',
    technologies: ['CrewAI', 'Google Gemini', 'Tavily Search API', 'ScrapeGraphAI', 'Python'],
    keyMetric: '4 Collaborative CrewAI Agents',
    metrics: [
      '4 Specialized Autonomous Agents',
      'Tavily Search & ScrapeGraphAI Scraping',
      'Automated HTML Procurement Dossiers'
    ],
    // NOTE: Strictly no GitHub URL invented
    overview: 'A collaborative multi-agent architecture where autonomous AI personas work in concert to conduct end-to-end commercial procurement research, compliance verification, and executive dossier synthesis.',
    objective: 'Automate tedious procurement workflows by delegating web search, deep web scraping, feature-by-feature product comparison, and report generation to specialized AI agents.',
    approach: 'Orchestrated four specialized CrewAI agents powered by Google Gemini: Search Agent, Scraping Agent, Comparison Agent, and Report Agent, equipped with Tavily Search API and ScrapeGraphAI.',
    results: 'Drastically compressed product research timelines, generating structured comparison matrices, compliance audits, and formatted HTML procurement reports.',
    deployment: 'Python / CrewAI orchestrator outputting business-ready HTML procurement reports.',
    features: [
      'Search Agent: conducts broad market product research and discovery',
      'Scraping Agent: extracts granular technical specifications, pricing, and ratings using ScrapeGraphAI',
      'Comparison Agent: computes multi-criteria trade-offs and regulatory compliance checks',
      'Report Agent: synthesizes strategic purchase recommendations into executive HTML reports',
      'Powered by Google Gemini and Tavily Search API for real-time market data'
    ],
    architectureDetails: {
      agents: [
        { name: 'Search Agent', role: 'Product discovery & market search via Tavily API' },
        { name: 'Scraping Agent', role: 'Deep specification & pricing extraction with ScrapeGraphAI' },
        { name: 'Comparison Agent', role: 'Feature-by-feature analysis & compliance checking' },
        { name: 'Report Agent', role: 'Synthesis of actionable HTML procurement recommendation dossiers' }
      ]
    }
  }
];
