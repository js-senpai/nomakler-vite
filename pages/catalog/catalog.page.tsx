import DefaultLayout from "../../layouts/DefaultLayout";
import Home from "../../components/templates/Home";

export { Catalog }

function Catalog({header,footer,catalog,...props}){
    return (
        <DefaultLayout header={header} footer={footer}>

        </DefaultLayout>
    );
}
