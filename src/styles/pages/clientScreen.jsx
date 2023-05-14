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

export const ClientScreenPopUp = styled.div`
	height: auto;
	width: 90%;
	background-color: #232323;
	border-radius: 10px;
	margin: 20px auto;
	display: flex;
	flex-direction: column;
	gap: 30px;
	position: absolute;
	top: 50%;
	left: 50%;
	right: 50%;
	transform: translate(-50%, -50%);
	opacity: 0;
	display: none;

	h2 {
		color: #eee;
		font-weight: normal;
		margin: 20px auto 0 auto;
		text-align: center;
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
		margin: 0 auto 20px auto;
	}

	button:hover {
		background-color: transparent;
		color: #eee;
	}
`;