// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import PreactDOM from "@preact/compat";
import { PageShell } from "./PageShell";
import { useClientRouter } from "vite-plugin-ssr/client/router";
import { getPageTitle } from "./getPageTitle";
import { PageContextBuiltInClient } from "vite-plugin-ssr/client";
import { PageContext } from "./types";
useClientRouter({
  async render(pageContext: PageContextBuiltInClient & PageContext) {
    const { Page, pageProps } = pageContext;
    const page = (
      <PageShell pageContext={pageContext}>
        <Page {...pageProps} />
      </PageShell>
    );
    const container = document.getElementById("page-view");
    if (pageContext.isHydration) {
      PreactDOM.hydrate(page, container);
    } else {
      PreactDOM.render(page, container);
    }
    // document.title = getPageTitle(pageContext)
  },
  prefetchLinks: true,
});
