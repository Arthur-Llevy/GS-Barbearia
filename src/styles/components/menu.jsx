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
`;