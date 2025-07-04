import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import dogImage from "../../../public/hero-dog.webp";
import catImage from "../../../public/cat-hero.png";
import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-[#e84c3d] text-white relative overflow-hidden">
      <div>
        <Image
          src={dogImage}
          alt="Foto do cachorro"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-60 lg:hidden"
        />
        <div className="absolute inset-0 bg-black/40 md:hidden"></div>
      </div>
      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h1
              className="text-3xl font-bold md:text-4xl lg:text-5xl leading-10"
              data-aos="fade-down"
            >
              Seu pet merece cuidado, carinho e atenção especial
            </h1>
            <p className="lg:text-lg" data-aos="fade-right">
              Oferecemos os melhores serviços para garantir o bem-estar e a
              felicidade do seu amigo de quatro patas.
            </p>
            <div className="">
              <a
                data-aos="fade-up"
                href="#"
                className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
              >
                <WhatsappLogo className="w-5 h-5" />
                Contato via WhatsApp
              </a>
            </div>
            <div className="mt-8" data-aos="fade-zoom-in" data-aos-delay="800">
              <p className="text-sm mb-4">
                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b>{" "}
                de desconto
              </p>
            </div>

            <div className="flex mt-4">
              <div className="w-32 hidden lg:block">
                <Image
                  src={catImage}
                  alt="Foto do gato"
                  className="object-fill"
                  quality={100}
                />
              </div>
            </div>
          </div>

          <div className="hidden md:block h-full relative">
            <Image
              src={dogImage}
              alt="Foto do cachorro"
              className="object-contain"
              fill
              sizes="(max-width: 768px) 0vw, 50pw"
              quality={100}
              priority
            />
          </div>
        </article>
      </div>
    </section>
  );
}
