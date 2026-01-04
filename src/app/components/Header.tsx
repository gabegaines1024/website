import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react"
import { ResumeData } from "../data/ResumeData"

export default function Header(data: ResumeData) {
    return (
        <>
        <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4">
                <Avatar>
                    <AvatarImage src={data.avatar} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div className="flex flex-row gap-4">
                <Button variant="outline">
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                </Button>
                <Button variant="outline">
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                </Button>
                <Button variant="outline">
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                </Button>
            </div>
        </div>
        </>
    );
}


