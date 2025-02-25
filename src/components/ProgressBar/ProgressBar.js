/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
	small: {
		'--height': '8px',
		'--padding': 0,
		'--background-border-radius': '4px',
	},
	medium: {
		'--height': '12px',
		'--padding': 0,
		'--background-border-radius': '4px',
	},
	large: {
		'--height': '24px',
		'--padding': '4px',
		'--background-border-radius': '8px',
	},
};

const ProgressBar = ({ value, size }) => {
	let style = STYLES[size];
	let isComplete = value === 100;
	return (
		<StyledProgressBar id='progress' max='100' value={value} style={{ ...style }} isComplete={isComplete}>
			{value}%
		</StyledProgressBar>
	);
};

var StyledProgressBar = styled.progress`
	height: var(--height);
	width: 370px;
	box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
	border-radius: var(--background-border-radius);
	overflow: hidden;

	// for ::-webkit-progress-value and ::-webkit-progress-bar to take effect
	appearance: none;

	// to only apply a padding for firefox
	@supports (-moz-appearance: none) {
		& {
			// get rid of firefox's default border
			border: none;

			padding: var(--padding);
			background-color: ${COLORS.transparentGray15};
		}
	}

	&::-webkit-progress-inner-element {
		padding: var(--padding);
		background-color: ${COLORS.transparentGray15};
	}

	&::-webkit-progress-bar {
		background-color: transparent;
		border-radius: 4px;
		overflow: hidden;
	}

	&::-webkit-progress-value {
		background-color: ${COLORS.primary};
	}

	&::-moz-progress-bar {
		background-color: ${COLORS.primary};
		border-radius: ${({ isComplete }) => (isComplete ? '4px' : '4px 0 0 4px')};
	}
`;

export default ProgressBar;
