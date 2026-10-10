import React from 'react';

import ImageItem from '../../components/ImageItem';

import image1 from '../../images/portfolio/kanpai/image01.jpg';
import image2 from '../../images/portfolio/kanpai/image02.jpg';
import image3 from '../../images/portfolio/kanpai/image03.jpg';

import css from './index.module.scss';

const Preview = (
	<p>
		I helped developed this website for a local Japanese steakhouse. I was responsible for creating a custom WordPress CMS that allowed managing menu
		items for each restaurant location.
	</p>
);

const View = (
	<>
		{Preview}
		<ImageItem imageClassName={css.image} src={image1} title="Home View" />
		<ImageItem imageClassName={css.image} src={image2} title="Menu View" />
		<ImageItem imageClassName={css.image} src={image3} title="Locations View" />
	</>
);

export default View;
export {
	Preview,
	View
};
