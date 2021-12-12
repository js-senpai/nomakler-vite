import '../styles/css/globals.css'
import '../styles/sass/style.sass'

import { PageContextProvider } from "./usePageContext";
import {  ComponentChildren } from "preact";
import {PageContext} from "./types";

export { PageShell };

function PageShell({
  children,
  pageContext,
}:{
    pageContext:PageContext
    children: ComponentChildren
}) {
  return (
      <PageContextProvider pageContext={pageContext}>
          {children}
      </PageContextProvider>
  );
}
