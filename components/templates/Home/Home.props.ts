import {ActualApartmentsProps} from "../../organisms/Home/ActualApartments/ActualApartments.props";
import {AdvantagesProps} from "../../organisms/Home/Advantages/Advantages.props";
import {BannerProps} from "../../organisms/Home/Banner/Banner.props";


export interface HomeProps extends AdvantagesProps,ActualApartmentsProps{
 homeBanner: BannerProps
}
