import React from 'react';

import ImageItem from '../../components/ImageItem';

import image1 from '../../images/portfolio/porva/image01.jpg';
import image2 from '../../images/portfolio/porva/image02.jpg';
import image3 from '../../images/portfolio/porva/image03.jpg';
import image4 from '../../images/portfolio/porva/image04.jpg';

import css from './index.module.scss';

const Preview = (
	<p>
		I developed this modern web app for a local church. It utilizes Cordova and responsive web design to support
		mobile and tablet devices on both iOS and Android.
	</p>
);

const View = (
	<>
		{Preview}
		<div className={css.listHeader}>Stack</div>
		<ul>
			<li>React</li>
			<li>Enact</li>
			<li>SASS</li>
			<li>Cordova</li>
		</ul>
		<ImageItem imageClassName={css.image} src={image1} title="Home View (Mobile)" />
		<ImageItem imageClassName={css.image} src={image2} title="Video List View (Mobile)" />
		<ImageItem imageClassName={css.image} src={image3} title="Home View (Tablet)" />
		<ImageItem imageClassName={css.image} src={image4} title="Video List View (Tablet)" />
	</>
);

export default View;
export {
	Preview,
	View
};
