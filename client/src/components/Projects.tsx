import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import b2bImage from "@assets/generated_images/B2B_commerce_app_screenshot_5b2f881d.png";
import healthImage from "@assets/generated_images/Healthcare_app_screenshot_0a21cc8f.png";
import analyticsImage from "@assets/generated_images/Analytics_dashboard_screenshot_68d4dfa3.png";
import tracingImage from "@assets/generated_images/Contact_tracing_app_screenshot_472a6701.png";

export default function Projects() {
  const projects = [
    {
      title: "Compre Ahora",
      company: "Accenture",
      period: "May 2021 - Present",
      description:
        "B2B mobile app for top retail brand enabling 10K+ daily product transactions across 6+ markets, boosting sales efficiency by 25%",
      highlights: [
        "Led team delivering 10+ secure apps with 30% faster release",
        "Integrated 6+ third-party systems (payment, auth, analytics)",
        "100% rollout across QA, UAT, and Production environments",
      ],
      techStack: ["Android SDK", "Kotlin", "Jetpack", "Coroutines", "Retrofit", "Firebase"],
      image: b2bImage,
      featured: true,
    },
    {
      title: "Tindanhan Club PH",
      company: "Accenture",
      period: "March 2023 - Present",
      description:
        "Mobile solution for top-tier retail brand targeting B2B clients, deployed in 6 international markets with country-specific customizations",
      highlights: [
        "Architected scalable multi-market mobile solution",
        "Provided technical leadership to Android teams",
        "Integrated multiple third-party systems",
      ],
      techStack: ["React Native", "TypeScript", "Redux", "Apollo", "GraphQL", "Firebase"],
      image: b2bImage,
      featured: true,
    },
    {
      title: "Ucube.AI",
      company: "Accenture",
      period: "March 2024 - Present",
      description:
        "Real-time performance tracking app enabling leadership to monitor team and individual KPIs, targets, and actionable insights",
      highlights: [
        "Individualized target setting and metric visualization",
        "Strategic insight generation for team optimization",
        "Real-time sales, revenue, and market share tracking",
      ],
      techStack: ["Android SDK", "Kotlin", "Jetpack Compose", "Coroutines", "Retrofit"],
      image: analyticsImage,
      featured: true,
    },
    {
      title: "Ohana Health Plan",
      company: "Infinite Computer Solutions",
      period: "May 2018 - April 2021",
      description:
        "Healthcare app allowing users to search 200+ hospitals, providers, care plans with integrated Google Maps for 500+ healthcare centers",
      highlights: [
        "Implemented certificate pinning securing 1M+ logins",
        "Met HIPAA compliance standards",
        "Geofence range functionality (5-10 Km)",
      ],
      techStack: ["Android SDK", "Kotlin", "Jetpack", "Retrofit", "WebRTC", "Firebase"],
      image: healthImage,
    },
    {
      title: "Contact Tracing App",
      company: "Infinite Computer Solutions",
      period: "April 2020 - April 2021",
      description:
        "Contact tracing app used by 1,000+ employees during COVID-19 pandemic with Bluetooth/GPS proximity detection",
      highlights: [
        "Calculated infection risk based on contact history",
        "Live COVID-19 stats and health instructions",
        "BLE and GATT protocol implementation",
      ],
      techStack: ["Android SDK", "Kotlin", "BLE", "GATT", "Firebase"],
      image: tracingImage,
    },
    {
      title: "My Niwas",
      company: "Infinite Computer Solutions",
      period: "2019 - 2020",
      description: "Real estate app securing access for 500+ households with role-based controls",
      highlights: ["Role-based access control implementation", "Household management features", "Secure authentication"],
      techStack: ["Android SDK", "Kotlin", "Firebase"],
      image: b2bImage,
    },
    {
      title: "CLC Driver App",
      company: "Infinite Computer Solutions",
      period: "2019",
      description: "Delivery operations app with real-time GPS tracking, reducing delivery time by 20%",
      highlights: [
        "Real-time GPS integration",
        "Route optimization",
        "Multi-location delivery management",
      ],
      techStack: ["Android SDK", "Kotlin", "Google Maps", "Firebase"],
      image: b2bImage,
    },
    {
      title: "LawBuddy",
      company: "CubeSquare Technology",
      period: "2017 - 2018",
      description: "Legal service app enabling lawyers to manage appointments and chat with clients, adopted by 50+ professionals",
      highlights: [
        "Appointment management system",
        "Real-time chat integration",
        "Client management features",
      ],
      techStack: ["Android SDK", "Java", "Firebase", "XMPP"],
      image: b2bImage,
    },
    {
      title: "NTPC – Vendor Invoice Status",
      company: "CubeSquare Technology",
      period: "2017 - 2018",
      description: "Enabled 5,000+ vendors to track invoices and cash flow, improving transparency by 35%",
      highlights: [
        "Invoice tracking system",
        "Cash flow management",
        "National compliance alignment",
      ],
      techStack: ["Android SDK", "Java", "REST APIs"],
      image: b2bImage,
    },
    {
      title: "TabKids – Framework",
      company: "Pensar Solutions",
      period: "2015 - 2017",
      description: "Interactive education platform boosting engagement by 40% with gamified learning modules",
      highlights: [
        "Gamified learning modules",
        "Parent monitoring hybrid app",
        "Early learner engagement features",
      ],
      techStack: ["Android SDK", "Java", "Ionic", "Angular"],
      image: b2bImage,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-projects-heading">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Showcasing impactful mobile solutions across healthcare, B2B commerce, real-time tracking, and enterprise
            applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`flex flex-col hover-elevate ${project.featured ? "border-primary" : ""}`}
              data-testid={`card-project-${index}`}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-md h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    data-testid={`img-project-${index}`}
                  />
                  {project.featured && (
                    <Badge className="absolute top-3 right-3 bg-primary" data-testid={`badge-featured-${index}`}>
                      Featured
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-1 p-6">
                <h3 className="text-xl font-semibold mb-2" data-testid={`text-project-title-${index}`}>
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <span data-testid={`text-project-company-${index}`}>{project.company}</span>
                  <span>•</span>
                  <Calendar className="w-3 h-3" />
                  <span data-testid={`text-project-period-${index}`}>{project.period}</span>
                </div>
                <p className="text-sm mb-4 text-foreground" data-testid={`text-project-description-${index}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs font-mono"
                      data-testid={`badge-tech-${index}-${techIndex}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.techStack.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.techStack.length - 4}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
