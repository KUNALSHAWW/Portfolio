import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Youtube } from 'lucide-react'

const PROJECTS = [
  {
    title: '🛡️ SentinelAI AML',
    desc: 'A production-grade Enterprise AML Detection Platform engineered for scalable financial monitoring. Utilizes LangGraph to orchestrate autonomous agents and Chain-of-Thought reasoning for explainable decision-making, ensuring high-precision fraud detection through a low-latency FastAPI.',
    ss: '/assets/projects/sentinel.jpg',
    tech: ['Python', 'ML', 'FastAPI','Neo4j','LangChain','Financial Analytics'],
    live: 'https://sentinelai-api.onrender.com/',
    code: 'https://github.com/KUNALSHAWW/SentinelAI-AML'
  },
  {
    title: '🖥️ Real Time System Monitoring with AI',
    desc: 'Enterprise-grade system monitoring platform with AI-powered anomaly detection, intelligent fix suggestions, and predictive analytics. Built with user-friendly UI for both technical and non-technical users.',
    ss: '/assets/projects/real.png',
    tech: ['Python', 'AI/ML', 'Hugging Face', 'Real-time Analytics','Docker'],
    live: 'https://huggingface.co/spaces/KunalShaw/system-monitor-dashboard',
    code: 'https://github.com/KUNALSHAWW/Real-Time-System-Monitoring-with-AI-Predictions'
  },
  {
    title: '🏥 VitalSync AI',
    desc: 'VitalSync AI is an intelligent triage assistant that transforms how users understand and assess their medical symptoms. Built with advanced LLM technologies, Retrieval Augmented Generation (RAG), and integrated safety features, VitalSync bridges the gap between symptom experience and professional medical care.',
    ss: '/assets/projects/vital.jpg',
    tech: ['Python', 'AI/ML', 'Hugging Face', 'Healthcare'],
    live: 'https://huggingface.co/spaces/KunalShaw/VitalSync-AI',
    code: 'https://github.com/KUNALSHAWW/VitalSync-AI'
  },
  {
    title: '🧠 MindForge',
    desc: 'MindForge is a next-generation AI-powered learning platform that revolutionizes education through voice-first interactions. Create personalized AI tutoring companions, engage in natural voice conversations, and track your learning progress with gamified elements',
    ss: '/assets/projects/mindforge.jpg',
    tech: ['Next.js', 'TailWind', 'AI/ML','Prisma','Vercel', 'TypeScript'],
    live: 'https://mind-forge-plum.vercel.app/',
    code: 'https://github.com/KUNALSHAWW/MindForge'
  },
  {
    title: '💬 NaturalSQL AI',
    desc: 'Democratizing data access with an intelligent AI bridge that instantly converts plain English questions into executable SQL. This intuitive solution empowers non-technical teams to retrieve complex datasets without writing a single line of code.',
    ss: '/assets/projects/sql.jpg',
    tech: ['Python', 'LangChain', 'SQL', 'Streamlit','Database'],
    live: 'https://naturalsql-ai-qsqtleyfy9wnupogurapp3x.streamlit.app/',
    code: 'https://github.com/KUNALSHAWW/NaturalSQL-AI'
  },
   {
    title: '📚 IMSKOS',
    desc: 'An advanced production-ready system that intelligently orchestrates knowledge retrieval from multiple sources using state-of-the-art LangGraph workflows, distributed vector storage with DataStax Astra DB, and high-performance LLM inference via Groq.',
    ss: '/assets/projects/imk.jpg',
    tech: ['Python', 'RAG', 'LangChain', 'LangGraph','Hugging Face'],
    live: 'https://huggingface.co/spaces/KunalShaw/IMSKOS',
    code: 'https://github.com/KUNALSHAWW/IMSKOS-Intelligent-Multi-Source-Knowledge-Orchestration-System-'
  },
  {
    title: '📊 Churn Modelling',
    desc: "A predictive analytics solution designed to safeguard revenue by accurately forecasting customer attrition. Utilizing advanced machine learning algorithms on historical banking data, this model identifies high-risk accounts, enabling financial institutions to deploy targeted, data-driven retention strategies before churn occurs.",
    ss: '/assets/projects/churn.png',
    tech: ['Python', 'Scikit-learn', 'Streamlit', 'Pandas'],
    live: 'https://churn-modelling-gtyphtnmcdyfujsawpebnk.streamlit.app/',
    code: 'https://github.com/KUNALSHAWW/Churn-Modelling'
  },
  {
    title: '📈 TimeSeries NetTraffic Engine',
    desc: 'Advanced network traffic forecasting framework using SARIMA time series models on CESNET-TimeSeries-2023-2024 dataset. Includes automated retraining, comprehensive evaluation metrics (RMSE, SMAPE, R²), and production-ready HPC batch processing scripts.',
    ss: '/assets/projects/time.png',
    tech: ['Python', 'Time Series', 'SARIMA', 'Data Analysis'],
    live: null,
    code: 'https://github.com/KUNALSHAWW/TimeSeries-NetTraffic-Engine'
  },
  {
    title: '🛒 QuantumRetail Demand Forecaster',
    desc: 'Advanced Machine Learning Pipeline for Intelligent Retail Demand Prediction | Production-grade forecasting system with latent demand recovery, gradient boosting ensembles, and interactive analytics dashboard.',
    ss: '/assets/projects/quantum.png',
    tech: ['Python', 'ML', 'XGBoost', 'Forecasting', 'Retail Analytics','Streamlit'],
    live: null,
    code: 'https://github.com/KUNALSHAWW/QuantumRetail-Demand-Forecaster'
  },
  {
    title: '🧪 NeuroCast',
    desc: 'A neural network-based forecasting platform for time series predictions with interactive visualizations and model comparisons.',
    ss: '/assets/projects/neurocast.png',
    tech: ['Python', 'Neural Networks', 'Streamlit', 'Deep Learning'],
    live: 'https://neurocast.streamlit.app/',
    code: 'https://github.com/KUNALSHAWW/NeuroCast'
  },
  {
    title: '🔍 Sarcascope',
    desc: 'Sarcascope is an intelligent sentiment analysis dashboard that goes beyond traditional sentiment analysis by detecting and accounting for sarcasm in IMDB movie reviews. ',
    ss: '/assets/projects/sarcascope.png',
    tech: ['Python', 'NLP', 'Deep Learning', 'Sentiment','Transformers'],
    live: null,
    code: 'https://github.com/KUNALSHAWW/Sarcascope'
  },
  {
    title: '🎯 RecomX',
    desc: 'RecomX is an intelligent, scalable product recommendation engine designed for e-commerce and SaaS platforms. Leveraging AWS Personalize, RecomX delivers advanced AI-driven personalization with seamless premium billing and a modern serverless backend.',
    ss: '/assets/projects/recomx.png',
    tech: ['AWS', 'Recommendation Systems', 'ML', 'Data Science'],
    live: null,
    code: 'https://github.com/KUNALSHAWW/RecomX',
    demo: 'https://youtu.be/kSPG6ggi2IM'
  },
  {
    title: '⚡ CycleMind',
    desc: 'Predictive intelligence system for Combined Cycle Power Plants using machine learning for energy output optimization.',
    ss: '/assets/projects/cyclemind.png',
    tech: ['Python', 'ML', 'Energy Analytics', 'Regression','Data Science'],
    live: null,
    code: 'https://github.com/KUNALSHAWW/CycleMind',
    dataset: 'https://archive.ics.uci.edu/dataset/294/combined+cycle+power+plant'
  },
   {
    title: '🍔 Food Delivery App',
    desc: 'Modern Android food delivery app built with Kotlin & Material Design 3. Features intuitive navigation, smart search, shopping cart, order history, and beautiful UI.',
    ss: '/assets/projects/food.png',
    tech: ['Kotlin', 'Android', 'Firebase', 'Gradle'],
    live: null,
    code: 'https://github.com/KUNALSHAWW/food-delivery-app'
  }
]

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
           Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
         From Algorithm to Production. A curated selection of projects demonstrating end-to-end expertise in building scalable web applications and deploying production-grade AI. These works bridge the gap between complex Machine Learning models and robust MLOps infrastructure.
        </p>

        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, flexWrap: 'wrap' }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  {p.live && (
                    <motion.a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                      whileHover={{ scale: 1.08 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 5,
                        background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                        color: '#fff',
                        padding: '6px 12px',
                        borderRadius: 8,
                        fontSize: 13,
                        textDecoration: 'none'
                      }}
                    >
                      <ExternalLink size={14} /> Live
                    </motion.a>
                  )}
                  {p.demo && (
                    <motion.a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                      whileHover={{ scale: 1.08 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 5,
                        background: 'linear-gradient(90deg, #ef4444, #dc2626)',
                        color: '#fff',
                        padding: '6px 12px',
                        borderRadius: 8,
                        fontSize: 13,
                        textDecoration: 'none'
                      }}
                    >
                      <Youtube size={14} /> Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
