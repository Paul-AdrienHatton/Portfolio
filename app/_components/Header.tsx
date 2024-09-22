import { buttonVariants, Button } from "@/components/ui/button"
import { Section } from "./Section"
import Link from 'next/link';
import { cn } from "@/lib/utils"
import { GmailIcon } from "./icons/GmailIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from "./icons/LinkedinIcon";



export const Header = () => {
    return (
        <header className="sticky top-0 py-4">
            <Section className="flex items-baseline">
                <h1 className="text-lg font-bold text-primary">Bienvenue sur mon portfolio</h1>
                <div className="flex-1" />
                <ul className="flex items-center gap-2">
                    <Link
                    href="https://github.com/Paul-AdrienHatton?tab=repositories" 
                    className={cn(buttonVariants({variant: "outline", size: "sm"}))}>
                        <GithubIcon size={20} className="text-foreground"/>
                    </Link>
                    <Link
                    href="https://www.instagram.com/pauladrienhatton/" 
                    className={cn(buttonVariants({variant: "outline", size:'sm'}))}>
                        <InstagramIcon size={20} className="text-foreground"/>
                    </Link>
                    <Link
                    href="https://www.linkedin.com/in/paul-adrien-hatton-351887136/" 
                    className={cn(buttonVariants({variant: "outline", size:'sm'}))}>
                        <LinkedinIcon size={20} className="text-foreground"/>
                    </Link>
                </ul>
            </Section>
        </header>
    )
}