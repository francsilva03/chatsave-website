import { Menu } from '@headlessui/react';
import clsx from 'clsx';
import { m } from 'framer-motion';
import { useState } from 'react';
import { ChevronRightIcon } from '@/components/Icons';
import type { HTMLAttributes } from 'react';
import type { UrlObject } from 'url';
import NavLink from './NavLink';

const animation = {
  hide: { opacity: 0, y: -16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.18 } },
};

type NavLink = {
  href: string;
  title: string;
};

interface NavLinkDropdownProps {
  title: string;
  items: Array<NavLink>;
}

function NavLinkDropdown({ title, items }: NavLinkDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <Menu>
        {({ open }) => (
          <>
            <button
              className={clsx('nav-link nav-link--label ml-2')}
              onClick={toggleMenu}
            >
              {title}
              <ChevronRightIcon
                className={clsx('h-3 w-3 rotate-90', [open && '-rotate-90'])}
              />
            </button>
            {isOpen && (
              <Menu.Items
                static
                as={m.div}
                variants={animation}
                initial="hide"
                animate="show"
                className={clsx(
                  'border-divider-light absolute top-11 flex w-40 flex-col rounded-2xl border bg-white/70 p-2 backdrop-blur',
                  'dark:border-divider-dark dark:bg-slate-900/80'
                )}
              >
                {items.map((item) => (
                  <Menu.Item key={item.href}>
                    {({ active }) => (
                      <NavLink title={item.title} href={item.href} />
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            )}
          </>
        )}
      </Menu>
    </div>
  );
}

export default NavLinkDropdown;
