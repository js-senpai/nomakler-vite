// Import components
import { AdvantagesProps } from "./Advantages.props";
import "./Advantages.sass";
import DefaultContainer from "../../../containers/DefaultContainer";
import AdvantagesItem from "../../../molecules/Home/AdvantagesItem";
export default ({ advantages = [] }: AdvantagesProps): JSX.Element => {
  return (
    <section className="advantages">
      <DefaultContainer className="advantages__container">
        {advantages.length
          ? advantages.map(({ id, img, title, description }) => (
              <AdvantagesItem
                key={id}
                img={img}
                title={title}
                description={description}
              />
            ))
          : null}
      </DefaultContainer>
    </section>
  );
};
