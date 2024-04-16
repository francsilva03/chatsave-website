import slug from 'slug';

import {
  CssIcon,
  FileIcon,
  HtmlIcon,
  JavaScriptIcon,
  ReactIcon,
} from '@/components/IconsFile';

import type { ReactElement, ReactNode } from 'react';

export const getSlug = (children: ReactNode) => {
  if (typeof children === 'string') {
    return slug(children);
  }

  return '';
};

export const urlType = (url: string) => {
  if (['/'].includes(url[0])) {
    return 'internal';
  }

  if (['#'].includes(url[0])) {
    return 'hash';
  }

  if (url.indexOf('mailto') === 0) {
    return 'mail';
  }

  return 'external';
};

export const formatLang = (
  lang: string,
  title?: string
): {
  language: string;
  icon: ReactElement;
} => {
  let language = lang;
  let icon = <FileIcon />;


  return { language, icon };
};
