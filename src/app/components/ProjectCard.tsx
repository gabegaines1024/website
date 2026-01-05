import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Project } from "@/app/data/ResumeData"

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.date}</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="whitespace-pre-line">{project.description.replace(/\n/g, '').trim()}</p>
            </CardContent>
            {project.link && (
                <CardFooter>
                    <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                    >
                        View Project →
                    </a>
                </CardFooter>
            )}
        </Card>
    )
}