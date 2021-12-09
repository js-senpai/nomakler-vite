import { SocialsProps } from "./Socials.props";
import "./Socials.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default ({
  socials = [],
  className = "",
  ...props
}: SocialsProps): JSX.Element => {
  const GetIcon = ({ icon = "" }) => {
    const faIcon = icon.split(" ") || ["fab", "instagram"];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return <FontAwesomeIcon icon={faIcon} />;
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
