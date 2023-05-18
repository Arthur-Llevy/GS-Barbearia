import styled from 'styled-components';

export const ClientScreenContainer = styled.div`
	h2, h3 {
		color: #eee;
		font-weight: normal;
		text-align: center;
		margin: 20px auto;
	}

	& > .stars {
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		margin: 20px auto;
		height: auto;
	}

	& > .stars > .star-icon{
		color: #909090;
		width: 30px;
		height: 30px;
	}

	button {
		height: 40px;
		display: block;
		background-color: #eee;
		border-radius: 10px;
		border: 1px solid #eee;
		font-size: 15px;
		color: #1a1a1a;
		transition: .2s;
		font-weight: bold;
		width: 90%;
		margin: 40px auto 20px auto;
	}

	button: hover {
		background-color: transparent;
		color: #eee;
	}

`;

