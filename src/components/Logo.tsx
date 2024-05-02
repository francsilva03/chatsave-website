import clsx from 'clsx';

function Logo() {
  return (
    <div className={clsx('flex items-center gap-1.5 font-[1000] leading-none')} id="#chatsave">
      <div className={clsx('-mt-1 hidden text-xl', 'sm:block')}>
        <span className={clsx('text-slate-900', 'dark:text-slate-200')}>
         Chat
        </span>
        <span className={clsx('text-accent-600', 'dark:text-accent-500')}>
         Save
        </span>
      </div>
    </div>
  );
}

export default Logo;
