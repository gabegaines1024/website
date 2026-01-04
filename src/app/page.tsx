import Home from './about/page';
import ProjectCard from './components/ProjectCard';
import { selfProjects } from './data/ResumeData';


export default function App(){
  return (
    <div className="flex flex-col gap-4">
      <Home />
      <div className="flex flex-col gap-4">
        {selfProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}