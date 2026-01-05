import { Separator } from '@/components/ui/separator';
import ProjectCard from './components/ProjectCard';
import { selfEducation, selfProjects, selfResumeData } from './data/ResumeData';
import Section from './components/Section';
import Header from './components/Header';
import './globals.css';
import SkillsSection from './components/SkillsSection';
import EducationComponent from './components/Education';


export default function App(){
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col gap-4">
        <Header data={selfResumeData} />
        <Section title="Education">
          <div className='flex flex-col gap-4'>
            {selfEducation.map((education, index) => (
              <EducationComponent key={index} data={education} />
            ))}
          </div>
        </Section>
        <Section title="Projects">
          <div className="flex flex-col gap-4">
            {selfProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </Section>
        <Separator className="my-4" />
        <SkillsSection data={selfResumeData} />
      </div>
    </div>
  );
}