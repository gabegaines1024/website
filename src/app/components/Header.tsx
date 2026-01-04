import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
import { ResumeData } from "@/app/data/ResumeData";

export default function Header({ data }: { data: ResumeData }) {
  return (
    <header className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 py-12 md:py-16">
      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 flex-1">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter">
            {data.name}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-[600px]">
            {data.objective}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          <Button variant="outline" size="icon" asChild>
            <a href="https://github.com/gabegaines1024" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://www.linkedin.com/in/gabegaines24/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href={`mailto:${data.email}`} aria-label="Email">
              <Mail className="w-4 h-4" />
            </a>
          </Button>
          <Button variant="default" className="ml-2" asChild>
            <a href={`mailto:${data.email}`}>Contact Me</a>
          </Button>
        </div>
      </div>
      <Avatar className="h-32 w-32 md:h-40 md:w-40 border-4 border-border shadow-lg">
        <AvatarImage src="/profile.jpg" alt={data.name} />
        <AvatarFallback className="text-2xl">GG</AvatarFallback>
      </Avatar>
    </header>
  );
}
