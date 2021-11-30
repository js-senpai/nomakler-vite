

import Footer from "../../components/organisms/Footer";
import Header from "../../components/organisms/Header";
// @ts-ignore
const DefaultLayout = ({header,footer,children,...props}):JSX.Element=>  {
    return (
        <div className="main-layout">
            <Header header={header} />:
            {children}
            <Footer footer={footer} />
        </div>
    )
}
export default DefaultLayout
