import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, MapPin, Download } from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "vibhanshumail849@gmail.com",
      href: "mailto:vibhanshumail849@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8953199496",
      href: "tel:+918953199496",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "vibhanshu_shukla",
      href: "https://www.linkedin.com/in/vibhanshu_shukla",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "vibhanshu_shukla",
      href: "https://github.com/vibhanshu_shukla",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bengaluru, India",
      href: null,
    },
  ];

  const handleDownloadResume = () => {
    window.open("/attached_assets/Vibhanshu_Shukla_Resume_1762594194133.pdf", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-contact-heading">
            Let's Build Something Amazing
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities, innovative projects, or just connecting with
            fellow developers. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className={`p-6 ${method.href ? "hover-elevate cursor-pointer" : ""}`}
              onClick={() => method.href && window.open(method.href, method.href.startsWith("http") ? "_blank" : "_self")}
              data-testid={`card-contact-${index}`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-md">
                  <method.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-muted-foreground mb-1" data-testid={`text-contact-label-${index}`}>
                    {method.label}
                  </h3>
                  <p className="text-foreground font-medium truncate" data-testid={`text-contact-value-${index}`}>
                    {method.value}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={handleDownloadResume}
            data-testid="button-download-resume-footer"
            className="bg-primary text-primary-foreground border border-primary-border"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
