import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'next-themes';

import ColorAccentProvider from '@/providers/ColorAccentProvider';
import FocusModeProvider from '@/providers/FocusModeProvider';
import FramerMotionProvider from '@/providers/FramerMotionProvider';
import GlobalStateProvider from '@/providers/GlobalStateProvider';

import type { PropsWithChildren } from 'react';

function Provider({ children = null }: PropsWithChildren) {
  return (
    <FramerMotionProvider>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <FocusModeProvider>
          <ColorAccentProvider defaultScheme="violet">
            <GlobalStateProvider>
                {children}
            </GlobalStateProvider>
          </ColorAccentProvider>
        </FocusModeProvider>
      </ThemeProvider>
    </FramerMotionProvider>
  );
}

export default Provider;
