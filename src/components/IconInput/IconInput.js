import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

var STYLES = {
	small: {
		iconSize: 18,
		iconStrokeWIdth: 1,
		fontSize: 14,
		verticalPadding: 4,
		leftPadding: 24,
	},
	large: {
		iconSize: 24,
		iconStrokeWIdth: 2,
		fontSize: 18,
		verticalPadding: 8,
		leftPadding: 36,
	},
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
	let styles = STYLES[size];

	return (
		<Wrapper style={{ '--width': width + 'px' }}>
			<VisuallyHidden>
				<label htmlFor='search'>{label}</label>
			</VisuallyHidden>
			<SearchInput
				type='text'
				id='search'
				placeholder={placeholder}
				style={{
					'--fontSize': styles.fontSize + 'px',
					'--verticalPadding': styles.verticalPadding + 'px',
					'--leftPadding': styles.leftPadding + 'px',
				}}
			/>
			<IconWrapper style={{ '--size': styles.iconSize + 'px' }}>
				<Icon id={icon} size={styles.iconSize} strokeWidth={styles.iconStrokeWIdth} />
			</IconWrapper>
		</Wrapper>
	);
};

var Wrapper = styled.div`
	width: var(--width);
	display: flex;
	position: relative;
`;

var IconWrapper = styled.div`
	color: ${COLORS.gray700};
	position: absolute;
	left: 0;

	/* for the icon to be a little bit shifted up */
	top: -2px;
	bottom: 0;
	margin: auto;
	width: var(--size);
	height: var(--size);

	// To make clicking the icon also focus the input.
	pointer-events: none;
`;

var SearchInput = styled.input`
	display: block;
	width: 100%;
	border: none;
	border-bottom: 1px solid ${COLORS.black};
	font-size: calc(var(--fontSize) / 16 * 1rem);
	font-weight: 700;
	color: ${COLORS.gray700};
	padding: var(--verticalPadding) 0;
	padding-left: var(--leftPadding);

	&::placeholder {
		color: ${COLORS.gray500};
		font-weight: 400;
	}

	&:focus {
		outline-offset: 2px;
	}

	&:hover {
		color: ${COLORS.black};
	}

	&:hover + ${IconWrapper} {
		color: ${COLORS.black};
	}
`;

export default IconInput;
