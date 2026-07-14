import React, { useState } from "react";

function App() {
  const [entered, setEntered] = useState(false);

  const experiences = [
    {
      role: "Software Engineering Intern",
      company: "Zoku",
      location: "Atlanta, GA, USA",
      period: "July 2025 - Present",
      logo: "/zokulogo.jpg",
      points: [
        "Designed and optimized scalable backend services and REST APIs using Java, Spring Boot, and MySQL, improving performance by ~20%.",
        "Built modular frontend components using JavaScript, React, HTML5, and CSS3, enabling responsive cross-platform user interfaces.",
        "Developed automated CI/CD workflows and SQL data pipelines supporting product features and real-time application datasets.",
      ],
    },
    {
      role: "Research Assistant",
      company: "Georgia State University",
      location: "Atlanta, GA, USA",
      period: "January 2025 - May 2025",
      logo: "/gsulogo.jpg",
      points: [
        "Developed a Hybrid CNN-LSTM machine learning model for coronary artery disease detection using 1,200+ MRI scans.",
        "Built scalable data preprocessing pipelines and analytics workflows achieving 99.7% accuracy across validation experiments.",
        "Designed data storage and processing pipelines using MySQL and JPA managing 10K+ research records.",
      ],
    },
    {
      role: "Graduate Research & Teaching Assistant",
      company: "Georgia State University",
      location: "Atlanta, GA, USA",
      period: "January 2024 - December 2024",
      logo: "/gsulogo.jpg",
      points: [
        "Mentored 80+ graduate students in Programming Language Concepts, debugging complex programs and algorithmic challenges.",
        "Conducted applied machine learning experiments on 20K+ structured records using Python-based data pipelines and analytics workflows.",
        "Led 25+ lab sessions and code reviews improving students’ understanding of data structures and system design.",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "360 Research Foundation",
      location: "Andhra Pradesh, India",
      period: "May 2021 - August 2021",
      logo: "/360rflogo.jpeg",
      points: [
        "Developed a web-based quiz and assessment platform using PHP, MySQL, HTML5, CSS3, and JavaScript.",
        "Designed backend server logic and relational database schemas supporting quiz management and result processing.",
        "Built responsive user interfaces and deployed the application for production use with stable web performance and usability.",
      ],
    },
  ];

  const projects = [
    {
      title: "Tech Skill Radar",
      description:
        "Developer platform analytics dashboard designed to visualize technology trends, skill distribution, and engineering insights through a clean data-driven interface.",
      tags: ["React", "JavaScript", "Analytics"],
      image: "/project-tech-radar.jpeg",
    },
    {
      title: "Vision-Language Transformer",
      description:
        "Medical AI project focused on generating structured radiology-style reports from chest X-ray images using deep learning and vision-language modeling techniques.",
      tags: ["Python", "Deep Learning", "Transformers"],
      image: "/project-vision.jpeg",
    },
    {
      title: "Hybrid CNN-LSTM for CAD Detection",
      description:
        "Machine learning model built for coronary artery disease detection using MRI scans, combining spatial and sequential feature extraction for high predictive accuracy.",
      tags: ["Python", "CNN-LSTM", "Healthcare AI"],
      image: "/project-cnn.jpeg",
    },
    {
      title: "Secure NFT Wallet",
      description:
        "Web3 wallet concept built for secure digital asset management with an emphasis on usability, authentication, and blockchain-based ownership workflows.",
      tags: ["Blockchain", "Web3", "Security"],
      image: "/project-wallet.jpg",
    },
    {
      title: "Fuzzy Logic Integrated CNN",
      description:
        "Computer vision model for rice classification that combines convolutional neural networks with fuzzy logic to improve classification accuracy and interpretability.",
      tags: ["Python", "Computer Vision", "Fuzzy Logic"],
      image: "/project-fuzzy.jpeg",
    },
  ];

  if (!entered) {
    return (
      <div className="app-shell intro-screen" onClick={() => setEntered(true)}>
        <div className="bg-orb orb-one"></div>
        <div className="bg-orb orb-two"></div>
        <div className="bg-beam beam-one"></div>
        <div className="bg-beam beam-two"></div>

        <div className="intro-card">
          <img
            src="/profile.jpg"
            alt="Hema Nikhitha Edupuganti"
            className="intro-avatar-image"
          />
          <h1>Hema Nikhitha Edupuganti</h1>
          <p className="intro-role">Software Engineer</p>

          <div className="intro-tags">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>APIs</span>
            <span>Cloud</span>
          </div>

          <p className="intro-text">
            I build backend systems, scalable APIs, and cloud-driven products
            that are designed to perform in the real world.
          </p>

          <span className="intro-enter">Learn more about me</span>
        </div>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <div className="bg-orb orb-one"></div>
      <div className="bg-orb orb-two"></div>
      <div className="bg-beam beam-one"></div>
      <div className="bg-beam beam-two"></div>

      <div className="site-wrapper">
        <nav className="navbar">
          <div className="logo"></div>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section className="hero hero-grid">
          <div className="hero-left">
            <p className="eyebrow">SOFTWARE ENGINEER</p>
            <h1>
              Hi, I’m Hema Nikhitha Edupuganti — a Software Engineer passionate
              about building reliable backend systems, scalable APIs, and
              cloud-driven products.
            </h1>
            <p className="hero-text">
              My work spans backend engineering, distributed systems, REST APIs,
              and cloud-based development, with an emphasis on building scalable
              architectures, writing clean maintainable code, and delivering
              solutions that are both technically strong and product-focused.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-card">
              <div className="hero-profile-top">
                <img
                  src="/profile.jpg"
                  alt="Hema Nikhitha Edupuganti"
                  className="hero-avatar-image"
                />
                <div>
                  <p className="hero-name">Hema Nikhitha Edupuganti</p>
                  <p className="hero-role">Software Engineer</p>
                </div>
              </div>

              <div>
                <p className="hero-card-label">Current Focus</p>
                <h3>
                  Backend Engineering, Cloud Systems, and Scalable Product
                  Development
                </h3>
              </div>

              <div className="hero-mini-list">
                <span>Java + Spring Boot</span>
                <span>REST APIs</span>
                <span>AWS & SQL</span>
                <span>Distributed Systems</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <h2>About</h2>
          <p>
            Hi, I’m Hema Nikhitha Edupuganti, a software engineer who enjoys
            turning ideas into reliable, scalable, and real-world digital
            solutions. In this portfolio, you’ll find my work across backend
            engineering, APIs, cloud-based development, machine learning, and
            full-stack projects — all built with a focus on performance,
            usability, and impact. Whether it’s designing systems, solving
            technical problems, or building products from concept to execution,
            this portfolio reflects how I approach engineering: thoughtfully,
            practically, and with a strong drive to create meaningful results.
          </p>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="skill-grid">
            {[
              "Java",
              "Spring Boot",
              "Spring MVC",
              "Python",
              "JavaScript",
              "React",
              "SQL",
              "HTML5",
              "CSS3",
              "REST APIs",
              "Microservices",
              "Multithreaded Programming",
              "Distributed Systems",
              "Data Structures",
              "Git",
              "CI/CD",
              "Linux",
              "AWS",
              "MySQL",
              "PostgreSQL",
              "Google Cloud Platform",
              "Data Pipelines",
              "JPA",
            ].map((skill) => (
              <span key={skill} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <h2>Experience</h2>
          <div className="card-grid">
            {experiences.map((exp) => (
              <div
                key={`${exp.company}-${exp.role}`}
                className="card experience-card"
              >
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="experience-corner-logo"
                />

                <div className="experience-body">
                  <h3>{exp.role}</h3>
                  <p className="subhead">
                    {exp.company} | {exp.location}
                  </p>
                  <p className="period">{exp.period}</p>

                  <ul>
                    {exp.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="card-grid">
            {projects.map((project) => (
              <div
                key={project.title}
                className="card project-card project-card-column"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-desc">{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <h2>Education</h2>
          <div className="card-grid">
            <div className="card education-card">
              <img
                src="/gsu.jpg"
                alt="Georgia State University"
                className="education-corner-logo"
              />

              <div className="education-body">
                <h3>Georgia State University</h3>
                <p className="subhead">Master&apos;s, Computer Science</p>
                <p className="period">August 2023 - May 2025</p>
              </div>
            </div>

            <div className="card education-card">
              <img
                src="/srm.png"
                alt="SRM University AP"
                className="education-corner-logo"
              />

              <div className="education-body">
                <h3>SRM University AP</h3>
                <p className="subhead">Bachelor&apos;s, Computer Science</p>
                <p className="period">June 2019 - May 2023</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <h2>Contact</h2>
          <p className="contact-text">
            I’m open to software engineering opportunities focused on backend
            development, distributed systems, cloud platforms, and scalable
            product engineering.
          </p>

          <div className="contact-links">
            <a
              href="mailto:hnedupuganti1@gmail.com"
              className="contact-link-card"
            >
              Email Me
            </a>

            <a href="tel:+17065909867" className="contact-link-card">
              Call
            </a>

            <a
              href="https://www.linkedin.com/in/hemanikhitha/"
              target="_blank"
              rel="noreferrer"
              className="contact-link-card"
            >
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="contact-link-card"
            >
              View Resume
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;