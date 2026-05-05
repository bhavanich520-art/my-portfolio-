import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Code2, 
  Database, 
  Wrench, 
  ChevronDown, 
  Award,
  Menu,
  X,
  FileCode2,
  Terminal,
  MapPin,
  Layout,
  Server,
  Settings2,
  Brain,
  Shield,
  Activity,
  HeartPulse,
  ImagePlus,
  Send,
  MessageSquare
} from 'lucide-react';
import React, { useState, useEffect } from 'react';
import profileImage from './assets/images/regenerated_image_1777964613021.jpg';

const Section = ({ id, title, children, className = "" }: { id: string; title?: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`py-6 md:py-8 relative min-h-[calc(100vh-8rem)] ${className}`}>
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      {title && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-400">
              {title}
            </span>
          </h2>
          <div className="w-20 h-1 bg-teal-500/50 rounded-full"></div>
        </motion.div>
      )}
      {children}
    </div>
  </section>
);

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Image Crop & Zoom State
  const [imageScale, setImageScale] = useState(2.05);
  const [imageX, setImageX] = useState(44);
  const [imageY, setImageY] = useState(75);
  const [isEditingImage, setIsEditingImage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certificates', id: 'certificates' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="bg-slate-900 min-h-screen text-slate-300 font-sans selection:bg-teal-500/30 flex flex-col">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg shadow-black/20 py-4' : 'bg-slate-900 py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick('home', e)}
            className="text-xl font-bold text-white tracking-tighter"
          >
            <span className="text-teal-400"></span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(link.id, e)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === link.id ? 'text-teal-400' : 'text-slate-300 hover:text-teal-400'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-md md:hidden pt-24 px-6"
          >
            <div className="flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(link.id, e)}
                  className={`text-2xl font-medium transition-colors ${
                    activeSection === link.id ? 'text-teal-400' : 'text-slate-300 hover:text-teal-400'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        {activeSection === 'home' && (
          <section className="relative min-h-[calc(100vh-6rem)] flex items-center overflow-hidden">
            {/* Abstract Background Effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-[128px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[128px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full py-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block px-3 py-1 mb-6 border border-teal-500/30 rounded-full bg-teal-500/10 text-teal-400 text-sm font-medium">
                  Welcome to my portfolio
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight whitespace-nowrap">
                  Hello, I'm <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400 text-[1.1em] md:text-inherit">
                    Chegondi Bhavani
                  </span>
                </h1>
                <p className="text-xl text-slate-400 mb-8 max-w-lg">
                  Computer Science Engineering Student & Full Stack Developer building scalable, user-centric web applications.
                </p>

                <div className="flex gap-4 mt-12">
                  <SocialLink href="https://github.com/bhavanich520" icon={<Github size={20} />} />
                  <SocialLink href="https://linkedin.com/" icon={<Linkedin size={20} />} />
                </div>
              </motion.div>

              {/* Profile Image with modern effects */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative flex justify-center md:justify-end"
              >
                <div className="relative group/profile w-72 md:w-96">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full blur-2xl opacity-20 group-hover/profile:opacity-40 transition-opacity duration-700"></div>

                  <button 
                    onClick={() => setIsEditingImage(!isEditingImage)}
                    className="absolute top-4 right-4 z-20 bg-slate-800/80 hover:bg-teal-500/80 text-white p-3 rounded-full backdrop-blur transition-colors opacity-0 group-hover/profile:opacity-100 shadow-lg border border-white/10"
                    title="Adjust Profile Image"
                  >
                    <Settings2 size={24} />
                  </button>

                  <div className="rounded-full w-72 h-72 md:w-96 md:h-96 border-4 border-slate-800 relative z-10 overflow-hidden shadow-2xl">
                    <img 
                      src={profileImage}
                      onError={(e) => {
                        e.currentTarget.src = 'https://ui-avatars.com/api/?name=Chegondi+Bhavani&size=512&background=0F172A&color=2DD4BF&font-size=0.33';
                      }}
                      alt="Chegondi Bhavani" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/profile:scale-[1.02]"
                      style={{
                        transform: `scale(${imageScale})`,
                        transformOrigin: `${imageX}% ${imageY}%`
                      }}
                    />
                  </div>

                  <AnimatePresence>
                    {isEditingImage && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-72 bg-slate-800/95 backdrop-blur-xl border border-teal-500/30 p-4 rounded-2xl z-30 shadow-2xl space-y-3"
                      >
                        <p className="text-xs text-amber-300 font-medium mb-2 text-center">Tell the AI these values:</p>
                        <div>
                          <label className="text-xs text-slate-300 font-medium flex justify-between">
                            <span>Zoom</span>
                            <span className="text-teal-400 font-mono text-sm">{imageScale.toFixed(2)}x</span>
                          </label>
                          <input 
                            type="range" min="0.5" max="4" step="0.05" 
                            value={imageScale} onChange={(e) => setImageScale(parseFloat(e.target.value))}
                            className="w-full accent-teal-500" 
                          />
                        </div>
                        <div>
                          <label className="text-xs text-slate-300 font-medium flex justify-between">
                            <span>Horizontal Pos</span>
                            <span className="text-teal-400 font-mono text-sm">{imageX}%</span>
                          </label>
                          <input 
                            type="range" min="0" max="100" 
                            value={imageX} onChange={(e) => setImageX(parseFloat(e.target.value))}
                            className="w-full accent-teal-500" 
                          />
                        </div>
                        <div>
                          <label className="text-xs text-slate-300 font-medium flex justify-between">
                            <span>Vertical Pos</span>
                            <span className="text-teal-400 font-mono text-sm">{imageY}%</span>
                          </label>
                          <input 
                            type="range" min="0" max="100" 
                            value={imageY} onChange={(e) => setImageY(parseFloat(e.target.value))}
                            className="w-full accent-teal-500" 
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <Section id="about" title="About Me" className="bg-slate-800/20">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6 text-lg text-slate-400 leading-relaxed"
              >
                <p>
                  I am a passionate <span className="text-slate-200 font-medium">Computer Science Engineering student</span> and an aspiring <span className="text-slate-200 font-medium">Full Stack Developer</span>. I love transforming complex problems into simple, beautiful, and intuitive software designs.
                </p>
                <p>
                  With a primary focus on modern web applications, I enjoy building everything from responsive user interfaces to robust backend architectures. I am deeply curious and constantly exploring new technologies to improve my craft.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-700/50">
                  <div>
                    <span className="block text-slate-500 text-sm mb-1">Education</span>
                    <span className="text-white font-medium">B.Tech in CSE</span>
                  </div>
                  <div>
                    <span className="block text-slate-500 text-sm mb-1">Location</span>
                    <span className="text-white font-medium flex items-center gap-1"><MapPin size={16} className="text-teal-400" /> India</span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="grid grid-cols-2 gap-4"
              >
                <StatCard number="5+" label="Projects Completed" />
                <StatCard number="10+" label="Technologies Mastered" />
                <StatCard number="5+" label="Certifications" />
                <StatCard number="∞" label="Lines of Code" />
              </motion.div>
            </div>
          </Section>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <Section id="skills" title="Technical Skills">
            <div className="grid md:grid-cols-3 gap-8">
              <SkillCategory 
                icon={<Code2 className="text-teal-400" size={24} />}
                title="Programming & DSA"
                skills={[
                  { name: 'Python', level: 90 },
                  { name: 'Java', level: 85 },
                  { name: 'C', level: 80 },
                  { name: 'DSA (Python)', level: 85 },
                  { name: 'DBMS', level: 80 },
                  { name: 'OS', level: 80 },
                ]}
              />
              <SkillCategory 
                icon={<Layout className="text-indigo-400" size={24} />}
                title="Web Development"
                skills={[
                  { name: 'Frontend (React/HTML/CSS)', level: 90 },
                  { name: 'JavaScript', level: 85 },
                  { name: 'Tailwind CSS', level: 90 },
                  { name: 'Backend (Node.js)', level: 75 },
                ]}
              />
              <SkillCategory 
                icon={<Brain className="text-sky-400" size={24} />}
                title="Tech & Tools"
                skills={[
                  { name: 'Artificial Intelligence', level: 80 },
                  { name: 'Databases (MySQL/MongoDB)', level: 80 },
                  { name: 'Git & GitHub', level: 85 },
                  { name: 'Problem Solving', level: 90 },
                ]}
              />
            </div>
          </Section>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <Section id="projects" title="Featured Projects" className="bg-slate-800/20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard 
                title="AI-Powered Rural Diagnostic"
                description="A hybrid HealthTech ecosystem to bridge healthcare gaps. Includes an AI-driven diagnostic assistant for preliminary analysis and a secure, encrypted digital health repository."
                tags={['React/Next.js', 'Node.js', 'MongoDB', 'Framer Motion']}
                icon={<HeartPulse className="text-teal-400 w-10 h-10 mb-4" />}
              />
              <ProjectCard 
                title="AI Cyber Defence System"
                description="Monitors CPU, memory, network activity, and running processes. Implements a threat detection module and an AI chat assistant for real-time insights."
                tags={['HTML/CSS/JS', 'Node.js', 'Express.js']}
                icon={<Shield className="text-indigo-400 w-10 h-10 mb-4" />}
              />
              <ProjectCard 
                title="Portfolio Website"
                description="A modern, responsive portfolio designed to showcase my skills, projects, and professional background."
                tags={['React', 'Tailwind CSS', 'Framer Motion']}
                icon={<Terminal className="text-sky-400 w-10 h-10 mb-4" />}
              />
            </div>
          </Section>
        )}

        {/* Certificates Section */}
        {activeSection === 'certificates' && (
          <Section id="certificates" title="Certifications">
            <div className="grid md:grid-cols-2 gap-6">
              <CertificateCard 
                title="Introduction to Prompt Engineering with GitHub Copiliot"
                issuer="Microsoft"
                year="2026"
              />
              <CertificateCard 
                title="Generative AI"
                issuer="Linkedin"
                year="2026"
              />
              <CertificateCard 
                title="Artificial Intelligence Primer Certification"
                issuer="Infosys"
                year="2026"
              />
              <CertificateCard 
                title="Introduction to Cloud Computing"
                issuer="NPTEL"
                year="2025"
              />
            </div>
          </Section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <Section id="contact" title="Get In Touch" className="bg-slate-800/20 text-center">
            <div className="max-w-4xl mx-auto">
              <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
                I'm currently looking for new opportunities such as internships and junior roles. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {/* Contact Info */}
                <div className="flex flex-col gap-6 text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">Let's connect</h3>
                  <p className="text-slate-400 mb-4">
                    Feel free to reach out through any of these platforms.
                  </p>
                  
                  <a href="mailto:bhavanich520@gmail.com" className="flex items-center gap-4 p-4 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-teal-500 transition-colors group">
                    <div className="p-3 bg-teal-500/10 text-teal-400 rounded-xl group-hover:scale-110 transition-transform">
                      <Mail size={24} />
                    </div>
                    <div>
                      <span className="block text-sm text-slate-400">Email Me</span>
                      <span className="text-white font-medium break-all">bhavanich520@gmail.com</span>
                    </div>
                  </a>
                  
                  <a href="tel:+918688212796" className="flex items-center gap-4 p-4 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-teal-500 transition-colors group">
                    <div className="p-3 bg-teal-500/10 text-teal-400 rounded-xl group-hover:scale-110 transition-transform">
                      <Phone size={24} />
                    </div>
                    <div>
                      <span className="block text-sm text-slate-400">Call Me</span>
                      <span className="text-white font-medium">+91 8688212796</span>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-slate-800/50 border border-slate-700 rounded-2xl group">
                    <div className="p-3 bg-teal-500/10 text-teal-400 rounded-xl">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <span className="block text-sm text-slate-400">Location</span>
                      <span className="text-white font-medium">India</span>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-slate-800/40 border border-slate-700 rounded-3xl p-8 backdrop-blur-sm text-left shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <MessageSquare size={22} className="text-teal-400" />
                    Send a Message
                  </h3>
                  <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Thanks for your message! This is a demo form."); }}>
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-1">Your Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all placeholder:text-slate-600"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-1">Your Email</label>
                      <input 
                        type="email" 
                        required
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all placeholder:text-slate-600"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                      <textarea 
                        required
                        rows={4}
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all placeholder:text-slate-600 resize-none"
                        placeholder="Hi! I'd like to work with you..."
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 mt-2 shadow-lg shadow-teal-500/20"
                    >
                      <Send size={18} />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </Section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-slate-500 text-sm mt-auto">
        <p>Built with React & Tailwind CSS. Designed by Chegondi Bhavani.</p>
        <p className="mt-2 text-slate-600">© {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </div>
  );
}

// Subcomponents

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-teal-500 hover:bg-slate-700 transition-all"
  >
    {icon}
  </a>
);

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <div className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-2xl text-center">
    <div className="text-3xl font-bold text-white mb-2">{number}</div>
    <div className="text-sm text-slate-400">{label}</div>
  </div>
);

const SkillCategory = ({ icon, title, skills }: { icon: React.ReactNode, title: string, skills: {name: string, level: number}[] }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-slate-800/40 border border-slate-700 p-8 rounded-3xl"
  >
    <div className="flex items-center gap-4 mb-8">
      <div className="p-3 bg-slate-900 rounded-xl">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-3">
      {skills.map(skill => (
        <span 
          key={skill.name}
          className="px-4 py-2 bg-slate-900/50 text-slate-300 font-medium rounded-xl border border-slate-700/50 text-sm"
        >
          {skill.name}
        </span>
      ))}
    </div>
  </motion.div>
);

const ProjectCard = ({ title, description, tags, icon }: { title: string, description: string, tags: string[], icon: React.ReactNode }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group bg-slate-800/40 backdrop-blur-sm border border-slate-700 p-8 rounded-3xl hover:-translate-y-2 hover:border-teal-500/50 hover:bg-slate-800/60 transition-all duration-300 flex flex-col"
  >
    {icon}
    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">{title}</h3>
    <p className="text-slate-400 mb-6 flex-grow">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <span key={tag} className="text-xs font-medium px-3 py-1 bg-slate-900 text-slate-300 rounded-full border border-slate-700">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

// Simple IndexedDB wrapper for large strings/files
const initDB = () => {
  return new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open('PortfolioDB', 1);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    request.onupgradeneeded = (e) => {
      const db = (e.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains('certificates')) {
        db.createObjectStore('certificates');
      }
    };
  });
};

const saveImageToDB = async (key: string, dataUrl: string) => {
  try {
    const db = await initDB();
    return new Promise<void>((resolve, reject) => {
      const transaction = db.transaction(['certificates'], 'readwrite');
      const store = transaction.objectStore('certificates');
      const request = store.put(dataUrl, key);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  } catch (err) {
    console.error('Failed to save image to IndexedDB', err);
  }
};

const getImageFromDB = async (key: string): Promise<string | null> => {
  try {
    const db = await initDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['certificates'], 'readonly');
      const store = transaction.objectStore('certificates');
      const request = store.get(key);
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error);
    });
  } catch (err) {
    console.error('Failed to get image from IndexedDB', err);
    return null;
  }
};

const CertificateCard = ({ title, issuer, year }: { title: string, issuer: string, year: string }) => {
  const [image, setImage] = useState<string | null>(null);
  
  const dbKey = `cert_img_${title.replace(/\s+/g, '_')}_${issuer.replace(/\s+/g, '_')}`;

  useEffect(() => {
    let isMounted = true;
    getImageFromDB(dbKey).then(storedImage => {
      if (isMounted && storedImage) {
        setImage(storedImage);
      }
    });
    return () => { isMounted = false; };
  }, [dbKey]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
         alert("Image size should be less than 5MB");
         return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImage(base64String);
        saveImageToDB(dbKey, base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="flex flex-col h-full gap-4 p-6 bg-slate-800/30 border border-slate-700 rounded-2xl hover:bg-slate-800/50 transition-colors group relative overflow-hidden"
    >
      <div className="flex items-start gap-4 flex-grow z-10">
        <div className="p-3 bg-teal-500/10 text-teal-400 rounded-xl shrink-0">
          <Award size={24} />
        </div>
        <div className="flex-grow pr-10">
          <h4 className="text-white font-semibold text-lg leading-tight mb-2">{title}</h4>
          <div className="flex items-center gap-3 text-sm text-slate-400 mb-1">
            <span className="font-medium text-indigo-400">{issuer}</span>
            <span className="w-1 h-1 rounded-full bg-slate-600"></span>
            <span>{year}</span>
          </div>
        </div>
        
        <label 
          className="absolute right-6 top-6 p-2.5 bg-slate-800/80 text-slate-400 hover:text-teal-400 rounded-full cursor-pointer transition-all duration-300 border border-slate-700 hover:border-teal-500/50 opacity-0 group-hover:opacity-100 flex items-center justify-center hover:bg-slate-700 z-10" 
          title={image ? "Replace Certificate Image" : "Upload Certificate Image"}
        >
          <ImagePlus size={18} />
          <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
        </label>
      </div>

      {image && (
        <div className="mt-auto w-full h-56 flex items-center justify-center overflow-hidden rounded-lg border border-slate-700/50 relative group/img bg-slate-900/50 shrink-0">
          <img 
            src={image} 
            alt={`${title} certificate`} 
            className="w-full h-full object-contain rounded-lg transition-opacity"
          />
        </div>
      )}
    </motion.div>
  );
};

