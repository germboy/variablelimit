//import hoc from '@enact/core/hoc';
//import Spottable from '@enact/spotlight/Spottable';
// import Image from "@enact/ui/Image";
import classNames from "classnames";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Image from "../Image";

import componentCSS from "./Item.module.scss";

/*const defaultConfig = {
	prop: 'link'
};

const Linkable = hoc(defaultConfig, (config, Wrapped) => {
	const {prop} = config;

	return (props) => {
		const newProps = {...props};
		const link = newProps[prop];
		delete newProps[prop];

		return link ? (
			<a href={link}>
				<Wrapped {...newProps} />
			</a>
		) : (
			<Wrapped {...newProps} />
		)
	}
});*/

//const ItemImage = Linkable(Image);
//const LinkableSpan = Linkable('span');

//<Link to="/about">About</Link>

/*const getTitle = ({title, subtitle, ...rest}) => {
	if (!title) {
		return null;
	}

	return (
		<LinkableSpan {...rest}>
			<span className={componentCSS.bold}>{title}</span>
			{subtitle ?
				<span> @ {subtitle}</span> :
				null
			}
		</LinkableSpan>
	);
};*/

//const getLink = (link) => (`/${link}`);
const getLinkComponent = (link) => {
  const component = {
    Link: null,
    props: {},
  };

  if (link) {
    component.Link = Link;
    component.props.to = `/${link}`;
  } else {
    component.Link = Fragment;
  }

  return component;
};

const getTitle = ({ link, title, subtitle, ...rest }) => {
  if (!title) {
    return null;
  }
  const { Link, props } = getLinkComponent(link);

  return (
    <Link {...props}>
      <span {...rest}>
        <span className={componentCSS.bold}>{title}</span>
        {subtitle ? <span> @ {subtitle}</span> : null}
      </span>
    </Link>
  );
};

const ItemBase = ({
  children,
  className,
  css,
  description,
  link,
  sizing = "fit",
  src,
  subtitle,
  title,
  titleBelow,
  view,
  ...rest
}: any) => {
  const classes = classNames(className, componentCSS.item);
  const ItemTitle = getTitle({ link, title, subtitle });
  //const myLink = getLink(link);
  const { Link, props: linkProps } = getLinkComponent(link);
  //const ImageComponent = <Image className={componentCSS.image} css={css} sizing={sizing} src={src} />;
  //const ItemImage = link ? <a href={link}>{ImageComponent}</a> : ImageComponent;
  //const imageClasses = classNames(componentCSS.image, {[componentCSS.clickable]: onClick});
  delete rest.useSubtitle;

  return (
    <div {...rest} className={classes}>
      <Link {...linkProps}>
        <Image
          className={componentCSS.image}
          //   css={css}
          sizing={sizing}
          src={src}
        />
      </Link>
      <div className={componentCSS.content}>
        {title ? <div className={componentCSS.title}>{ItemTitle}</div> : null}
        {/*subtitle ?
					<div className={componentCSS.subtitle}>{subtitle}</div> :
					null
				*/}
        {titleBelow ? (
          <div className={componentCSS.titleBelow}>{titleBelow}</div>
        ) : null}
        {children ? (
          <div className={componentCSS.description}>{children}</div>
        ) : null}
      </div>
    </div>
  );
};

const Item =
  //Spottable(
  ItemBase;
//);

export default Item;
export { Item, ItemBase };
