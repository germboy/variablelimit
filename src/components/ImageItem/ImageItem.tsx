// import { Image as ImageBase } from "@enact/ui/Image";
import classNames from "classnames";
// import React from 'react';

import ImageBase from "../Image";

import css from "./ImageItem.module.scss";

const ImageItem = ({
  className,
  imageClassName,
  noFitWidth,
  title,
  ...rest
}: any) => {
  const classes = classNames(className, css.imageItem, {
    [css.fitWidth]: !noFitWidth,
  });
  const imageClasses = classNames(css.image, imageClassName);

  return (
    <div className={classes}>
      <ImageBase className={imageClasses} sizing="fit" {...rest} />
      {title ? <div className={css.title}>{title}</div> : null}
    </div>
  );
};

export default ImageItem;
export { ImageItem };
