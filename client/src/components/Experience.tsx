import { Card } from "@/components/ui/card";
import { Building2, Calendar } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Accenture",
      role: "Digital Tech Developer Assoc Manager",
      period: "May 2021 - Present",
      location: "Bengaluru, India",
      achievements: [
        "Served as mobile architect for a scalable B2B e-commerce app, leading architecture design across data and integration layers",
        "Optimized mobile delivery by implementing CI/CD, test plans, and docs, reducing release time by 30%",
        "Improved code quality and team efficiency by introducing best practices and mentoring developers, cutting bugs by 40%",
      ],
    },
    {
      company: "Infinite Computer Solutions",
      role: "Software Engineer",
      period: "May 2018 - April 2021",
      location: "Bengaluru, India",
      achievements: [
        "Constructed 7+ modular Android app features using Kotlin and Jetpack Compose, leading to a 20% decrease in code-related bugs",
        "Architected 3+ React Native POCs, helping convert 2 enterprise clients and accelerating new project acquisition by 25%",
        "Coordinated QA/UAT and store releases, achieving 95% success rate & reducing post-release issues by 40%",
      ],
    },
    {
      company: "CubeSquare Technology Pvt. Ltd.",
      role: "Software Engineer",
      period: "Sep 2017 - May 2018",
      location: "India",
      achievements: [
        "Delivered 4+ Android and hybrid apps using Java and Angular/Ionic, reducing cross-platform delivery time by 25%",
        "Analyzed feature feasibility to streamline planning and reduce delivery rework, improving release efficiency by 30%",
      ],
    },
    {
      company: "Pensar Solutions Pvt. Ltd",
      role: "Android Developer",
      period: "Dec 2014 - Aug 2017",
      location: "India",
      achievements: [
        "Engineered Android apps for e-learning and parental use, increasing school engagement and adoption",
        "Managed multi-version Android pipelines, decreasing manual effort and boosting consistency by 35%",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-experience-heading">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 hover-elevate" data-testid={`card-experience-${index}`}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2" data-testid={`text-exp-company-${index}`}>
                    {exp.company}
                  </h3>
                  <p className="text-lg text-primary font-medium mb-1" data-testid={`text-exp-role-${index}`}>
                    {exp.role}
                  </p>
                  <p className="text-sm text-muted-foreground" data-testid={`text-exp-location-${index}`}>
                    {exp.location}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm" data-testid={`text-exp-period-${index}`}>
                    {exp.period}
                  </span>
                </div>
              </div>
              <ul className="space-y-2 ml-4">
                {exp.achievements.map((achievement, achIndex) => (
                  <li
                    key={achIndex}
                    className="text-foreground flex gap-3"
                    data-testid={`text-exp-achievement-${index}-${achIndex}`}
                  >
                    <span className="text-primary mt-1.5">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
