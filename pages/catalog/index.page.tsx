import DefaultLayout from "../../layouts/DefaultLayout";
import Catalog from "../../components/templates/Catalog";
import {CatalogPageProps} from "./index.page.props";
export { Page }

function Page({header,footer,headerPage,breadcrumb,catalog,...props}:CatalogPageProps): JSX.Element{
    return (
        <DefaultLayout header={header} footer={footer}>
           <Catalog {...props} headerPage={headerPage} catalog={catalog} breadcrumb={breadcrumb} />
        </DefaultLayout>
    );
}
