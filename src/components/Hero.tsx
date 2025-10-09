import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Hero = () => {
        const handleDownloadCV = () => {
                const link = document.createElement('a');
                link.href = '/CV Sargis Maghakyan.pdf';
                link.download = 'CV Sargis Maghakyan.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
        };

        return (
                <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20">
                        {/* Animated background effects */}
                        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted opacity-50"></div>
                        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-glow-pulse"></div>
                        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }}></div>

                        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
                                <div className="space-y-4 animate-fade-in">
                                        <p className="text-lg md:text-xl text-primary/80 font-semibold tracking-wider uppercase">
                                                Hello, I'm
                                        </p>
                                        <h1 className="text-5xl md:text-7xl font-bold text-foreground animate-fade-in-up">
                                                Sargis Maghakyan
                                        </h1>
                                        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                                                Fullstack Developer
                                        </h2>
                                        <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent animate-fade-in" style={{ animationDelay: '0.2s' }}></div>
                                </div>

                                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
                                        Building innovative web solutions with modern technologies.
                                        Transforming ideas into powerful digital experiences.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
                                        <Button 
                                                onClick={handleDownloadCV}
                                                size="lg"
                                                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all duration-300 group"
                                        >
                                                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                                                Download CV
                                        </Button>
                                        <Button 
                                                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                                                size="lg"
                                                variant="outline"
                                                className="border-primary text-primary hover:bg-primary/10 shadow-lg hover:shadow-primary/30 transition-all duration-300"
                                        >
                                                View Projects
                                        </Button>
                                </div>
                        </div>
                </section>
        );
};

export default Hero;
