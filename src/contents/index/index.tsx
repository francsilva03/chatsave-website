import clsx from "clsx";
import { CodeIcon, HeartIcon, SparklesIcon } from "@/components/Icons";
import Process from "@/contents/index/Process";
import Prices from "@/contents/index/Prices";
import FeaturedCard from "@/contents/index/FeaturedCard";
import Header from "@/contents/index/Header";
import Contact from "@/contents/index/Contact";
import ServicesContent from "./Services";
import SectionTitle from "@/components/sections/SectionTitle";

function FeaturedCardSection() {
  return (
    <div className={clsx("content-wrapper")}>
      <div className={clsx("flex flex-col gap-4", "lg:flex-row lg:gap-8")}>
        <FeaturedCard
          icon={
            <div
              className={clsx(
                "rounded-full bg-amber-300 p-3.5",
                "dark:bg-amber-900"
              )}
            >
              <SparklesIcon className={clsx("h-5 w-5 text-white")} />
            </div>
          }
          title="Inteligencia Artificial"
          desc="Te ayudará a proporcionar una experiencia de usuario personalizada."
        />
        <FeaturedCard
          icon={
            <div
              className={clsx(
                "rounded-full bg-pink-300 p-3.5",
                "dark:bg-pink-900"
              )}
            >
              <HeartIcon className={clsx("h-5 w-5 text-white")} />
            </div>
          }
          title="Adaptado a tu negocio"
          desc="Nuestros servicios se adaptan a las necesidades de tu negocio."
        />
        <FeaturedCard
          icon={
            <div
              className={clsx(
                "rounded-full bg-sky-300 p-3.5",
                "dark:bg-sky-900"
              )}
            >
              <CodeIcon className={clsx("h-5 w-5 text-white")} />
            </div>
          }
          title="Calidad garantizada"
          desc="Entregamos avances de forma constante para garantizar la calidad de la solución."
        />
      </div>
    </div>
  );
}

function IndexContents() {
  return (
    <>
      <Header />
      <div className={clsx("hidden", "lg:-mt-16 lg:mb-24 lg:block")}>
        <FeaturedCardSection />
      </div>
      <section className={clsx("mb-12", "lg:mb-24")}>
        <SectionTitle
          id="mision"
          title="¿Por qué una agencia de automatización de IA?"
          caption="Nuestra misión es elevar tu negocio"
          description="Somos expertos en tecnología con una sólida experiencia en empresas líderes. Nuestro enfoque está en automatizar tus procesos para que puedas dedicar tu tiempo a lo que realmente importa: hacer crecer tu negocio."
        />
      </section>
      <section className={clsx("mb-12", "lg:mb-24")}>
        <ServicesContent />
      </section>
      <section className={clsx("mb-12", "lg:mb-24")}>
        <Process />
      </section>
      <section className={clsx("mb-12", "lg:mb-24")}>
        <Prices />
      </section>
      <section className={clsx("mb-12", "lg:mb-24")}>
        <Contact />
      </section>
    </>
  );
}

export default IndexContents;
