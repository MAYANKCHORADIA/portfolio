import { projectsData, skillsData, socialLinks } from "@/lib/data";
import ContactForm from "@/app/components/ContactForm";

export default function HomePage() {
  return (
    <div className="page-wrapper">
      {/* ════════════════ HERO SECTION ════════════════ */}
      <section className="hero" id="hero">
        <div className="hero-content">
          <span className="hero-badge">
            <span className="dot"></span>
            Open to Opportunities
          </span>
          <h1 className="hero-name">
            Mayank Choradia
          </h1>
          <p className="hero-tagline">
            Full-Stack Developer &amp; Competitive Programmer building
            high-performance web applications with modern technologies.
          </p>
          <div className="hero-cta-group">
            <a href="#projects" className="btn-primary">
              View Projects ↓
            </a>
            <a
              href="https://github.com/MAYANKCHORADIA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              GitHub ↗
            </a>
            <a
              href="https://leetcode.com/u/Mayank_Choradia/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Leetcode ↗
            </a>
          </div>

        </div>
      </section>
      {/* ════════════════ SKILLS SECTION ════════════════ */}
      <section className="section skills-section" id="skills">
        <span className="section-label">Skills</span>
        <h2 className="section-title">Core Technologies</h2>
        <p className="section-subtitle">
          The languages, frameworks, and tools I use to bring ideas to life.
        </p>
        <div className="skills-grid">
          {/* Languages */}
          <div className="skill-card">
            <div className="skill-card-icon languages">⟨/⟩</div>
            <h3 className="skill-card-title">Languages</h3>
            <div className="skill-tags">
              {skillsData.languages.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          {/* Frameworks */}
          <div className="skill-card">
            <div className="skill-card-icon frameworks">⚡</div>
            <h3 className="skill-card-title">Frameworks</h3>
            <div className="skill-tags">
              {skillsData.frameworks.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          {/* Databases & Tools */}
          <div className="skill-card">
            <div className="skill-card-icon tools">🛠</div>
            <h3 className="skill-card-title">Databases &amp; Tools</h3>
            <div className="skill-tags">
              {skillsData.databasesAndTools.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ════════════════ PROJECTS SECTION ════════════════ */}
      <section className="section" id="projects">
        <span className="section-label">Projects</span>
        <h2 className="section-title">Featured Work</h2>
        <p className="section-subtitle">
          Real-world applications I&apos;ve designed, built, and shipped.
        </p>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <article key={project.id} className="project-card">
              <div className="project-card-header">
                <div>
                  <span className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="project-card-title">{project.title}</h3>
                </div>
              </div>
              <p className="project-card-description">
                {project.description}
              </p>
              <div className="project-tech-stack">
                {project.techStack.map((tech) => (
                  <span key={tech} className="project-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub ↗
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
      {/* ════════════════ CONTACT SECTION ════════════════ */}
      <section className="section contact-section" id="contact">
        <span className="section-label">Contact</span>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind or just want to say hello? I&apos;d love to hear from you.
        </p>

        <div className="contact-grid">
          {/* Left — Social Links */}
          <div className="contact-info">
            <h3 className="contact-info-title">Connect with me</h3>
            <p className="contact-info-text">
              Whether it&apos;s a full-stack project, competitive programming, or a collaboration — feel free to reach out.
            </p>
            <div className="social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span className="social-link-label">{link.label}</span>
                  <span className="social-link-icon">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Contact Form */}
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
