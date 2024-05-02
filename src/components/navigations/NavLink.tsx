import clsx from 'clsx';
import { ReactNode, forwardRef } from 'react';

export type NavLinkProps = {
  title: string;
  href: string;
  icon?: ReactNode;
};

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ title, href }: NavLinkProps, ref) => {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      event.preventDefault(); 

      const targetId = href.substring(1); 
      const targetElement = document.getElementById(targetId); 
      
      if (targetElement) {
        const offset = 100; 
        const targetOffset = targetElement.offsetTop - offset; 
        window.scrollTo({ top: targetOffset, behavior: 'smooth' }); 
      }
    };

    return (
      <a ref={ref} href={href} className={clsx('nav-link')} onClick={handleClick}>
        {title}
      </a>
    );
  }
);

export default NavLink;
