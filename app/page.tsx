import { projectsData, skillsData, socialLinks } from "@/lib/data";
import ContactForm from "@/app/components/ContactForm";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 pb-24">
      {/* ════════════════ HERO SECTION ════════════════ */}
      <section className="py-24 md:py-32 flex flex-col-reverse md:flex-row items-center justify-between gap-12" id="hero">
        <div className="flex-1 flex flex-col items-start gap-6">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Mayank Choradia
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
            Full-Stack Developer &amp; Competitive Programmer building
            high-performance web applications with modern technologies.
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <a href="#projects" className="px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors">
              View Projects ↓
            </a>
            <a
              href="https://github.com/MAYANKCHORADIA"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-slate-900 font-medium rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href="https://leetcode.com/u/Mayank_Choradia/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-slate-900 font-medium rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              Leetcode ↗
            </a>
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="border border-slate-200 rounded-2xl p-2 bg-white">
            <Image
              src="/profile.jpeg"
              alt="Mayank Choradia"
              width={200}
              height={200}
              className="rounded-xl grayscale hover:grayscale-0 transition-all duration-300 object-cover w-48 h-48 md:w-56 md:h-56"
              priority
            />
          </div>
        </div>
      </section>

      {/* ════════════════ SKILLS SECTION ════════════════ */}
      <section className="py-16 md:py-24 border-t border-slate-200" id="skills">
        <span className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4 block">Skills</span>
        <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Core Technologies</h2>
        <p className="text-slate-600 mb-12 max-w-2xl leading-relaxed">
          The languages, frameworks, and tools I use to bring ideas to life.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Languages */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:bg-slate-50 transition-colors">
            <div className="w-12 h-12 bg-slate-100 text-slate-900 rounded-xl flex items-center justify-center text-xl font-mono mb-6 border border-slate-200">⟨/⟩</div>
            <h3 className="font-bold text-slate-900 mb-4">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.languages.map((skill) => (
                <span key={skill} className="text-xs font-mono uppercase tracking-wider px-2 py-1 bg-slate-100 border border-slate-200 text-slate-700 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          {/* Frameworks */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:bg-slate-50 transition-colors">
            <div className="w-12 h-12 bg-slate-100 text-slate-900 rounded-xl flex items-center justify-center text-xl mb-6 border border-slate-200">⚡</div>
            <h3 className="font-bold text-slate-900 mb-4">Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.frameworks.map((skill) => (
                <span key={skill} className="text-xs font-mono uppercase tracking-wider px-2 py-1 bg-slate-100 border border-slate-200 text-slate-700 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          {/* Databases & Tools */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:bg-slate-50 transition-colors">
            <div className="w-12 h-12 bg-slate-100 text-slate-900 rounded-xl flex items-center justify-center text-xl mb-6 border border-slate-200">🛠</div>
            <h3 className="font-bold text-slate-900 mb-4">Databases &amp; Tools</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.databasesAndTools.map((skill) => (
                <span key={skill} className="text-xs font-mono uppercase tracking-wider px-2 py-1 bg-slate-100 border border-slate-200 text-slate-700 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ PROJECTS SECTION ════════════════ */}
      <section className="py-16 md:py-24 border-t border-slate-200" id="projects">
        <span className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4 block">Projects</span>
        <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Featured Work</h2>
        <p className="text-slate-600 mb-12 max-w-2xl leading-relaxed">
          Real-world applications I&apos;ve designed, built, and shipped.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <article key={project.id} className="flex flex-col bg-white border border-slate-200 rounded-2xl p-8 hover:bg-slate-50 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs font-mono text-slate-400 block mb-2">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-xs font-mono tracking-wider px-2 py-1 bg-slate-100 border border-slate-200 text-slate-700 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-auto">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900 transition-colors"
                  >
                    GitHub ↗
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900 transition-colors"
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
      <section className="py-16 md:py-24 border-t border-slate-200" id="contact">
        <span className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4 block">Contact</span>
        <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Get In Touch</h2>
        <p className="text-slate-600 mb-12 max-w-2xl leading-relaxed">
          Have a project in mind or just want to say hello? I&apos;d love to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left — Social Links */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Connect with me</h3>
              <p className="text-slate-600 leading-relaxed">
                Whether it&apos;s a full-stack project, competitive programming, or a collaboration — feel free to reach out.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <span className="font-medium text-slate-900">{link.label}</span>
                  <span className="text-slate-400 font-mono">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
