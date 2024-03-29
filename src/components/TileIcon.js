import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const TileIcon = ({ IconName, backgrnd, maincolor, name, pcolor, image }) => {
	const [display, setDisplay] = useState(false);
	const mouseHandler = () => {
		setDisplay(true);
	};
	const leaveHandler = () => {
		setDisplay(false);
	};
	return (
		<Tile>
			<div
				className="tile"
				style={{ backgroundColor: backgrnd }}
				onMouseLeave={leaveHandler}
				onMouseOver={mouseHandler}
			>
				{IconName === '' ? (
					<img src={image} alt="logo" />
				) : (
					<FontAwesomeIcon color={maincolor} size="5x" icon={IconName} />
				)}
				{display ? <p style={{ color: pcolor }}>{name} </p> : <p></p>}
			</div>
		</Tile>
	);
};
export default TileIcon;

const Tile = styled.div`
	div {
		width: 120px;
		height: 120px;
		padding: 10px;
		border: rgb(54, 54, 54) solid 8px;
		border-radius: 10%;
		opacity: 0;
		scale: 1;
		animation: drop 2s linear forwards;
		@keyframes drop {
			0% {
				opacity: 0;
			}

			100% {
				opacity: 1;
			}
		}
		img {
			width: 70%;
			height: auto;
		}
		p {
			color: white;
		}
	}
`;
