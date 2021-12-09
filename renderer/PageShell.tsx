import "../styles/css/globals.css";
import "../styles/sass/style.sass";

import { PageContextProvider } from "./usePageContext";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { ComponentChildren } from "preact";
import { PageContext } from "./types";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
library.add(fas, fab);

export { PageShell };

function PageShell({
  children,
  pageContext,
}: {
  pageContext: PageContext;
  children: ComponentChildren;
}) {
  return (
    <PageContextProvider pageContext={pageContext}>
      {children}
    </PageContextProvider>
  );
}
