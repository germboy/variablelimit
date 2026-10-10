import {forward} from '@enact/core/handle';
import {FloatingLayer, FloatingLayerDecorator} from '@enact/ui/FloatingLayer';
import Transition from '@enact/ui/Transition';
import {Cell, Column, Row} from '@enact/ui/Layout';
//import Scrim from '@enact/ui/FloatingLayer/Scrim';
import React from 'react';

import css from './Popup.module.scss';

/*
<SkinnedPopupBase
				{...rest}
				data-webos-voice-exclusive
				onHide={this.handlePopupHide}
				onShow={this.handlePopupShow}
				//open={this.state.popupOpen >= OpenState.OPENING}
				spotlightId={this.state.containerId}
			/>
*/

/*const handleIt = () => {
	console.log('handleIt');
};

const handleOpen = () => {
	console.log('handleOpen');
};

const handleWheel = (ev) => {
	console.log('wheel');
	ev.nativeEvent.preventDefault();
};*/

//const Floaty = FloatingLayerDecorator(FloatingLayer);

const OpenState = {
	CLOSED: 0,
	OPENING: 1,
	OPEN: 2
};

const forwardClose = forward('onClose');
const forwardHide = forward('onHide');
const forwardShow = forward('onShow');

class PopupBase extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			floatLayerOpen: this.props.open,
			popupOpen: this.props.open ? OpenState.OPEN : OpenState.CLOSED,
			prevOpen: this.props.open
		};
	}

	static getDerivedStateFromProps (props, state) {
		if (props.open !== state.prevOpen) {
			if (props.open) {
				return {
					popupOpen: props.noAnimation || state.floatLayerOpen ? OpenState.OPEN : OpenState.CLOSED,
					floatLayerOpen: true,
					prevOpen: props.open
				};
			} else {
				return {
					popupOpen: OpenState.CLOSED,
					floatLayerOpen: state.popupOpen !== OpenState.CLOSED ? !props.noAnimation : false,
					prevOpen: props.open
				};
			}
		}
		return null;
	}

	componentDidUpdate (prevProps, prevState) {
		if (this.props.open !== prevProps.open) {
			if (!this.props.noAnimation) {
				//this.paused.pause();
				//console.log('hmm');
				if (prevProps.open) {
					document.removeEventListener('scroll', this.handleScroll);
				} else {
					document.addEventListener('scroll', this.handleScroll);
				}
			} else if (this.props.open) {
				forwardShow({}, this.props);
			} else if (prevProps.open) {
				forwardHide({}, this.props);
				document.removeEventListener('scroll', this.handleScroll);
			}
		}
	}

	componentWillUnmount () {
		document.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll = (ev) => {
		console.log('handleScroll: ', window.scrollY);
	}

	handleFloatingLayerOpen = () => {
		//console.log('handleFloatingLayerOpen');
		if (this.state.popupOpen !== OpenState.OPEN) {
			this.setState({
				popupOpen: OpenState.OPENING
			});
		}
	};

	handleFloatingLayerClick = (ev) => {
		const popup = ev.currentTarget.querySelector(`.${css.popup}`);
		
		if (this.props.onClose && !popup.contains(ev.target)) {
			forwardClose(ev, this.props);
		}
	};

	handlePopupHide = (ev) => {
		forwardHide(ev, this.props);

		this.setState({
			floatLayerOpen: false
		});
	};

	handlePopupShow = (ev) => {
		forwardShow(ev, this.props);
		//console.log('handlePopupShow');

		this.setState({
			popupOpen: OpenState.OPEN
		});
	};

	render () {
		const {children, onClose, open, ...rest} = this.props;

		return (
			<FloatingLayer
				//open={open}
				//{...rest}
				//className={css.floatLayer}
				open={this.state.floatLayerOpen}
				onOpen={this.handleFloatingLayerOpen}
				onClick={this.handleFloatingLayerClick}
				//onClick={onClose}
				//onDismiss={onClose}
			>
				<Transition
					//noAnimation
					{...rest}
					//className={css.popupTransitionContainer}
					//className="myPopupClass"
					duration="short"
					onHide={this.handlePopupHide}
					onShow={this.handlePopupShow}
					type="slide"
					visible={this.state.popupOpen >= OpenState.OPENING}
				>
					<div className={css.popup}>
						{children}
					</div>
				</Transition>
			</FloatingLayer>
		);
	}
};

const Popup = FloatingLayerDecorator(PopupBase);
//const Popup = PopupBase;

export default Popup;
export {
	Popup,
	PopupBase
};
