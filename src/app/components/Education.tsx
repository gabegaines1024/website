import { Education } from "../data/ResumeData";
import { Badge } from "@/components/ui/badge";

export default function EducationComponent({ data }: { data: Education }) {
    return (
        <div key={data.school} className="flex justify-between items-start">
      <div>
        <h3 className="text-lg font-bold">{data.school}</h3>
        <p className="text-muted-foreground">{data.degree}</p>
      </div>
      <div className="text-right">
        <p className="font-medium">{data.date}</p>
        <Badge variant="outline">GPA: {data.gpa}</Badge>
      </div>
    </div>
    )
}