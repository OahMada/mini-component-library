import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
	const displayedValue = getDisplayedValue(value, children);

	return (
		<Wrapper>
			<StyledSelect value={value} onChange={onChange} style={{ '--width': displayedValue.length * 8 + 'px' }}>
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
	font-size: 1rem;
	border-radius: 8px;

	// constituents: letter width + padding + icon space
	width: calc(var(--width) + 16 * 2px + 40px);

	padding: 12px 56px 12px 16px;
	border: none;
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

	${StyledSelect}:hover + & {
		color: ${COLORS.black};
	}
`;

var Wrapper = styled.div`
	position: relative;
	width: fit-content;
`;

var StyledSpan = styled.span`
	display: inline-block;
	margin-right: 20px;
`;

export default Select;
