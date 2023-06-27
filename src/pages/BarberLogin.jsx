import { Menu, Footer, Container } from '../components/Exports';
import { BarberLoginContainer } from '../styles/pages/barberLogin';
import { firebaseVariables } from '../services/FirebaseConfig';
import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from 'react-icons/fc';

import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useState, useRef } from 'react';

export const BarberLogin = () => {

	const APIURL = process.env.REACT_APP_API_URL;
	document.title = 'GSB | Login';

	let [passwordVisible, setPasswordVisible] = useState(false);
	let textInputPassword = useRef();
	let textInputEmail = useRef();
	let container = useRef();

	const handleLogin = async () => {
		fetch(`${APIURL}/loginBarbeiro`, {
			method: 'POST',
			body: JSON.stringify({
				email: textInputEmail.current.value,
				senha: textInputPassword.current.value
			}),
			headers: { 
				'Content-Type': 'application/json',				
			}
		})
		.then(response => response.json())
		.then(data => {
			if('token' in data){
				localStorage.setItem('token', data.token);            
				window.location.href = '/barbeiro';
			}else {
				alert(data.message);
			};
		})
		.catch(erro => {
			alert('Ocorreu um erro ao fazer login.');
		});
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
				fetch(`${APIURL}/googleLogin/barbeiro`, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({					
						email: result._tokenResponse.email
					})
				}).then(response => response.json())
					.then(data => {						
						if(data.token){
							localStorage.setItem('token', data.token);		
							window.location.href = '/barbeiro';
						}else {
							alert(data.message);
						};
					})
					.catch(() => alert('Ocorreu um erro ao tentar entrar com uma conta do Google. Tente novamente mais tarde.'))
		}).catch(() => {
		    alert('Falha ao fazer login com uma conta Google. Tente novamente mais tarde.');
		}); 	
	};

	return(
		<>
			<Container>
				<Menu />
				<BarberLoginContainer ref={container}>
					<h2>Barbeiro - Login</h2>
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
					<button className="loginButton" onClick={handleLogin}>Entrar</button>
				</BarberLoginContainer>			
				<Footer />
			</Container>
		</>
	);
}