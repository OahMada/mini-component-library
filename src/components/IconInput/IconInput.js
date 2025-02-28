import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

var STYLES = {
	small: {
		iconSize: 16,
		strokeWidth: 1,
		fontSize: 14,
		verticalPadding: 4,
		leftPadding: 24,
	},
	large: {
		iconSize: 24,
		strokeWidth: 2,
		fontSize: 18,
		verticalPadding: 8,
		leftPadding: 36,
	},
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
	let styles = STYLES[size];

	return (
		<Wrapper>
			<VisuallyHidden>{label}</VisuallyHidden>
			<SearchInput
				type='text'
				style={{
					'--width': width + 'px',
					'--font-size': styles.fontSize / 16 + 'rem',
					'--vertical-padding': styles.verticalPadding + 'px',
					'--left-padding': styles.leftPadding + 'px',
					'--border-thickness': styles.strokeWidth + 'px',
				}}
				{...delegated}
			/>
			<IconWrapper style={{ '--size': styles.iconSize + 'px' }}>
				<Icon id={icon} size={styles.iconSize} strokeWidth={styles.strokeWidth} />
			</IconWrapper>
		</Wrapper>
	);
};

var Wrapper = styled.label`
	position: relative;
	display: block;
	color: ${COLORS.gray700};

	&:hover {
		color: ${COLORS.black};
	}
`;

var IconWrapper = styled.div`
	position: absolute;
	/* left: 0; */

	/* for the icon to be a little bit shifted up */
	top: -2px;
	bottom: 0;
	margin: auto 0;
	/* width: var(--size); */
	height: var(--size);

	// To make clicking the icon also focus the input.
	/* pointer-events: none; */
`;

var SearchInput = styled.input`
	width: var(--width);
	font-size: var(--font-size);
	border: none;
	border-bottom: var(--border-thickness) solid ${COLORS.black};
	font-weight: 700;
	color: inherit;
	padding: var(--vertical-padding) 0;
	padding-left: var(--left-padding);
	outline-offset: 2px;

	&::placeholder {
		color: ${COLORS.gray500};
		font-weight: 400;
	}
`;

export default IconInput;
