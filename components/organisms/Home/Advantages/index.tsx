// Import components
import {AdvantagesProps} from "./Advantages.props";

import styles from './Advantages.module.sass'
import DefaultContainer from "../../../containers/DefaultContainer";

import AdvantagesItem from "../../../molecules/Home/AdvantagesItem";
const Advantages = ({advantages = []}:AdvantagesProps):JSX.Element => {
    return (
        <section  className={`${styles.advantages}`}>
            <DefaultContainer className={styles.advantages__container}>
                {
                    advantages.length ? advantages.map(({id,img,title,description}) => (<AdvantagesItem  key={id} img={img} title={title} description={description} />))  : null
                }
            </DefaultContainer>
        </section>
    )
}
export default Advantages
