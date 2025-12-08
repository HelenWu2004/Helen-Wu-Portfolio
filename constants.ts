import { Experience, Project, SkillCategory, Education } from './types';

export const RESUME_TEXT = `
Helen Wu
(217) 418-3957 | haiyuewu08@gmail.com | www.linkedin.com/in/haiyue-wu | github.com/HelenWu2004

SUMMARY
Rising senior in CS & Statistics (GPA 4.0) at UIUC. Passionate about scalable backend infrastructure and applied ML. Experience with Go/AWS microservices, CI/CD, and high-performance real-time chat systems. Researcher in distributed LLM fine-tuning and graph anomaly detection (published at WWW 2025).

EDUCATION
University of Illinois Urbana-Champaign (Aug 2022 – Dec 2026)
Bachelor of Science in Computer Science and Statistics, GPA: 4.00/4.00
Relevant Coursework: Database Systems, Distributed Systems, Computer Systems, Data Structures & Algorithms, Machine Learning Systems, Text Info Systems, Software Engineering, Programming Languages & Compilers, Financial Engineering, High Frequency Trading.

TECHNICAL SKILLS
Languages: Python, C/C++, Go, SQL, Java, JavaScript/TypeScript, Bash, HTML/CSS, R
Frameworks/DevOps: FastAPI, Gin, Docker, Kubernetes, GitHub Actions, GitLab CI, AWS (Cognito, EC2, S3, ECR), GCP (Cloud Run, Firebase), SQL (MySQL, PostgreSQL), NoSQL (Redis, MongoDB, Neo4j), React, Swagger, Jira.
ML & Systems: PyTorch, Transformers, RAG, MapReduce, GNNs (GAT, GCN), Tensorflow, Whisper.cpp, Linux.

WORK EXPERIENCE
Integral Pivots - Software Development Intern (Toronto, Canada | May 2025 – Aug 2025)
- Engineered comments and upvotes features from scratch for a forum backend service using Golang (Gin, GORM), PostgreSQL, and AWS and integrated AWS Cognito for user authentication, following Domain Driven Design principles.
- Monitored with AWS CloudWatch and optimized PostgreSQL with multi-column indexing, significantly reducing query latency.
- Implemented ACID-compliant database transactions and conducted comprehensive testing with high coverage.
- Architected production-grade CI/CD pipeline with Docker, GitLab CI, AWS ECR, and Kubernetes enabling automated deployments with rollback capabilities, containerization, and seamless rollout.

UmiUni.com - Software Development Intern (Sunnyvale, CA | May 2024 – Aug 2024)
- Architected chatroom with Python FastAPI/Flask and WebSockets, enabling room multicast, direct messaging, and reconnect. Supports high concurrency.
- Integrated MySQL for persistent storage and added Redis caching with TTL policies, improving query performance.
- Implemented REST API endpoints supporting chat history and file uploads, documented with Swagger and tested via Postman.
- Developed data analytics pipeline with Google Analytics, delivering actionable metrics that guided product optimization.

UIUC CreateLab - Research Assistant (Champaign, IL | May 2025 – Present)
- Fine-tuned E5-Mistral-7B and NVEmbed-v2 on large-scale text corpus using LoRA, significantly reducing compute requirements.
- Designed distributed multi-GPU fine-tuning pipeline using Data Parallelism and Pipeline Parallelism, integrating TensorBoard monitoring effectively across a multi-GPU cluster achieving significant speedup compared to single-GPU baseline.
- Developed Knowledge Graph-based RAG system leveraging multi-threaded LLM prompting to extract RDF triples from websites, scheduled via Linux cron jobs to process large volumes of documents daily with high accuracy.
- Analyzed extensive RAG papers on multi-hop Question Answering; optimized HippoRAG benchmarks.

UIUC iSAIL Lab - Research Assistant (Champaign, IL | May 2024 – May 2025)
- Published paper on WWW2025 Conference: Cluster Aware Graph Anomaly Detection.
- Proposed cluster-aware multi-view Graph Anomaly Detection model called CARE augmenting adjacency matrix with pseudo-labels generated through unsupervised clustering algorithms achieving significant improvement over baseline methods.
- Benchmarked computer vision models including GAT and GCN performing cross-validation on datasets systematically evaluating performance metrics such as AUC-ROC, precision, recall, and F1-score.

PROJECTS
FlavorConnect | React, TypeScript, Next.js, FastAPI, Firebase, GCP, GitHub Actions, MapReduce, Word2Vec, Tailwind CSS
- Architected web application with React and TypeScript implementing microservices architecture.
- Designed backend using Firebase and GCP deploying microservices on Google Cloud Run following Agile principles.
- Engineered TF-IDF ranking algorithm for a search engine with large-scale recipe dataset using Apache Spark improving relevancy significantly.
- Optimized loading performance through infinite scroll and lazy loading, drastically reducing initial load latency.

Custom Memory Allocator | GNU/Linux, C
- Engineered a high-performance memory allocator in C supporting malloc, calloc, realloc, and free for a large memory pool.
- Applied advanced heap management strategies including boundary tags, block coalescing, splitting, and segregated free lists that reduces fragmentation and improves allocation speed.
- Engineered size-aware free block tracking, metadata encoding with 16-byte alignment, and allocation-aware resizing strategies, minimizing metadata overhead and outperforming glibc.
- Ranked top 3 in a class-wide performance competition based on runtime and memory efficiency.

Local Zoom Transcription System | Python, C++, PyQt5, Whisper.cpp, OBS, BlackHole, ollama
- Built fully local privacy-focused transcription system using whisper.cpp with PyQt5 GUI for advanced parameter setup.
- Integrated BlackHole for direct system audio capture enabling low-latency transcription without microphone interference.
- Added OBS Studio overlay support for live caption display with customizable visuals and virtual background integration.
- Enhanced functionality with local LLaMA 3.1 8B enabling high-quality academic phrase extraction without cloud APIs.

AnimalSpotter | React, Flask, MySQL, GCP
- Developed full-stack web application enabling users to record and share animal sightings with React, Flask, and MySQL on GCP.
- Implemented CRUD operations, stored procedures, database triggers, and transactions for 6 core tables (User, Post, Observation, Species, Comment, PostLike).
- Optimized query performance using two-layer caching strategy (materialized views + in-memory cache) reducing load times.
- Built community features with real-time engagement tracking via database triggers and automated ranking system for weekly trending content.
- Note: Repository will be available by Dec 9th, after final presentation.
`;

export const EDUCATION: Education = {
  school: "University of Illinois Urbana-Champaign",
  degree: "B.S. in Computer Science & Statistics",
  period: "Aug 2022 – Dec 2026",
  gpa: "4.00/4.00",
  courses: [
    "Database Systems", "Distributed Systems", "ML Systems", "Text Info Systems", "High Frequency Trading", "Software Engineering"
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Integral Pivots",
    role: "Software Development Intern",
    location: "Toronto, Canada",
    period: "May 2025 – Aug 2025",
    points: [
      "Engineered comments and upvotes features from scratch using Golang (Gin, GORM), PostgreSQL, and AWS; integrated AWS Cognito following Domain Driven Design.",
      "Optimized PostgreSQL with multi-column indexing, significantly reducing query latency; monitored performance via AWS CloudWatch.",
      "Implemented ACID-compliant database transactions and conducted comprehensive testing with high coverage.",
      "Architected production-grade CI/CD pipeline with Docker, GitLab CI, AWS ECR, and Kubernetes for automated deployments with rollback capabilities."
    ]
  },
  {
    company: "UmiUni.com",
    role: "Software Development Intern",
    location: "Sunnyvale, CA",
    period: "May 2024 – Aug 2024",
    points: [
      "Architected chatroom with Python FastAPI and WebSockets, enabling room multicast, direct messaging, and reconnect capabilities, supporting high concurrency.",
      "Integrated MySQL for persistent storage and added Redis caching with TTL policies, improving query performance.",
      "Implemented REST API endpoints for chat history and file uploads, documented with Swagger and tested via Postman.",
      "Developed data analytics pipeline with Google Analytics, delivering actionable metrics that guided product optimization."
    ]
  },
  {
    company: "UIUC CreateLab",
    role: "Research Assistant",
    location: "Champaign, IL",
    period: "May 2025 – Present",
    points: [
      "Fine-tuned E5-Mistral-7B and NVEmbed-v2 on large-scale text corpus using LoRA, significantly reducing compute requirements.",
      "Designed distributed multi-GPU fine-tuning pipeline (Data & Pipeline Parallelism) across a multi-GPU cluster, achieving significant speedup.",
      "Developed Knowledge Graph-based RAG system leveraging multi-threaded LLM prompting to extract RDF triples, processing large volumes of documents daily with high accuracy.",
      "Analyzed extensive literature on multi-hop QA; optimized HippoRAG benchmarks."
    ]
  },
  {
    company: "UIUC iSAIL Lab",
    role: "Research Assistant",
    location: "Champaign, IL",
    period: "May 2024 – May 2025",
    points: [
      "Published paper on WWW2025 Conference: Cluster Aware Graph Anomaly Detection.",
      "Proposed 'CARE' model (Cluster-aware Multi-view Graph Anomaly Detection), achieving significant improvement over baseline via pseudo-labels.",
      "Benchmarked CV models (GAT, GCN) with cross-validation, systematically evaluating AUC-ROC, precision, recall, and F1-score."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "FlavorConnect",
    link: "https://github.com/HelenWu2004/FlavorConnect",
    techStack: ["React", "TypeScript", "Next.js", "FastAPI", "Firebase", "GCP", "Spark"],
    description: [
      "Architected web application with React and TypeScript implementing microservices architecture.",
      "Designed backend using Firebase and GCP, deploying microservices on Cloud Run following Agile principles.",
      "Engineered TF-IDF ranking algorithm for a search engine with large-scale recipe dataset using Apache Spark, improving relevancy significantly.",
      "Optimized loading performance through infinite scroll and lazy loading, drastically reducing initial load latency."
    ]
  },
  {
    title: "Custom Memory Allocator",
    link: "https://github.com/HelenWu2004/Intro-to-Computer-Systems-Machine-Problems",
    techStack: ["C", "Linux", "Systems"],
    description: [
      "Engineered high-performance allocator (malloc, calloc, realloc, free) for a large memory pool.",
      "Applied advanced strategies (boundary tags, coalescing, segregated free lists) reducing fragmentation and improving allocation speed.",
      "Engineered size-aware tracking and 16-byte alignment, minimizing metadata overhead and outperforming glibc.",
      "Ranked top 3 in a class-wide performance competition based on runtime and memory efficiency."
    ]
  },
  {
    title: "Local Zoom Transcription System",
    link: "https://gitlab.engr.illinois.edu/ie421_high_frequency_trading_spring_2025/ie421_hft_spring_2025_group_24/group_24_project",
    techStack: ["Python", "C++", "PyQt5", "Whisper.cpp", "OBS", "BlackHole", "ollama"],
    description: [
      "Built fully local privacy-focused transcription system using whisper.cpp with PyQt5 GUI for advanced parameter setup.",
      "Integrated BlackHole for direct system audio capture enabling low-latency transcription without microphone interference.",
      "Added OBS Studio overlay support for live caption display with customizable visuals and virtual background integration.",
      "Enhanced functionality with local LLaMA 3.1 8B enabling high-quality academic phrase extraction without cloud APIs."
    ]
  },
  {
    title: "AnimalSpotter",
    techStack: ["React", "Flask", "MySQL", "GCP"],
    description: [
      "Developed full-stack web application enabling users to record and share animal sightings with React, Flask, and MySQL on GCP.",
      "Implemented CRUD operations, stored procedures, database triggers, and transactions for 6 core tables (User, Post, Observation, Species, Comment, PostLike).",
      "Optimized query performance using two-layer caching strategy (materialized views + in-memory cache) reducing load times.",
      "Built community features with real-time engagement tracking via database triggers and automated ranking system for weekly trending content.",
      "Note: Repository will be available by Dec 9th, after final presentation."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "C/C++", "Go", "SQL", "Java", "TypeScript", "Bash", "R"]
  },
  {
    category: "Frameworks & DevOps",
    skills: ["FastAPI", "Gin", "Docker", "K8s", "AWS", "GCP", "React", "Next.js"]
  },
  {
    category: "ML & Systems",
    skills: ["PyTorch", "Transformers", "RAG", "MapReduce", "Spark", "Tensorflow"]
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "Neo4j", "Firebase"]
  }
];