import {createContext} from 'preact';
import {useContext} from 'preact/hooks';

export { PageContextProvider };
export { usePageContext };

const Context = createContext(undefined);

// @ts-ignore
function PageContextProvider({ pageContext, children }) {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>;
}

function usePageContext() {
  return useContext(Context);
}
