/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
	small: {
		'--height': '8px',
		'--padding': 0,
		'--border-radius': '4px',
	},
	medium: {
		'--height': '12px',
		'--padding': 0,
		'--border-radius': '4px',
	},
	large: {
		'--height': '24px',
		'--padding': '4px',
		'--border-radius': '8px',
	},
};

const ProgressBar = ({ value, size }) => {
	let style = STYLES[size];
	return (
		<Wrapper style={{ ...style }} role='progressbar' aria-valuenow={value}>
			<VisuallyHidden>{value}%</VisuallyHidden>
			<Bar>
				<Value style={{ '--width': value + '%' }} />
			</Bar>
		</Wrapper>
	);
};

var Wrapper = styled.div`
	height: var(--height);
	max-width: 370px;
	background-color: ${COLORS.transparentGray15};
	box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
	border-radius: var(--border-radius);
	padding: var(--padding);
`;

var Bar = styled.div`
	height: 100%;
	border-radius: 4px;
	overflow: hidden;
`;

var Value = styled.div`
	height: 100%;
	background-color: ${COLORS.primary};
	width: var(--width);
`;

export default ProgressBar;
