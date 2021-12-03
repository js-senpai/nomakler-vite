
import Home from "../../components/templates/Home";
import DefaultLayout from "../../layouts/DefaultLayout";
import {IndexPageInterface} from "./index.page.interface";

export { Page }
function  Page ({header,homeBanner,footer,advantages = [],apartments = [],...props}:IndexPageInterface){
  return (
          <DefaultLayout header={header} footer={footer}>
              <Home {...props}  homeBanner={homeBanner} advantages={advantages} apartments={apartments} />
          </DefaultLayout>
  );
}
