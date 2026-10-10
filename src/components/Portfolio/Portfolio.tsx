//import ContextualPopupDecorator from '@enact/moonstone/MoonstoneDecorator';
// import Repeater from "@enact/ui/Repeater";
import Repeater from "../Repeater";
// import React from "react";

import Item from "../Item";
//import {Item as ItemBase} from '../Item';
import viewBadKitty, { Preview as previewBadKitty } from "../../views/BadKitty";
import viewBackseatGamer, {
  Preview as previewBackseatGamer,
} from "../../views/BackseatGamer";
import viewRadius, { Preview as previewRadius } from "../../views/Radius";
import viewNoble, { Preview as previewNoble } from "../../views/Noble";
import viewKanpai, { Preview as previewKanpai } from "../../views/Kanpai";
import viewPorva, { Preview as previewPorva } from "../../views/Porva";
import viewHP, { Preview as previewHP } from "../../views/HP";
import viewLG, { Preview as previewLG } from "../../views/LG";
import viewRumble, { Preview as previewRumble } from "../../views/Rumble";

import css from "./Portfolio.module.scss";

import imageLG from "../../images/portfolio/previewLG.png";
import imageBackseatGamer from "../../images/portfolio/previewBackseatGamer.png";
import imageRadius from "../../images/portfolio/previewRadius.png";
import imageNoble from "../../images/portfolio/previewNoble.png";
import imageBadKitty from "../../images/portfolio/previewBadKitty.png";
import imageKanpai from "../../images/portfolio/previewKanpai.png";
import imageHP from "../../images/portfolio/previewHP.png";
import imagePorva from "../../images/portfolio/previewPorva.png";
import imageRumble from "../../images/portfolio/previewRumble.png";

//const Item = ContextualPopupDecorator({noSkin: true}, ItemBase);

const items = [
  {
    children: previewRumble,
    className: css.rumble,
    title: "Connected TV",
    subtitle: "Rumble",
    src: imageRumble,
    link: "portfolio/rumble",
    view: viewRumble,
    useSubtitle: true,
  },
  {
    children: previewLG,
    className: css.hp,
    title: "webOS",
    subtitle: "LG Electronics",
    src: imageLG,
    link: "portfolio/lg-webos",
    view: viewLG,
    useSubtitle: true,
  },
  /*{
		children: <p>
			I was a major contributor to the development of Enact. Built on top of React, Enact is a modern open-source JavaScript framework that supplies
			the building blocks for web applications: providing solutions for internationalization (i18n), accessibility (i11n), focus management, linting,
			testing, and building. It is used as the main application framework on LG's webOS line of smart TVs.
		</p>,
		className: css.enact,
		title: 'Enact',
		subtitle: 'LG Electronics',
		src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3MDAiIGhlaWdodD0iNzAwIiB2aWV3Qm94PSIwIDAgNzAwIDcwMCI+PGRlZnM+PHN0eWxlPi5hLC5ie2ZpbGw6I2ZmZjt9LmJ7b3BhY2l0eTowLjg7fTwvc3R5bGU+PC9kZWZzPjxwb2x5Z29uIGNsYXNzPSJhIiBwb2ludHM9IjM0OS45IDUyNy44IDE5OS45IDQyOS44IDE5OS45IDM3NC40IDM1MC4xIDQ3Mi43IDM0OS45IDM0OC41IDE5OS45IDI2MS4xIDE5OS45IDIwOS4zIDM1MCAyOTMuNiAzNTAgMjkzLjYgMzUwLjIgMjkzLjcgMzQ5LjkgMTY5LjMgMTAyLjcgNDguNSAxMDIuNyA0NzIuNiAzNTAuMSA2NTEuNiAzNDkuOSA1MjcuOCIvPjxwb2x5Z29uIGNsYXNzPSJiIiBwb2ludHM9IjM1MC4xIDY1MS42IDU5Ny4zIDQ3Mi44IDU5Ny4zIDM2Ni4zIDM0OS45IDUyNy44IDM1MC4xIDY1MS42Ii8+PHBvbHlnb24gY2xhc3M9ImIiIHBvaW50cz0iMzUwLjEgNDcyLjcgNTIzLjUgMzU5LjMgNTIzLjUgMjQ3LjQgMzQ5LjkgMzQ4LjUgMzUwLjEgNDcyLjciLz48cG9seWdvbiBjbGFzcz0iYiIgcG9pbnRzPSIzNTAgMjkzLjYgMzUwIDI5My42IDM1MC4yIDI5My43IDU5Ny4zIDE1NC44IDU5Ny4zIDQ4LjQgMzQ5LjkgMTY5LjMgMzUwIDI5My42Ii8+PC9zdmc+',
		link: 'portfolio/lg-enact',
		view: <p>LG Enact page details</p>
	},*/
  {
    children: previewBackseatGamer,
    className: css.backseatGamer,
    title: "Backseat Gamer",
    src: imageBackseatGamer,
    link: "portfolio/backseat-gamer",
    view: viewBackseatGamer,
  },
  {
    children: previewRadius,
    className: css.radius,
    title: "Radius",
    subtitle: "SuperInhuman Industries",
    //titleBelow="Mobile"
    src: imageRadius,
    link: "portfolio/radius",
    view: viewRadius,
  },
  {
    children: previewHP,
    className: css.hp,
    title: "webOS",
    subtitle: "HP • Palm",
    useSubtitle: true,
    //titleBelow="TV"
    src: imageHP,
    link: "portfolio/hp",
    view: viewHP,
  },
  /*{
		children: descriptionEnyo,
		className: css.hp,
		title: Enyo',
		subtitle: 'HP',
		//titleBelow="TV"
		src: imageEnyo
	},*/
  {
    children: previewBadKitty,
    className: css.badKitty,
    title: "Bad Kitty",
    subtitle: "SuperInhuman Industries",
    //titleBelow="Mobile"
    src: imageBadKitty,
    link: "portfolio/bad-kitty",
    view: viewBadKitty,
  },
  {
    children: previewNoble,
    className: css.noble,
    title: "Noble",
    //subtitle="Self-published"
    //titleBelow="Mobile"
    src: imageNoble,
    link: "portfolio/noble",
    view: viewNoble,
  },
  {
    children: previewPorva,
    className: css.porva,
    title: "Porva",
    //subtitle="Self-published"
    //titleBelow="Web"
    src: imagePorva,
    link: "portfolio/porva",
    view: viewPorva,
  },
  {
    children: previewKanpai,
    className: css.kanpai,
    title: "Kanpai",
    //subtitle="Self-published"
    //titleBelow="Web"
    src: imageKanpai,
    link: "portfolio/kanpai",
    view: viewKanpai,
  },
];

items.forEach(({ title, subtitle }, index) => {
  const subtitleFormatted = subtitle ? ` ${subtitle}` : "";
  // @ts-ignore
  items[index].css = css;
  // @ts-ignore
  items[index].key = `${title}${subtitleFormatted}`;
});

const Portfolio = ({ children, ...rest }: any) => {
  /*items.forEach(({title, subtitle}, index) => {
		const subtitleFormatted = subtitle ? ` ${subtitle}` : '';
		items[index].css = css;
		items[index].key = `${title}${subtitleFormatted}`;
	});*/
  //   console.log("portfolio", children);

  return (
    <Repeater
      childComponent={Item}
      className={css.items}
      component="article"
      {...rest}
    >
      {children}
    </Repeater>
  );
};

export default Portfolio;
export { items, Portfolio };
