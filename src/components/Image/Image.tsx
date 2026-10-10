import type { ReactNode } from "react";
import classNames from "classnames";

import css from "./Image.module.scss";

type Props = {
  sizing: "fit" | "fill" | "none";
  src: string;

  alt?: string;
  children?: ReactNode;
  className?: string;
  onError?: () => void;
  onLoad?: () => void;
  style?: React.CSSProperties | undefined;
};

const getBgImage = ({
  placeholder,
  src,
}: {
  placeholder: string;
  src: string;
}) => {
  const imageSrc = src || placeholder;
  // warning(imageSrc, 'Image requires that either the "placeholder" or "src" props be specified.');
  if (!imageSrc) return null;
  return placeholder && imageSrc !== placeholder
    ? `url("${imageSrc}"), url("${placeholder}")`
    : `url("${imageSrc}")`;
};

const Image = ({
  alt,
  //   "aria-label": ariaLabel,
  //   bgImage,
  children,
  className,
  //   imgSrc,
  onError,
  onLoad,
  sizing,
  src,
  style,
  ...rest
}: Props) => {
  const bgImage = getBgImage({ placeholder: "placeholder", src });
  const classes = classNames(
    css.image,
    // sizing !== "none" && sizing,
    { [css.fill]: sizing === "fill" },
    { [css.fit]: sizing === "fit" },
    className,
  );

  return (
    <div
      role="img"
      {...rest}
      className={classes}
      //   aria-label={ariaLabel || alt}
      style={{ ...style, backgroundImage: bgImage }}
    >
      {children}
      <img
        className={css.img}
        src={src}
        alt={alt}
        onLoad={onLoad}
        onError={onError}
      />
    </div>
  );
};

export default Image;
export { Image };
