import Home from "../../components/templates/Home";
import DefaultLayout from "../../layouts/DefaultLayout";
import {HomePageProps} from "./index.page.props";

export { Page }
function  Page ({header,homeBanner,footer,advantages = [],apartments = [],...props}:HomePageProps):JSX.Element{
  return (
          <DefaultLayout header={header} footer={footer}>
              <Home {...props}  homeBanner={homeBanner} advantages={advantages} apartments={apartments} />
          </DefaultLayout>
  );
}
