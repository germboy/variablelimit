import classNames from "classnames";

import css from "./Repeater.module.scss";

type Props = {
  childComponent: any;
  children: any[];
  component: string;

  className?: string;
  itemProps: object;
};

const childProp = "children";
const indexProp = "data-index";

const Repeater = ({
  childComponent: ChildComponent,
  children,
  className,
  component: Component,
  itemProps,
}: Props) => {
  const classes = classNames(css.repeater, className);

  return (
    <Component className={classes}>
      {children.map(({ key, ...data }: any, index: number) => {
        let props = {} as any;

        if (typeof data === "object") {
          props = { ...itemProps, ...data };
        } else if (childProp) {
          props = { key: index, ...itemProps, [childProp]: data };
        }
        if (indexProp) props[indexProp] = index;

        return <ChildComponent {...props} key={key} />;
      })}
    </Component>
  );
};

export default Repeater;
export { Repeater };
