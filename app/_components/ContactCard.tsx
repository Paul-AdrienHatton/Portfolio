import { ArrowUpRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from 'next/image';

 export const ContactCard = (props: {
    image: string,
    mediumImage: string, 
    name: string,
    despription: string, 
    url: string
}) => {
    return (
        <Link href={props.url} className="w-full">
            <Card className="p-4 bg-accent/10 hover:bg-accent/30  transition-colors group flex items-center gap-4">
                <div className="relative">
                    <Image src={props.image} alt={props.name} className="w-10 h-10 rounded-full object-contain" />
                    <Image src={props.mediumImage} alt={props.name} className="w-3 h-3 bg-white absolute -bottom-1 -right-1 rounded-full object-contain" />
                </div>
                <div className="mr-auto">
                    <div className="flex items-center gap-2">
                        <p className="text-xs font-semibold">{props.name}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">{props.despription}</p>
                </div>
                <ArrowUpRight className="group-hover:translate-x-2 mr-2 group-hover:-translate-y-2 transition-transform" size={16} />
            </Card>
        </Link>
    )
}