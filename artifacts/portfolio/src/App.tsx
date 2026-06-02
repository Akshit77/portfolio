import { useEffect, ReactNode } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, Terminal, Github, Linkedin, Mail, ExternalLink, Code2, Layers, Cpu, Database, ChevronDown } from "lucide-react";

import heroBg from "@/assets/hero-bg.png";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";

const FadeIn = ({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-background/60 border-b border-border/40">
        <div className="font-mono font-bold text-xl tracking-tighter text-primary">
          AP<span className="text-foreground/30">_</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
          <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</a>
          <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
        </div>
        <a href="#contact" className="px-5 py-2 text-xs font-mono font-bold bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-transform hover:scale-105 active:scale-95">
          CONNECT
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center pt-20 px-6 md:px-12 lg:px-24">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        >
          <img src={heroBg} alt="Background" className="w-full h-full object-cover grayscale mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
        </motion.div>

        <div className="relative z-10 max-w-5xl">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[1px] w-12 bg-primary"></span>
              <span className="font-mono text-primary uppercase tracking-widest text-sm font-semibold">Software Engineer</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
              Akshit <br />
              Pathak<span className="text-primary">.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2} className="max-w-2xl">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
              I build precise, high-performance digital products. Focused on crafting elegant architectures and obsessive user experiences that scale gracefully.
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="flex flex-wrap gap-4">
            <a href="#projects" className="group flex items-center gap-2 px-6 py-4 bg-foreground text-background font-bold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              View Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-4 border border-border bg-background/50 backdrop-blur font-bold rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-colors">
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </FadeIn>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="p-3 text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* About & Skills */}
      <section id="about" className="py-32 px-6 md:px-12 lg:px-24 border-t border-border/50 bg-secondary/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4">
                <Terminal className="text-primary w-8 h-8" />
                System Architect. <br/> Product Builder.
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  I bridge the gap between complex engineering problems and flawless user experiences. My approach to software development is rooted in intentionality — every line of code, architectural decision, and micro-interaction is purposeful.
                </p>
                <p>
                  With expertise across the modern full-stack ecosystem, I've built everything from high-throughput distributed systems to pixel-perfect, animation-heavy frontend applications.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FadeIn delay={0.1}>
              <div className="p-8 border border-border/50 bg-background/50 rounded-2xl hover:border-primary/30 transition-colors h-full">
                <Code2 className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Frontend</h3>
                <p className="text-sm text-muted-foreground">React, TypeScript, Next.js, Tailwind, Framer Motion, WebGL</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="p-8 border border-border/50 bg-background/50 rounded-2xl hover:border-primary/30 transition-colors h-full">
                <Database className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Backend</h3>
                <p className="text-sm text-muted-foreground">Node.js, Go, PostgreSQL, Redis, GraphQL, REST APIs</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="p-8 border border-border/50 bg-background/50 rounded-2xl hover:border-primary/30 transition-colors h-full">
                <Cpu className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Systems</h3>
                <p className="text-sm text-muted-foreground">AWS, Docker, Kubernetes, CI/CD, Terraform</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="p-8 border border-border/50 bg-background/50 rounded-2xl hover:border-primary/30 transition-colors h-full">
                <Layers className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Architecture</h3>
                <p className="text-sm text-muted-foreground">Microservices, Event-Driven, Serverless, System Design</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tight">Experience</h2>
          </FadeIn>

          <div className="space-y-16">
            {[
              {
                role: "Senior Software Engineer",
                company: "Nexus Technologies",
                period: "2022 — Present",
                desc: "Led the architectural redesign of the core data processing engine, increasing throughput by 300%. Mentored a team of 5 engineers and established rigorous CI/CD practices."
              },
              {
                role: "Full Stack Engineer",
                company: "Elevate Startup",
                period: "2019 — 2022",
                desc: "Built a real-time collaborative dashboard from scratch using React, WebSockets, and Node.js. Scaled the platform from 0 to 50,000 active users."
              },
              {
                role: "Frontend Developer",
                company: "Creative Digital Agency",
                period: "2017 — 2019",
                desc: "Developed high-performance, award-winning marketing sites and e-commerce platforms for global brands."
              }
            ].map((job, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="group relative pl-8 md:pl-0 border-l-2 md:border-l-0 border-border md:grid md:grid-cols-[1fr_3fr] gap-8 hover:bg-secondary/20 p-6 -mx-6 rounded-xl transition-colors">
                  <div className="hidden md:block">
                    <span className="font-mono text-sm text-primary font-bold">{job.period}</span>
                  </div>
                  <div>
                    <div className="md:hidden font-mono text-sm text-primary font-bold mb-2">{job.period}</div>
                    <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{job.role}</h3>
                    <h4 className="text-lg text-muted-foreground mb-4">{job.company}</h4>
                    <p className="text-muted-foreground leading-relaxed">{job.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-32 px-6 md:px-12 lg:px-24 bg-secondary/10 border-y border-border/50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">Selected Work</h2>
              <div className="h-[2px] flex-grow bg-border/50 max-w-sm"></div>
            </div>
          </FadeIn>

          <div className="space-y-32">
            {[
              {
                title: "Aura Analytics",
                type: "SaaS Platform",
                desc: "A high-performance analytics dashboard for enterprise teams. Features real-time data visualization, custom report generation, and predictive modeling.",
                tech: ["React", "TypeScript", "D3.js", "Go", "PostgreSQL"],
                img: project1,
                align: "left"
              },
              {
                title: "Nexus CLI",
                type: "Developer Tool",
                desc: "A blazingly fast command-line interface for managing distributed cloud infrastructure. Built with Rust and optimized for zero-latency operations.",
                tech: ["Rust", "CLI", "AWS API", "WebSockets"],
                img: project2,
                align: "right"
              },
              {
                title: "FinTrack Mobile",
                type: "Mobile Application",
                desc: "A sleek, intuitive mobile application for personal wealth management. Features secure bank integrations, AI-driven insights, and a beautiful dark mode UI.",
                tech: ["React Native", "GraphQL", "Node.js", "Redis"],
                img: project3,
                align: "left"
              }
            ].map((project, idx) => (
              <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${project.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                <FadeIn delay={0.1} className={project.align === 'right' ? 'lg:order-2' : ''}>
                  <div className="relative group rounded-2xl overflow-hidden border border-border/50 aspect-video">
                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.2} className={project.align === 'right' ? 'lg:order-1' : ''}>
                  <div className="font-mono text-primary text-sm font-bold tracking-wider mb-4 uppercase">{project.type}</div>
                  <h3 className="text-3xl md:text-4xl font-black mb-6">{project.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-background border border-border rounded-full text-xs font-mono text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a href="#" className="inline-flex items-center gap-2 text-foreground font-bold hover:text-primary transition-colors">
                    <ExternalLink className="w-5 h-5" />
                    View Case Study
                  </a>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-40 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center justify-center p-4 bg-primary/10 text-primary rounded-full mb-8">
              <Mail className="w-8 h-8" />
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-8">Let's build something extraordinary.</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <a href="mailto:hello@example.com" className="inline-flex items-center justify-center px-8 py-5 text-lg font-bold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-transform hover:scale-105 active:scale-95 mb-20">
              Say Hello
            </a>
            
            <div className="flex items-center justify-center gap-8">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-mono font-bold tracking-widest">
                X / TWITTER
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center border-t border-border/50 bg-background">
        <p className="text-muted-foreground text-sm font-mono">
          &copy; {new Date().getFullYear()} Akshit Pathak. All rights reserved. <br/>
          <span className="opacity-50">Designed & Engineered with precision.</span>
        </p>
      </footer>
    </div>
  );
}
