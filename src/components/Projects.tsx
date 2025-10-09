import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Camera Security System",
    description: "Smart camera security system with real-time monitoring, motion detection, and instant alerts — designed for reliable, accessible, and user-friendly surveillance.",
    tags: ["Mani", "Node.js", "PostgreSQL", "FFmpeg"],
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Mechitaris web site",
    description: "A modern website for the Mekhitarist community, showcasing heritage, culture, and educational resources with an elegant design and user-friendly navigation.",
    tags: ["React", "Metax", "MongoDB", "Node.js"],
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Online shop",
    description: "An online shopping platform with a modern interface, secure checkout, and responsive design — providing users a seamless browsing and purchasing experience.",
    tags: ["Mani", "Express", "Redis", "Socket.io"],
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "AI Content Generator",
    description: "AI-powered content creation platform with natural language processing and template customization.",
    tags: ["React", "Python", "FastAPI", "OpenAI"],
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "Fitness Tracking App",
    description: "Mobile-responsive fitness application with workout plans, progress tracking, and nutrition guides.",
    tags: ["React Native", "Firebase", "Redux", "Charts"],
    gradient: "from-indigo-500/20 to-blue-500/20"
  },
  {
    title: "Real Estate Platform",
    description: "Property listing platform with advanced search filters, virtual tours, and mortgage calculators.",
    tags: ["Next.js", "PostgreSQL", "Mapbox", "AWS"],
    gradient: "from-yellow-500/20 to-orange-500/20"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-primary to-accent"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient} group-hover:h-3 transition-all duration-300`}></div>
              <CardHeader>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
