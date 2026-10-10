import React from "react";

import ImageItem from "../../components/ImageItem";

import image1 from "../../images/portfolio/badKitty/image01.png";
import image2 from "../../images/portfolio/badKitty/image02.png";
import image3 from "../../images/portfolio/badKitty/image03.png";
import image4 from "../../images/portfolio/badKitty/image04.png";
import image5 from "../../images/portfolio/badKitty/image05.png";

import css from "./index.module.scss";

// random app demos online
//https://www.youtube.com/watch?v=usgPaArEkTU // precentral
//https://www.youtube.com/watch?v=zEF2Qltdu6M // germ
//https://vimeo.com/16130458 // germ
//https://vimeo.com/12437413 // germ

const Preview = (
  <p>
    This was a fun and uniquely designed twitter application, and it was the
    first project I developed for SuperInhuman Industries. Working alongside the
    mastermind - and designer - behind this project (Hal Saville), I brought
    this application to life as a mobile web application for the HP webOS
    platform. It quickly received a lot of recognition and became one of the
    highest downloaded apps in the HP webOS App Catalog.
  </p>
);

const View = (
  <>
    {Preview}
    {/* <p>
			<a href="https://www.webosnation.com/bad-kitty" target="_blank" rel="noopener noreferrer">App Catalog Listing</a>
		</p> */}
    <div className={css.centered}>
      <iframe
        title="badKittyReview"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/usgPaArEkTU"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className={css.title}>
        Third-party Bad Kitty Review (precentral.net)
      </div>
    </div>
    <ImageItem imageClassName={css.image} src={image1} title="Splash View" />
    <ImageItem
      imageClassName={css.image}
      src={image2}
      title="Accounts Overview"
    />
    <ImageItem
      imageClassName={css.image}
      src={image3}
      title="Account Overview"
    />
    <ImageItem imageClassName={css.image} src={image4} title="Timeline View" />
    <ImageItem
      imageClassName={css.image}
      src={image5}
      title="User Profile View"
    />
  </>
);

export default View;
export { Preview, View };
