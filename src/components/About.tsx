import { Code2, Database, Layout, Server } from "lucide-react";

const skills = [
  {
    icon: Layout,
    title: "Frontend Development",
    description: "React, Vue.js, Next.js, TypeScript, Tailwind CSS"
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Node.js, Express, Python, Django, REST APIs"
  },
  {
    icon: Database,
    title: "Database Management",
    description: "PostgreSQL, MongoDB, MySQL, Redis"
  },
  {
    icon: Code2,
    title: "DevOps & Tools",
    description: "Docker, Git, CI/CD, AWS, Linux"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-primary to-accent"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <skill.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a passionate fullstack developer with expertise in building scalable web applications. 
            With a strong foundation in both frontend and backend technologies, I create seamless 
            digital experiences that combine beautiful design with robust functionality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
