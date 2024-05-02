import clsx from 'clsx';
import NavLink from '@/components/navigations/NavLink';
import NavLinkDropdown from '@/components/navigations/NavLinkDropdown';
import NavLinkExpanded from '@/components/navigations/NavLinkExpanded';
import NavLogo from '@/components/navigations/NavLogo';
import useOnScroll from '@/hooks/useOnScroll';

const optionLinks = [
  { title: 'Servicios', href: '#services' },
  { title: 'Proceso', href: '#process' },
  { title: 'Precios', href: '#prices' },
];

function Navbar() {
  const isScrolled = useOnScroll(0);

  return (
    <header
      className={clsx('fixed top-0 right-0 left-0 z-[1000]', 'fm:absolute')}
    >
      <div
        className={clsx(
          'fixed inset-0 h-16',
          [
            isScrolled === true && [
              'border-divider-light border-b bg-white/70 backdrop-blur',
              'dark:border-divider-dark dark:bg-slate-900/80',
            ],
          ],
          'fm:hidden'
        )}
      />
      <div className={clsx('h-2', [isScrolled === true && ['-mt-2']])} />
      <div className={clsx('content-wrapper-max')}>
        <div
          className={clsx(
            'relative z-50 flex h-16 items-center justify-between px-2 text-sm',
            'md:px-4'
          )}
        >
          <nav className={clsx('flex', 'md:gap-2')} data-accent="violet">
            <NavLogo href="/" title="Home" />
            <ul className={clsx('flex items-center', 'md:gap-1')}>
              <li>
                <NavLink title="Nuestra misión" href="#mision" />
              </li>
              <li>
                <NavLink title="Contáctanos" href="#contact" />
              </li>
              <li className={clsx('lg:hidden')} data-accent="blue">
                <NavLinkDropdown title="Sugerencias" items={optionLinks} />
              </li>
              <li className={clsx('hidden lg:block')} data-accent="blue">
                <NavLinkExpanded title="Sugerencias" items={optionLinks} />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
