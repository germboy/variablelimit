//import Image from '@enact/ui/Image';
import React from 'react';
import {Link} from 'react-router-dom';

import Divider from '../../components/Divider';
import ImageItem from '../../components/ImageItem';

/*import ImageItem from '../../components/ImageItem';

import image1 from '../../images/portfolio/badKitty/image01.png';
import image2 from '../../images/portfolio/badKitty/image02.png';
import image3 from '../../images/portfolio/badKitty/image03.png';
import image4 from '../../images/portfolio/badKitty/image04.png';
import image5 from '../../images/portfolio/badKitty/image05.png';
*/

import css from './index.module.scss';

const Preview = (
	<p>
		At LG, I was a Senior Software Engineer for the team responsible for developing the highly-optimized JavaScript framework, Enact. Additional
		responsibilities included implementing UI components, debugging internal application performance issues, and managing product initiatives and
		software releases.
	</p>
);

const View = (
	<>
		{Preview}
		{/*<ImageItem imageClassName={css.image} src={image1} title="Splash View" />
		<ImageItem imageClassName={css.image} src={image2} title="Accounts Overview" />
		<ImageItem imageClassName={css.image} src={image3} title="Account Overview" />
		<ImageItem imageClassName={css.image} src={image4} title="Timeline View" />
		<ImageItem imageClassName={css.image} src={image5} title="User Profile View" />*/}
		<Divider size="tall">Enact JS</Divider>
		<ImageItem imageClassName={css.imageEnact} noFitWidth src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3MDAiIGhlaWdodD0iNzAwIiB2aWV3Qm94PSIwIDAgNzAwIDcwMCI+PGRlZnM+PHN0eWxlPi5hLC5ie2ZpbGw6I2ZmZjt9LmJ7b3BhY2l0eTowLjg7fTwvc3R5bGU+PC9kZWZzPjxwb2x5Z29uIGNsYXNzPSJhIiBwb2ludHM9IjM0OS45IDUyNy44IDE5OS45IDQyOS44IDE5OS45IDM3NC40IDM1MC4xIDQ3Mi43IDM0OS45IDM0OC41IDE5OS45IDI2MS4xIDE5OS45IDIwOS4zIDM1MCAyOTMuNiAzNTAgMjkzLjYgMzUwLjIgMjkzLjcgMzQ5LjkgMTY5LjMgMTAyLjcgNDguNSAxMDIuNyA0NzIuNiAzNTAuMSA2NTEuNiAzNDkuOSA1MjcuOCIvPjxwb2x5Z29uIGNsYXNzPSJiIiBwb2ludHM9IjM1MC4xIDY1MS42IDU5Ny4zIDQ3Mi44IDU5Ny4zIDM2Ni4zIDM0OS45IDUyNy44IDM1MC4xIDY1MS42Ii8+PHBvbHlnb24gY2xhc3M9ImIiIHBvaW50cz0iMzUwLjEgNDcyLjcgNTIzLjUgMzU5LjMgNTIzLjUgMjQ3LjQgMzQ5LjkgMzQ4LjUgMzUwLjEgNDcyLjciLz48cG9seWdvbiBjbGFzcz0iYiIgcG9pbnRzPSIzNTAgMjkzLjYgMzUwIDI5My42IDM1MC4yIDI5My43IDU5Ny4zIDE1NC44IDU5Ny4zIDQ4LjQgMzQ5LjkgMTY5LjMgMzUwIDI5My42Ii8+PC9zdmc+" title="Enact JS" />
		<p>
			I was a major contributor to the development of Enact. Built on top of React, Enact is a modern open-source JavaScript framework that supplies
			the building blocks for web applications: providing solutions for internationalization (i18n), accessibility (i11n), focus management, linting,
			testing, and building. It is used as the main application framework on LG's webOS line of smart TVs, as the successor of <Link to="/portfolio/hp">Enyo</Link>.
		</p>
		<div>
			<a href="https://enactjs.com/" target="_blank" rel="noopener noreferrer">Enact JS Website</a>
		</div>
		<div>
			<a href="https://enactjs.com/sampler/" target="_blank" rel="noopener noreferrer">Enact JS Sampler</a>
		</div>
		<div>
			<a href="https://github.com/enactjs/enact" target="_blank" rel="noopener noreferrer">Enact on Github</a>
		</div>
		<Divider size="tall">Spotlight</Divider>
		<p>
			I was largely responsible for delivering the webOS platform's focus-management solution within Enact. Spotlight is an extensible utility library that provides
			pointer and 5-way directional & selection support, enabling users to navigate applications using a keyboard or television remote control.
		</p>
	</>
);

export default View;
export {
	Preview,
	View
};
