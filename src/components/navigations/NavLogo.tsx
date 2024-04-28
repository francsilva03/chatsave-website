import clsx from "clsx";
import Logo from "@/components/Logo";

interface NavLogoProps {
  href: string;
  title: string;
}

function NavLogo({ href, title }: NavLogoProps) {
  return (
    <a
      href={href}
      className={clsx("flex h-9 items-center gap-2 rounded-xl px-2")}
      aria-label={title}
    >
      <Logo />
    </a>
  );
}

export default NavLogo;
