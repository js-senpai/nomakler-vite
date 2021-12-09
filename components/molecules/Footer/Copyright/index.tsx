import React from "react";
import "./Copyright.sass";
import LazyLoad from "react-lazyload";
export default ({
  className = "",
  ...props
}: {
  className?: string;
}): JSX.Element => {
  return (
    <a
      {...props}
      href="https://michaelstudioo.com/"
      target="__blank"
      className={`copyright ${className}`}
    >
      <span>Developed in</span>
      <div className="copyright__img">
        <LazyLoad height={22}>
          <img
            width={31}
            height={22}
            src={"/images/molecules/Footer/Copyright/logo.png"}
          />
        </LazyLoad>
      </div>
      <span>Michaelstudioo</span>
    </a>
  );
};
