// @ts-nocheck

// import {Cell, Row} from '@enact/ui/Layout';
import { Cell, Row } from "../Layout/Layout";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Delimiter from "../Delimiter";
import Light from "../Light";

import css from "./Header.module.scss";

//const A = ({children, ...rest}) => (<a {...rest}>{children}</a>);

const getTitle = (title) => {
  /*return string && string.split(' ').reduce((result, item, i) => {
		const char = item.charAt(0);
		const rest = item.substr(1);
		const separator = i ? '.' : '';

		return (
			<>
				{result}
				{separator}
				<span className={css.large}>{char}</span>
				{rest}
			</>
		);
	}, '');*/
  return (
    title &&
    title.reduce((result, { content, link }, i) => {
      const titleFormatted =
        content &&
        content.split(" ").reduce((result, item, i) => {
          const char = item.charAt(0);
          const rest = item.substr(1);
          const delimiter = i ? "." : "";

          return (
            <>
              {result}
              {delimiter}
              <Delimiter className={css.large} noSpace>
                {char}
              </Delimiter>
              {rest}
            </>
          );
        }, "");

      let ContentWrapper;
      const linkProps = {};
      if (link) {
        ContentWrapper = Link;
        linkProps.to = link;
      } else {
        ContentWrapper = Fragment;
      }

      return (
        <ContentWrapper {...linkProps}>
          {result}
          {i ? <Delimiter>|</Delimiter> : null}
          {titleFormatted}
        </ContentWrapper>
      );
    }, "")
  );
};

const getTitleBelow = (strings) => {
  return (
    strings &&
    strings.reduce(
      (result, item, i) => (
        <>
          {result}
          {i ? <Delimiter>|</Delimiter> : null}
          {item}
        </>
      ),
      "",
    )
  );
};

const getSubtitle = (strings) => {
  return (
    strings &&
    strings.reduce(
      (result, item, i) => (
        <>
          {result}
          {i ? <Delimiter>|</Delimiter> : null}
          {item}
        </>
      ),
      "",
    )
  );
};

const HeaderBase = ({ children, subTitle, title, titleBelow, ...rest }) => {
  const subtitleFormatted = getSubtitle(subTitle);
  const titleFormatted = getTitle(title);
  const titleBelowFormatted = getTitleBelow(titleBelow);

  return (
    <header {...rest} className={css.header}>
      <Light />
      <div className={css.content}>
        <h1 className={css.title}>{titleFormatted}</h1>
        <h2 className={css.subtitle}>{subtitleFormatted}</h2>
        <Row className={css.titleBelow}>
          <Cell>{titleBelowFormatted}</Cell>
          <Cell className={css.contact}>
            <a
              href="https://twitter.com/germboy"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
            <Delimiter>|</Delimiter>
            <a
              href="https://www.linkedin.com/in/germboy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </Cell>
        </Row>
      </div>
    </header>
  );
};

export default HeaderBase;
export { HeaderBase };
