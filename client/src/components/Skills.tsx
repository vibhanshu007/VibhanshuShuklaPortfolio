import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Kotlin", "TypeScript", "Dart", "JavaScript"],
    },
    {
      title: "Android",
      skills: [
        "Android SDK",
        "Jetpack Compose",
        "Hilt",
        "Jetpack Navigation",
        "MVI",
        "MVVM",
        "MVP",
        "ViewModel",
        "LiveData",
        "Retrofit2",
        "Room",
        "Flows",
        "Google Maps",
        "Coroutines",
        "RxJava",
        "GraphQL",
      ],
    },
    {
      title: "React Native",
      skills: [
        "React Native",
        "React Navigation",
        "Redux",
        "iOS",
        "Context API",
        "Native Module Bridging",
        "REST APIs",
      ],
    },
    {
      title: "Flutter",
      skills: ["Flutter", "Provider", "Riverpod", "Flutter Hooks", "Flutter SDK", "Custom Widgets", "Swift"],
    },
    {
      title: "Tools & DevOps",
      skills: [
        "Android Studio",
        "IntelliJ IDEA",
        "VS Code",
        "Git",
        "Jenkins",
        "CI/CD pipelines",
        "GitHub",
        "Docker",
        "Agile",
        "Jira",
      ],
    },
    {
      title: "Testing & Analytics",
      skills: [
        "JUnit",
        "Espresso",
        "Mockito",
        "UI Automator",
        "Firebase Test Lab",
        "GA4",
        "Firebase Analytics",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-skills-heading">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6" data-testid={`card-skill-category-${index}`}>
              <h3 className="text-xl font-semibold mb-4" data-testid={`text-category-title-${index}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="font-mono text-xs"
                    data-testid={`badge-skill-${index}-${skillIndex}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
