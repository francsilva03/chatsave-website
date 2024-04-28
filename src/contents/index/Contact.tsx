import clsx from "clsx";
import SectionTitle from "@/components/sections/SectionTitle";
import { ButtonContactMe } from "./Header/HeaderCta";

function Contact() {
  return (
    <header className={clsx("mb-8")}>
      <SectionTitle
        id="contact"
        title="¡Comienza Ahora!"
        caption="Contáctanos"
        description="¿Listo para dar el primer paso hacia la automatización inteligente de tu negocio?. Contáctanos por correo electrónico y cuéntanos más sobre tu situación particular."
      />
      <div className={clsx("content-wrapper", "pt-10")}>
        <ButtonContactMe></ButtonContactMe>
      </div>
    </header>
  );
}

export default Contact;
