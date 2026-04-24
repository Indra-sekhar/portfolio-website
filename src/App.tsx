/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Github,
  Linkedin,
  Terminal,
  Code,
  Mail,
  ExternalLink,
  ChevronRight,
  MapPin,
  Cpu,
  Award,
  CircleUser,
  Coffee,
  Menu,
  X
} from 'lucide-react';
import { PERSONAL_DETAILS, SKILLS, PROJECTS, CODING_PROFILES, ROADMAP } from './constants.ts';

// Helper component for Section headers
const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold mb-4"
    >
      <span className="text-neon-cyan font-mono mr-2">#</span>{title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-gray-400 max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
    <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mt-4 rounded-full" />
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  // Typing animation for hero
  const fullText = "Aspiring Software Engineer | DSA Learner | AI Enthusiast";
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen selection:bg-neon-cyan selection:text-dark-bg">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-dark-bg/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center font-bold text-dark-bg text-xl group-hover:rotate-12 transition-transform">
              IS
            </div>
            <span className="font-mono font-bold text-white tracking-widest hidden sm:block">INDRA.DEV</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-neon-cyan transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-button text-sm inline-block text-center"
            >
              View Resume
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-dark-card border-b border-white/5 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg text-gray-300 hover:text-neon-cyan"
                  >
                    {link.name}
                  </a>
                ))}
                <button className="neon-button w-full mt-4">Resume</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 p-1 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple"
          >
            <div className="bg-dark-bg rounded-full p-6 text-neon-cyan">
              <Terminal size={48} />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Hi, I'm <span className="neon-text">{PERSONAL_DETAILS.name.split(' ')[2]}</span>
          </motion.h1>

          <div className="h-8 mb-8 text-xl md:text-2xl font-mono text-gray-400">
            {displayText}<span className="animate-pulse text-neon-cyan">_</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="#projects" className="px-8 py-3 bg-neon-cyan text-dark-bg rounded-full font-bold hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all">
              View Work
            </a>
            <a href="#contact" className="px-8 py-3 border border-white/20 rounded-full font-bold hover:bg-white/5 transition-all">
              Contact Me
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <SectionHeader title="About Me" />
              <p className="text-lg leading-relaxed text-gray-300">
                {PERSONAL_DETAILS.summary}
              </p>
              <div className="flex flex-wrap gap-6 mt-8">
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="text-neon-cyan" size={20} />
                  <span>{PERSONAL_DETAILS.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Coffee className="text-neon-cyan" size={20} />
                  <span>Always practicing. Always learning.</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
                {CODING_PROFILES.map((profile) => (
                  <a
                    key={profile.name}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card flex flex-col items-center gap-2 p-4 text-center group"
                  >
                    <div className="text-gray-400 group-hover:text-neon-cyan transition-colors">
                      {profile.icon === 'github' && <Github size={24} />}
                      {profile.icon === 'linkedin' && <Linkedin size={24} />}
                      {profile.icon === 'code' && <Code size={24} />}
                      {profile.icon === 'terminal' && <Terminal size={24} />}
                    </div>
                    <span className="text-xs font-mono font-medium">{profile.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-neon-cyan to-neon-purple opacity-20 blur-2xl group-hover:opacity-40 transition-opacity" />
              <div className="relative glass-card aspect-square flex flex-col items-center justify-center overflow-hidden">
                <CircleUser className="w-1/2 h-1/2 text-white/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold mb-2">Student Engineer</h3>
                  <p className="text-neon-cyan font-mono">{PERSONAL_DETAILS.role}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Technical Arsenal"
            subtitle="My journey in computer science is defined by building a rock-solid foundation in problem solving and core data structures."
          />

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            <div className="space-y-8">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <Code className="text-neon-cyan" size={20} />
                Core Expertise
              </h3>
              <div className="space-y-6">
                {SKILLS.filter(s => s.category === 'Core' || s.category === 'Language').map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-mono text-sm">{skill.name}</span>
                      <span className="text-xs text-neon-cyan">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple shadow-[0_0_10px_rgba(0,242,255,0.5)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <Cpu className="text-neon-cyan" size={20} />
                Concepts & Learning
              </h3>
              <div className="flex flex-wrap gap-4">
                {SKILLS.filter(s => s.category === 'Concept' || s.category === 'Tools').map((skill) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 glass-card hover:bg-neon-cyan/5 group"
                  >
                    <span className="font-mono text-sm group-hover:text-neon-cyan transition-colors">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
              <div className="glass-card bg-neon-cyan/5 border-neon-cyan/20 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Award className="text-neon-cyan" size={32} />
                  <div>
                    <h4 className="font-bold">Competitive Programmer</h4>
                    <p className="text-xs text-gray-400 font-mono">CodeChef & LeetCode</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400">
                  Focusing on improving algorithmic efficiency and solving complex problems with high speed and accuracy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Featured Projects"
            subtitle="I'm currently conceptualizing and building applications that leverage my interests in security, AI, and distributed systems."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card flex flex-col h-full group"
              >
                <div className="mb-4 flex justify-between items-start">
                  <div className="p-3 bg-neon-cyan/10 rounded-lg text-neon-cyan group-hover:scale-110 transition-transform">
                    <Github size={20} />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase ${project.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                    project.status === 'In Progress' ? 'bg-amber-500/20 text-amber-400' :
                      'bg-neon-purple/20 text-neon-purple'
                    }`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-neon-cyan transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono text-gray-500 bg-white/5 py-1 px-2 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Learning Roadmap"
            subtitle="My visual journey of growth and professional aspirations."
          />

          <div className="relative border-l border-white/10 ml-4 py-4">
            {ROADMAP.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="mb-12 ml-8 relative"
              >
                <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-dark-bg border-4 border-neon-cyan shadow-[0_0_10px_rgba(0,242,255,0.5)]" />
                <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-neon-cyan mb-3">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 max-w-xl">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto text-center">
          <SectionHeader title="Get In Touch" />
          <div className="max-w-2xl mx-auto glass-card p-12">
            <h3 className="text-3xl font-bold mb-4">Let's build something <span className="neon-text">incredible</span>.</h3>
            <p className="text-gray-400 mb-10">
              I'm actively looking for opportunities to collaborate on projects and explore new technologies.
              Whether you have a question or just want to say hi, my inbox is always open!
            </p>
            <div className="flex flex-col items-center gap-6">
              <a
                href={`mailto:${PERSONAL_DETAILS.email}`}
                className="flex items-center gap-3 text-2xl font-bold text-white hover:text-neon-cyan transition-colors"
              >
                <Mail size={32} strokeWidth={2.5} />
                <span>{PERSONAL_DETAILS.email}</span>
              </a>
              <div className="flex gap-4">
                {CODING_PROFILES.map((profile) => (
                  <a
                    key={profile.name}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/5 rounded-2xl hover:bg-neon-cyan hover:text-dark-bg transition-all"
                    title={profile.name}
                  >
                    {profile.icon === 'github' && <Github size={24} />}
                    {profile.icon === 'linkedin' && <Linkedin size={24} />}
                    {profile.icon === 'code' && <Code size={24} />}
                    {profile.icon === 'terminal' && <Terminal size={24} />}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 opacity-50 text-sm font-mono">
          <p>© {new Date().getFullYear()} Indra Sekhar. Built with code & passion.</p>
          <div className="flex items-center gap-2">
            <span>Powered by</span>
            <span className="text-neon-cyan">React + Tailwind</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
