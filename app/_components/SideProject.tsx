import Link from "next/link"
import { LucideIcon } from "./icons/LucideIcon"

export type SideProjectProps = {
    Logo: LucideIcon,
    title: string,
    description: string, 
    url: string
}

export const SideProject = (props : SideProjectProps) => { 
    return (
        <Link href={props.url} className="inline-flex items-center gap-5 hover:bg-accent/50 transition-colors p-1 rounded">
            <span className="bg-accent text-accent-foreground p-3 rounded-sm">
                <props.Logo size={16} />
            </span>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
        </Link>
    )
}
