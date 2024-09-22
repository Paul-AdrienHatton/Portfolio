import { VuejsIcon } from "./icons/VuejsIcon";
import { Section } from "./Section"
import { Badge } from "@/components/ui/badge";
import { Code } from "./Code";
import { TailwindIcon } from "./icons/TailwindIcon";
import { NextjsIcon } from "./icons/NextjsIcon";
import { VuetifyIcon } from "./icons/VuetifyIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { OpenLayersIcon } from "./icons/OpenLayersIcons";
import { PhpIcon } from "./icons/PhpIcon";
import { SymfonyIcon } from "./icons/SymfonyIcon";
import { WordpressIcon } from "./icons/WordpressIcon";

export const Skills = () => {
    return <Section className="flex flex-col items-start gap-4">
        <Badge className="text-green-200 border-green-200" variant={"outline"}>Skills</Badge>
        <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            I love working on...
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex flex-col gap-2 mt-5">
                <ReactIcon size={42} className="animate-spin" style={{animationDuration: "12s"}}/>
                <h3 className="text-2xl font-semibold tracking-tight">React</h3>
                <p className="text-sm text-muted-foreground py-2">I love working on <Code>React</Code> which i just start to use for styling my projects.</p>
            </div> 
            <div className="flex flex-col gap-2 mt-5">
                <VuejsIcon size={42}/>
                <h3 className="text-2xl font-semibold tracking-tight">Vuejs</h3>
                <p className="text-sm text-muted-foreground py-2">My main framework is <Code>Vuejs</Code>, working on composition API. It&apos;s the framework that i use for most of my projects.</p>
            </div>
            <div className="flex flex-col gap-2 mt-5">
                <VuetifyIcon size={42}/>
                <h3 className="text-2xl font-semibold tracking-tight">Vuetify</h3>
                <p className="text-sm text-muted-foreground py-2">I work with several css frameworks. My main is <Code>Vuetify</Code> that i use for most of my projects and at work.</p>
            </div>
            <div className="flex flex-col gap-2 mt-5">
                    <TailwindIcon size={42}/>
                <h3 className="text-2xl font-semibold tracking-tight">Tailwind</h3>
                <p className="text-sm text-muted-foreground py-2">I also use <Code>Tailwind</Code> for certain projects but i not quit familiar with it.</p>
            </div>
            <div className="flex flex-col gap-2 mt-5">
                <NextjsIcon size={42}/>
              <h3 className="text-2xl font-semibold tracking-tight">Nextjs</h3>
              <p className="text-sm text-muted-foreground py-2">I like using <Code>Nextjs</Code> as a backend and frontend framework.</p>
            </div>
            <div className="flex flex-col gap-2 mt-5">
                <OpenLayersIcon size={42}/>
              <h3 className="text-2xl font-semibold tracking-tight">OpenLayers</h3>
              <p className="text-sm text-muted-foreground py-2">I like using <Code>Openlayers</Code> to create map for my projects.</p>
            </div>
            <div className="flex flex-col gap-2 mt-5">
                <PhpIcon size={42}/>
              <h3 className="text-2xl font-semibold tracking-tight">Php</h3>
              <p className="text-sm text-muted-foreground py-2">I currently learning <Code>Php</Code> on my formation.</p>
            </div>
            <div className="flex flex-col gap-2 mt-5">
                <SymfonyIcon size={42}/>
              <h3 className="text-2xl font-semibold tracking-tight">Symfony</h3>
              <p className="text-sm text-muted-foreground py-2">I currently learning <Code>Symfony</Code> to manage my projects.</p>
            </div>
            <div className="flex flex-col gap-2 mt-5">
                <WordpressIcon size={42}/>
              <h3 className="text-2xl font-semibold tracking-tight">Wordpress</h3>
              <p className="text-sm text-muted-foreground py-2">I used <Code>Wordpress</Code> for one of my project in my formation.</p>
          </div>
        </div>
    </Section>
}