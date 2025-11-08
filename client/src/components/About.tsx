import { Card } from "@/components/ui/card";
import { Code2, Smartphone, Layers, Users } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Code2, value: "10+", label: "Years Android" },
    { icon: Smartphone, value: "4+", label: "Years React Native" },
    { icon: Layers, value: "2+", label: "Years Flutter" },
    { icon: Users, value: "10+", label: "Teams Led" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-about-heading">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6 text-base lg:text-lg text-foreground">
            <p data-testid="text-about-intro">
              I'm a passionate mobile engineer with over 10 years of experience building robust, scalable applications
              that serve millions of users. My journey in mobile development has taken me across diverse industries
              including healthcare, B2B commerce, logistics, and legal tech.
            </p>
            <p data-testid="text-about-expertise">
              At Accenture, I've been leading mobile architecture initiatives for enterprise-scale applications,
              mentoring development teams, and implementing CI/CD pipelines that have reduced release cycles by 30%. I
              specialize in clean architecture patterns, modern state management, and creating seamless cross-platform
              experiences.
            </p>
            <p data-testid="text-about-approach">
              My approach combines technical excellence with a deep understanding of user needs. I've integrated
              cutting-edge technologies like WebRTC, Bluetooth Low Energy, AI/ML models with TensorFlow Lite, and
              built offline-first applications that work flawlessly in challenging network conditions.
            </p>
            <p data-testid="text-about-passion">
              Beyond coding, I'm passionate about improving team efficiency, establishing best practices, and fostering
              a culture of continuous learning. I believe great software is built by great teams working with great
              processes.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="p-6 text-center hover-elevate cursor-default"
                data-testid={`card-stat-${index}`}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold mb-1" data-testid={`text-stat-value-${index}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground" data-testid={`text-stat-label-${index}`}>
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
