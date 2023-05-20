import styled from 'styled-components';

export const ContainerMenu = styled.div`
	width: 100%;
	background-color: #171717;
	height: 65px;
	display: flex;
	justify-content: space-around;
	align-items: center;	
	
	img {
	  width: 10vw;
	  max-width: 60px;
	}

	h1 {
		color: #eee
	}

	img:nth-child(3){
		transform: scaleX(-1);
	}

	svg {
		color: #eee;
		width: 30px;
		height: 30px;
	}

`;

export const PopUp = styled.div`
	position: absolute;
	background-color: #212121;
	width: 90%;
	border-radius: 10px;
	height: 80px;
	display: none;
	flex-direction: column;
	gap: 10px;
	justify-content: center;
	align-items: center;
	top: 70px;
	left: 50%;
	transform: translateX(-50%);
	opacity: 0;
	display: none;
	transition: .2s;

	p {
	  color: #eee;
	  text-decoration: underline;
	  cursor: pointer;
	}

`;