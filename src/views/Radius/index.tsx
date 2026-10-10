import React from "react";

import ImageItem from "../../components/ImageItem";

import image1 from "../../images/portfolio/radius/image01.png";
import image2 from "../../images/portfolio/radius/image02.png";
import image3 from "../../images/portfolio/radius/image03.png";
import image4 from "../../images/portfolio/radius/image04.png";

import css from "./index.module.scss";

const Preview = (
  <p>
    Radius is a stylish number-conversion web application that I developed and
    distributed on the HP webOS platform for mobile phones.
  </p>
);

const View = (
  <>
    {Preview}
    {/* <p>
			<a href="https://www.webosnation.com/radius" target="_blank" rel="noopener noreferrer">App Catalog Listing</a>
		</p> */}
    <div className={css.centered}>
      <iframe
        title="radiusReview"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/K3y2nnvA2mc?mute=1"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className={css.title}>Third-party Radius Walk-through</div>
    </div>
    <ImageItem imageClassName={css.image} src={image1} title="Splash View" />
    <ImageItem
      imageClassName={css.image}
      src={image2}
      title="Conversion Selection View"
    />
    <ImageItem imageClassName={css.image} src={image3} title="Input View" />
    <ImageItem
      imageClassName={css.image}
      src={image4}
      title="Unit Selection View"
    />
  </>
);

export default View;
export { Preview, View };
