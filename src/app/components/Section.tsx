import { Separator } from "@/components/ui/separator"

export default function Section({ title, children } : { title: string, children: React.ReactNode }) {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">{title}</h2>
            <Separator className="my-4" />
            {children}
        </div>
    );
}