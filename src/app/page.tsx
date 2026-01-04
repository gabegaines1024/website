import { Separator } from '@/components/ui/separator';
import Home from './about/page';
import ProjectCard from './components/ProjectCard';
import { selfProjects } from './data/ResumeData';
import Section from './components/Section';


export default function App(){
  return (
    <div className="flex flex-col gap-4">
      <Home />
      <Section title="Projects">
        <div className="flex flex-col gap-4">
          {selfProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>
    </div>
  )
}