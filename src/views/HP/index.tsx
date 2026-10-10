import React from 'react';

import Divider from '../../components/Divider';
import ImageItem from '../../components/ImageItem';

import image1 from '../../images/portfolio/hp/image01.png';
import image2 from '../../images/portfolio/hp/image02.png';
import image3 from '../../images/portfolio/hp/image03.png';

import image4 from '../../images/portfolio/hp/previewEnyo.png';

import css from './index.module.scss';

const Preview = (
	<p>
		I originally joined HP as a Developer Relations Engineer, handling third-party application support and
		SDK tools. I shortly joined the framework team as a Software Engineer, working on the Enyo JavaScript
		library that was used to build the application components within the webOS platform.
	</p>
);

const View = (
	<>
		{Preview}
		<Divider size="tall">Enyo JS</Divider>
		<ImageItem imageClassName={css.image4} noFitWidth src={image4} title="Enyo JS" />
		<p>
			I worked on the core webOS framework team, contributing to the JavaScript library Enyo that powered the platform.
			Enyo is an open-source library that consisted of core components and functionality for single-page
			web apps. It supported browsers and any platform supporting web technologies, such as webOS (natively)
			and even iOS/Android (via Cordova or PhoneGap). It got its start on webOS for mobile and tablet devices and grew
			to support TVs.
		</p>
		<div>
			<a href="https://enyojs.com/" target="_blank" rel="noopener noreferrer">Enyo JS Website</a>
		</div>
		<div>
			<a href="https://enyojs.com/sampler/latest/" target="_blank" rel="noopener noreferrer">Enyo JS Sampler</a>
		</div>
		<p>
			In addition to the core Enyo framework, I also implemented components within
			the family of Enyo UI libraries: Onyx for mobile and Moonstone for TV.
		</p>
		<div>
			<a href="https://enyojs.com/sampler/latest/onyx/index.html" target="_blank" rel="noopener noreferrer">Onyx Sampler</a>
		</div>
		<div>
			<a href="https://enyojs.com/sampler/latest/moonstone/index.html" target="_blank" rel="noopener noreferrer">Moonstone Sampler</a>
		</div>
		<Divider size="tall">Synergy</Divider>
		<p>
			I also added Twitter integration to the webOS Synergy service. This allowed for seamless posting of
			tweets and images from within the webOS platform itself, not requiring a separate Twitter app.
		</p>
		<ImageItem imageClassName={css.image1} src={image1} title="webOS Synergy Twitter Account Setup" />
		<ImageItem imageClassName={css.image2} src={image2} title="webOS Synergy &quot;Just Type&quot; View" />
		<ImageItem imageClassName={css.image3} src={image3} title="webOS Synergy Photo Upload" />
	</>
);

export default View;
export {
	Preview,
	View
};
