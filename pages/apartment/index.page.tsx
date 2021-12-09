import DefaultLayout from "../../layouts/DefaultLayout";
import { AboutUsPageProps, ApartmentPageProps } from "./index.page.props";
export { Page };

function Page({
  header,
  footer,
  headerPage,
  breadcrumb,
  page: {
    verified = false,
    ready = false,
    title = "",
    propertyId = 0,
    overview: {
      sleepingPlaces = 0,
      shower = 0,
      dimensions = 0,
      garage = 0,
      days = 0,
      description = "",
    },
    fullDescription: [],
    features: [],
    addressInfo = [],
    address = "",
    price = 0,
    images = [],
  },
  ...props
}: ApartmentPageProps): JSX.Element {
  return <DefaultLayout header={header} footer={footer}></DefaultLayout>;
}
