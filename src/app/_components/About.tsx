import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Check, MapPin } from "lucide-react";
import Image from "next/image";

export function About() {
  return (
    <section className="bg-[#fdf6ec] py-16 ">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                className="object-cover hover:scale-110 duration-300"
                src={"/about-1.png"}
                alt="Foto de cachorro e gato"
                fill
                quality={100}
                priority
              />
            </div>
            <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg overflow-hidden border-4">
              <Image
                className="object-cover"
                src={"/about-2.png"}
                alt="Foto de cachorro e gato"
                fill
                quality={100}
                priority
              />
            </div>
          </div>
          <div className="space-y-6 mt-12">
            <h2 className="text-4xl font-bold">Sobre</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At,
              corporis eaque vel deserunt ipsam explicabo atque possimus earum
              exercitationem laborum quis officiis? Ipsum eius, velit maiores a
              tenetur ullam dolorum!
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Tradição desde 2006
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Equipe com mais de 10 veterinários
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Qualidade é nossa prioridade
              </li>
            </ul>
            <div className="flex gap-2">
              <a
                href="#"
                className="bg-[#e84c3d] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <WhatsappLogo className="w-5 h-5 text-white" />
                Contato via WhatsApp
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md border border-[#e84c3d]"
              >
                <MapPin className="w-5 h-5 text-black" />
                Endereço da loja
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
