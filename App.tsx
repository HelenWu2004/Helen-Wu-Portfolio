import React from 'react';
import { Background } from './components/Background';
import { ChatWidget } from './components/ChatWidget';
import { EXPERIENCES, PROJECTS, SKILLS, EDUCATION } from './constants';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen font-sans text-morandi-charcoal selection:bg-morandi-sage selection:text-white">
      <Background />
      
      <div className="max-w-7xl mx-auto min-h-screen lg:flex">
        
        {/* LEFT COLUMN: Personal Info & Resume Summary */}
        <aside className="lg:w-[35%] lg:h-screen lg:sticky lg:top-0 p-8 lg:p-12 flex flex-col gap-10 overflow-y-auto lg:border-r border-white/30 backdrop-blur-[2px]">
          
          {/* Header / Profile */}
          <div className="space-y-6 animate-fade-in">
             <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/50 shadow-sm mx-auto lg:mx-0 ring-1 ring-morandi-taupe/20 bg-morandi-taupe/10 relative">
                 {/* 
                     NOTE: Please ensure a file named 'helen-cat.jpg' exists in your public/assets folder. 
                 */}
                 <img 
                   src="helen-cat.jpg" 
                   alt="Haiyue (Helen) Wu" 
                   className="w-full h-full object-cover grayscale-[5%] hover:grayscale-0 transition-all duration-500"
                   onError={(e) => {
                     e.currentTarget.style.display = 'none';
                     // Fallback to initials if image missing
                     const parent = e.currentTarget.parentElement!;
                     parent.classList.add('flex', 'items-center', 'justify-center');
                     parent.innerHTML = '<span class="font-serif text-4xl text-morandi-olive">HW</span>';
                   }}
                 />
             </div>
             
             <div className="text-center lg:text-left">
               <h1 className="font-serif text-5xl text-morandi-charcoal tracking-tight">Haiyue (Helen) Wu</h1>
               <p className="text-lg text-morandi-olive font-light mt-2 italic">CS & Statistics at UIUC</p>
               <p className="text-sm text-morandi-taupe mt-1">GPA 4.00/4.00</p>
             </div>

             <div className="flex justify-center lg:justify-start gap-3">
               <a href="mailto:haiyuewu08@gmail.com" className="p-2 bg-white/40 hover:bg-morandi-clay hover:text-white rounded-full transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
               </a>
               <a href="https://github.com/HelenWu2004" target="_blank" rel="noreferrer" className="p-2 bg-white/40 hover:bg-morandi-clay hover:text-white rounded-full transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
               </a>
               <a href="https://www.linkedin.com/in/haiyue-wu" target="_blank" rel="noreferrer" className="p-2 bg-white/40 hover:bg-morandi-clay hover:text-white rounded-full transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
               </a>
             </div>
          </div>

          {/* Education - Succinct */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h3 className="text-morandi-olive uppercase tracking-widest text-xs font-semibold border-b border-morandi-taupe/30 pb-2">Education</h3>
            <div>
              <p className="font-serif text-lg font-medium">{EDUCATION.school}</p>
              <p className="text-sm text-morandi-charcoal/80">{EDUCATION.degree}</p>
              <p className="text-xs text-morandi-taupe mt-1">{EDUCATION.period}</p>
            </div>
            <div className="flex flex-wrap gap-1.5">
               {EDUCATION.courses.map(c => (
                 <span key={c} className="text-[10px] px-2 py-0.5 bg-white/40 rounded-sm text-morandi-olive border border-white/20">{c}</span>
               ))}
            </div>
          </div>

          {/* Skills - Tag Cloud Style */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h3 className="text-morandi-olive uppercase tracking-widest text-xs font-semibold border-b border-morandi-taupe/30 pb-2">Technical Skills</h3>
            <div className="space-y-3">
              {SKILLS.map((grp) => (
                <div key={grp.category}>
                  <span className="text-xs font-semibold text-morandi-clay block mb-1">{grp.category}</span>
                  <div className="flex flex-wrap gap-1">
                    {grp.skills.map(skill => (
                      <span key={skill} className="text-xs px-2 py-1 bg-morandi-sage/10 text-morandi-charcoal/80 rounded hover:bg-morandi-sage/20 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </aside>

        {/* RIGHT COLUMN: Experience & Projects */}
        <main className="lg:w-[65%] p-8 lg:p-12 space-y-16 lg:overflow-y-auto">
          
          {/* About Summary */}
          <section className="animate-fade-in" style={{ animationDelay: '300ms' }}>
             <h2 className="font-serif text-3xl text-morandi-charcoal mb-4">About Me</h2>
             <div className="text-morandi-charcoal/80 leading-relaxed font-light text-lg space-y-4">
               <p>
                 I am Haiyue (Helen) Wu, a senior majoring in Computer Science and Statistics at the University of Illinois Urbana-Champaign (GPA 4.0/4.0). I am proficient in Python, C++, and Go, with a strong passion for designing scalable backend infrastructure and leveraging applied machine learning to solve real-world problems.
               </p>
               <p>
                 My experience includes engineering backend features at Integral Pivots using Go, AWS, and PostgreSQL, where I architected robust CI/CD pipelines with Docker, GitlabCI, and Kubernetes. Previously at UmiUni, I developed a real-time chat system supporting high concurrency using WebSockets, MySQL and Redis, optimizing for scalability and low latency.
               </p>
               <p>
                 In research, I specialize in distributed LLM fine-tuning (e.g., E5-Mistral-7B), end-to-end RAG systems, and Graph Anomaly Detection. Recently, my work on Cluster-Aware Graph Anomaly Detection was accepted to the WWW 2025 Conference, demonstrating a significant improvement over baseline methods. I am eager to apply my background in backend engineering and distributed ML to impactful technical challenges.
               </p>
             </div>
          </section>

          {/* Experience */}
          <section className="animate-fade-in" style={{ animationDelay: '400ms' }}>
            <h2 className="font-serif text-3xl text-morandi-charcoal mb-8 flex items-center gap-3">
              Experience
              <div className="h-px bg-morandi-taupe/30 flex-1"></div>
            </h2>
            
            <div className="space-y-12 border-l border-morandi-taupe/20 pl-6 ml-2">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-morandi-sage rounded-full border-2 border-[#F0EBE5] group-hover:scale-125 transition-transform"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                    <h3 className="font-serif text-xl font-medium text-morandi-charcoal">{exp.company}</h3>
                    <span className="text-xs font-mono text-morandi-olive">{exp.period}</span>
                  </div>
                  
                  <p className="text-sm font-medium text-morandi-clay mb-3">{exp.role} <span className="text-morandi-taupe font-light">| {exp.location}</span></p>
                  
                  <ul className="space-y-2">
                    {exp.points.map((pt, i) => (
                      <li key={i} className="text-sm text-morandi-charcoal/80 leading-relaxed pl-2 relative">
                         <span className="absolute left-[-10px] top-[6px] w-1 h-1 bg-morandi-taupe/50 rounded-full"></span>
                         {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="animate-fade-in mb-20" style={{ animationDelay: '500ms' }}>
            <h2 className="font-serif text-3xl text-morandi-charcoal mb-8 flex items-center gap-3">
              Selected Projects
              <div className="h-px bg-morandi-taupe/30 flex-1"></div>
            </h2>

            <div className="grid grid-cols-1 gap-6">
              {PROJECTS.map((proj, idx) => (
                <div key={idx} className="bg-white/40 hover:bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-white/40 transition-all duration-300 hover:shadow-md">
                   
                   {proj.link ? (
                     <a 
                       href={proj.link} 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="group/link flex items-center gap-2 mb-2 w-fit"
                     >
                        <h3 className="font-serif text-xl text-morandi-charcoal group-hover/link:text-morandi-clay transition-colors">{proj.title}</h3>
                        <svg className="w-4 h-4 text-morandi-taupe group-hover/link:text-morandi-clay transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                     </a>
                   ) : (
                     <h3 className="font-serif text-xl text-morandi-charcoal mb-2">{proj.title}</h3>
                   )}

                   <div className="flex flex-wrap gap-1.5 mb-4">
                     {proj.techStack.map(t => (
                       <span key={t} className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 border border-morandi-dustyBlue/50 text-morandi-olive rounded">
                         {t}
                       </span>
                     ))}
                   </div>
                   <ul className="space-y-2">
                     {proj.description.map((d, i) => (
                       <li key={i} className="text-sm text-morandi-charcoal/70 leading-relaxed flex gap-2">
                         <span className="text-morandi-clay/70 mt-1">•</span>
                         <span>{d}</span>
                       </li>
                     ))}
                   </ul>
                </div>
              ))}
            </div>
          </section>

          <footer className="text-center lg:text-left text-morandi-taupe text-xs py-8 border-t border-morandi-taupe/10">
            © {new Date().getFullYear()} Haiyue (Helen) Wu. Inspired by Monet.
          </footer>
        </main>
      </div>

      <ChatWidget />
    </div>
  );
};

export default App;