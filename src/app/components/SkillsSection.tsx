import { Separator } from "@/components/ui/separator";
import { ResumeData } from "../data/ResumeData";
import { Badge } from "@/components/ui/badge"

export default function SkillsSection({ data }: { data: ResumeData}) {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Skills</h2>
            <Separator className="my-4" />
            <div className="flex flex-row gap-4">
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold">Languages and Tools</h3>
                    <p>{data.skills.languages_and_tools.join(", ")}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold">Machine Learning and Data Science</h3>
                    <p>{data.skills.machineLearningAndDataScience.join(", ")}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold">Backend and Web Frameworks</h3>
                    <p>{data.skills.backendAndWebFrameworks.join(", ")}</p>
                </div>
            </div>
        </div>
    );
}