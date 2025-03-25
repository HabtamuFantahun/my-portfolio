import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Github, Linkedin, Mail, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ProjectCard from "@/components/project-card"
import SkillCard from "@/components/skill-card"
import ExperienceCard from "@/components/experience-card"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Habtamu<span className="text-primary">.dev</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Button variant="default" asChild>
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8">
        {/* Hero Section */}
        <section className="py-20 md:py-32 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Hi, I'm Habtamu Fantamun</h1>
            <p className="text-xl text-muted-foreground">Software Engineering Student & Web Developer</p>
            <p className="text-muted-foreground max-w-md">
              I specialize in web development, graphic design, and software engineering, with a passion for building
              e-learning and e-commerce solutions.
            </p>
            <div className="flex gap-3 pt-4">
              <Button asChild>
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <Image
                src="/hab.png?height=320&width=320"
                alt="Habtamu Fantamun"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 scroll-mt-20">
          <div className="space-y-4 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="text-muted-foreground">
              I'm a 5th-year software engineering student at Wachemo University with a passion for creating innovative
              digital solutions. My journey in tech has equipped me with a diverse skill set spanning web development,
              graphic design, video editing, and software testing.
            </p>
            <p className="text-muted-foreground">
              I'm particularly interested in building e-learning platforms, e-commerce websites with integrated payment
              systems, and exploring AI tools for job searching. Beyond coding, I'm passionate about digital marketing,
              project management, and data analysis.
            </p>
            <p className="text-muted-foreground">
              I'm also working on launching a tech-focused YouTube channel to share my knowledge and experiences with
              the wider community.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard
              title="Web Development"
              description="Proficient in building responsive and dynamic web applications using modern frameworks and technologies."
              skills={["Next.js", "React", "Node.js", "Express", "MongoDB", "PHP", "Laravel"]}
            />
            <SkillCard
              title="Graphic Design"
              description="Creating visually appealing designs for websites, marketing materials, and digital content."
              skills={["Adobe Photoshop", "Illustrator", "Figma", "UI/UX Design"]}
            />
            <SkillCard
              title="Video Editing"
              description="Producing engaging video content with professional editing techniques."
              skills={["Adobe Premiere Pro", "After Effects", "Content Creation"]}
            />
            <SkillCard
              title="Software Engineering"
              description="Applying engineering principles to design, develop, and test software systems."
              skills={["Object-Oriented Programming", "Software Testing", "System Design"]}
            />
            <SkillCard
              title="E-commerce & Payments"
              description="Building online stores with secure payment integration and user-friendly interfaces."
              skills={["Payment Gateway Integration", "E-commerce Platforms", "Shopping Cart Systems"]}
            />
            <SkillCard
              title="Digital Marketing"
              description="Implementing strategies to promote products and services in the digital space."
              skills={["SEO", "Content Marketing", "Social Media Marketing", "Analytics"]}
            />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="E-Learning Platform"
              description="A comprehensive learning management system with course creation, enrollment, and progress tracking features."
              tags={["Next.js", "MongoDB", "Express", "Node.js"]}
              imageUrl="/elearn.png?height=300&width=600"
            />
            <ProjectCard
              title="E-Commerce Website"
              description="A full-featured online store with product management, shopping cart, and payment integration."
              tags={["React", "Node.js", "Stripe", "MongoDB"]}
              imageUrl="/ecommerse.png?height=300&width=600"
            />
            <ProjectCard
              title="Portfolio Website"
              description="A responsive portfolio website showcasing skills, projects, and professional experience."
              tags={["Next.js", "Tailwind CSS", "Framer Motion"]}
              imageUrl="/port.jpg?height=300&width=600"
            />
            <ProjectCard
              title="Job Search AI Tool"
              description="An AI-powered tool to help users find relevant job opportunities based on their skills and preferences."
              tags={["Python", "Machine Learning", "React", "API Integration"]}
              imageUrl="/job.png?height=300&width=600"
            />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <ExperienceCard
              title="Front-end Development Intern"
              company="Tech Company"
              period="Summer 2023"
              description="Developed and maintained responsive web applications using React and Next.js. Collaborated with the design team to implement UI/UX improvements and optimize website performance."
              skills={["React", "Next.js", "Tailwind CSS", "Version Control"]}
            />
            <ExperienceCard
              title="Freelance Web Developer"
              company="Self-employed"
              period="2022 - Present"
              description="Designed and developed websites for small businesses and individuals. Implemented e-commerce functionality and payment integrations. Provided ongoing maintenance and support."
              skills={["WordPress", "PHP", "JavaScript", "E-commerce", "Client Management"]}
            />
            <ExperienceCard
              title="Software Engineering Student"
              company="Wachemo University"
              period="2019 - Present"
              description="Pursuing a degree in Software Engineering with focus on web development, software testing, and object-oriented programming. Participated in various team projects and hackathons."
              skills={["Software Development", "Team Collaboration", "Project Management", "Problem Solving"]}
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 scroll-mt-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>habtamu.fantamun@example.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-primary" />
                    <a href="https://github.com/habtamufantamun" className="hover:text-primary transition-colors">
                      github.com/habtamufantamun
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <a href="https://linkedin.com/in/habtamufantamun" className="hover:text-primary transition-colors">
                      linkedin.com/in/habtamufantamun
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Youtube className="h-5 w-5 text-primary" />
                    <a href="https://youtube.com/@habtamufantamun" className="hover:text-primary transition-colors">
                      youtube.com/@habtamufantamun
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Send Me a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full px-3 py-2 border rounded-md bg-background"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 border rounded-md bg-background"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-3 py-2 border rounded-md resize-none bg-background"
                        placeholder="Your message here..."
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted/40">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-muted-foreground">© {new Date().getFullYear()} Habtamu Fantamun. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/habtamufantamun" aria-label="GitHub">
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            <a href="https://linkedin.com/in/habtamufantamun" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            <a href="mailto:habtamu.fantamun@example.com" aria-label="Email">
              <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            <a href="https://youtube.com/@habtamufantamun" aria-label="YouTube">
              <Youtube className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

