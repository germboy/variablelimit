import React from "react";

import ImageItem from "../../components/ImageItem";

import image1 from "../../images/portfolio/noble/image01.png";
import image2 from "../../images/portfolio/noble/image02.png";
import image3 from "../../images/portfolio/noble/image03.png";
import image4 from "../../images/portfolio/noble/image04.png";
import image5 from "../../images/portfolio/noble/image05.png";

import css from "./index.module.scss";

const Preview = (
  <p>
    Noble is a third-party statistics-tracking app for the popular video game
    Halo Reach. I self-published this application on the HP webOS App Catalog
    for mobile and tablet devices.
  </p>
);

const View = (
  <>
    {Preview}
    {/* <p>
			<a href="https://www.webosnation.com/noble" target="_blank" rel="noopener noreferrer">App Catalog Listing</a>
		</p> */}
    <ImageItem imageClassName={css.image} src={image1} title="Splash View" />
    <ImageItem
      imageClassName={css.image}
      src={image2}
      title="Player List View"
    />
    <ImageItem
      imageClassName={css.image}
      src={image3}
      title="Player Overview"
    />
    <ImageItem imageClassName={css.image} src={image4} title="Game Overview" />
    <ImageItem
      imageClassName={css.image}
      src={image5}
      title="Player Stats View"
    />
  </>
);

export default View;
export { Preview, View };
