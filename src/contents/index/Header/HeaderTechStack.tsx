import clsx from 'clsx';
import { m } from 'framer-motion';

import {
  InstagramIcon,
  TikTokIcon,
} from '@/components/Icons';

const animation = {
  hide: { x: -8, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

function HeaderTechStack() {
  return (
    <div>
      <m.p
        className={clsx('mb-2.5 text-sm text-slate-600', 'dark:text-slate-400')}
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.6 }}
      >
        Nuestras redes sociales:
      </m.p>
      <m.ul
        className={clsx(
          'flex items-center gap-3.5 text-slate-500',
          'dark:text-slate-500'
        )}
        initial="hide"
        animate="show"
        transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
      >
        <m.li variants={animation}>
          <a href="https://www.tiktok.com/@chatsave.ia">
            <div className={clsx('transition duration-200 hover:text-[#3178C6]')}>
              <TikTokIcon className={clsx('h-6 w-6')} />
            </div>
          </a>
        </m.li>
        <m.li variants={animation}>
          <a href="https://www.instagram.com/chatsave.ia/">
            <div className={clsx('transition duration-200 hover:text-[#61DAFB]')}>
              <InstagramIcon className={clsx('h-6 w-6')} />
            </div>
          </a>
        </m.li>
      </m.ul>
    </div>
  );
}

export default HeaderTechStack;
