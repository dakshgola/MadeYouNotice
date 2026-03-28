import { ArrowUpRight } from "lucide-react";

export default function ProjectShowcase() {
  const projects = [
    { id: 1, title: "Frames in Motion", info: "India / 2024", category: "Commercial", link: "#" },
    { id: 2, title: "Journey Through Time", info: "Delhi / 2023", category: "Documentary", link: "#" },
    { id: 3, title: "Experimental Narratives", info: "Mumbai / 2022", category: "Art Film", link: "#" },
    { id: 4, title: "Echoes of Silence", info: "2024", category: "Short Film", link: "#" },
  ];

  return (
    <section id="projects" className="bg-secondary py-32 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[56px] font-bold tracking-tight mb-20 text-white">Project <span className="text-accent">Showcase</span></h2>
        
        <div className="flex flex-col border-t border-white/10">
          {projects.map((project, i) => (
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.id} 
              className="group flex flex-col md:flex-row md:items-center justify-between py-10 md:py-16 border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-500 cursor-pointer"
            >
              <div className="flex-1 mb-6 md:mb-0">
                <span className="text-accent text-sm font-medium tracking-widest uppercase mb-4 block">
                  0{i + 1} &mdash; {project.category}
                </span>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight group-hover:pl-4 transition-all duration-500 text-white">
                  {project.title}
                </h3>
              </div>
              
              <div className="flex items-center justify-between md:justify-end md:gap-12 flex-1">
                <p className="text-textSecondary text-lg">{project.info}</p>
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-primary transition-all duration-500">
                  <ArrowUpRight className="w-6 h-6 transform group-hover:rotate-45 transition-transform duration-500" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
