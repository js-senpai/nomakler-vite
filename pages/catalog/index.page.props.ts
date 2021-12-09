import { HeaderProps } from "../../components/organisms/Header/Header.props";
import { FooterProps } from "../../components/organisms/Footer/Footer.props";
import { CatalogProps } from "../../components/templates/Catalog/Catalog.props";

export interface CatalogPageProps
  extends HeaderProps,
    FooterProps,
    CatalogProps {}
