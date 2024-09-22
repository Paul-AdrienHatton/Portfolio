import { Section } from "./Section"
import { Badge } from "@/components/ui/badge";
import { ContactCard } from "./ContactCard";

export const Contact = () => {
    return <Section className="flex flex-col items-start gap-4">
        <Badge className="text-green-200 border-green-200" variant={"outline"}>Contact me</Badge>
        <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            I will be happy to work with you.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            <ContactCard url="mailto:hattonpauladrien@gmail.com" name="hattonpauladrien@gmail.com" image="/identity.png" mediumImage="https://www.google.com/gmail/about/static-2.0/images/logo-gmail.png?fingerprint=c2eaf4aae389c3f885e97081bb197b97" despription="Mail perso" />
            <ContactCard url="mailto:paul-adrien.hatton@mobhilis.fr" name="paul-adrien.hatton@mobhilis.fr" image="/identity.png" mediumImage="https://mobhilis.fr/mobhilis/wp-content/uploads/2023/01/mobhilis-logotype.png" despription="Mail pro" />
            <ContactCard url="https://www.linkedin.com/in/paul-adrien-hatton-9a511a1b7/" name="Paul-Adrien Hatton" image="/identity.png" mediumImage="https://get-picto.com/wp-content/uploads/2023/02/logo-linkedin-rond.webp" despription="Linkedin" />  
        </div>
    </Section>
}