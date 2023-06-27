import { Menu, Container, Footer, ForgotPasswordContainer } from '../components/Exports';
import { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

export const ForgotPassword = () => {

	const APIURL = process.env.REACT_APP_API_URL;
  	let token = '';
	const location = useLocation();
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const changePassword = async () => {
		fetch(`${APIURL}/cliente/redefinirSenha`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', 'token': token},
			body: JSON.stringify({password: password})
		})
		.then(response => response.json())
		.then(() => alert('Senha alterada com sucesso.'))
		.catch(() => alert('Falha ao alterar a senha. Tente novamente mais tarde.'))
	};

	useEffect(() => {
		const params = queryString.parse(location.search);
		token = params.token;
		if(!token){
			window.location.href = '/';
		};
	});

	return(
		<>
			<Menu /> 
			<Container>
			<ForgotPasswordContainer>
				<h2>Redefinir senha</h2>
				<label>Nova senha</label>
				<input onInput={e => setPassword(e.target.value)}/>
				<label>Confirme sua senha</label>
				<input onInput={e => setConfirmPassword(e.target.value)}/>
				<button onClick={changePassword}>Redefinir</button>
			</ForgotPasswordContainer>
			</Container>
			<Footer />
		</>
	);
};