import classNames from "classnames";
// import React from 'react';

import css from "./Delimiter.module.scss";

const Delimiter = ({ children, className, noSpace, ...rest }: any) => {
  const classes = classNames(className, { [css.delimiter]: !noSpace });

  return (
    <span {...rest} className={classes}>
      {children}
    </span>
  );
};

export default Delimiter;
export { Delimiter };
