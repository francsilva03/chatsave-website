import clsx from 'clsx';

import Portal from '@/components/Portal';

interface SkipNavigationLinkProps {
  title: string;
  slug: string;
}

function SkipNavigationLink({ title, slug }: SkipNavigationLinkProps) {
  return (
    <a
      href={slug}
      className={clsx(
        'absolute -mt-0.5 inline-flex h-9 items-center rounded-xl bg-slate-900 px-4 align-bottom text-[13px] font-semibold text-slate-200 transition',
        [
          '-translate-x-4 opacity-0',
          'focus:pointer-events-auto focus:translate-x-0 focus:opacity-100',
        ],
        'dark:bg-white dark:font-bold dark:text-slate-800'
      )}
    >
      {title}
    </a>
  );
}

interface SkipNavigationProps {
  skipTableOfContents?: boolean;
}

function SkipNavigation({ skipTableOfContents = true }: SkipNavigationProps) {

}

export default SkipNavigation;
