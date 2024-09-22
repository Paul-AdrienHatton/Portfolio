import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from 'next/image';

export type WorkProps = {
    image: string;
    title: string;
    role: string; 
    date: string;
    url: string;
    badge?: boolean;
}

export const Work = (props: WorkProps) => { 
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <Image src={props.image} alt={props.title} className="w-10 h-10 bg-white p-1 rounded-md shadow-sm flex items-center justify-center object-contain" />
            <div className="mr-auto">
                <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold">{props.title}</p>
                    {props.badge && <Badge className="text-green-200 border-green-200" variant="outline">Formation</Badge>}
                </div>
                <p className="text-xs text-muted-foreground">{props.role}</p>
            </div>
            <p className="text-xs text-end text-muted-foreground">{props.date}</p>
        </Link>
    )
}