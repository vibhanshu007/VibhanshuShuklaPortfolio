import { Mail, Github, Linkedin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2" data-testid="text-footer-name">
              Vibhanshu Shukla
            </h3>
            <p className="text-muted-foreground" data-testid="text-footer-tagline">
              Lead Mobile Engineer | Building the future, one app at a time
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/vibhanshu_shukla"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-footer-linkedin"
            >
              <Button size="icon" variant="ghost" className="hover-elevate">
                <Linkedin className="w-5 h-5" />
              </Button>
            </a>
            <a
              href="https://github.com/vibhanshu_shukla"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-footer-github"
            >
              <Button size="icon" variant="ghost" className="hover-elevate">
                <Github className="w-5 h-5" />
              </Button>
            </a>
            <a href="mailto:vibhanshumail849@gmail.com" data-testid="link-footer-email">
              <Button size="icon" variant="ghost" className="hover-elevate">
                <Mail className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p data-testid="text-footer-copyright" className="flex items-center justify-center gap-2">
            © 2025 Vibhanshu Shukla. Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
