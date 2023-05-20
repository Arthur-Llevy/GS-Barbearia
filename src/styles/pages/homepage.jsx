import styled from 'styled-components';

export const HomePageContainer = styled.div`
	height: 80vh;
	width: 100%;
	background-color: #1a1a1a;
	display: flex;
	flex-direction: column;
	gap: 40px;
	align-items: center;
	fex-wrap: wrap;
	text-align: center;

	p {
		color: #eee;
		font-weight: normal;
		margin: 20px auto 0 auto;
		font-size: 22px;
	}

	button {
		width: 180px;
		height: 45px;
		border-radius: 10px;
		background-color: transparent;
		border: 1px solid #eee;
		color: #eee;
		font-size: 15px;
		transition: .2s;
		font-weight: bold;
	}

	button:hover {
		background-color: #eee;
		color: #1a1a1a
	}

	button:hover > a {
		color: #1a1a1a;
	}

	a {
		color: #eee;
		text-decoration: none;
	}

`;