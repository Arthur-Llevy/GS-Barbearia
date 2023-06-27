import { Menu, Footer, Container } from '../components/Exports';
import { ClientLoginContainer } from '../styles/pages/clientLogin';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useState, useRef } from 'react';
import { firebaseVariables } from '../services/FirebaseConfig';
import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from 'react-icons/fc';

export const ClientLogin = () => {

	const APIURL = process.env.REACT_APP_API_URL;
	document.title = 'GSB | Login';

	let [passwordVisible, setPasswordVisible] = useState(false);	
	let textInputPassword = useRef();
	let textInputEmail = useRef();

	const login = async () => {			
		fetch(`${APIURL}/login/cliente`, {
			method: 'POST',
			body: JSON.stringify({
				email: textInputEmail.current.value,
				senha: textInputPassword.current.value
			}),
			headers: { 'Content-Type': 'application/json' }
		})
		.then(response => response.json())
		.then(data => { 
			if(data.token){
				localStorage.setItem('token', data.token);		
				window.location.href = '/cliente';
			}else {
				alert(data.message);
			};
		})
		.catch(erro => alert('Falha ao fazer login, tente novamente mais tarde.'));
	};	

	const changePasswordVisibility = () => {
		if(passwordVisible){
			textInputPassword.current.setAttribute('type', 'password');
			setPasswordVisible(false);
		}else {
			textInputPassword.current.setAttribute('type', 'text');
			setPasswordVisible(true);
		};
	};

	const loginWithGoogle = async () => {		
		signInWithPopup(firebaseVariables.auth, firebaseVariables.provider)
		      .then((result) => {		      	
				fetch(`${APIURL}/googleLogin/cliente`, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({					
						email: result._tokenResponse.email
					})
				}).then(response => response.json())
					.then(data => {
						if(data.token){
							localStorage.setItem('token', data.token);		
							window.location.href = '/cliente';
						}else {
							alert(data.message);
						}
					})
					.catch(() => alert('Ocorreu um erro ao tentar entrar com uma conta do Google. Tente novamente mais tarde.'))
		}).catch(() => {
		        alert('Falha ao fazer login com uma conta Google. Tente novamente mais tarde.');
		}); 				
	
	};

	const forgotPassword = async () => {
		if(textInputEmail.current.value !== ''){
			fetch(`${APIURL}/cliente/esqueceuSenha`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({email: textInputEmail.current.value})
			})
			.then(response => response.json())
			.then(data => alert(data.message))
			.catch(() => alert('Falha no servidor. Tente novamente mais tarde.'))
		}else {
			alert('Preencha o email para poder recuperar sua senha.')
		}
	};

	return(
		<>
			<Menu />
			<Container>
				<ClientLoginContainer>
					<h2>Cliente - Login</h2>
					<button className="loginWithGoogleButton" onClick={loginWithGoogle}>
						<FcGoogle />
						Entrar com o google
					</button>
					<p className="or">Ou</p>
					<label>E-mail</label>
					<input ref={textInputEmail} type="text" />
					<label>Senha</label>
					<div className="inputPass">
						<input ref={textInputPassword} type="password" />	
						{!passwordVisible && <AiOutlineEye
							className='img'
							onClick={ changePasswordVisibility}/>}
						{passwordVisible && <AiOutlineEyeInvisible 
							className='img'
							onClick={ changePasswordVisibility}/>}								
					</div>
					<p className="forgotPasswordParagraph" onClick={forgotPassword}>Esqueceu a senha?</p>
					<button onClick={login}>Entrar</button>					
				</ClientLoginContainer>
			</Container>
			<Footer />
		</>
	);
};