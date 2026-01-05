import { Separator } from '@/components/ui/separator';
import ProjectCard from './components/ProjectCard';
import { selfProjects, selfResumeData } from './data/ResumeData';
import Section from './components/Section';
import Header from './components/Header';
import './globals.css';


export default function App(){
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col gap-4">
        <Header data={selfResumeData} />
        <Section title="Projects">
          <div className="flex flex-col gap-4">
            {selfProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Section>
        <Separator className="my-4" />
      </div>
    </div>
  )
}