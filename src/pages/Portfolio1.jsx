import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Database, Globe } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack web application with React, Node.js, and PostgreSQL",
      tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "Mobile-first productivity app with real-time collaboration",
      tech: ["React Native", "Firebase", "Redux"],
      github: "#",
      live: "#"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive charts and analytics for business metrics",
      tech: ["D3.js", "Python", "Flask", "Chart.js"],
      github: "#",
      live: "#"
    }
  ];

  const skills = [
    { name: "Frontend", icon: <Code className="w-6 h-6" />, techs: ["React", "Vue.js", "TypeScript", "Tailwind CSS"] },
    { name: "Backend", icon: <Database className="w-6 h-6" />, techs: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
    { name: "Design", icon: <Palette className="w-6 h-6" />, techs: ["Figma", "UI/UX", "Responsive Design"] },
    { name: "Tools", icon: <Globe className="w-6 h-6" />, techs: ["Git", "Docker", "AWS", "CI/CD"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-purple-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold shadow-2xl">
              JD
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              John Doe
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Full Stack Developer & UI/UX Designer
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a passionate full-stack developer with 5+ years of experience creating beautiful, 
              functional web applications. I love turning complex problems into simple, elegant solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or enjoying a good cup of coffee while sketching out my next big idea.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mr-3">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <div className="space-y-2">
                  {skill.techs.map((tech, techIndex) => (
                    <div key={techIndex} className="text-sm text-gray-300 bg-white/5 rounded-full px-3 py-1 inline-block mr-2 mb-2">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                  <div className="text-6xl opacity-20">
                    <Code />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-white/10 rounded-full px-2 py-1 text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.github} className="flex items-center text-sm hover:text-purple-400 transition-colors">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                    <a href={project.live} className="flex items-center text-sm hover:text-purple-400 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <a href="mailto:john@example.com" className="flex items-center text-lg hover:text-purple-400 transition-colors">
                <Mail className="w-5 h-5 mr-2" />
                john@example.com
              </a>
              <a href="https://linkedin.com/in/johndoe" className="flex items-center text-lg hover:text-purple-400 transition-colors">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
              <a href="https://github.com/johndoe" className="flex items-center text-lg hover:text-purple-400 transition-colors">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}