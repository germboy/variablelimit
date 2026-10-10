import classNames from "classnames";
// import React from 'react';

import css from "./Divider.module.scss";

const Divider = ({ children, className, size, ...rest }: any) => {
  const classes = classNames(className, css.divider, {
    [css.tall]: size === "tall",
  });
  return (
    <h3 {...rest} className={classes}>
      <div className={css.content}>{children}</div>
    </h3>
  );
};

export default Divider;
export { Divider };
