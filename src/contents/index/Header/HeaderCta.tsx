import clsx from 'clsx';
import { m, useReducedMotion } from 'framer-motion';
import Link from 'next/link';

import { CalendarIcon, MailIcon, PhoneIcon } from '@/components/Icons';

const animation = {
  hide: {
    x: -16,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};


interface HeaderCtaProps {
  isFree?: boolean;
  isFreeAnimationDuration?: number;
}

export function ButtonContactMe() {
  return (
    <Link
      href="https://calendly.com/chatsave/30min"
      target="_blank"
      rel="noreferrer nofollow"
      className={clsx('button button--solid min-w-[128px]', 'md:button--big')}
    >
      <CalendarIcon  className={clsx('w-6')} />
      Comienza ahora
    </Link>
  );
}


function ButtonResume() {
  const handleSendEmail = () => {
    const emailAddress = 'cchatsave@gmail.com'; 
    const subject = 'Solicitar información';

    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
  };

  const handleCall = () => {
    const phoneNumber = '+34623522786'; // Número de teléfono al que se desea llamar
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div>
      <button
        type="button"
        className={clsx('button button--ghost px-2', 'md:button--big md:px-2')}
        onClick={handleSendEmail}
      >
        <MailIcon className={clsx('h-5 w-5')} />
        Envíanos un correo
      </button>
      <button
        type="button"
        className={clsx('button button--ghost px-2', 'md:button--big md:px-2')}
        onClick={handleCall}
      >
        <PhoneIcon className={clsx('h-5 w-5')} />
        Llámanos
      </button>
    </div>
  );
}

function HeaderCta({
  isFree = true,
  isFreeAnimationDuration = 4,
}: HeaderCtaProps) {
  const shouldReduceMotion = useReducedMotion();

  let isFreeVariants = {
    hide: {
      x: 0,
      opacity: 1,
    },
    show: {
      x: -48,
      opacity: 0,
    },
  };

  if (shouldReduceMotion) {
    isFreeVariants = {
      hide: {
        x: 0,
        opacity: 1,
      },
      show: {
        x: 0,
        opacity: 0,
      },
    };
  }

  return (
    <m.div className={clsx('flex gap-2')} initial="hide" animate="show">
      <m.div
        className={clsx('relative z-20 top-2')}
        variants={animation}
        transition={{ delay: 0.4 }}
      >
        <ButtonContactMe />
      </m.div>
      {isFree ? (
        <m.div
          variants={animation}
          transition={{ delay: 2.8 }}
          className={clsx('relative z-10')}
        >
          <m.div
            variants={isFreeVariants}
            transition={{ delay: isFreeAnimationDuration + 1.5, duration: 0.4 }}
          >
          </m.div>
          <m.div
            className={clsx('absolute top-0 left-0')}
            initial={{ x: -48, opacity: 0, pointerEvents: 'none' }}
            animate={{ x: 0, opacity: 1, pointerEvents: 'auto' }}
            transition={{ delay: isFreeAnimationDuration + 1.6, duration: 0.4 }}
          >
            <ButtonResume />
          </m.div>
        </m.div>
      ) : (
        <m.div variants={animation} transition={{ delay: 0.5 }}>
          <ButtonResume />
        </m.div>
      )}
    </m.div>
  );
}

export default HeaderCta;
