import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-education-heading">
            Education & Achievements
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="p-8" data-testid="card-education">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-md">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2" data-testid="text-degree">
                  B.Tech (Information Technologies)
                </h3>
                <p className="text-lg text-muted-foreground mb-1" data-testid="text-university">
                  BBD Lucknow (UPTU)
                </p>
                <p className="text-sm text-muted-foreground" data-testid="text-education-period">
                  July 2010 – July 2014
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8" data-testid="card-achievements">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-md">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold" data-testid="text-achievements-heading">
                  Professional Certifications
                </h3>
              </div>
            </div>
            <ul className="space-y-4 ml-4">
              <li className="flex gap-3" data-testid="text-achievement-0">
                <span className="text-primary mt-1.5">•</span>
                <span className="text-foreground">Certified Technology Architect Associate - Accenture</span>
              </li>
              <li className="flex gap-3" data-testid="text-achievement-1">
                <span className="text-primary mt-1.5">•</span>
                <span className="text-foreground">Certified Accenture Automation Engineer</span>
              </li>
              <li className="flex gap-3" data-testid="text-achievement-2">
                <span className="text-primary mt-1.5">•</span>
                <span className="text-foreground">React Native - The Practical Guide</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
