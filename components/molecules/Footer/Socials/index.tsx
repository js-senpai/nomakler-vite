import { SocialsProps } from "./Socials.props";
import "./Socials.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faPinterest,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default ({
  socials = [],
  className = "",
  ...props
}: SocialsProps): JSX.Element => {
  const GetIcon = ({ icon = "" }) => {
    switch (icon) {
      case "instagram":
        return <FontAwesomeIcon icon={faInstagram} />;
      case "pinterest":
        return <FontAwesomeIcon icon={faPinterest} />;
      case "facebook":
        return <FontAwesomeIcon icon={faFacebook} />;
      case "twitter":
        return <FontAwesomeIcon icon={faTwitter} />;
      default:
        return <FontAwesomeIcon icon={faFacebook} />;
    }
  };
  return (
    <ul {...props} className={`socials ${className}`}>
      {socials.map(({ id, icon, url }) => (
        <li className="socials__item" key={id}>
          <a href={url}>
            <GetIcon icon={icon} />
          </a>
        </li>
      ))}
    </ul>
  );
};
