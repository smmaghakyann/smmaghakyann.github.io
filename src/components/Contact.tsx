import { Mail, Github, Linkedin, Instagram, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
        {
                icon: Github,
                label: "GitHub",
                href: "https://github.com/smmaghakyann",
                color: "hover:text-primary",
        },
        {
                icon: Linkedin,
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/sargis-maghakyan-a54588347/",
                color: "hover:text-primary",
        },
        {
                icon: Instagram,
                label: "Instagram",
                href: "https://instagram.com/_saqo0000_",
                color: "hover:text-accent",
        },
];

const Contact = () => {
        return (
                <section id="contact" className="py-20 px-6 relative">
                        <div className="max-w-4xl mx-auto text-center">
                                <div className="animate-fade-in">
                                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                                                Get In{" "}
                                                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                                        Touch
                                                </span>
                                        </h2>
                                        <div className="h-1 w-20 mx-auto bg-gradient-to-r from-primary to-accent mb-8"></div>
                                </div>

                                <p
                                        className="text-xl text-muted-foreground mb-12 animate-fade-in"
                                        style={{ animationDelay: "0.2s" }}
                                >
                                        I'm always open to discussing new projects, creative ideas, or
                                        opportunities to be part of your vision.
                                </p>

                                {/* Contact Cards */}
                                <div
                                        className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto animate-fade-in"
                                        style={{ animationDelay: "0.3s" }}
                                >
                                        {/* Phone */}
                                        <a
                                                href="tel:+37477510015"
                                                className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card/50 hover:border-primary/50 transition-all duration-300"
                                        >
                                                <Phone className="h-5 w-5 text-primary" />
                                                <div className="text-left">
                                                        <p className="text-sm text-muted-foreground">Phone</p>
                                                        <p className="text-foreground font-medium hover:underline">
                                                                +374 77 51 00 15
                                                        </p>
                                                </div>
                                        </a>

                                        {/* Email */}
                                        <a
                                                href="mailto:smmaghakyann@gmail.com"
                                                className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card/50 hover:border-primary/50 transition-all duration-300"
                                        >
                                                <Mail className="h-5 w-5 text-primary" />
                                                <div className="text-left">
                                                        <p className="text-sm text-muted-foreground">Email</p>
                                                        <p className="text-foreground font-medium hover:underline">
                                                                smmaghakyann@gmail.com
                                                        </p>
                                                </div>
                                        </a>

                                        {/* Location */}
                                        <a
                                                href="https://www.google.com/maps/place/Yerevan,+Armenia"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card/50 hover:border-primary/50 transition-all duration-300"
                                        >
                                                <MapPin className="h-5 w-5 text-primary" />
                                                <div className="text-left">
                                                        <p className="text-sm text-muted-foreground">Location</p>
                                                        <p className="text-foreground font-medium hover:underline">
                                                                Yerevan , AM
                                                        </p>
                                                </div>
                                        </a>
                                </div>

                                {/* Social Buttons */}
                                <div
                                        className="flex justify-center gap-6 mb-12 animate-fade-in"
                                        style={{ animationDelay: "0.5s" }}
                                >
                                        {socialLinks.map((social) => (
                                                <Button
                                                        key={social.label}
                                                        variant="outline"
                                                        size="icon"
                                                        className={`border-border ${social.color} transition-all duration-300 hover:scale-110 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20`}
                                                        asChild
                                                >
                                                        <a
                                                                href={social.href}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                aria-label={social.label}
                                                        >
                                                                <social.icon className="h-5 w-5" />
                                                        </a>
                                                </Button>
                                        ))}
                                </div>

                                {/* Footer */}
                                <div
                                        className="border-t border-border pt-8 animate-fade-in"
                                        style={{ animationDelay: "0.7s" }}
                                >
                                        <p className="text-muted-foreground">
                                                © 2025 Fullstack Developer Portfolio. Built with React & Tailwind
            CSS.
                                        </p>
                                </div>
                        </div>
                </section>
        );
};

export default Contact;

