import clsx from 'clsx';
import { ReactNode } from 'react';

export type NavLinkProps = {
  title: string;
  href: string;
  icon?: ReactNode;
};

function NavLink({ title, href }: NavLinkProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    
    const targetId = href.substring(1); // Obtiene el ID del elemento de destino
    const targetElement = document.getElementById(targetId); // Encuentra el elemento de destino
    
    if (targetElement) {
      const offset = 80; // Ajusta el offset según sea necesario
      
      const targetOffset = targetElement.offsetTop - offset; // Calcula el desplazamiento objetivo
      window.scrollTo({ top: targetOffset, behavior: 'smooth' }); // Desplázate al elemento de destino con animación suave
    }
  };

  return (
    <a href={href} className={clsx('nav-link')} onClick={handleClick}>
      {title}
    </a>
  );
}

export default NavLink;
