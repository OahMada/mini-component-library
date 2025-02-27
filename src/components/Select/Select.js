import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
	const displayedValue = getDisplayedValue(value, children);

	return (
		<Wrapper>
			<StyledSelect value={value} onChange={onChange}>
				{children}
			</StyledSelect>
			<Decoy>
				<StyledSpan>{displayedValue}</StyledSpan>
				<Icon id='chevron-down' size={20} strokeWidth={2} />
			</Decoy>
		</Wrapper>
	);
};

var StyledSelect = styled.select`
	/* font-size: 1rem;
	border-radius: 8px;

	// constituents: letter width + padding + icon space
	width: calc(var(--width) + 16 * 2px + 40px);

	padding: 12px 56px 12px 16px;
	border: none; */

	width: 100%;
	height: 100%;
	// to remove the default chevron icon
	appearance: none;

	position: absolute;
	left: 0;
	top: 0;
	opacity: 0;
`;

var Decoy = styled.div`
	display: flex;
	align-items: center;

	color: ${COLORS.gray700};
	font-size: 1rem;
	border-radius: 8px;
	background-color: ${COLORS.transparentGray15};
	padding: 12px 16px;
	padding-right: 12px;

	${StyledSelect}:hover + & {
		color: ${COLORS.black};
	}

	${StyledSelect}:focus + & {
		outline: 1px dotted #212121;
		outline: 5px auto -webkit-focus-ring-color;
	}
`;

var Wrapper = styled.div`
	position: relative;
	width: max-content;
`;

var StyledSpan = styled.span`
	display: inline-block;
	margin-right: 20px;
`;

export default Select;
