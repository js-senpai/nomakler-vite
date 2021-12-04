import {CatalogHeaderProps} from "../../organisms/Catalog/CatalogHeader/CatalogHeader.props";
import {BreadcrumbProps} from "../../molecules/General/Breadcrumb/Breadcrumb.props";
import {ApartmentsItemProps} from "../../molecules/Catalog/ApartmentItem/ApartmentsItem.props";

export interface CatalogProps {
    headerPage: CatalogHeaderProps
    breadcrumb: BreadcrumbProps
    catalog: {
        catalogList: ApartmentsItemProps[]
        total: number
    }
}
