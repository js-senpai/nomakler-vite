import "./Banner.sass";
import { BannerProps } from "./Banner.props";
import DefaultContainer from "../../../containers/DefaultContainer";
export default ({
  img = "/images/organisms/Home/Banner/banner.jpg",
  title = "",
  description = "",
  ...props
}: BannerProps): JSX.Element => {
  return (
    <section {...props} className="banner">
      <img src={img} width="100%" height="560" className="banner__img" />
      <DefaultContainer className="container main-container relative">
        {title.length ? <h1 className="banner__title">{title}</h1> : null}
        {description.length ? (
          <div className="banner__description">{description}</div>
        ) : null}
      </DefaultContainer>
    </section>
  );
};
