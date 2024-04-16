import clsx from "clsx";
import Link from "next/link";

import {
  ExternalLink,
} from "@/components/Icons";

import dayjs from "@/utils/dayjs";

interface FooterLinkProps {
  title: string;
  href: string;
  label?: "Nuevo" | "Muy pronto";
  isInternal?: boolean;
}

function FooterLink({
  title,
  href,
  label = undefined,
  isInternal = true,
}: FooterLinkProps) {
  if (label === "Muy pronto") {
    return (
      <span className={clsx("footer-link footer-link--Muy pronto")}>
        {title}
        <span className={clsx("footer-link__label")}>{label}</span>
      </span>
    );
  }

  if (isInternal) {
    return (
      <Link href={href} className={clsx("footer-link")}>
        {title}
        {label && <span className={clsx("footer-link__label")}>{label}</span>}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer nofollow"
      className={clsx("footer-link")}
    >
      {title}
      <ExternalLink className={clsx("h-3.5 w-3.5")} />
      {label && <span className={clsx("footer-link__label")}>{label}</span>}
    </a>
  );
}

interface FooterGroupProps {
  title: string;
  links: Array<FooterLinkProps>;
}

function FooterGroup({ title, links }: FooterGroupProps) {
  return (
    <div className={clsx("flex-1")}>
      <div
        className={clsx(
          "mb-2 px-2 text-[13px] text-slate-600",
          "dark:text-slate-400"
        )}
      >
        {title}
      </div>
      <ul className={clsx("flex flex-col")}>
        {links.map(({ title: linkTitle, href, label, isInternal }) => (
          <li key={href}>
            <FooterLink
              title={linkTitle}
              href={href}
              label={label}
              isInternal={isInternal}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterDescription() {
  return (
    <div className={clsx("max-w-[348px]")}>
      <div
        className={clsx(
          "mb-3 text-[13px] text-slate-600",
          "dark:text-slate-400"
        )}
      >
        Nuestra visión
      </div>
      <p className={clsx("mb-4 font-normal leading-relaxed")}>
        Ser líderes en la creación y aplicación ética de la inteligencia
        artificial para el beneficio y progreso de la humanidad.
      </p>
      <div
        className={clsx(
          "mb-3 text-[13px] text-slate-600",
          "dark:text-slate-400"
        )}
      >
        Nuestra misión
      </div>
      <p className={clsx("mb-4 font-normal leading-relaxed")}>
        Desarrollar y desplegar soluciones de inteligencia artificial
        responsables, colaborando estrechamente con nuestros clientes para
        abordar desafíos, promoviendo la transparencia, la
        equidad y el bienestar en todas nuestras iniciativas.
      </p>
    </div>
  );
}

function Footer() {
  return (
    <footer
      className={clsx(
        "background-grid background-grid--fade-in border-divider-light mt-24 pt-16 text-sm text-slate-900",
        "dark:border-divider-dark dark:text-slate-200"
      )}
    >
      <div className={clsx("content-wrapper")}>
        <div className={clsx("py-10 font-semibold")}>
          <div className={clsx("flex flex-col-reverse gap-16", "lg:flex-row")}>
            <div className={clsx("flex-1")}>
              <FooterDescription />
            </div>
            <div
              className={clsx(
                "-mx-2 flex flex-1 flex-col gap-8",
                "sm:flex-row sm:gap-16 lg:mx-0"
              )}
            >
              <div className={clsx("flex", "sm:gap-16")}>
              <FooterGroup
                  title="Nuestro trabajo"
                  links={[
                    { title: "Servicios", href: "/work/contact" },
                    { title: "Precios", href: "/work/experience" },
                    {
                      title: "Contáctanos",
                      href: "/work/services",
                    },
                    {
                      title: "Herramientas",
                      href: "/work/skills-and-tools",
                      label: "Muy pronto",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={clsx(
            "border-divider-light flex justify-between border-t py-6 text-xs",
            "dark:border-divider-dark"
          )}
        >
          <div className={clsx("font-semibold")}>
            &copy; {dayjs().format("YYYY")}, Agencia de automatización de IA
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
