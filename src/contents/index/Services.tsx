import clsx from "clsx";
import { useState } from "react";

import { SectionButton } from "@/components/sections/SectionButton";
import SectionContent from "@/components/sections/SectionContent";
import SectionTitle from "@/components/sections/SectionTitle";
import AppWindow from "@/components/wireframes/AppWindow";
import VideoWireframe from "@/components/wireframes/Video";
import AutomatizationVideo from "../../assets/videos/auto.mp4";
import ChatbotVideo from "../../assets/videos/chatbot.mp4";

function ServicesContent() {
  const [currentState, setCurrentState] = useState<
    "chatbot" | "automatization"
  >("chatbot");

  return (
    <>
      <SectionTitle
        id="services"
        title="Adaptados a cualquier tipo de negocio"
        caption="Servicios"
        description="Podemos ofrecer varios tipos de servicios adaptados a tu negocio y evolucionar de manera proporcional en la medida en que creces."
      />
      <SectionContent>
        <div className="md:flex gap-12 xs:flex-col">
          <div
            className={clsx(
              "w-full flex-1 flex-col gap-3 pt-8 pb-12",
              "lg:flex"
            )}
          >
            <div className={clsx("flex flex-col gap-3")}>
              <SectionButton
                title="Chatbot con inteligencia artificial"
                description="Brinda atención personalizada las 24 horas del día, los 7 días de la semana, para resolver dudas y captar nuevos clientes de manera efectiva."
                active={currentState === "chatbot"}
                onClick={() => setCurrentState("chatbot")}
              />
              <SectionButton
                title="Automatización con inteligencia artificial"
                description="Reduce la carga de trabajo de tu negocio al automatizar tareas repetitivas con IA. "
                active={currentState === "automatization"}
                onClick={() => setCurrentState("automatization")}
              />
            </div>
          </div>
          <div className={clsx("xs:w-full", "lg:w-auto")}>
            <div className={clsx("-mt-[41px]")}>
              <div className={clsx("w-full", "lg:h-[400px] lg:w-[600px]")}>
                <AppWindow
                  type="browser"
                  browserTabs={[
                    {
                      icon: "",
                      title: "Chatbot con inteligencia artificial",
                      isActive: currentState === "chatbot",
                    },
                    {
                      icon: "",
                      title: "Automatización con inteligencia artificial",
                      isActive: currentState === "automatization",
                    },
                  ]}
                >
                  {currentState === "chatbot" && (
                    <VideoWireframe videoSrc={ChatbotVideo} />
                  )}
                  {currentState === "automatization" && (
                    <VideoWireframe videoSrc={AutomatizationVideo} />
                  )}
                </AppWindow>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default ServicesContent;
