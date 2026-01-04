import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { ResumeData } from "@/app/data/resume-data"

export default function ProjectCard({ project }: { project: ResumeData["projects"][0] }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{project.name}</CardTitle>
            </CardHeader>
        </Card>
    )
}