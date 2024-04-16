import clsx from "clsx";

import SectionTitle from "@/components/sections/SectionTitle";

function DetailOriented() {
  return (
    <header className={clsx("mb-8")}>
      <SectionTitle
        title="Planes flexibles para cualquier tamaño de negocio"
        caption="Precios"
        description="Nuestros precios escalan de manera proporcional al crecimiento de tu empresa, garantizando que siempre obtengas el mejor valor por tu inversión en automatización de IA."
      />
    </header>
  );
}

export default DetailOriented;
