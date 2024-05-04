import clsx from "clsx";
import { useState, useEffect } from "react";
import { SectionButton } from "@/components/sections/SectionButton";
import SectionContent from "@/components/sections/SectionContent";
import SectionTitle from "@/components/sections/SectionTitle";
import { m } from "framer-motion";
import ExplorationImage from "@/assets/images/exploration.png";
import AnalyzeImage from "@/assets/images/analyze.png";
import DevelopImage from "@/assets/images/develop.png";
import Image from "next/image";

const content: Array<any> = [
  {
    state: "exploration",
    title: "Llamada de exploración",
    description:
      "Nos encargamos de comunicarnos contigo para tener un primer acercamiento y conocer mejor tu situación.",
    image: ExplorationImage
  },
  {
    state: "analyze",
    title: "Análisis de tu negocio",
    description:
      "Analizaremos tu negocio para encontrar puntos claves donde puedan haber oportunidades de mejora con nuestras soluciones y adaptarlas para tí.",
    image: AnalyzeImage
  },
  {
    state: "develop",
    title: "Inicio del desarrollo",
    description:
      "Comenzamos desarrollando la solución basada en un análisis realizado. Te proporcionamos avances constantes en los primeros días para que puedas brindarnos tu retroalimentación, asegurando que sea exactamente lo que necesitas.",
    image: DevelopImage
  },
];

function Process() {
  const [currentState, setCurrentState] = useState<any>(content[0]); 

  useEffect(() => {
    setCurrentState(content[0]);
  }, []);

  return (
    <>
      <header className={clsx("mb-8")}>
        <SectionTitle
          id="process"
          caption="Proceso"
          title="¿Cómo se comienza?"
          description="Con tres simples pasos podemos dar con la solución de tu negocio."
        />
      </header>
      <SectionContent>
        <div className="md:flex gap-12 xs:flex-col">
          <div
            className={clsx("-mt-8 flex-1 flex-col gap-3", "lg:flex")}
          >
            {content.map((item, i) => (
              <SectionButton
                key={item.state}
                title={item.title}
                description={item.description}
                icon={i + 1}
                active={currentState.state === item.state}
                onClick={() => setCurrentState(item)}
              />
            ))}
          </div>
          <div
            className={clsx("relative flex flex-1 items-center justify-center")}
          >
            <div
              className={clsx("-mt-8 flex gap-4", "md:gap-6 lg:top-8 mt-2")}
            >
              <div>
                <m.div
                  initial={{ x: -32, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  key={currentState.state} 
                >
                  <div >
                    <Image
                    className={clsx("rounded-2xl shadow-xl")}
                      src={currentState.image}
                      alt={currentState.state}
                    />
                  </div>
                </m.div>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default Process;
