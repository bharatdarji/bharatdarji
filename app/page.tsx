"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Phone, Download, ArrowRight } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-semibold text-lg">Bharat Darji</h1>
              <p className="text-sm text-muted-foreground">.NET Developer</p>
            </div>
            <div className="flex items-center gap-6">
              <Link href="#about" className="text-sm hover:text-primary transition-colors hidden md:block">
                About
              </Link>
              <Link href="#experience" className="text-sm hover:text-primary transition-colors hidden md:block">
                Experience
              </Link>
              <Link href="#projects" className="text-sm hover:text-primary transition-colors hidden md:block">
                Projects
              </Link>
              <Link href="#skills" className="text-sm hover:text-primary transition-colors hidden md:block">
                Skills
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl mx-auto">
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full mb-8 animate-in fade-in slide-in-from-left-4 duration-700"></div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
            Bharat Darji
          </h2>
          <p className="text-xl md:text-2xl text-primary font-medium mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            .NET Developer
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            I build scalable web applications, APIs, and dashboard solutions with expertise in .NET MVC, WebAPI, and
            modern JavaScript frameworks. With over 3 years of experience, I specialize in creating robust,
            high-performance systems that solve real business problems.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-4 md:gap-6 mb-8 text-sm text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <div className="flex items-center gap-2 hover:text-foreground transition-colors">
              <MapPin className="w-4 h-4" />
              <span>Surat, Gujarat, India</span>
            </div>
            <div className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 76009-97393</span>
            </div>
            <div className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Mail className="w-4 h-4" />
              <a href="mailto:bharatdarji.b@gmail.com" className="hover:text-primary transition-colors">
                bharatdarji.b@gmail.com
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-[400ms]">
            <Button size="lg" className="gap-2 group" asChild>
              <a href="mailto:bharatdarji.b@gmail.com">
                Get in Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
              <a href="/resume.pdf" download>
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-3 mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <Button
              variant="outline"
              size="icon"
              className="hover:border-primary hover:text-primary transition-colors bg-transparent"
              asChild
            >
              <a href="https://github.com/bharatdarji" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover:border-primary hover:text-primary transition-colors bg-transparent"
              asChild
            >
              <a href="https://linkedin.com/in/bharat-darji" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover:border-primary hover:text-primary transition-colors bg-transparent"
              asChild
            >
              <a href="mailto:bharatdarji.b@gmail.com">
                <Mail className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-20 md:py-28 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-balance">Professional Summary</h3>
          <div className="text-muted-foreground leading-relaxed space-y-4 text-base md:text-lg">
            <p>
              .NET Developer with over 3 years of experience in developing Web Applications, APIs, Windows Services,
              Console Applications, and Utility Projects using ASP.NET MVC. Strong in object-oriented design,
              problem-solving, complexity analysis, and debugging.
            </p>
            <p>
              Proficient in .NET, Web API, Web Services, JSON, SQL Server, Kendo UI, DevExpress Dashboard Designer, and
              Elastic Search. Experienced in front-end and back-end development with expertise in responsive UI design
              using HTML5, CSS, Bootstrap, and JavaScript/jQuery.
            </p>
            <p>
              Known for writing clean, efficient, and reusable code with a focus on performance optimization, privacy,
              and security. Created custom architecture for multi-tenant web applications serving multiple databases and
              clients with a single deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container mx-auto px-6 py-20 md:py-28 border-t border-border bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Experience</h3>
          <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-px before:bg-border">
            <div className="relative">
              <div className="absolute -left-[33px] top-2 w-2 h-2 rounded-full bg-primary ring-4 ring-background"></div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                <div>
                  <h4 className="text-xl md:text-2xl font-semibold">Software Developer</h4>
                  <p className="text-primary font-medium text-lg">Galaxy Infotech (Syspro ERP)</p>
                  <p className="text-sm text-muted-foreground">Surat, Gujarat</p>
                </div>
                <p className="text-sm text-muted-foreground md:text-right">Nov 2022 – Present</p>
              </div>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground leading-relaxed mt-6">
                <li>
                  Designed and implemented WebAPIs for ERP system integration with third-party platforms like Shopify
                  and MagentoBI
                </li>
                <li>Built sales dashboards, loyalty systems, and multi-store management solutions in .NET MVC</li>
                <li>
                  Created advanced custom dashboards with DevExpress for sales, purchase, and outstanding tracking
                </li>
                <li>Led frontend team for catalog management project with ReactJS and React Native</li>
                <li>Conducted research to solve rendering issues in React Native and optimized performance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-6 py-20 md:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Key Projects</h3>
          <p className="text-muted-foreground mb-12 max-w-2xl text-lg">
            A selection of projects showcasing my expertise in API development, dashboard design, and full-stack
            solutions.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-6 py-20 md:py-28 border-t border-border bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Technical Skills</h3>
          <p className="text-muted-foreground mb-12 max-w-2xl text-lg">
            Comprehensive expertise across modern development technologies and frameworks.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-primary rounded-full"></div>
                Languages & Frameworks
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-primary rounded-full"></div>
                Databases
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-primary rounded-full"></div>
                Tools & Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-primary rounded-full"></div>
                Reporting & Search
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.reporting.map((skill, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="container mx-auto px-6 py-20 md:py-28 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Key Achievements</h3>
          <div className="space-y-6">
            {achievements.map((achievement, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="container mx-auto px-6 py-20 md:py-28 border-t border-border bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Education</h3>
          <div className="p-6 rounded-lg border border-border bg-card">
            <h4 className="text-xl md:text-2xl font-semibold mb-2">Bachelor of Computer Application (BCA)</h4>
            <p className="text-primary font-medium text-lg">Veer Narmad South Gujarat University</p>
            <p className="text-sm text-muted-foreground mt-2">May 2015 • 71%</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>© 2025 Bharat Darji. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

const projects = [
  {
    title: "Shopify Integration API",
    description:
      "Developed a .NET WebAPI to push ERP data directly into Shopify stores. Designed for scalability and automation; project delivered single-handedly.",
    technologies: [".NET WebAPI", "Shopify", "REST API"],
  },
  {
    title: "MagentoBI Webhook API",
    description:
      "Built webhook callback endpoints for data synchronization between ERP and MagentoBI. Enabled dynamic dashboards and reporting for clients.",
    technologies: [".NET WebAPI", "MagentoBI", "Webhooks"],
  },
  {
    title: "Sales Dashboard",
    description:
      "Developed a .NET MVC portal to display daily sales at specific intervals as per client needs. Provided real-time insights for business decisions.",
    technologies: [".NET MVC", "DevExpress", "SQL Server"],
  },
  {
    title: "Custom DevExpress Dashboards",
    description:
      "Created multiple dashboards for tracking sales, purchase, and outstanding balances. Delivered interactive visualization tools.",
    technologies: ["DevExpress", ".NET MVC", "SQL Server"],
  },
  {
    title: "Catalog Management with Elasticsearch",
    description:
      "Developed APIs for catalog management of customers and suppliers. Implemented Elasticsearch for faster data retrieval.",
    technologies: [".NET WebAPI", "Elasticsearch", "ReactJS"],
  },
  {
    title: "Loyalty & Rewards System",
    description:
      "Designed customer loyalty and reward system in .NET MVC. Increased customer engagement and retention rates significantly.",
    technologies: [".NET MVC", "SQL Server", "JavaScript"],
  },
  {
    title: "Multi-Store Counter System",
    description: "Built ERP-based store counter system to track and manage sales across multiple stores and counters.",
    technologies: [".NET MVC", "SQL Server", "Kendo UI"],
  },
  {
    title: "Vendor & Customer Portal",
    description:
      "Designed portal allowing vendors and customers to view invoices and order statuses securely. Reduced manual follow-ups by 40%.",
    technologies: [".NET MVC", "SQL Server", "Bootstrap"],
  },
  {
    title: "Task Management Mobile App",
    description:
      "Led project to build a cross-platform task management app. Designed architecture, UI/UX, and backend Web APIs.",
    technologies: ["React Native", ".NET WebAPI", "Firebase"],
  },
]

const skills = {
  languages: [
    ".NET MVC",
    "PHP",
    ".NET WebAPI",
    "JavaScript",
    "jQuery",
    "ReactJS",
    "React Native",
    "HTML",
    "CSS",
    "SCSS",
  ],
  databases: ["SQL Server", "MS Access"],
  tools: ["Git", "Visual Studio", "VS Code", "Postman", "Firebase"],
  reporting: ["Crystal Reports", "DevExpress Dashboards", "Elasticsearch"],
}

const achievements = [
  "Successfully developed and deployed APIs and dashboards used by 100+ clients in ERP projects",
  "Recognized for independently delivering Shopify integration API and MagentoBI Webhook services",
  "Optimized React Native performance for large data rendering using RecyclerListView",
  "Led a frontend team for catalog management project, ensuring on-time delivery and performance improvements",
]
