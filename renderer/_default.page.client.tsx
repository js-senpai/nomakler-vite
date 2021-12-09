// // @ts-ignore
// import PreactDOM from "@preact/compat";
// import { PageShell } from "./PageShell";
// import { useClientRouter } from 'vite-plugin-ssr/client/router'
// import {getPageTitle} from "./getPageTitle";
// import { PageContextBuiltInClient} from "vite-plugin-ssr/client";
// import {PageContext} from "./types";
// useClientRouter({
//   async render(pageContext: PageContextBuiltInClient & PageContext) {
//     const { Page, pageProps } = pageContext;
//     const page = (
//         <PageShell pageContext={pageContext}>
//           <Page {...pageProps} />
//         </PageShell>
//     )
//     const container = document.getElementById('page-view')
//     if (pageContext.isHydration) {
//       PreactDOM.hydrate(page, container)
//     } else {
//       PreactDOM.render(page, container)
//     }
//     // document.title = getPageTitle(pageContext)
//   },
// })
// @ts-ignore
import PreactDOM from "@preact/compat";
import { getPage } from "vite-plugin-ssr/client";
import { PageShell } from "./PageShell";
import type { PageContext } from "./types";
import type { PageContextBuiltInClient } from "vite-plugin-ssr/client";

hydrate();

async function hydrate() {
  // We do Server Routing, but we can also do Client Routing by using `useClientRouter()`
  // instead of `getPage()`, see https://vite-plugin-ssr.com/useClientRouter
  const pageContext = await getPage<PageContextBuiltInClient & PageContext>();
  const { Page, pageProps } = pageContext;
  PreactDOM.hydrate(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>,
    document.getElementById("page-view")
  );
}
