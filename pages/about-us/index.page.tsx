import DefaultLayout from "../../layouts/DefaultLayout";
import {AboutUsPageProps} from "./index.page.props";
export { Page }

function Page({header,footer,headerPage,breadcrumb,dataList,...props}:AboutUsPageProps):JSX.Element{
    return (
        <DefaultLayout header={header} footer={footer}>

        </DefaultLayout>
    );
}
