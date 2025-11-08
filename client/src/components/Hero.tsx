import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Download, ArrowDown } from "lucide-react";
import heroImage from "@assets/generated_images/Professional_headshot_portrait_666ef228.png";
import heroBg from "@assets/generated_images/Tech_hero_background_b9cf1fbe.png";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadResume = () => {
    window.open("/attached_assets/Vibhanshu_Shukla_Resume_1762594194133.pdf", "_blank");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight" data-testid="text-hero-name">
                Vibhanshu Shukla
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-blue-300" data-testid="text-hero-title">
                Lead Mobile Engineer | Android Expert | Cross-Platform Specialist
              </h2>
              <p className="text-lg lg:text-xl text-gray-300 max-w-2xl" data-testid="text-hero-tagline">
                Architecting scalable mobile solutions across Android, React Native & Flutter ecosystems with 10+ years of expertise
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                data-testid="button-view-projects"
                className="bg-primary text-primary-foreground border border-primary-border"
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleDownloadResume}
                data-testid="button-download-resume"
                className="backdrop-blur-sm bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/vibhanshu_shukla"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-linkedin"
                className="hover-elevate active-elevate-2"
              >
                <Button size="icon" variant="ghost" className="text-white hover:text-blue-400">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </a>
              <a
                href="https://github.com/vibhanshu_shukla"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-github"
                className="hover-elevate active-elevate-2"
              >
                <Button size="icon" variant="ghost" className="text-white hover:text-blue-400">
                  <Github className="w-5 h-5" />
                </Button>
              </a>
              <a
                href="mailto:vibhanshumail849@gmail.com"
                data-testid="link-email"
                className="hover-elevate active-elevate-2"
              >
                <Button size="icon" variant="ghost" className="text-white hover:text-blue-400">
                  <Mail className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
              <img
                src={heroImage}
                alt="Vibhanshu Shukla"
                className="relative rounded-full w-96 h-96 object-cover border-4 border-white/10"
                data-testid="img-hero-portrait"
              />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
        data-testid="button-scroll-down"
      >
        <ArrowDown className="w-8 h-8" />
      </button>
    </section>
  );
}
