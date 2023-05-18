import styled from 'styled-components';

export const AddCutToClientContainer = styled.div`
	height: auto;
	width: 90%;
	background-color: #232323;
	border-radius: 10px;
	margin: 20px auto;
	display: flex;
	flex-direction: column;
	gap: 30px;
	transition: .2s;

	h2 {
	  color: #eee;
	  font-weight: normal;
	  margin: 20px auto 0 auto;
	}

	label {
	  color: #eee;
	  margin-left: 5%;
	}

	input {
	  margin: 0 5% 0 5%;
	  border-radius: 10px;
	  border: 1px solid #eee;
	  height: 40px;
	  background-color: transparent;
	  color: #eee;
	  padding: 0 14vw 0 10px;
	  font-size: 14px;
	  width: 90%;
	  position: relative;
	}

	input:focus {
	  outline: #2e2eff 2px solid;
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

export const AddCutToClientpPopUp = styled.div`
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
	transition: .2s;

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
