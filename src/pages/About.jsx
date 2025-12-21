import React from "react";
import { motion } from "framer-motion";
import { FaSchool, FaGraduationCap } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at top, #0d0d0d, #000)",
        color: "white",
        padding: "3rem 1rem",
      }}
    >
      {/* --- About Me + Education Section --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{
          width: "100%",
          maxWidth: "1100px",
          textAlign: "left",
          marginTop: "1rem",
          lineHeight: 1.8,
          background: "rgba(255,255,255,0.04)",
          padding: "3rem 3.5rem",
          borderRadius: "18px",
          boxShadow: "0 0 25px rgba(0,255,200,0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* --- Header --- */}
        <h2
          style={{
            fontSize: "1.9rem",
            marginBottom: "1.2rem",
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          About Me
        </h2>

        {/* --- Description --- */}
        <p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.85)",
            marginBottom: "1rem",
          }}
        >
          I am a Computer Science and Engineering undergraduate at the <strong>Indian Institute of Information Technology (IIIT), Raichur</strong> (Class of 2027), with a cumulative GPA of 8.2/10. My technical philosophy centers on bridging the gap between scalable software architecture and cutting-edge artificial intelligence.
          
        </p>

        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)" }}>
  I specialize in building end-to-end intelligent systems. Unlike traditional developers who stop at application logic, and data scientists who stop at model training, I thrive at the intersection of both:
</p>

<ul
  style={{
    fontSize: "1.1rem",
    color: "rgba(255,255,255,0.8)",
    paddingLeft: "1.5rem",
    marginTop: "0.5rem",
    listStyleType: "disc",
  }}
>
  <li style={{ marginBottom: "0.5rem" }}>
    <strong>Software Engineering:</strong> I develop scalable applications using
    Python, JavaScript, React, and Node.js, ensuring robust
    backend performance with Docker and AWS cloud fundamentals.
  </li>
  <li style={{ marginBottom: "0.5rem" }}>
    <strong>Applied AI & Generative Systems:</strong> I architect
    production-grade LLM workflows using LangChain, Hugging Face, and RAG
    (Retrieval-Augmented Generation) pipelines to create
    context-aware applications.
  </li>
  <li style={{ marginBottom: "0.5rem" }}>
    <strong>Data Intelligence:</strong> I transform raw data into actionable
    insights using SQL, Pandas, and Tableau, applying
    statistical rigor to drive business decisions.
  </li>
</ul>

<p
  style={{
    fontSize: "1.1rem",
    color: "rgba(255,255,255,0.8)",
    marginTop: "1rem",
  }}
>
  AI/ML enthusiast with hands-on experience in Machine Learning, Deep Learning,
  and Full-Stack Development. Proficient in Python, TensorFlow, PyTorch,
  LangChain, LangGraph, Transformers, LLMs and modern web technologies.
  Passionate about building intelligent systems and seeking opportunities to
  contribute to impactful AI solutions.
</p>
        {/* --- Education Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ marginTop: "3rem" }}
        >
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "1.5rem",
              background:
                "linear-gradient(90deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Education
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >
            {/* --- Education Card 1: College Section --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaGraduationCap size={38} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  B.Tech in Computer Science & Engineering
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>Indian Institute of Information Technology, Raichur</strong> 
                </p>
                <p>Raichur, Karnataka</p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  CGPA - 8.2 / 10
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>2023-2027</p>
              </div>
            </motion.div>
            {/* --- Education Card 1: 12th Grade --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaGraduationCap size={38} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Higher Secondary Education (12th Grade)
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>Abhinav Bharati High School</strong> 
                </p>
                <p>Kolkata, West Bengal</p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Percentage: 78%
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>Completed in 2022</p>
              </div>
            </motion.div>

            {/* --- Education Card 3: 10th Grade --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaSchool size={36} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Secondary Education (10th Grade)
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>Abhinav Bharati High School</strong> 
                </p> <p>Kolkata, West Bengal</p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Percentage: 88%
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>Completed in 2020</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
