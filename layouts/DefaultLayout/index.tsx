
import React from "react";
import Footer from "../../components/organisms/Footer";
import Header from "../../components/organisms/Header";
// @ts-ignore
const DefaultLayout = ({header,footer,children,...props}):JSX.Element=>  {
    return (
        <>
            {Object.keys(header).length ? <Header header={header} />: null}
            {children}
            {Object.keys(footer).length ? <Footer footer={footer} />: null}
        </>
    )
}
export default DefaultLayout
