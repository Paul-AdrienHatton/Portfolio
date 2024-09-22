import { Section } from "./Section"
import { JavascriptIcon } from "./icons/JavascriptIcon"
import Link from "next/link"
import { Code } from "./Code"
import Image from 'next/image';

export const Hero = () => {
    return (
        <Section className="flex max-lg:flex-col items-start gap-4">
        {/* Colonne gauche */}
        <div className="flex-[3] w-full flex flex-col gap-2">
          <div className="mb-4">
            <h2 className="font-caption text-5xl text-primary font-bold -mb-2">Hatton Paul-Adrien</h2>
            <h3 className="text-2xl font-caption">Développeur d&apos;applications web</h3>
          </div>
          <p className="text-base mt-auto">
            I love creating content on
            <Link href={"https://www.javascript.com/"}>
              <Code className="inline-flex items-center gap-1">
                <JavascriptIcon size={16} className="inline"/> JavaScript
              </Code>
            </Link>, currently working at
            <Link href={"https://mobhilis.fr/mobhilis/"}>
              <Code className="inline-flex items-center gap-1">
                <Image
                  src="https://mobhilis.fr/mobhilis/wp-content/uploads/2023/01/mobhilis-logotype.png"
                  className="inline w-6"
                  alt="mobhilis logo"
                />{" "}
                Mobhilis
              </Code>
            </Link>, living in Rennes. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio iure, non, harum
            sapiente aliquid qui pariatur cum corrupti necessitatibus nihil enim ipsam dolorum numquam saepe expedita
            repudiandae repellendus voluptas soluta. and studying at
            <Link href={"https://openclassrooms.com/fr/"}>
              <Code className="inline-flex items-center gap-1">
                <Image
                  src="https://logovectorseek.com/wp-content/uploads/2021/01/openclassrooms-logo-vector.png"
                  style={{ width: 16, height: "auto" }}
                  alt="openclassrooms logo"
                />
                OpenClassrooms
              </Code>
            </Link>. repellendus voluptas soluta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio iure, non,
            harum sapiente.
          </p>
        </div>
      
        {/* Colonne droite */}
        <div className="flex-[2] flex justify-center max-md:m-auto m-auto">
  <Image
    src="/identity.png"
    alt="identity photo"
    className="w-64 h-64 max-w-xs max-md:w-56 max-md:h-56 rounded-full object-cover"
  />
</div>

      </Section>      
    )

}