import clsx from "clsx";

import SectionTitle from "@/components/sections/SectionTitle";

function Prices() {
  return (
    <header className={clsx("mb-8")}>
      <SectionTitle
        id="prices"
        title="Planes flexibles para cualquier tamaño de negocio"
        caption="Precios"
        description="Nuestros precios escalan de manera proporcional al crecimiento de tu empresa, garantizando que siempre obtengas el mayor aporte de valor por tu inversión en automatización con IA. Daremos una cotización de acuerdo a la solución a desarrollar y que se ajuste a tu presupuesto."
      />
    </header>
  );
}

export default Prices;
