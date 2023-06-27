import styled from 'styled-components';

export const ClientLoginContainer = styled.div`
	height: auto;
	width: 90%;
	background-color: #232323;
	border-radius: 10px;
	margin: 20px auto;
	display: flex;
	flex-direction: column;
	gap: 30px;

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

	& .forgotPasswordParagraph {
		text-decoration: underline;
		cursor: pointer;
		text-align: center;
		color: #eee
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

	& .loginWithGoogleButton {
		height: 40px;
		display: flex;
		background-color: #eee;
		border-radius: 10px;
		border: 1px solid #eee;
		font-size: 15px;
		color: #1a1a1a;
		transition: .2s;
		font-weight: bold;
		width: 90%;
		margin: 0 auto 20px auto;
		justify-content: center;
		align-items: center;
		gap: 20px;
	}

	& .loginWithGoogleButton > svg {
		width: 25px;
		height: 25px;
	}

	button:hover {
		background-color: transparent;
		color: #eee;
	}

	& > div {
		height: auto;
		position: relative;
	}

	& > .inputPass > .img{
		position: absolute;
		color: #eee;
		top: 50%;
		bottom: 50%;
		transform: translateY(-50%);
		left: 73vw;
		width: 30px;
		height: 30px;
		cursor: pointer;
	}

	& .or {
  		color: #eee;
  		text-align: center;
 	 	font-weight: bold;
	}
`;