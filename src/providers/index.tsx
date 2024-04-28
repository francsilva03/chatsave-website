import { ThemeProvider } from "next-themes";

import FramerMotionProvider from "@/providers/FramerMotionProvider";
import GlobalStateProvider from "@/providers/GlobalStateProvider";

import type { PropsWithChildren } from "react";

function Provider({ children = null }: PropsWithChildren) {
  return (
    <FramerMotionProvider>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <GlobalStateProvider>{children}</GlobalStateProvider>
      </ThemeProvider>
    </FramerMotionProvider>
  );
}

export default Provider;
