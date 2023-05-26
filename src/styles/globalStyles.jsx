import { createGlobalStyle, styled } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Raleway', sans-serif;	

	}

	#root {
  		height: 100vh;
 	 	background-color: #1a1a1a;
	}

`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 80vh;
	overflow: scroll;
	background-color: #1a1a1a;  

`;