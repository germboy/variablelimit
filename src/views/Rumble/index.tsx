// import React from 'react';

import ImageItem from "../../components/ImageItem";

import image1 from "../../images/portfolio/backseatGamer/image01.jpg";
import image2 from "../../images/portfolio/backseatGamer/image02.jpg";
import image3 from "../../images/portfolio/backseatGamer/image03.jpg";

import css from "./index.module.scss";

const Preview = (
  <p>
    I architected and developed video streaming applications for Connected TV
    (LG webOS, Samsung Tizen, Microsoft Xbox) and other web platforms, focusing
    on creating consistent experiences across diverse hardware. I owned the full
    engineering process - from technical design through implementation, testing,
    deployment, and production releases.
  </p>
);

const View = (
  <>
    {Preview}
    {/* <p>
      <a
        href="https://us.lgappstv.com/appspc/store/product/retrieveProductInfo.lge?appId=951114"
        target="_blank"
        rel="noopener noreferrer"
      >
        LG webOS TV App Store Listing
      </a>
    </p> */}
    <div className={css.listHeader}>Stack</div>
    <ul>
      <li>React</li>
      <li>Enact</li>
      {/* <li>LESS</li> */}
      {/* <li>PHP</li>
      <li>MySQL</li> */}
    </ul>
    {/* <div className={css.centered}>
      <iframe
        title="backseatGamer"
        src="https://player.vimeo.com/video/459819865"
        width="640"
        height="360"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>
      <div className={css.title}>Backseat Gamer Walk-through</div>
    </div>
    <ImageItem imageClassName={css.image} src={image1} title="Home View" />
    <ImageItem
      imageClassName={css.image}
      src={image2}
      title="Top Streams View"
    />
    <ImageItem imageClassName={css.image} src={image3} title="Top Games View" /> */}
  </>
);

export default View;
export { Preview, View };
