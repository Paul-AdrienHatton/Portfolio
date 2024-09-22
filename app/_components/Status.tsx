import { Card } from "@/components/ui/card"
import { Section } from "./Section"
import { Home, User, Notebook, FileText, Briefcase, ArrowUpRight } from "lucide-react"; 
import Link from "next/link"
import { Badge } from "@/components/ui/badge";
import { SideProject, SideProjectProps } from "./SideProject";
import { Work, WorkProps } from "./Work";
import { ContactCard } from "./ContactCard";

export const Status = () => {
    return (
        <Section className="flex max-lg:flex-col items-start gap-4">
        {/* Colonne gauche */}
        <div className="flex-[3] w-full h-full flex flex-col">
            <Card className="w-full p-4 flex flex-col gap-2 flex-grow">
            <p className="text-lg text-muted-foreground">Side, fun projects.</p>
            <div className="flex flex-col gap-4 flex-grow">
                {SIDE_PROJECTS.map((project, index) => (
                <SideProject key={index} {...project} />
                ))}
            </div>
            </Card>
        </div>

        {/* Colonne droite */}
        <div className="flex-[2] w-full flex flex-col gap-4 h-full">
            <Card className="p-3 flex-grow">
                <p className="text-lg text-muted-foreground">Work</p>
                <div className="flex flex-col gap-4">
                    {WORK.map((project, index) => (
                    <Work key={index} {...project} />
                    ))}
                </div>
            </Card>

            <Card className="p-3 flex-grow flex flex-col gap-2">
                <p className="text-lg text-muted-foreground">Contact me</p>
                <ContactCard url="mailto:hattonpauladrien@gmail.com" name="hattonpauladrien@gmail.com" image="/identity.png" mediumImage="https://www.google.com/gmail/about/static-2.0/images/logo-gmail.png?fingerprint=c2eaf4aae389c3f885e97081bb197b97" despription="Mail perso" />
                <ContactCard url="mailto:paul-adrien.hatton@mobhilis.fr" name="paul-adrien.hatton@mobhilis.fr" image="/identity.png" mediumImage="https://mobhilis.fr/mobhilis/wp-content/uploads/2023/01/mobhilis-logotype.png" despription="Mail pro" />
                <ContactCard url="https://www.linkedin.com/in/paul-adrien-hatton-9a511a1b7/" name="Paul-Adrien Hatton" image="/identity.png" mediumImage="https://get-picto.com/wp-content/uploads/2023/02/logo-linkedin-rond.webp" despription="Linkedin" />  
            </Card>
        </div>
        </Section>


      
    )
}

const SIDE_PROJECTS: SideProjectProps[] = [
    {
        Logo: User,
        title: "Blog",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: "/blog"
    }, 
    {
        Logo: Notebook,
        title: "CV",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: "/cv"
    },
    {
        Logo: FileText,
        title: "Portfolio",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: "/portfolio"
    },
    {
        Logo: Briefcase,
        title: "Mobhilis",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: "/mobhilis"
    },
    {
        Logo: Briefcase,
        title: "Mobhilis",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: "/mobhilis"
    },
    {
        Logo: Briefcase,
        title: "Mobhilis",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: "/mobhilis"
    },
]

const WORK: WorkProps[] = [
    {
        image: "https://mobhilis.fr/mobhilis/wp-content/uploads/2023/01/mobhilis-logotype.png",
        title: "Mobhilis",
        role: "Full-stack developer",
        date: "2022-present",
        url: "https://mobhilis.fr/mobhilis/",
        badge: true
    }, 
    {
        image: "https://logovectorseek.com/wp-content/uploads/2021/01/openclassrooms-logo-vector.png",
        title: "OpenClassrooms",
        role: "Full-stack developer",
        date: "2020-2022",
        url: "https://openclassrooms.com/fr/", 
        badge: true  
    }
]

